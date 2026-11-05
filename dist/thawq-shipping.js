import { css as _, LitElement as E, html as b } from "lit";
import { property as L, state as N } from "lit/decorators.js";
const O = _`
  :host { display: block; --tf-accent: var(--tf-custom, var(--color-primary, #c9a45c)); --tf-ink: #0f0c18; --tf-ivory: #f6f1e7; --tf-mut: #a59bc2;
    --tf-gold: linear-gradient(135deg, #f5d68a, #c9a45c 55%, #9a7634); font-family: inherit; direction: inherit; }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .wrap { max-width: 1240px; margin: 0 auto; padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 32px); }
  .eyebrow { display: inline-block; letter-spacing: .28em; font-size: 12px; text-transform: uppercase; color: var(--tf-accent); margin-bottom: 10px; }
  h2.title { margin: 0 0 8px; font-size: clamp(24px, 3.4vw, 40px); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0 0 28px; opacity: .7; font-size: clamp(14px, 1.6vw, 17px); line-height: 1.8; }
  .btn { display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 26px; border-radius: 999px; background: var(--tf-accent); color: #fff; transition: transform .25s, box-shadow .25s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--tf-accent); }
  .btn.ghost { background: transparent; color: inherit; border: 1px solid currentColor; }
  .dark { background: radial-gradient(1000px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18; color: var(--tf-ivory); }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: 14px; }
  @keyframes sk { to { background-position: -200% 0; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
`, f = () => window.Salla, A = async () => {
  var e, t;
  try {
    await ((t = (e = f()) == null ? void 0 : e.onReady) == null ? void 0 : t.call(e));
  } catch {
  }
}, z = (e, t) => (document.documentElement.lang || "ar").startsWith("en") ? t : e, j = (e) => {
  const t = typeof e == "object" && e ? e.amount : e, n = Number(t);
  return Number.isFinite(n) ? n : 0;
}, C = (e) => {
  var t, n;
  try {
    return ((n = (t = f()) == null ? void 0 : t.money) == null ? void 0 : n.call(t, e)) ?? `${e} ${z("ر.س", "SAR")}`;
  } catch {
    return `${e} ${z("ر.س", "SAR")}`;
  }
}, M = () => {
  var e, t, n, o, r;
  try {
    const a = ((t = (e = f()) == null ? void 0 : e.lang) == null ? void 0 : t.locale) ?? ((r = (o = (n = f()) == null ? void 0 : n.config) == null ? void 0 : o.get) == null ? void 0 : r.call(o, "user.language_code"));
    if (typeof a == "string" && a) return a.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, p = (e) => {
  if (e == null) return "";
  if (typeof e == "string") {
    const t = e.trim();
    if (t.startsWith("{") && t.endsWith("}"))
      try {
        return p(JSON.parse(t));
      } catch {
      }
    return e;
  }
  if (typeof e == "number" || typeof e == "boolean") return String(e);
  if (typeof e == "object") {
    const t = e, n = t[M()] ?? t.ar ?? t.en ?? Object.values(t).find((o) => typeof o == "string" && o);
    return typeof n == "string" ? n : "";
  }
  return "";
};
async function x() {
  var t, n, o, r, a, c;
  await A();
  const e = f();
  try {
    const s = await (((o = (n = (t = e == null ? void 0 : e.cart) == null ? void 0 : t.api) == null ? void 0 : n.details) == null ? void 0 : o.call(n)) ?? ((a = (r = e == null ? void 0 : e.cart) == null ? void 0 : r.details) == null ? void 0 : a.call(r))), i = ((c = s == null ? void 0 : s.data) == null ? void 0 : c.cart) ?? (s == null ? void 0 : s.data) ?? s, l = j((i == null ? void 0 : i.sub_total) ?? (i == null ? void 0 : i.total) ?? (i == null ? void 0 : i.total_price));
    if (l || l === 0) return l;
  } catch {
  }
  return null;
}
function R(e) {
  var r, a, c, s, i, l, g, k, h, v;
  const t = f(), n = (d) => {
    var $;
    const m = (($ = d == null ? void 0 : d.data) == null ? void 0 : $.cart) ?? (d == null ? void 0 : d.cart) ?? d, w = m && (m.sub_total ?? m.total) != null ? j(m.sub_total ?? m.total) : null;
    w != null ? e(w) : x().then(e);
  };
  try {
    (c = (a = (r = t == null ? void 0 : t.cart) == null ? void 0 : r.event) == null ? void 0 : a.onUpdated) == null || c.call(a, n), (l = (i = (s = t == null ? void 0 : t.cart) == null ? void 0 : s.event) == null ? void 0 : i.onItemAdded) == null || l.call(i, n);
  } catch {
  }
  try {
    (k = (g = t == null ? void 0 : t.event) == null ? void 0 : g.on) == null || k.call(g, "cart::updated", n), (v = (h = t == null ? void 0 : t.event) == null ? void 0 : h.on) == null || v.call(h, "cart::item.added", n);
  } catch {
  }
  const o = () => {
    x().then(e);
  };
  return window.addEventListener("focus", o), () => window.removeEventListener("focus", o);
}
const W = (e) => e ? `--tf-custom:${e}` : "";
var X = Object.defineProperty, S = (e, t, n, o) => {
  for (var r = void 0, a = e.length - 1, c; a >= 0; a--)
    (c = e[a]) && (r = c(t, n, r) || r);
  return r && X(t, n, r), r;
};
const y = class y extends E {
  constructor() {
    super(...arguments), this.total = null;
  }
  connectedCallback() {
    super.connectedCallback(), x().then((t) => this.total = t), this.off = R((t) => this.total = t);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this.off) == null || t.call(this);
  }
  render() {
    const t = this.config ?? {}, n = Math.max(1, Number(t.threshold ?? 300)), o = this.total ?? 0, r = Math.max(0, n - o), a = r === 0;
    return b`<div class="wrap" style="padding-block:16px;${W(t.color)}"><div class="b dark ${a ? "ok" : ""}" role="status">
      <span class="ic"><span class="truck">${a ? "🎉" : "🚚"}</span></span>
      <div><p>${a ? b`<b>${p(t.done) || "مبروك! طلبك صار شحنه مجاني"}</b>` : o > 0 ? b`باقي <b>${C(r)}</b> و${p(t.reward) || "يصير الشحن مجاني"}` : b`${p(t.reward) || "الشحن مجاني"} للطلبات فوق <b>${C(n)}</b>`}</p>
        <div class="tr" aria-hidden="true"><div class="fl" style="width:${Math.min(100, o / n * 100)}%"></div></div></div>
      ${!a && p(t.button) && t.link ? b`<a class="btn" href=${t.link}>${p(t.button)}</a>` : ""}</div></div>`;
  }
};
y.styles = [O, _`
    .b { border-radius: 22px; padding: 18px 22px; display: grid; grid-template-columns: auto 1fr auto; gap: 18px; align-items: center; }
    @media (max-width: 640px) { .b { grid-template-columns: auto 1fr; } .b .btn { grid-column: 1 / -1; justify-content: center; } }
    .ic { width: 54px; height: 54px; border-radius: 16px; display: grid; place-items: center; font-size: 26px; background: color-mix(in srgb, var(--tf-accent) 18%, transparent); }
    .truck { display: inline-block; animation: drive 2.4s ease-in-out infinite; } @keyframes drive { 50% { transform: translateX(-4px); } }
    p { margin: 0 0 10px; font-size: 15px; } p b { color: var(--tf-accent); }
    .tr { height: 10px; border-radius: 99px; background: #ffffff1a; overflow: hidden; position: relative; } .fl { height: 100%; border-radius: inherit; background: var(--tf-gold); transition: width .8s cubic-bezier(.2,.8,.2,1); position: relative; overflow: hidden; }
    .fl::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, transparent, #fff8, transparent); animation: sh 2s infinite; } @keyframes sh { from { transform: translateX(100%); } to { transform: translateX(-100%); } }
    .ok .ic { background: #2fbf7130; }
  `];
let u = y;
S([
  L({ type: Object })
], u.prototype, "config");
S([
  N()
], u.prototype, "total");
typeof u < "u" && u.registerSallaComponent("salla-thawq-shipping");
export {
  u as default
};
