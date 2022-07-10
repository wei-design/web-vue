/**
 * @Author: forguo
 * @Date: 2022/7/9 00:03
 * @Description: 自定义插件：vite-plugin-md-transform
 */

// https://cn.vitejs.dev/guide/api-plugin.html

import fs from 'fs'
import path from 'path'
import glob from 'fast-glob'
import {projRoot, docsDirName, docRoot, REPO_BRANCH, REPO_PATH } from '../config/global'
import {lang, languages} from '../utils/lang'
import footerLocale from '../i18n/component/footer.json'

import type {Plugin} from 'vite'

type Append = Record<'headers' | 'footers' | 'scriptSetups', string[]>

export function VitePluginMdTransform(): Plugin {
    return {
        name: 'vite-plugin-md-transform',
        // 插件顺序 https://cn.vitejs.dev/guide/api-plugin.html#plugin-ordering
        enforce: 'pre',
        // 转换自定义文件类型 https://rollupjs.org/guide/en/#transform
        async transform(code, id) {
            // md文件判断
            if (!id.endsWith('.md')) return
            // 组件名称
            const componentId = path.basename(id, '.md')
            const append: Append = {
                headers: [],
                footers: [],
                scriptSetups: [
                    // 加载组件demos
                    `const demos = import.meta.globEager('../../examples/${componentId}/*.vue')`,
                ],
            }

            code = transformVpScriptSetup(code, append)

            const pattern = `{${[...languages, languages[0]].join(',')}}/component`
            const compPaths = await glob(pattern, {
                cwd: docRoot,
                absolute: true,
                onlyDirectories: true,
            })
            if (compPaths.some((compPath) => id.startsWith(compPath))) {
                code = transformComponentMarkdown(id, componentId, code, append)
            }

            return combineMarkdown(
                code,
                [combineScriptSetup(append.scriptSetups), ...append.headers],
                append.footers
            )
        },
    }
}

const combineScriptSetup = (codes: string[]) =>
    `\n<script setup>
${codes.join('\n')}
</script>
`

const combineMarkdown = (
    code: string,
    headers: string[],
    footers: string[]
) => {
    const frontmatterEnds = code.indexOf('---\n\n') + 4
    const firstSubheader = code.search(/\n## \w/)
    const sliceIndex = firstSubheader < 0 ? frontmatterEnds : firstSubheader

    if (headers.length > 0)
        code =
            code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex)
    code += footers.join('\n')

    return `${code}\n`
}

const vpScriptSetupRE = /<vp-script\s(.*\s)?setup(\s.*)?>([\s\S]*)<\/vp-script>/

const transformVpScriptSetup = (code: string, append: Append) => {
    const matches = code.match(vpScriptSetupRE)
    if (matches) code = code.replace(matches[0], '')
    const scriptSetup = matches?.[3] ?? ''
    if (scriptSetup) append.scriptSetups.push(scriptSetup)
    return code
}

const GITHUB_BLOB_URL = `https://github.com/${REPO_PATH}/blob/${REPO_BRANCH}`
const GITHUB_TREE_URL = `https://github.com/${REPO_PATH}/tree/${REPO_BRANCH}`
const transformComponentMarkdown = (
    id: string,
    componentId: string,
    code: string,
    append: Append
) => {
    // 文档URL
    const docUrl = `${GITHUB_BLOB_URL}/${docsDirName}/${lang}/component/${componentId}.md`
    // 组件URL
    const componentUrl = `${GITHUB_TREE_URL}/packages/components/${componentId}`
    const componentPath = path.resolve(
        projRoot,
        `packages/components/${componentId}`
    )
    const isComponent = fs.existsSync(componentPath)
    /**
     * 生成源码链接
     * [组件](--/component/--)
     * [文档](--/docs/--)
     */
    const links = [[footerLocale[lang].docs, docUrl]]
    if (isComponent) links.unshift([footerLocale[lang].component, componentUrl])
    const linksText = links
        .filter((i) => i)
        .map(([text, link]) => `[${text}](${link})`)
        .join(' • ')

    const sourceSection = `
  ## ${footerLocale[lang].source}
  ${linksText}
`
    append.footers.push(sourceSection)

    return code
}
