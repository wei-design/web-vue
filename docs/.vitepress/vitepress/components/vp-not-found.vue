<!--
 * @Name: NotFound.vue
 * @Author: forguo
 * @Date: 2022/7/3 12:42
 * @Description: NotFound
-->
<template>
    <div class="vp-page not-found">
        <h3 style="margin-bottom: 24px">{{ locale.title }}</h3>
        <p style="margin-bottom: 32px">{{ locale.desc }}</p>
        <we-button @click="goHome">{{ locale['button-title'] }}</we-button>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { lang } from "../../utils/lang";
import localeData from '../../i18n/pages/not-found.json'
const locale = computed(() => localeData[lang])

const goHome = () => {
    window.location.href = `/${lang}/`
}
</script>

<style scoped>
.not-found {
    height: 100%;
    width: 100%;
}
</style>
