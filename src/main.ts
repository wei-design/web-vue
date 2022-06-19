import { createApp } from 'vue';
import App from './App.vue';
// 完整引入组件库
import WeiDesign from '../packages';

const app = createApp(App);

app.use(WeiDesign).mount('#app');
