/**
 * @Author: forguo
 * @Date: 2022/7/17 15:48
 * @Description: 组件入口
 */
import { App } from 'vue'
// 所有组件
export * from './component'
import components from './component'

// 完整引入组件
const install = function (app: App) {
    components.forEach(component => {
        app.use(component as unknown as { install: () => any })
    })
}

export default {
    install
}
