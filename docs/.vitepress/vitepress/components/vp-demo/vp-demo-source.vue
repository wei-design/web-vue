<template>
    <div class="example-source">
        <div class="example-source-content language-vue" v-html="decoded" />
    </div>
</template>
<script lang="ts" setup>
import {computed, onBeforeMount, shallowRef} from 'vue'
import {highlight} from '../../../utils/highlight'

const props = defineProps({
    source: {
        type: String,
        required: true,
    },
})

const decoded = computed(() => {
    return decodeURIComponent(props.source)
})

// 创建一个跟踪自身 .value 变化的 ref，但不会使其值也变成响应式的。
let sourceCode = shallowRef(null);

onBeforeMount(async () =>{
    try {
        const sourceLight = await highlight(props.source)
        console.log('sourceLight')
        console.log(sourceLight)
        sourceCode.value = '<h2>vue</h2>'
    } catch (e) {
        console.log(e)
    }
})
</script>

<style lang="scss" scoped>
.example-source {
    .language-vue {
        margin: 0;
    }
}
</style>
