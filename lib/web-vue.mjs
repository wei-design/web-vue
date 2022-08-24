import { defineComponent as r, openBlock as c, createElementBlock as d, normalizeClass as u, createElementVNode as f, renderSlot as p } from "vue";
const m = Array.isArray, b = (t) => typeof t == "string", y = (t) => t !== null && typeof t == "object";
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
const g = {
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
    default: !1
  },
  loading: {
    type: Boolean,
    default: !1
  }
}, _ = r({
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
}), h = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [e, s] of n)
    o[e] = s;
  return o;
}, S = ["disabled"], $ = { class: "we-button-inner" };
function B(t, n, o, e, s, l) {
  return c(), d("button", {
    class: u([t.classString]),
    disabled: t.disabled || t.loading
  }, [
    f("span", $, [
      p(t.$slots, "default")
    ])
  ], 10, S);
}
const i = /* @__PURE__ */ h(_, [["render", B]]);
i.install = function(t) {
  return t.component(i.name, i), t;
};
const w = [i], j = function(t) {
  w.forEach((n) => {
    t.use(n);
  });
}, A = {
  install: j
};
export {
  i as Button,
  A as default
};
