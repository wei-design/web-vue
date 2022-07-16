/**
 * @Author: forguo
 * @Date: 2022/7/9 00:03
 * @Description: 自定义插件：vite-plugin-md-transform
 */

// https://cn.vitejs.dev/guide/api-plugin.html

import path from 'path'
import glob from 'fast-glob'
import chalk from "chalk";
import {docRoot} from '../config/global'
import { lang } from '../utils/lang'

import type {Plugin} from 'vite'

type Append = Record<'headers' | 'scriptSetups', string[]>

export function VitePluginMdTransform(): Plugin {
    return {
        name: 'vite-plugin-md-transform',
        // 插件顺序 https://cn.vitejs.dev/guide/api-plugin.html#plugin-ordering
        enforce: 'pre',
        // 转换自定义文件类型 https://rollupjs.org/guide/en/#transform
        async transform(code, id) {
            // md文件判断
            if (!id.endsWith('.md')) return
            /**
             * 获取组件名
             * path.basename：返回路径中的最后一部分。同 Unix 命令 bashname 类似。
             */
            const componentId = path.basename(id, '.md')
            const append: Append = {
                headers: [],
                scriptSetups: [
                    // 在 Markdown中引入组件
                    `const demos = import.meta.globEager('../../examples/${componentId}/*.vue')`,
                ],
            }

            // const modules = import.meta.glob(`../../examples/${componentId}/*.vue`)
            // console.log(modules);
            return combineMarkdown(
                code,
                [combineScriptSetup(append.scriptSetups), ...append.headers],
            )
        },
    }
}

// 在 Markdown 中引入组件
const combineScriptSetup = (codes: string[]) =>
    `\n<script setup>
${codes.join('\n')}
</script>
`

const combineMarkdown = (
    code: string,
    headers: string[],
) => {
    const frontmatterEnds = code.indexOf('---\n\n') + 4
    const firstSubheader = code.search(/\n## \w/)
    const sliceIndex = firstSubheader < 0 ? frontmatterEnds : firstSubheader

    if (headers.length > 0)
        code =
            code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex)
    return `${code}\n`
}
