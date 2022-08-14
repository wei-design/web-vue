---
title: Button
lang: zh-CN
---

# 基本使用

::: demo 使用 type、size、round 和 loading 来定义按钮的样式。
button/basic
:::

::: demo 点击事件
button/event
:::

```vue
<template>
    <div class="button-basic">
        <we-button @click="handleClick">点击</we-button>
    </div>
</template>

<script lang="ts" setup>
    const handleClick = () => {
        alert('click me');
    }
</script>

<style scoped>
.we-button {
    margin-right: 12px;
}
</style>
```
