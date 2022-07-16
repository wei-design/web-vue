<script lang="ts" setup>
import {computed, getCurrentInstance, toRef} from 'vue'
import {useClipboard, useToggle} from '@vueuse/core'

import Example from './vp-example.vue'
import SourceCode from './vp-source-code.vue'

const props = defineProps<{
    demos: object
    source: string
    path: string
    rawSource: string
    description?: string
}>()

const [sourceVisible, toggleSourceVisible] = useToggle(true)

const formatPathDemos = computed(() => {
    const demos = {}
    Object.keys(props.demos).forEach((key) => {
        demos[key.replace('../../examples/', '').replace('.vue', '')] =
            props.demos[key].default
    })

    return demos
})

const decodedDescription = computed(() =>
    decodeURIComponent(props.description!)
)
</script>

<template>
    <ClientOnly>
        <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
        <div text="sm" v-html="decodedDescription"/>

        <div class="example">
            <Example :demo="formatPathDemos[path]" :file="path"/>
            <SourceCode v-show="sourceVisible" :source="source"/>
            <div
                class="example-float-control"
                @click="toggleSourceVisible(!sourceVisible)"
            >
                <span>{{ sourceVisible ? '隐藏源码' : '显示源码' }}</span>
            </div>
        </div>
    </ClientOnly>
</template>

<style lang="scss" scoped>
.example {
    border: 1px solid var(--border-color);
    border-radius: var(--el-border-radius-base);

    &-float-control {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid var(--border-color);
        height: 44px;
        box-sizing: border-box;
        background-color: var(--bg-color, #fff);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        margin-top: -1px;
        color: var(--el-text-color-secondary);
        cursor: pointer;
        position: sticky;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;

        span {
            font-size: 14px;
            margin-left: 10px;
        }

        &:hover {
            color: var(--el-color-primary);
        }
    }
}
</style>
