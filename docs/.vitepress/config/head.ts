/**
 * @Author: wei
 * @Date: 2022/7/8 23:23
 * @Description: head
 */
import type {HeadConfig} from 'vitepress'
export const head: HeadConfig[] = [
    [
        'link',
        {
            rel: 'icon',
            href: 'https://wei-design.github.io/web-vue/images/logo-link.png',
            type: 'image',
        },
    ],
    [
        'meta',
        {
            name: 'theme-color',
            content: '#ffffff',
        },
    ],
    ['meta', {rel: 'referrer', href: `same-origin`}],
    ['meta', {name: 'keywords', content: `@wei-design/web-vue,A Vue.js 3 UI library,vue,vue3`}],
    ['meta', {name: 'description', content: `wei-design|@wei-design/web-vue|A Vue.js 3 UI library|vue|vue3`}],
    ['meta', {name: 'author', content: `wei,wei-design`}],
    ['script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "//hm.baidu.com/hm.js?e2b1313ceb93a9a3428404181b004fc1";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
    `]
]
