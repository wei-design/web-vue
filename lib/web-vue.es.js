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
  size: {
    type: String,
    default: "md"
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
const Button = defineComponent({
  name: "WeButton",
  props: ButtonProps,
  setup(props, {
    slots
  }) {
    const classString = className(["we-button", `we-button-type-${props.type}`, props.disabled ? "we-button-disabled" : ""]);
    return () => createVNode("button", {
      "class": classString,
      "disabled": props.disabled || props.loading
    }, [createVNode("div", {
      "class": "we-button-inner"
    }, [createVNode("span", {
      "class": "we-button-slot"
    }, [slots.default && slots.default()])])]);
  }
});
Button.install = function(app) {
  app.component(Button.name, Button);
  return app;
};
var components = [Button];
const install = function(app) {
  components.forEach((component) => {
    app.use(component);
  });
};
var index = {
  install
};
export { Button, index as default };
