/**
 * @Author: forguo
 * @Date: 2022/7/23 21:25
 * @Description: 主题配置
 */
import DefaultTheme from 'vitepress/theme'
import WeDesign from '../../../packages'
import {NotFound, VPDemo} from '../vitepress';

export default ({
    ...DefaultTheme, // 默认主题
    NotFound, // 自定义【404】
    enhanceApp: ({app}: any) => {
        // 注册全局组件
        app.use(WeDesign);
        app.component('Demo', VPDemo);
    }
})
