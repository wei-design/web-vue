# Wei-Design

A Vue.js 3 UI library

[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli)

[![WeiDesign version badge](https://img.shields.io/npm/v/wei-design.svg?style=flat-square)](https://www.npmjs.org/package/wei-design)

---

- 🔭 [Vite](https://vitejs.dev)
- 💪 [Vue3](https://vuejs.org)
- 🔥 TypeScript

参考[element-plus](https://element-plus.org/)

## 环境

- node：>=16.0.0

## 使用

### 安装

推荐使用npm

```bash
pnpm install wei-design --save
```

### 全局使用

在`main.js`中

```js
import { createApp } from 'vue';
import App from './App.vue';
// 完整引入组件库
import WeiDesign from 'wei-design';

const app = createApp(App);
// 全局安装
app.use(WeiDesign).mount('#app');
```

### 按需使用

在`vue`组件中

```vue

```
