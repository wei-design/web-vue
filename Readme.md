# @web-design/web-vue

A Vue.js 3 UI library

[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli)
[![WeDesign version badge](https://img.shields.io/npm/v/@web-design/web-vue.svg?style=flat-square)](https://www.npmjs.org/package/@web-design/web-vue)

---

- 🔭 [Vite](https://vitejs.dev)
- 💪 [Vue3](https://vuejs.org)
- 🔥 TypeScript

[快速开始](https://web-design.cloud-app.com.cn)

## 安装

### npm

这里推荐`pnpm`进行安装

```sh
pnpm install @web-design/web-vue --save
```

### cdn

#### unpkg

[资源浏览](https://unpkg.com/@web-design/web-vue/)

```html
<link
    rel="stylesheet"
    href="//unpkg.com/@web-design/web-vue/lib/style.css"
/>
<script src="//unpkg.com/@web-design/web-vue"></script>
```

#### jsdelivr

[资源浏览](https://cdn.jsdelivr.net/npm/@web-design/web-vue/)

```html
<link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/@web-design/web-vue/lib/style.css"
/>
<script src="//cdn.jsdelivr.net/npm/@web-design/web-vue"></script>
```

## 使用

### 全局引入

在`main.js`中

```js
import { createApp } from 'vue';
import App from './App.vue';
// 完整引入组件库
import WeDesign from '@web-design/web-vue';

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
import { Button } from '@web-design/web-vue';

const app = createApp(App);

app.use(Button).mount('#app');
```

组件当中

```vue
<WeButton :loading="true">按钮组件</WeButton>
```

---

有问题欢迎issue...
