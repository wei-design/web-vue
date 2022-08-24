import { App } from 'vue'

import Button from './src/index.vue'
Button.install = function (app: App) {
    // 组件注册，按需引入
    app.component(Button.name, Button)
    return app
}

export default Button
