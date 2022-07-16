<!--
 * @Name: Layout.vue
 * @Author: forguo
 * @Date: 2022/7/3 13:04
 * @Description: Layout
-->
<template>
    <section class="vp-app">
        <div class="vp-app--header">header</div>
        <section class="vp-app--main">
            <aside class="vp-app--slider">nav</aside>
            <section class="vp-app--content">
                <!-- this is where markdown content will be rendered -->
                <section style="overflow: hidden;">
                    <Content />
                </section>
                <div class="vp-app--footer">footer</div>
            </section>
        </section>
    </section>
</template>

<script>

export default {
    name: "Layout",
    components: {}

}
</script>

<style scoped lang="scss">
.vp-app {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    &--header {
        height: 64px;
        background: var(--header-light);
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #ccc;
    }
    &--main {
        flex: 1;
        height: 100%;
        overflow: hidden;
        display: flex;
    }
    &--slider {
        width: 120px;
        height: 100%;
        overflow-y: auto;
        border-right: 1px solid #ccc;
    }
    &--content {
        flex: 1;
        height: 100%;
        overflow-y: auto;
    }
    &--footer {
        height: 64px;
        background: var(--header-light);
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #ccc;
    }
}
</style>
