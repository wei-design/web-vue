import {defineComponent, App, PropType, SetupContext} from 'vue';
import classNames from '../../utils/className';
import './index.scss';

const ButtonProps = {
    type: {
        type: String as PropType<string>,
        default: 'default'
    },
    status: {
        type: String as PropType<string>,
        default: 'default'
    },
    size: {
        type: String as PropType<string>,
        default: 'md'
    },
    shape: {
        type: String as PropType<string>,
        default: 'square'
    },
    icon: {
        type: String as PropType<string>,
        default: ''
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    loading: {
        type: Boolean as PropType<boolean>,
        default: false
    }
};

const WeiButton = defineComponent({
    name: 'WeiButton',
    props: ButtonProps,
    setup(props, {slots}: SetupContext) {
        const classString = classNames([
            'wei-button',
            `wei-button-type-${props.type}`,
            `wei-button-status-${props.status}`,
            `wei-button-shape-${props.shape}`,
            `wei-button-size-${props.size}`,
            props.disabled ? 'wei-button-disabled' : ''
        ]);
        return () => (
            <button class={classString} disabled={props.disabled || props.loading}>
                <div class="wei-button-inner">
                    <span class="wei-button-slot">{slots.default && slots.default()}</span>
                </div>
            </button>
        );
    }
});

WeiButton.install = function (app: App) {
    app.component(WeiButton.name, WeiButton);
    return app;
};

export default WeiButton;
