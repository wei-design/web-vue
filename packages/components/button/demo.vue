<template>
    <div class="demo">
        计时：{{ state.value }} s
        <!-- ref 会自动获取value，可以省略value -->
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue';
const Props = {
    name: {
        type: String as PropType<string>,
    },
};
export default defineComponent({
    name: 'Demo',
    props: Props,
    setup: (props, { slots, attrs, emit }) => {
        console.log(props);
        const state = reactive({
            value: 0,
        });
        setInterval(() => {
            state.value += 1;
        }, 1000);
        return {
            state,
        };
    },
});
</script>
