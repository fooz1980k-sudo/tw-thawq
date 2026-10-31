import { css as _, LitElement as S, html as u } from "lit";
import { property as A, state as L } from "lit/decorators.js";
const M = _`
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
`, x = () => window.Salla, N = async () => {
  var n, t;
  try {
    await ((t = (n = x()) == null ? void 0 : n.onReady) == null ? void 0 : t.call(n));
  } catch {
  }
}, z = (n, t) => (document.documentElement.lang || "ar").startsWith("en") ? t : n, j = (n) => {
  const t = typeof n == "object" && n ? n.amount : n, e = Number(t);
  return Number.isFinite(e) ? e : 0;
}, C = (n) => {
  var t, e;
  try {
    return ((e = (t = x()) == null ? void 0 : t.money) == null ? void 0 : e.call(t, n)) ?? `${n} ${z("ر.س", "SAR")}`;
  } catch {
    return `${n} ${z("ر.س", "SAR")}`;
  }
}, m = (n) => String(n && typeof n == "object" ? n[(document.documentElement.lang || "ar").slice(0, 2)] ?? n.ar ?? "" : n ?? "");
async function g() {
  var t, e, i, a, r, c;
  await N();
  const n = x();
  try {
    const s = await (((i = (e = (t = n == null ? void 0 : n.cart) == null ? void 0 : t.api) == null ? void 0 : e.details) == null ? void 0 : i.call(e)) ?? ((r = (a = n == null ? void 0 : n.cart) == null ? void 0 : a.details) == null ? void 0 : r.call(a))), o = ((c = s == null ? void 0 : s.data) == null ? void 0 : c.cart) ?? (s == null ? void 0 : s.data) ?? s, l = j((o == null ? void 0 : o.sub_total) ?? (o == null ? void 0 : o.total) ?? (o == null ? void 0 : o.total_price));
    if (l || l === 0) return l;
  } catch {
  }
  return null;
}
function R(n) {
  var a, r, c, s, o, l, b, y, h, k;
  const t = x(), e = (d) => {
    var $;
    const f = (($ = d == null ? void 0 : d.data) == null ? void 0 : $.cart) ?? (d == null ? void 0 : d.cart) ?? d, w = f && (f.sub_total ?? f.total) != null ? j(f.sub_total ?? f.total) : null;
    w != null ? n(w) : g().then(n);
  };
  try {
    (c = (r = (a = t == null ? void 0 : t.cart) == null ? void 0 : a.event) == null ? void 0 : r.onUpdated) == null || c.call(r, e), (l = (o = (s = t == null ? void 0 : t.cart) == null ? void 0 : s.event) == null ? void 0 : o.onItemAdded) == null || l.call(o, e);
  } catch {
  }
  try {
    (y = (b = t == null ? void 0 : t.event) == null ? void 0 : b.on) == null || y.call(b, "cart::updated", e), (k = (h = t == null ? void 0 : t.event) == null ? void 0 : h.on) == null || k.call(h, "cart::item.added", e);
  } catch {
  }
  const i = () => {
    g().then(n);
  };
  return window.addEventListener("focus", i), () => window.removeEventListener("focus", i);
}
const X = (n) => n ? `--tf-custom:${n}` : "";
var O = Object.defineProperty, E = (n, t, e, i) => {
  for (var a = void 0, r = n.length - 1, c; r >= 0; r--)
    (c = n[r]) && (a = c(t, e, a) || a);
  return a && O(t, e, a), a;
};
const v = class v extends S {
  constructor() {
    super(...arguments), this.total = null;
  }
  connectedCallback() {
    super.connectedCallback(), g().then((t) => this.total = t), this.off = R((t) => this.total = t);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this.off) == null || t.call(this);
  }
  render() {
    const t = this.config ?? {}, e = Math.max(1, Number(t.threshold ?? 300)), i = this.total ?? 0, a = Math.max(0, e - i), r = a === 0;
    return u`<div class="wrap" style="padding-block:16px;${X(t.color)}"><div class="b dark ${r ? "ok" : ""}" role="status">
      <span class="ic"><span class="truck">${r ? "🎉" : "🚚"}</span></span>
      <div><p>${r ? u`<b>${m(t.done) || "مبروك! طلبك صار شحنه مجاني"}</b>` : i > 0 ? u`باقي <b>${C(a)}</b> و${m(t.reward) || "يصير الشحن مجاني"}` : u`${m(t.reward) || "الشحن مجاني"} للطلبات فوق <b>${C(e)}</b>`}</p>
        <div class="tr" aria-hidden="true"><div class="fl" style="width:${Math.min(100, i / e * 100)}%"></div></div></div>
      ${!r && m(t.button) && t.link ? u`<a class="btn" href=${t.link}>${m(t.button)}</a>` : ""}</div></div>`;
  }
};
v.styles = [M, _`
    .b { border-radius: 22px; padding: 18px 22px; display: grid; grid-template-columns: auto 1fr auto; gap: 18px; align-items: center; }
    @media (max-width: 640px) { .b { grid-template-columns: auto 1fr; } .b .btn { grid-column: 1 / -1; justify-content: center; } }
    .ic { width: 54px; height: 54px; border-radius: 16px; display: grid; place-items: center; font-size: 26px; background: color-mix(in srgb, var(--tf-accent) 18%, transparent); }
    .truck { display: inline-block; animation: drive 2.4s ease-in-out infinite; } @keyframes drive { 50% { transform: translateX(-4px); } }
    p { margin: 0 0 10px; font-size: 15px; } p b { color: var(--tf-accent); }
    .tr { height: 10px; border-radius: 99px; background: #ffffff1a; overflow: hidden; position: relative; } .fl { height: 100%; border-radius: inherit; background: var(--tf-gold); transition: width .8s cubic-bezier(.2,.8,.2,1); position: relative; overflow: hidden; }
    .fl::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, transparent, #fff8, transparent); animation: sh 2s infinite; } @keyframes sh { from { transform: translateX(100%); } to { transform: translateX(-100%); } }
    .ok .ic { background: #2fbf7130; }
  `];
let p = v;
E([
  A({ type: Object })
], p.prototype, "config");
E([
  L()
], p.prototype, "total");
typeof p < "u" && p.registerSallaComponent("salla-thawq-shipping");
export {
  p as default
};
