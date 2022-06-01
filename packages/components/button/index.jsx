import { defineComponent } from 'vue';
import classNames from '../../utils/className';
import './index.scss';
const ButtonProps = {
    type: {
        type: String,
        default: 'default'
    },
    status: {
        type: String,
        default: 'default'
    },
    size: {
        type: String,
        default: 'md'
    },
    shape: {
        type: String,
        default: 'square'
    },
    icon: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    }
};
const WeiButton = defineComponent({
    name: 'WeiButton',
    props: ButtonProps,
    setup(props, { slots }) {
        const classString = classNames([
            'wei-button',
            `wei-button-type-${props.type}`,
            `wei-button-status-${props.status}`,
            `wei-button-shape-${props.shape}`,
            `wei-button-size-${props.size}`,
            props.disabled ? 'wei-button-disabled' : ''
        ]);
        return () => (<button class={classString} disabled={props.disabled || props.loading}>
                <div class="wei-button-inner">
                    <span class="wei-button-slot">{slots.default && slots.default()}</span>
                </div>
            </button>);
    }
});
WeiButton.install = function (app) {
    app.component(WeiButton.name, WeiButton);
    return app;
};
export default WeiButton;
//# sourceMappingURL=index.jsx.map