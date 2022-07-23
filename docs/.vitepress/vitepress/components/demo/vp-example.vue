<script lang="ts" setup>
import {onBeforeMount, shallowRef} from "vue";
const props = defineProps<{
    source?: string
    path?: string
}>()

// 创建一个跟踪自身 .value 变化的 ref，但不会使其值也变成响应式的。
let dynamicComponent = shallowRef(null);

onBeforeMount(() => {
    // 动态加载示列组件
    const dynamicPath = `../../../../examples/${props.path}.vue`
    /* @vite-ignore */
    import(dynamicPath).then((module) => {
        dynamicComponent.value = module.default
    })
})

</script>

<template>
    <ClientOnly>
        <div class="example-component">
            <component
                :is="dynamicComponent"
                v-if="dynamicComponent"
                v-bind="$attrs"
            />
            <div v-else style="min-height: 36px;">loading...</div>
        </div>
    </ClientOnly>
</template>

<style lang="scss" scoped>
.example-component {
    padding: 1.5rem;
    margin: 24px 0;
    background-color: var(--bg-color);
    border: 1px solid #ccc;
    border-radius: 8px;
}
</style>
