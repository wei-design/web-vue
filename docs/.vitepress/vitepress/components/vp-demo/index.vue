<template>
    <ClientOnly>
        <div class="vp-demo">
            <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
            <div class="vp-demo__desc" v-html="decodedDescription"/>
            <div class="vp-demo__panel">
                <vp-demo-view :path="path" />
                <div
                    class="vp-demo__control"
                >
                    <span class="vp-demo__control-btn" @click="copyRawSource">复制源码</span>
                    <span class="vp-demo__control-btn" @click="toggleSourceVisible(!sourceVisible)">{{ sourceVisible ? '隐藏源码' : '查看源码' }}</span>
                </div>
            </div>
            <vp-demo-source v-show="sourceVisible" :source="source"/>
        </div>
    </ClientOnly>
</template>

<script lang="ts" setup>
import {computed, getCurrentInstance, ref} from 'vue'
import {useClipboard, useToggle} from '@vueuse/core'

import VpDemoView from './vp-demo-view.vue'
import VpDemoSource from './vp-demo-source.vue'

const props = defineProps<{
    rawSource: string, // 源码
    source: string
    path: string
    description?: string
}>()

const { copy, isSupported } = useClipboard({
    source: decodeURIComponent(props.rawSource),
    read: false,
})

const [sourceVisible, toggleSourceVisible] = useToggle(false)

const decodedDescription = computed(() =>
    decodeURIComponent(props.description!)
)
const copyRawSource = async () => {
    if (!isSupported) {
        alert('复制失败')
    }
    try {
        await copy()
        alert('已复制')
    } catch (e: any) {
        console.log(e)
        alert(e.message)
    }
}

</script>
<style lang="scss" scoped>
.vp-demo {
    margin: 0 0 16px;
    overflow: hidden;
    &__desc {
        font-size: 14px;
        color: var(--text-color);
    }
    &__panel {
        margin: 16px 0;
        border: 1px solid var(--border-color);
        background-color: var(--bg-color);
        border-radius: 8px;
        overflow: hidden;
    }
    &__control {
        height: 44px;
        box-sizing: border-box;
        padding: 0 1.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-top: 1px solid var(--border-color);
        background-color: var(--bg-color);

        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        margin-top: -1px;
        &-btn {
            font-size: 14px;
            margin-left: 10px;
            cursor: pointer;
            color: #5e6d82;
            &:hover {
                color: var(--color-primary);
            }
        }
    }
}
</style>
