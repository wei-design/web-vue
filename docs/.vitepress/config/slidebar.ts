/**
 * @Author: forguo
 * @Date: 2022/7/2 17:47
 * @Description: 侧边栏配置
 */
import {ensureLang, lang} from '../utils/lang'
import guideLocale from '../i18n/pages/guide.json';
import componentLocale from '../i18n/pages/component.json';

type Item = {
    text: string
    items?: Item[]
    link?: string
}

function getGuideSidebar() {
    return Object.values(guideLocale[lang]).map((item: Item) => mapPrefix(item, lang))
}

function getComponentsSideBar() {
    return Object.values(componentLocale[lang]).map((item: Item) => mapPrefix(item, lang, '/component'))
}

// return sidebar with language configs.
// this might create duplicated data but the overhead is ignorable
const getSidebar = () => {
    return {
        '/zh-CN/guide/': getGuideSidebar(),
        '/zh-CN/component/': getComponentsSideBar(),
    }
}

function mapPrefix(item: Item, lang: string, prefix = ''): Item {
    if (item.items && item.items.length > 0) {
        return {
            ...item,
            items: item.items.map((child) => mapPrefix(child, lang, prefix)),
        }
    }
    return {
        ...item,
        link: `${ensureLang(lang)}${prefix}${item.link}`,
    }
}

export const sidebar = getSidebar()
