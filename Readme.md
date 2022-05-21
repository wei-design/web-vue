Wei-Design

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[Rsuite](https://rsuitejs.com/design/default/)

## 初始化

Vue 3 + TypeScript + Vite

[Vue](https://vuejs.org/)
[Vite](https://vitejs.dev/guide/features.html)

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

### 必备

需要配置`scss`预编译和`jsx`语法

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

### 加持

- commit规范
- eslint

建议提前配置好，开发体验会更好
