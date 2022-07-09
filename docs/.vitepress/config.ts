/**
 * @Author: forguo
 * @Date: 2022/7/2 15:00
 * @Description: config
 */
import type {UserConfig} from 'vitepress'
import {head} from './config/head';
import {sidebar} from './config/slidebar';
import {nav} from './config/nav';
import {mdPlugin} from './config/plugins'
import {docsDirName, REPO_BRANCH, REPO_PATH } from './config/global'
import { languages } from './utils/lang';
const locales: any = {}
languages.forEach((lang) => {
    locales[`/${lang}`] = {
        label: lang,
        lang,
    }
})
export const config: UserConfig = {
    base: '/wei-design',
    title: 'Wei Design',
    description: 'A Vue 3 UI Framework',
    lastUpdated: true,
    head,
    themeConfig: {
        repo: REPO_PATH,
        docsBranch: REPO_BRANCH,
        docsDir: docsDirName,

        lastUpdated: 'Last Updated',

        logo: '/images/logo.png',
        logoSmall: '/images/logo.png',

        sidebar, // 没有s
        nav,
        langs: languages,
    },
    locales,
    markdown: {
        lineNumbers: true,
        config: (md) => mdPlugin(md),
    },
}
export default config
