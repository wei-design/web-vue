import { createApp } from 'vue';
import App from './App.vue';
import WeiDesign from '../packages';

const app = createApp(App);

app.use(WeiDesign).mount('#app');
