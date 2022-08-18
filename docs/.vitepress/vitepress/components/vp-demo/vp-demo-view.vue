<template>
    <ClientOnly>
        <div class="example-component">
            <component
                :is="dynamicComponent"
                v-if="dynamicComponent"
                v-bind="$attrs"
            />
            <div v-else class="example-component--loading">
                <div></div>
                <div></div>
            </div>
        </div>
    </ClientOnly>
</template>

<script lang="ts" setup>
    import { onBeforeMount, shallowRef } from "vue";

    const props = defineProps<{
        path?: string
    }>();


    // 创建一个跟踪自身 .value 变化的 ref，但不会使其值也变成响应式的。
    let dynamicComponent = shallowRef(null);

    onBeforeMount(() => {
        const modules = import.meta.glob(`../../../../examples/*/*.vue`, { eager: true });
        // 动态加载示列组件
        for (const modulesKey in modules) {
            const module = (modules[modulesKey]);
            // 找到example的组件，并加载
            if (modulesKey.split(".vue")[0].endsWith(props.path)) {
                module().then(res => {
                    dynamicComponent.value = res.default
                });
            }
        }
    });

</script>

<style lang="scss" scoped>
// loading动画
@keyframes lds-ripple {
    0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
    }
    4.9% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
    }
    5% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        opacity: 0;
    }
}
.example-component {
    padding: 1.5rem;
    margin: 24px 0;
    background-color: var(--bg-color);
    border: 1px solid var(--border-color);
    border-radius: 8px;

    &--loading {
        display: inline-block;
        position: relative;
        width: 72px;
        height: 72px;
        transform: scale3d(0.6,0.6,0.6);
        transform-origin: center;
        div {
            position: absolute;
            border: 4px solid var(--theme-light);
            opacity: 1;
            border-radius: 50%;
            animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }

        div:nth-child(2) {
            animation-delay: -0.5s;
        }
    }
}
</style>
