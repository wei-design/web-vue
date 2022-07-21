/**
 * @Author: forguo
 * @Date: 2022/7/17 15:48
 * @Description: 组件入口
 */
import { App } from 'vue';
import WeiButton from './components/button';

// 导出组件
export const components: any = {
    WeiButton,
};

// 完整引入组件
const install = function (app: App) {
    Object.keys(components).forEach((key) => {
        app.use(components[key]);
    });
    return app;
};

export default {
    install,
};
