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
import WeDesign from 'we-design';

const app = createApp(App);

app.use(WeDesign).mount('#app');
```

组件当中

```vue
<WeButton :loading="true">按钮组件</WeButton>
```

### 按需引入

main.js中

```js
import { createApp } from 'vue';
import App from './App.vue';
// 按需引入
import { Button } from 'we-design';

const app = createApp(App);

app.use(Button).mount('#app');
```

组件当中

```vue
<WeButton :loading="true">按钮组件</WeButton>
```
