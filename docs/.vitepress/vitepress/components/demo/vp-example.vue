<script lang="ts" setup>
defineProps({
    file: {
        type: String,
        required: true,
    },
    demo: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div class="example-showcase">
        <ClientOnly>
            <component :is="demo" v-if="demo" v-bind="$attrs"/>
        </ClientOnly>
    </div>
</template>

<style lang="scss" scoped>
.example-showcase {
    padding: 1.5rem;
    margin: 24px 0;
    background-color: var(--bg-color);
    border: 1px solid #ccc;
    border-radius: 8px;
}
</style>
