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
import {REPO_PATH, REPO_BRANCH} from './config/global'
import * as process from "process";

const env = process.env.NODE_ENV;

export const config: UserConfig = {
    head,
    lang: 'zh-CN',
    base: env === 'production' ? '/web-vue/' : '/',
    title: 'Web Vue',
    description: 'A Vue 3 UI Framework',
    lastUpdated: true,
    themeConfig: {
        editLink: {
            // 编辑此页
            pattern: `https://github.com/${REPO_PATH}/edit/${REPO_BRANCH}/docs/:path`,
        },
        siteTitle: 'Wei Design',
        lastUpdated: 'Last Updated',
        logo: '/images/logo-link.png',
        logoSmall: '/images/logo-link.png',
        sidebar, // 没有s
        nav,
        locales: {
            '/zh-CN': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
            },
            '/en-US/': {
                label: 'English',
                selectText: 'Language',
                ariaLabel: 'Language',
                editLinkText: 'Edit on GitHub',
                lastUpdated: 'LastUpdate',
            },
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/wforguo/' }
        ],
        search: {
            provider: 'local',
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: `<a target="_blank" href="https://github.com/wforguo" style="color: #047857">Copyright &copy; 2016 - ${new Date().getFullYear()} &nbsp;forguo</a>`

        }
    },
    locales: {
        '/zh-CN': {
            lang: 'zh-CN',
            title: 'Wei Design',
            description: 'A Vue 3 UI Framework',
        },
        '/en-US/': {
            lang: 'en-US',
            title: 'Wei Design',
            description: 'A Vue 3 UI Framework',
        },
    },
    markdown: {
        lineNumbers: true,
        config: (md) => mdPlugin(md),
    },
}
export default config
