# @wei-design/web-vue

A Vue.js 3 UI library

<p>
  <a href="http://commitizen.github.io/cz-cli">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
  </a>
  <br>
</p>

基于[vitepress](https://vitepress.vuejs.org/)

## 目录结构

```
├── .vitepress                          # vitepress配置
│   ├── config                          # 基本配置抽离，包含slide，nav及一些基础配置
│   ├── i18n                            # 语言包配置
│   ├── components                      # 公共组件
│   ├── plugins                         # vite插件
|   ├── theme                           # vitepress自定义主题，引入@wei-design/web-vue的组件及一些自定义主题组件
│   ├── util                            # 工具方法(util.js)
│   ├── vitepress                       # 自定义组件及主题
│   ├── config.ts                       # vitepress配置
│   ├── lang.js                         # 默认语言处理，代码插入到head去执行
├── example                             # 组件示列代码
├── node_modules                        # 依赖的模块包
├── public                              # 静态资源
├── zh-CN                               # 中文文档md，zh-CN为后期多语言留个口子
├── static                              # 静态资源(CDN)
├── vite.config.js                      # vite打包配置
```

## 文档搭建

### 快速搭建

- 1、根目录创建docs文件夹

```shell
mkdir docs && cd docs
```

- 2、初始化

```shell
yarn init
```

- 3、安装 `VitePress`

```shell
yarn add --dev vitepress
```

- 4、创建第一篇文档

```shell
echo '# Hello Vue3' > index.md
```

- 5、在`package.json`中添加脚本

直接使用.

```json
{
  "scripts": {
    "docs:dev": "vitepress dev .",
    "docs:build": "vitepress build .",
    "docs:serve": "vitepress serve ."
  }
}
```

完整版`package.json`如下：

```json
{
    "name": "@wei-design/web-vue",
    "private": false,
    "scripts": {
        "docs:dev": "vitepress dev .",
        "docs:build": "vitepress build .",
        "docs:serve": "vitepress serve ."
    },
    "devDependencies": {
        "vitepress": "^0.22.4"
    }
}
```

- 6、启动文档站点

```shell
yarn docs:dev
```

### 配置

#### 1、新增配置文件

```shell
mkdir .vuepress
touch config.js  
```

#### 2、添加sidebar和nav

toDo: 这部分可添加脚本，根据组件自动生成sidebar

添加`/zh-CN`是为了后期做多语言提供口子

- sidebar：左侧菜单

```javascript
const sidebar = {
    '/zh-CN/guide/': [
        {
            text: '基础',
            children: [
                { text: '安装', link: '/zh-CN/guide/installation' },
                { text: '快速开始', link: '/zh-CN/guide/quickstart' },
            ],
        },
        {
            text: '进阶',
            children: [
                {
                    text: '主题',
                    link: '/zh-CN/guide/theming',
                },
                {
                    text: '更新日志',
                    link: '/zh-CN/guide/changelog',
                },
            ],
        },
    ],
    '/zh-CN/component/': [
        {
            text: '基础组件',
            children: [{ link: '/zh-CN/component/button', text: 'Button' }],
        },
    ],
};
```

- nav：顶部导航

```javascript
const nav = [
    {
        "text": "指南",
        "link": "/zh-CN/guide/design",
        "activeMatch": "/guide/"
    },
    {
        "text": "组件",
        "link": "/zh-CN/component/button",
        "activeMatch": "/component/"
    },
    {
        "text": "资源",
        "link": "/zh-CN/resource/index",
        "activeMatch": "/resource/"
    }
]
```

基本效果

![docs.png](../static/doc-start.png)


### 增加源码预览


### 自定义主题

toDo：...

写一个自定义组件的插件出来

## 部署

[github-pages](https://vitepress.vuejs.org/guide/deploying.html#github-pages)

结合：GitHub Actions完成自动化部署

```yaml
name: Publish Docs Deploy
# 触发构建动作
#    push:
#        # 触发构建分支[默认分支]
#        branches: [ $default-branch ]
#    pull_request:
on:
    push:
        # 以下 分支有 push 时触发
        branches:
            - master
            - main
            - feature/major-dev

# 作业是在同一运行服务器上执行的一组步骤
jobs:
    # 作业名称
    deploy:
        # 运行器（这里是Ubuntu系统）
        runs-on: ubuntu-latest
        # 步骤是可以在作业中运行命令的单个任务
        # 步骤可以是操作或 shell 命令
        steps:
            # 检出推送的代码
            - name: Checkout - 检出代码
              uses: actions/checkout@v2

            # 使用pnpm
            - name: Setup pnpm
              uses: pnpm/action-setup@v2

            # Node版本
            - name: Setup Node.js v16
              uses: actions/setup-node@v3
              with:
                  node-version: 16
                  cache: pnpm

            - name: Install NodeModules - 安装依赖
              run: cd docs && pnpm install # 安装依赖

            - name: Build - 打包
              run: pnpm run docs:build # 打包

            - name: Dir - 打包结果
              run: cd docs/.vitepress/dist && ls -ll # 打包结果

            - name: Deploy  - 部署
              uses: peaceiris/actions-gh-pages@v3 # 使用部署到 GitHub pages 的 action
              with:
                  github_token: ${{ secrets.CL_TOKEN }} # github_token，仓库secrets配置
                  publish_dir: docs/.vitepress/dist  # 部署打包后的 dist 目录

```
