/**
 * @Author: forguo
 * @Date: 2022/7/9 11:06
 * @Description: 代码高亮
 */
// ref https://github.com/vuejs/vitepress/blob/main/src/node/markdown/plugins/highlight.ts
import chalk from 'chalk'
// @ts-ignore
import escapeHtml from 'escape-html'
// @ts-ignore
import prism from 'prismjs'
import consola from 'consola'
import { IThemeRegistration, getHighlighter, HtmlRendererOptions } from 'shiki'

// prism is listed as actual dep so it's ok to require
// eslint-disable-next-line @typescript-eslint/no-var-requires
const loadLanguages = require('prismjs/components/index')

// required to make embedded highlighting work...
loadLanguages(['markup', 'css', 'javascript'])

function wrap(code: string, lang: string): string {
    if (lang === 'text') {
        code = escapeHtml(code)
    }
    return `<pre v-pre><code>${code}</code></pre>`
}

export const highlight = (str: string, lang: string) => {
    if (!lang) {
        return wrap(str, 'text')
    }
    lang = lang.toLowerCase()
    const rawLang = lang
    if (lang === 'vue' || lang === 'html') {
        lang = 'markup'
    }
    if (lang === 'md') {
        lang = 'markdown'
    }
    if (lang === 'ts') {
        lang = 'typescript'
    }
    if (lang === 'py') {
        lang = 'python'
    }
    if (!prism.languages[lang]) {
        try {
            loadLanguages([lang])
        } catch {
            // eslint-disable-next-line no-console
            consola.warn(
                chalk.yellow(
                    `[vitepress] Syntax highlight for language "${lang}" is not supported.`
                )
            )
        }
    }
    if (prism.languages[lang]) {
        const code = prism.highlight(str, prism.languages[lang], lang)
        return wrap(code, rawLang)
    }
    return wrap(str, 'text')
}

/**
 * 2 steps:
 *
 * 1. convert attrs into line numbers:
 *    {4,7-13,16,23-27,40} -> [4,7,8,9,10,11,12,13,16,23,24,25,26,27,40]
 * 2. convert line numbers into line options:
 *    [{ line: number, classes: string[] }]
 */
const attrsToLines = (attrs: string): HtmlRendererOptions['lineOptions'] => {
    const result: number[] = []
    if (!attrs.trim()) {
        return []
    }
    attrs
        .split(',')
        .map((v) => v.split('-').map((v) => parseInt(v, 10)))
        .forEach(([start, end]) => {
            if (start && end) {
                result.push(
                    ...Array.from({ length: end - start + 1 }, (_, i) => start + i)
                )
            } else {
                result.push(start)
            }
        })
    return result.map((v) => ({
        line: v,
        classes: ['highlighted']
    }))
}

export type ThemeOptions =
    | IThemeRegistration
    | { light: IThemeRegistration; dark: IThemeRegistration }

export async function highlight1(
    theme: ThemeOptions = 'material-palenight'
): Promise<(str: string, lang: string, attrs: string) => string> {
    const hasSingleTheme = typeof theme === 'string' || 'name' in theme
    const getThemeName = (themeValue: IThemeRegistration) =>
        typeof themeValue === 'string' ? themeValue : themeValue.name

    const highlighter = await getHighlighter({
        themes: hasSingleTheme ? [theme] : [theme.dark, theme.light]
    })
    const preRE = /^<pre.*?>/
    const vueRE = /-vue$/

    return (str: string, lang: string, attrs: string) => {
        const vPre = vueRE.test(lang) ? '' : 'v-pre'
        lang = lang.replace(vueRE, '').toLowerCase()

        const lineOptions = attrsToLines(attrs)

        if (hasSingleTheme) {
            return highlighter
                .codeToHtml(str, { lang, lineOptions, theme: getThemeName(theme) })
                .replace(preRE, `<pre ${vPre}>`)
        }

        const dark = highlighter
            .codeToHtml(str, { lang, lineOptions, theme: getThemeName(theme.dark) })
            .replace(preRE, `<pre ${vPre} class="vp-code-dark">`)

        const light = highlighter
            .codeToHtml(str, { lang, lineOptions, theme: getThemeName(theme.light) })
            .replace(preRE, `<pre ${vPre} class="vp-code-light">`)

        return dark + light
    }
}
