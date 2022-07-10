<script lang="ts" setup>
import {computed, getCurrentInstance, toRef} from 'vue'
import {useClipboard, useToggle} from '@vueuse/core'

import Example from './demo/vp-example.vue'
import SourceCode from './demo/vp-source-code.vue'

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
        <p text="sm" v-html="decodedDescription"/>

        <div class="example">
            <Example :demo="formatPathDemos[path]" :file="path"/>
            <SourceCode v-if="sourceVisible" :source="source"/>
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

    .op-btns {
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 2.5rem;

        .el-icon {
            &:hover {
                color: var(--text-color);
            }
        }

        .op-btn {
            margin: 0 0.5rem;
            cursor: pointer;
            color: var(--text-color-lighter);
            transition: 0.2s;

            &.github a {
                transition: 0.2s;
                color: var(--text-color-lighter);

                &:hover {
                    color: var(--text-color);
                }
            }
        }
    }

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
