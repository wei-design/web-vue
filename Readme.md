# Wei-Design

A Vue.js 3 UI library

---

<p>
  <a href="http://commitizen.github.io/cz-cli">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
  </a>
  <br>
</p>

- 🔭 [Vite](https://vitejs.dev)
- 💪 [Vue3](https://vuejs.org)
- 🔥 TypeScript

参考[element](https://element-plus.org/)

## 目录结构

```
├── config                              # 配置文件
├── cloud                               # 云函数存放
├── dist                                # 打包文件
├── node_modules                        # 依赖的模块包
├── package.json                        # 项目基本信息
├── src                                 # 项目的核心组件
│   ├── service                         # 资源文件（css、image、config）
│   ├── common                          # 资源文件（css、image、config）
│   ├── components                      # 公共组件
│   ├── store                           # 状态管理（redux）
|   ├── pages                           # 页面文件目录
|   |   ├── Index                       # index页面目录
|   |   |   ├── index.jsx               # index页面逻辑
|   |   |   └── index.scss              # index页面样式
|   |   |   └── index.config.js         # index页面配置（小程序page.json内容）
│   ├── util                            # 公共方法(util.js、globalData.js)
│   ├── app.jsx                         # 入口文件
│   ├── app.scss                        # 公共样式
│   ├── index.html                      # 主页模板
├── static                              # 静态资源(CDN)
├── README.md                           # 项目描述信息

```

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
yarn create vite vite-app-vue --template vue-tsc
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

[docs](./docs/Readme.md)

## 打包

> 支持指定文件目录 -C

### 组件库

配置

[vite库模式配置](https://cn.vitejs.dev/guide/build.html#library-mode)

```shell
build/lib.config.js
```

执行：

```shell
npm run lib:build
```

### 文档库

配置

```shell
build/doc.config.js
```

执行：

```shell
npm run -C docs build
```

## 问题及解决

TypeError: Invalid value used as weak map key

**md中有无法解析的标签导致**
