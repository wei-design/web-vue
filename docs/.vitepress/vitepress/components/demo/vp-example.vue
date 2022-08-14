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

<script lang="ts" setup>
import {onBeforeMount, shallowRef} from "vue";
const props = defineProps<{
    path?: string
}>()


// 创建一个跟踪自身 .value 变化的 ref，但不会使其值也变成响应式的。
let dynamicComponent = shallowRef(null);

onBeforeMount(() => {
    const modules = import.meta.globEager(`../../../../examples/*/*.vue`)
    // 动态加载示列组件
    const [_, demoName] = props.path.split('/')
    for (const modulesKey in modules) {
        const module = (modules[modulesKey])
        if (modulesKey.split('.vue')[0].endsWith(demoName)) {
            dynamicComponent.value = module.default
        }
    }
})

</script>

<style lang="scss" scoped>
.example-component {
    padding: 1.5rem;
    margin: 24px 0;
    background-color: var(--bg-color);
    border: 1px solid #ccc;
    border-radius: 8px;
}
</style>
