import {
  createBaseVNode,
  createElementBlock,
  defineComponent,
  normalizeClass,
  openBlock,
  renderSlot
} from "./chunk-7X7VTB6Z.js";

// node_modules/.pnpm/@wei_design+web-vue@1.0.0_vue@3.2.37/node_modules/@wei_design/web-vue/lib/web-vue.mjs
var m = Array.isArray;
var b = (t) => typeof t == "string";
var y = (t) => t !== null && typeof t == "object";
function a(...t) {
  const n = [];
  for (let o = 0; o < t.length; o++) {
    const e = t[o];
    if (!!e) {
      if (b(e))
        n.push(e);
      else if (m(e))
        for (let s = 0; s < e.length; s++) {
          const l = a(e[s]);
          l && n.push(l);
        }
      else if (y(e))
        for (const s in e)
          e[s] && n.push(s);
    }
  }
  return n.join(" ");
}
var g = {
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
var _ = defineComponent({
  name: "WeButton",
  props: g,
  setup(t) {
    return {
      classString: a([
        "we-button",
        `we-button-type-${t.type}`,
        t.disabled ? "we-button-disabled" : ""
      ])
    };
  }
});
var h = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [e, s] of n)
    o[e] = s;
  return o;
};
var S = ["disabled"];
var $ = { class: "we-button-inner" };
function B(t, n, o, e, s, l) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass([t.classString]),
    disabled: t.disabled || t.loading
  }, [
    createBaseVNode("span", $, [
      renderSlot(t.$slots, "default")
    ])
  ], 10, S);
}
var i = h(_, [["render", B]]);
i.install = function(t) {
  return t.component(i.name, i), t;
};
var w = [i];
var j = function(t) {
  w.forEach((n) => {
    t.use(n);
  });
};
var A = {
  install: j
};
export {
  i as Button,
  A as default
};
//# sourceMappingURL=@wei_design_web-vue.js.map
