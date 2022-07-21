---
title: 快速开始
lang: zh-CN
---

# 快速开始

## 引入

### 全局引入

main.js中

```js
import { createApp } from 'vue';
import App from './App.vue';
// 完整引入组件库
import WeiDesign from 'wei-design';

const app = createApp(App);

app.use(WeiDesign).mount('#app');
```

组件当中

```vue
<WeiButton :loading="true">按钮组件</WeiButton>
```

### 按需引入

main.js中

```js
import { createApp } from 'vue';
import App from './App.vue';
// 按需引入
import { WeiButton } from 'wei-design';

const app = createApp(App);

app.use(WeiButton).mount('#app');
```

组件当中

```vue
<WeiButton :loading="true">按钮组件</WeiButton>
```
