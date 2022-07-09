import DefaultTheme from 'vitepress/theme'
import WeiDesign from '../../../packages'
import VPApp, {NotFound, VPDemo} from '../vitepress';

export default ({
    ...DefaultTheme, // 默认主题
    // Layout: VPApp, // 自定义【布局】
    NotFound, // 自定义【404】
    enhanceApp: ({app}: any) => {
        // 注册全局组件
        app.use(WeiDesign);
        app.component('Demo', VPDemo)
    }
})
