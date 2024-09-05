<template>
    <h2>wei-design</h2>
    <hr style="margin: 32px 100px" />
    <img src="/favicon.png" alt="wei-design" title="wei-design" />
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
