import { App } from 'vue';
import WeiButton from './components/button';

const components = [WeiButton];

const install = function (app: App) {
    components.forEach((component) => {
        app.use(component as unknown as { install: () => any });
    });
    return app;
};

export { WeiButton };

export default {
    install,
};
