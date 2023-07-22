import { createApp } from 'vue'
import App from './App.vue'
// 完整引入组件库
import WeDesign from 'wei_design' // 本地开发

const app = createApp(App)

console.log(import.meta.env)

// 版本及打包日期
console.log(
    `%c Version %c ${import.meta.env.APP_VERSION}`,
    'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060',
    'padding: 1px 5px 1px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #1475b2'
)
console.log(
    `%c BuildTime %c ${import.meta.env.APP_BUILD_TIME}`,
    'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060',
    'padding: 1px 5px 1px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #1475b2'
)

app.use(WeDesign).mount('#app')
