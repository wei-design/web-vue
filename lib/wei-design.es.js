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
var index$1 = /* @__PURE__ */ (() => ":export{default:#409EFF;primary:#ffffff;link:#409EFF;ghost:#409EFF;delicate:#8e8e93;primaryColor:#409EFF;successColor:#67C23A;warningColor:#E6A23C;dangerColor:#F56C6C;delicateColor:#8e8e93;white:#ffffff;black:#000000}button{outline:none}.wei-button{padding:8px 12px;overflow:hidden;border-radius:6px;border:0;text-align:center;display:inline-block;position:relative;outline:none;font-weight:400;-webkit-appearance:none;user-select:none;cursor:pointer;white-space:nowrap;transition:all .1s linear;box-sizing:border-box}.wei-button-type-default{background:#409EFF;color:#409eff;background:transparent;border:1px solid #409EFF}.wei-button-type-default:focus,.wei-button-type-default:hover{background:#ecf5ff;border:1px solid #66b1ff;color:#409eff}.wei-button-type-primary{background:#409EFF;color:#409eff;color:#fff;border:none;color:#fff!important}.wei-button-type-primary:focus,.wei-button-type-primary:hover{background:#79bbff}.wei-button-type-primary:active{background:#3d96f2}.wei-button-type-primary:disabled{background:#8cc5ff}.wei-button-type-link{background:#409EFF;color:#409eff;background:none;border:none}.wei-button-type-ghost{background:#409EFF;color:#409eff;background:#ffffff;border:1px solid #409EFF}.wei-button-type-delicate{background:#8e8e93;color:#8e8e93;background:none;border:none}.wei-button-type-default.wei-button-status-success{background:#67C23A;color:#67c23a;background:transparent;border:1px solid #67C23A}.wei-button-type-default.wei-button-status-success:focus,.wei-button-type-default.wei-button-status-success:hover{background:#f0f9eb;border:1px solid #85ce61;color:#67c23a}.wei-button-type-default.wei-button-status-info{background:#909399;color:#909399;background:transparent;border:1px solid #909399}.wei-button-type-default.wei-button-status-info:focus,.wei-button-type-default.wei-button-status-info:hover{background:#f4f4f5;border:1px solid #a6a9ad;color:#909399}.wei-button-type-default.wei-button-status-warning{background:#E6A23C;color:#e6a23c;background:transparent;border:1px solid #E6A23C}.wei-button-type-default.wei-button-status-warning:focus,.wei-button-type-default.wei-button-status-warning:hover{background:#fdf6ec;border:1px solid #ebb563;color:#e6a23c}.wei-button-type-default.wei-button-status-danger{background:#F56C6C;color:#f56c6c;background:transparent;border:1px solid #F56C6C}.wei-button-type-default.wei-button-status-danger:focus,.wei-button-type-default.wei-button-status-danger:hover{background:#fef0f0;border:1px solid #f78989;color:#f56c6c}.wei-button-type-primary.wei-button-status-success{background:#67C23A;color:#67c23a;border:none;color:#fff}.wei-button-type-primary.wei-button-status-success:focus,.wei-button-type-primary.wei-button-status-success:hover{background:#95d475}.wei-button-type-primary.wei-button-status-success:active{background:#62b837}.wei-button-type-primary.wei-button-status-success:disabled{background:#a4da89}.wei-button-type-primary.wei-button-status-info{background:#909399;color:#909399;border:none;color:#fff}.wei-button-type-primary.wei-button-status-info:focus,.wei-button-type-primary.wei-button-status-info:hover{background:#b1b3b8}.wei-button-type-primary.wei-button-status-info:active{background:#898c91}.wei-button-type-primary.wei-button-status-info:disabled{background:#bcbec2}.wei-button-type-primary.wei-button-status-warning{background:#E6A23C;color:#e6a23c;border:none;color:#fff}.wei-button-type-primary.wei-button-status-warning:focus,.wei-button-type-primary.wei-button-status-warning:hover{background:#eebe77}.wei-button-type-primary.wei-button-status-warning:active{background:#db9a39}.wei-button-type-primary.wei-button-status-warning:disabled{background:#f0c78a}.wei-button-type-primary.wei-button-status-danger{background:#F56C6C;color:#f56c6c;border:none;color:#fff}.wei-button-type-primary.wei-button-status-danger:focus,.wei-button-type-primary.wei-button-status-danger:hover{background:#f89898}.wei-button-type-primary.wei-button-status-danger:active{background:#e96767}.wei-button-type-primary.wei-button-status-danger:disabled{background:#f9a7a7}.wei-button-type-link.wei-button-status-success{background:#67C23A;color:#67c23a;background:none;border:none}.wei-button-type-link.wei-button-status-info{background:#909399;color:#909399;background:none;border:none}.wei-button-type-link.wei-button-status-warning{background:#E6A23C;color:#e6a23c;background:none;border:none}.wei-button-type-link.wei-button-status-danger{background:#F56C6C;color:#f56c6c;background:none;border:none}.wei-button-type-ghost.wei-button-status-success{background:#67C23A;color:#67c23a;background:#ffffff;border:1px solid #67C23A}.wei-button-type-ghost.wei-button-status-info{background:#909399;color:#909399;background:#ffffff;border:1px solid #909399}.wei-button-type-ghost.wei-button-status-warning{background:#E6A23C;color:#e6a23c;background:#ffffff;border:1px solid #E6A23C}.wei-button-type-ghost.wei-button-status-danger{background:#F56C6C;color:#f56c6c;background:#ffffff;border:1px solid #F56C6C}.wei-button-disabled{background-color:#f7f7fa;cursor:not-allowed}.wei-button-disabled:focus,.wei-button-disabled:hover{background-color:#f7f7fa;outline:none}.wei-button-shape-square{border-radius:6px}.wei-button-shape-circle{border-radius:50%;padding:0}.wei-button-shape-round{border-radius:18px}.wei-button-size-lg{padding:10px 16px;font-size:16px}.wei-button-size-lg.wei-button-loading{padding:4px 8px;font-size:16px}.wei-button-size-md{padding:8px 12px;font-size:14px}.wei-button-size-md.wei-button-loading{padding:3px 6px;pointer-events:none;font-size:14px}.wei-button-size-sm{padding:5px 10px;font-size:14px}.wei-button-size-sm.wei-button-loading{padding:2px 5px;pointer-events:none;font-size:14px}.wei-button-size-xs{padding:2px 8px;font-size:12px}.wei-button-size-xs.wei-button-loading{padding:1px 4px;pointer-events:none;font-size:14px}.wei-button-slot{text-align:center}\n")();
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
  name: "WeiButton",
  props: ButtonProps,
  setup(props, {
    slots
  }) {
    const classString = className(["wei-button", `wei-button-type-${props.type}`, props.disabled ? "wei-button-disabled" : ""]);
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
Button.install = function(app) {
  app.component(Button.name, Button);
  return app;
};
const components = {
  WeiButton: Button
};
const install = function(app) {
  Object.keys(components).forEach((key) => {
    app.use(components[key]);
  });
  return app;
};
var index = {
  install
};
export { components, index as default };
