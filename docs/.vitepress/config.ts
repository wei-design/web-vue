/**
 * @Author: forguo
 * @Date: 2022/7/2 15:00
 * @Description: config
 */
import type {UserConfig} from 'vitepress'
import {head} from './config/head';
import {sidebar } from './config/slidebar';
import {nav} from './config/nav';

export const config: UserConfig = {
    title: 'Wei Design',
    description: 'A Vue 3 UI Framework',
    lastUpdated: true,
    markdown: {
        lineNumbers: true
    },
    head,
    themeConfig: {
        lastUpdated: 'Last Updated',
        logo: '/images/logo.png',
        logoSmall: '/images/logo.png',
        sidebar, // 没有s
        nav: [...nav, ...[
            { text: 'GitHub', link: 'https://github.com/wforguo' },
        ]],
    },
}
export default config
