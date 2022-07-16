<script lang="ts" setup>
import {computed} from 'vue'

const props = defineProps({
    source: {
        type: String,
        required: true,
    },
})

const decoded = computed(() => {
    return decodeURIComponent(props.source)
})
</script>

<template>
    <div class="example-source">
        <div class="example-source-content language-vue" v-html="decoded"/>
    </div>
</template>

<style lang="scss" scoped>
.example-source {
    .language-vue {
        margin: 0;
        border-radius: 0;
    }
}
</style>
