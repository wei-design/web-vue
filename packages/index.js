import WeiButton from './components/button';
const components = [
    WeiButton,
];
const install = function (app) {
    components.forEach(component => {
        app.use(component);
    });
    return app;
};
export { WeiButton, };
export default {
    install
};
//# sourceMappingURL=index.js.map