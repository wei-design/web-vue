# @wei-design/web-vue

A Vue.js 3 UI library

[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli)
[![web-vue](https://img.shields.io/npm/v/@wei-design/web-vue.svg?style=flat-square)](https://www.npmjs.org/package/@wei-design/web-vue)
[![web-vue](https://img.shields.io/npm/dt/@wei-design/web-vue)](https://www.npmjs.org/package/@wei-design/web-vue)
![](https://img.shields.io/github/stars/wei-design/web-vue#crop=0&crop=0&crop=1&crop=1&id=o8sRG&originHeight=20&originWidth=54&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

---

- 🔭 [Vite](https://vitejs.dev)
- 💪 [Vue3](https://vuejs.org)
- 🔥 TypeScript

[快速开始](https://wei-design.github.io/web-vue/)

## 安装

node：>=16.0.0

### npm

这里推荐`pnpm`进行安装

```sh
pnpm install @wei-design/web-vue --save
```

### cdn

#### unpkg

[资源浏览](https://unpkg.com/@wei-design/web-vue/)

```html
<link
    rel="stylesheet"
    href="//unpkg.com/@wei-design/web-vue/lib/style.css"
/>
<script src="//unpkg.com/@wei-design/web-vue"></script>
```

#### jsdelivr

[资源浏览](https://cdn.jsdelivr.net/npm/@wei-design/web-vue/)

```html
<link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/@wei-design/web-vue/lib/style.css"
/>
<script src="//cdn.jsdelivr.net/npm/@wei-design/web-vue"></script>
```

## 使用

### 全局引入

在`main.js`中

```js
import { createApp } from 'vue';
import App from './App.vue';
// 完整引入组件库
import WeDesign from '@wei-design/web-vue';

const app = createApp(App);
// 全局安装
app.use(WeDesign).mount('#app');
```

组件当中

```vue
<WeButton :loading="true">按钮组件</WeButton>
```

### 按需引入

`main.js`中

```js
import { createApp } from 'vue';
import App from './App.vue';
// 按需引入
import { Button } from '@wei-design/web-vue';

const app = createApp(App);

app.use(Button).mount('#app');
```

组件当中

```vue
<WeButton :loading="true">按钮组件</WeButton>
```

---

## 版本记录

[版本记录](CHANGELOG.md)

有问题欢迎issue...
