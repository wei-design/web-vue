# We-Design

A Vue.js 3 UI library

[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli)

[![WeDesign version badge](https://img.shields.io/npm/v/we-design.svg?style=flat-square)](https://www.npmjs.org/package/we-design)

---

- 🔭 [Vite](https://vitejs.dev)
- 💪 [Vue3](https://vuejs.org)
- 🔥 TypeScript

参考[element](https://element-plus.org/)

## 将会学会

### 搭建
基于`vite`和`typescript`搭建`vue3`项目

### 开发
一个组件库的开发过程

### 发布
结合`github ci`来发布组件库到`npm`

## 环境

- node：>=16.0.0

## 目录结构

<details>
<summary>查看目录</summary>

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
</details>

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

### 包管理

添加`.npmrc`

```
shamefully-hoist=true
```

作用是将安装的依赖包的依赖包...做扁平化处理，都放在同一级

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

建议提前配置好，开发体验会更好

- [commit规范](https://www.yuque.com/forguo/f2e/elkm1q)

- [eslint + prettier](https://juejin.cn/post/7011871773687808031)

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

## 发布

### package配置说明

```js
{
    //  we-design【组织】，web-vue【包名】
    "name": "@we-design/web-vue",
}
```

## 问题及解决

TypeError: Invalid value used as weak map key

**md中有无法解析的标签导致**

