import type { UserConfig } from 'vitepress'

export const config: UserConfig = {
    title: 'Wei Design',
    description: 'A Vue 3 UI Framework',
    lastUpdated: true,
    themeConfig: {
        lastUpdated: 'Last Updated',
        logo: '/images/logo.png',
        logoSmall: '/images/logo.png',
        sidebars: {
            "intro": {
                "text": "Basics",
                "children": [
                    {
                        "text": "Design",
                        "link": "/zh-CN/guide/design"
                    },
                    {
                        "text": "Navigation",
                        "link": "/guide/nav"
                    },
                    {
                        "text": "Installation",
                        "link": "/guide/installation"
                    },
                    {
                        "text": "Quick Start",
                        "link": "/guide/quickstart"
                    }
                ]
            },
            "advanced": {
                "text": "Advanced",
                "children": [
                    {
                        "text": "i18n",
                        "link": "/guide/i18n"
                    },
                    {
                        "text": "Migration from ElementUI",
                        "link": "/guide/migration"
                    },
                    {
                        "text": "Theming",
                        "link": "/guide/theming"
                    },
                    {
                        "text": "Dark Mode",
                        "link": "/guide/dark-mode",
                        "promotion": "2.2.0"
                    },
                    {
                        "text": "Custom Namespace",
                        "link": "/guide/namespace",
                        "promotion": "2.2.0"
                    },
                    {
                        "text": "Built-in Transitions",
                        "link": "/guide/transitions"
                    },
                    {
                        "text": "Changelog",
                        "link": "/guide/changelog"
                    }
                ]
            }
        },
        nav: [
            {
                "text": "Guide",
                "link": "/zh-CN/guide/design",
                "activeMatch": "/guide/"
            },
            {
                "text": "Component",
                "link": "/zh-CN/component/button",
                "activeMatch": "/component/"
            },
            {
                "text": "Resource",
                "link": "/zh-CN/resource/index",
                "activeMatch": "/resource/"
            }
        ]
    }
}

export default config
