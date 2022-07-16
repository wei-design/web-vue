<template>
    <div class="button-basic">
        <wei-button>Default</wei-button>
        <wei-button type="primary">Primary</wei-button>
        <wei-button @click="handleClick">点击</wei-button>
    </div>
</template>

<script lang="ts" setup>
const handleClick = () => {
    alert('click me');
}
</script>

<style scoped>
.wei-button {
    margin-right: 12px;
}
</style>
