<template>
    <div class="button-basic">
        <we-button @click="handleClick">点击</we-button>
    </div>
</template>

<script lang="ts" setup>
const handleClick = () => {
    alert('click me');
}
</script>

<style scoped>
.we-button {
    margin-right: 12px;
}
</style>
