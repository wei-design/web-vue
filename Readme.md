
<p align="center">Wei-Design - A Vue.js 3 UI library</p>

<p align="center">
  <a href="http://commitizen.github.io/cz-cli">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
  </a>
  <br>
</p>

- 🔭 [Vite](https://vitejs.dev)
- 💪 [Vue3](https://vuejs.org)
- 🔥 TypeScript

UI原型：[element](https://element.eleme.cn/2.0/#/zh-CN/resource)

## 初始化

[create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite)

### 通过vite初始化

- npm

```bash
npm init vite@latest
```

- yarn

```bash
yarn create vite
```

![vite-vue-ts.png](static/vite-vue-ts.jpg)

选择`Vue`并选择使用`TypeScript`

### 指定模板初始化

```
yarn create vite my-vue-app --template vue-tsc
```

## 基础配置

### 环境

`scss`预编译和`jsx`语法

- 安装

```shell
npm install sass @vitejs/plugin-vue-jsx --save-dev 
```

- 配置

在`vite.config.js`，添加

```javascript
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
    ]
})
```

### 规范

- commit规范
- eslint

建议提前配置好，开发体验会更好

## 文档搭建

[vitepress](https://vitejs.cn/vitepress/)

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

- 4、创建你第一篇文档

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
    "name": "@wei-design/docs",
    "private": true,
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

- 1、新增配置文件

```shell
mkdir .vuepress
touch config.js  
```
