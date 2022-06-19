import { defineComponent, createVNode } from "vue";
const isArray = Array.isArray;
const isString = (val) => typeof val === "string";
const isObject = (val) => val !== null && typeof val === "object";
function className(...args) {
  const classes = [];
  for (let i = 0; i < args.length; i++) {
    const value = args[i];
    if (!value)
      continue;
    if (isString(value)) {
      classes.push(value);
    } else if (isArray(value)) {
      for (let i2 = 0; i2 < value.length; i2++) {
        const inner = className(value[i2]);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          classes.push(name);
        }
      }
    }
  }
  return classes.join(" ");
}
var index$1 = "";
const ButtonProps = {
  type: {
    type: String,
    default: "default"
  },
  status: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "md"
  },
  shape: {
    type: String,
    default: "square"
  },
  icon: {
    type: String,
    default: ""
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
  name: "WeiButton",
  props: ButtonProps,
  setup(props, {
    slots
  }) {
    const classString = className(["wei-button", `wei-button-type-${props.type}`, `wei-button-status-${props.status}`, `wei-button-shape-${props.shape}`, `wei-button-size-${props.size}`, props.disabled ? "wei-button-disabled" : ""]);
    return () => createVNode("button", {
      "class": classString,
      "disabled": props.disabled || props.loading
    }, [createVNode("div", {
      "class": "wei-button-inner"
    }, [createVNode("span", {
      "class": "wei-button-slot"
    }, [slots.default && slots.default()])])]);
  }
});
WeiButton.install = function(app) {
  app.component(WeiButton.name, WeiButton);
  return app;
};
const components = [WeiButton];
const install = function(app) {
  components.forEach((component) => {
    app.use(component);
  });
  return app;
};
var index = {
  install
};
export { WeiButton, index as default };
