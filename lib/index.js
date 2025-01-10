"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const isArray = Array.isArray;
const isString = (val) => typeof val === "string";
const isObject = (val) => val !== null && typeof val === "object";
function className(...args) {
  const classes = [];
  for (let i = 0; i < args.length; i++) {
    const value = args[i];
    if (!value) continue;
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
const Props = {
  type: {
    type: String,
    // 转为ts类型string
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
const _sfc_main = vue.defineComponent({
  name: "WeButton",
  props: Props,
  setup(props) {
    const classString = className([
      "we-button",
      `we-button-type-${props.type}`,
      props.disabled ? "we-button-disabled" : ""
    ]);
    return {
      classString
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = ["disabled"];
const _hoisted_2 = { class: "we-button-inner" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("button", {
    class: vue.normalizeClass([_ctx.classString]),
    disabled: _ctx.disabled || _ctx.loading
  }, [
    vue.createElementVNode("span", _hoisted_2, [
      vue.renderSlot(_ctx.$slots, "default")
    ])
  ], 10, _hoisted_1);
}
const Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
Button.install = function(app) {
  app.component(Button.name, Button);
  return app;
};
const components = [Button];
const install = function(app) {
  components.forEach((component) => {
    app.use(component);
  });
};
const index = {
  install
};
exports.Button = Button;
exports.default = index;
