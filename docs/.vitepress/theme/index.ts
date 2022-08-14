/**
 * @Author: forguo
 * @Date: 2022/7/23 21:25
 * @Description: 主题配置
 */
import DefaultTheme from 'vitepress/theme'
import WeDesign from '../../../packages'
import {NotFound, VPDemo} from '../vitepress'
// 版本及打包日期
console.log(
    `%c Version %c ${process.env.APP_VERSION}`,
    'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060',
    'padding: 1px 5px 1px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #1475b2'
)
console.log(
    `%c BuildTime %c ${process.env.APP_BUILD_TIME}`,
    'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060',
    'padding: 1px 5px 1px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #1475b2'
)
export default ({
    ...DefaultTheme, // 默认主题
    NotFound, // 自定义【404】
    enhanceApp: ({app}: any) => {
        // 注册全局组件
        app.use(WeDesign)
        app.component('Demo', VPDemo)
    }
})
