import { defineComponent, App, PropType, SetupContext } from 'vue';
import classNames from '../../utils/className';
import './index.scss';

const ButtonProps = {
    type: {
        type: String as PropType<string>,
        default: 'default',
    },
    size: {
        type: String as PropType<string>,
        default: 'md',
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    loading: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
};

const Button = defineComponent({
    name: 'WeButton',
    props: ButtonProps,
    setup(props, { slots }: SetupContext) {
        const classString = classNames([
            'we-button',
            `we-button-type-${props.type}`,
            props.disabled ? 'we-button-disabled' : '',
        ]);
        return () => (
            <button
                class={classString}
                disabled={props.disabled || props.loading}
            >
                <div class="we-button-inner">
                    <span class="we-button-slot">
                        {slots.default && slots.default()}
                    </span>
                </div>
            </button>
        );
    },
});

Button.install = function (app: App) {
    // 组件注册，按需引入
    app.component(Button.name, Button);
    return app;
};

export default Button;
