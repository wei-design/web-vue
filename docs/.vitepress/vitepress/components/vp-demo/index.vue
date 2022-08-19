<template>
    <ClientOnly>
        <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
        <div v-html="decodedDescription"/>

        <div class="vp-demo">
            <vp-demo-view :path="path" />
            <div
                class="vp-demo__control"
            >
                <span class="vp-demo__control-btn" @click="copyRawSource">复制源代码</span>
                <span class="vp-demo__control-btn" @click="toggleSourceVisible(!sourceVisible)">{{ sourceVisible ? '隐藏源码' : '查看源码' }}</span>
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
    &__control {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 44px;
        box-sizing: border-box;
        background-color: #fff;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        margin-top: -1px;
        cursor: pointer;
        position: sticky;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        &-btn {
            font-size: 14px;
            margin-left: 10px;
            &:hover {
                color: var(--color-primary);
            }
        }
    }
}
</style>
