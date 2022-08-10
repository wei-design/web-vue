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
var index$1 = /* @__PURE__ */ (() => ":export{default:#409EFF;primary:#ffffff;link:#409EFF;ghost:#409EFF;delicate:#8e8e93;primaryColor:#409EFF;successColor:#67C23A;warningColor:#E6A23C;dangerColor:#F56C6C;delicateColor:#8e8e93;white:#ffffff;black:#000000}button{outline:none}.we-button{padding:8px 12px;overflow:hidden;border-radius:6px;border:0;text-align:center;display:inline-block;position:relative;outline:none;font-weight:400;-webkit-appearance:none;user-select:none;cursor:pointer;white-space:nowrap;transition:all .1s linear;box-sizing:border-box}.we-button-type-default{background:#409EFF;color:#409eff;background:transparent;border:1px solid #409EFF}.we-button-type-default:focus,.we-button-type-default:hover{background:#ecf5ff;border:1px solid #66b1ff;color:#409eff}.we-button-type-primary{background:#409EFF;color:#409eff;color:#fff;border:none;color:#fff!important}.we-button-type-primary:focus,.we-button-type-primary:hover{background:#79bbff}.we-button-type-primary:active{background:#3d96f2}.we-button-type-primary:disabled{background:#8cc5ff}.we-button-type-link{background:#409EFF;color:#409eff;background:none;border:none}.we-button-type-ghost{background:#409EFF;color:#409eff;background:#ffffff;border:1px solid #409EFF}.we-button-type-delicate{background:#8e8e93;color:#8e8e93;background:none;border:none}.we-button-type-default.we-button-status-success{background:#67C23A;color:#67c23a;background:transparent;border:1px solid #67C23A}.we-button-type-default.we-button-status-success:focus,.we-button-type-default.we-button-status-success:hover{background:#f0f9eb;border:1px solid #85ce61;color:#67c23a}.we-button-type-default.we-button-status-info{background:#909399;color:#909399;background:transparent;border:1px solid #909399}.we-button-type-default.we-button-status-info:focus,.we-button-type-default.we-button-status-info:hover{background:#f4f4f5;border:1px solid #a6a9ad;color:#909399}.we-button-type-default.we-button-status-warning{background:#E6A23C;color:#e6a23c;background:transparent;border:1px solid #E6A23C}.we-button-type-default.we-button-status-warning:focus,.we-button-type-default.we-button-status-warning:hover{background:#fdf6ec;border:1px solid #ebb563;color:#e6a23c}.we-button-type-default.we-button-status-danger{background:#F56C6C;color:#f56c6c;background:transparent;border:1px solid #F56C6C}.we-button-type-default.we-button-status-danger:focus,.we-button-type-default.we-button-status-danger:hover{background:#fef0f0;border:1px solid #f78989;color:#f56c6c}.we-button-type-primary.we-button-status-success{background:#67C23A;color:#67c23a;border:none;color:#fff}.we-button-type-primary.we-button-status-success:focus,.we-button-type-primary.we-button-status-success:hover{background:#95d475}.we-button-type-primary.we-button-status-success:active{background:#62b837}.we-button-type-primary.we-button-status-success:disabled{background:#a4da89}.we-button-type-primary.we-button-status-info{background:#909399;color:#909399;border:none;color:#fff}.we-button-type-primary.we-button-status-info:focus,.we-button-type-primary.we-button-status-info:hover{background:#b1b3b8}.we-button-type-primary.we-button-status-info:active{background:#898c91}.we-button-type-primary.we-button-status-info:disabled{background:#bcbec2}.we-button-type-primary.we-button-status-warning{background:#E6A23C;color:#e6a23c;border:none;color:#fff}.we-button-type-primary.we-button-status-warning:focus,.we-button-type-primary.we-button-status-warning:hover{background:#eebe77}.we-button-type-primary.we-button-status-warning:active{background:#db9a39}.we-button-type-primary.we-button-status-warning:disabled{background:#f0c78a}.we-button-type-primary.we-button-status-danger{background:#F56C6C;color:#f56c6c;border:none;color:#fff}.we-button-type-primary.we-button-status-danger:focus,.we-button-type-primary.we-button-status-danger:hover{background:#f89898}.we-button-type-primary.we-button-status-danger:active{background:#e96767}.we-button-type-primary.we-button-status-danger:disabled{background:#f9a7a7}.we-button-type-link.we-button-status-success{background:#67C23A;color:#67c23a;background:none;border:none}.we-button-type-link.we-button-status-info{background:#909399;color:#909399;background:none;border:none}.we-button-type-link.we-button-status-warning{background:#E6A23C;color:#e6a23c;background:none;border:none}.we-button-type-link.we-button-status-danger{background:#F56C6C;color:#f56c6c;background:none;border:none}.we-button-type-ghost.we-button-status-success{background:#67C23A;color:#67c23a;background:#ffffff;border:1px solid #67C23A}.we-button-type-ghost.we-button-status-info{background:#909399;color:#909399;background:#ffffff;border:1px solid #909399}.we-button-type-ghost.we-button-status-warning{background:#E6A23C;color:#e6a23c;background:#ffffff;border:1px solid #E6A23C}.we-button-type-ghost.we-button-status-danger{background:#F56C6C;color:#f56c6c;background:#ffffff;border:1px solid #F56C6C}.we-button-disabled{background-color:#f7f7fa;cursor:not-allowed}.we-button-disabled:focus,.we-button-disabled:hover{background-color:#f7f7fa;outline:none}.we-button-shape-square{border-radius:6px}.we-button-shape-circle{border-radius:50%;padding:0}.we-button-shape-round{border-radius:18px}.we-button-size-lg{padding:10px 16px;font-size:16px}.we-button-size-lg.we-button-loading{padding:4px 8px;font-size:16px}.we-button-size-md{padding:8px 12px;font-size:14px}.we-button-size-md.we-button-loading{padding:3px 6px;pointer-events:none;font-size:14px}.we-button-size-sm{padding:5px 10px;font-size:14px}.we-button-size-sm.we-button-loading{padding:2px 5px;pointer-events:none;font-size:14px}.we-button-size-xs{padding:2px 8px;font-size:12px}.we-button-size-xs.we-button-loading{padding:1px 4px;pointer-events:none;font-size:14px}.we-button-slot{text-align:center}\n")();
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
