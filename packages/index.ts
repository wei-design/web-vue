import {App} from 'vue';
import WeiButton from './components/button';

const components = [WeiButton];

// 能够完整引入组件
const install = function (app: App) {
    components.forEach((component) => {
        app.use(component as unknown as { install: () => any });
    });
    return app;
};

// 用于按需引入，每个组件也得单独定义install方法
export {WeiButton};

export default {
    install,
};
