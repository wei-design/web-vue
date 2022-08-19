<template>
    <h2>web-design</h2>
    <hr style="margin: 32px 100px" />
    <img src="/favicon.png" alt="web-design" title="web-design" />
    <div>
        <WeButton :loading="true">按钮组件</WeButton>
    </div>
</template>

<script lang="ts" setup></script>

<style>
* {
    padding: 0;
    margin: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
