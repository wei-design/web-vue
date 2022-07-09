/**
 * @Author: forguo
 * @Date: 2022/7/8 23:17
 * @Description: nav配置
 */
import {ensureLang, lang} from '../utils/lang'
import navLocale from '../i18n/pages/nav.json'

function getNav() {
    return Object.values(navLocale[lang]).map(item => ({
        ...item,
        // 添加语言前缀，最终为 /zh-CN/guide/design
        link: `${ensureLang(lang)}${item.link}`,
    }))
}

export const nav = getNav()
