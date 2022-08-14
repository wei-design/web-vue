<template>
    <ClientOnly>
        <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
        <div v-html="decodedDescription"/>

        <div class="vp-demo">
            <vp-example :path="path" />
            <vp-source v-show="sourceVisible" :source="source"/>
            <div
                class="vp-demo__control"
                @click="toggleSourceVisible(!sourceVisible)"
            >
                <span>{{ sourceVisible ? '隐藏源码' : '显示源码' }}</span>
            </div>
        </div>
    </ClientOnly>
</template>

<script lang="ts" setup>
import {computed, getCurrentInstance, ref} from 'vue'
import {useClipboard, useToggle} from '@vueuse/core'

import VpExample from './vp-example.vue'
import VpSource from './vp-source-code.vue'

const props = defineProps<{
    source: string
    path: string
    rawSource: string
    description?: string
}>()

const [sourceVisible, toggleSourceVisible] = useToggle(true)

const decodedDescription = computed(() =>
    decodeURIComponent(props.description!)
)
</script>
<style lang="scss" scoped>
.vp-demo {
    &__control {
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
