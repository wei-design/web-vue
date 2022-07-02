import type {HeadConfig} from 'vitepress'

export const head: HeadConfig[] = [
    [
        'link',
        {
            rel: 'icon',
            href: '/images/logo.png',
            type: 'image',
        },
    ],
    [
        'link',
        {
            rel: 'apple-touch-icon',
            href: '/images/logo.png',
            sizes: '360x360',
        },
    ],
    [
        'link',
        {
            rel: 'mask-icon',
            href: '/images/logo.png',
            color: '#5bbad5',
        },
    ],
    [
        'meta',
        {
            name: 'theme-color',
            content: '#ffffff',
        },
    ],
    [
        'meta',
        {
            name: 'msapplication-TileColor',
            content: '#409eff',
        },
    ],
    ['meta', { rel: 'referrer', href: `same-origin` }],
    ['meta', { name: 'keywords', content: `wei-design,A Vue.js 3 UI library,vue,vue3` }],
    ['meta', { name: 'description', content: `wei-design|A Vue.js 3 UI library|vue|vue3` }],
    ['meta', { name: 'author', content: `魏国, forguo, wforguo` }],
    ['meta', { name: 'baidu-site-verification', content: `code-bakUos2v8l` }],
    ['meta', { name: 'google-site-verification', content: `9aVJNYlDCl0rCI1akpdSqg9Xwr47KJrVWSXktSsfwKE` }],
    ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?2788f1f4f01e060d6d892f4bbd5b74d4";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
            })();
        `]
]
