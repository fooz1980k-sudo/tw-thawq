import { css as g, html as o, LitElement as w } from "lit";
import { property as $, state as m } from "lit/decorators.js";
const z = g`
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
`, f = () => window.Salla, v = async () => {
  var t, e;
  try {
    await ((e = (t = f()) == null ? void 0 : t.onReady) == null ? void 0 : e.call(t));
  } catch {
  }
}, x = (t, e) => (document.documentElement.lang || "ar").startsWith("en") ? e : t, l = (t) => {
  const e = typeof t == "object" && t ? t.amount : t, i = Number(e);
  return Number.isFinite(i) ? i : 0;
};
function q(t) {
  var a, n, r, s, c, b;
  const e = l(t == null ? void 0 : t.sale_price) && l(t == null ? void 0 : t.sale_price) < l((t == null ? void 0 : t.regular_price) ?? (t == null ? void 0 : t.price)) ? l(t == null ? void 0 : t.sale_price) : l(t == null ? void 0 : t.price), i = Math.max(l(t == null ? void 0 : t.regular_price), l(t == null ? void 0 : t.price), e);
  return {
    id: Number(t == null ? void 0 : t.id),
    name: String((t == null ? void 0 : t.name) ?? ""),
    url: String((t == null ? void 0 : t.url) ?? "#"),
    image: String(((a = t == null ? void 0 : t.image) == null ? void 0 : a.url) ?? (t == null ? void 0 : t.main_image) ?? (t == null ? void 0 : t.thumbnail) ?? ((r = (n = t == null ? void 0 : t.images) == null ? void 0 : n[0]) == null ? void 0 : r.url) ?? ""),
    price: e,
    regular: i,
    rating: l(((s = t == null ? void 0 : t.rating) == null ? void 0 : s.stars) ?? ((c = t == null ? void 0 : t.rating) == null ? void 0 : c.rate) ?? (t == null ? void 0 : t.rating)),
    ratingCount: l((b = t == null ? void 0 : t.rating) == null ? void 0 : b.count),
    qty: (t == null ? void 0 : t.quantity) == null || t != null && t.unlimited_quantity ? null : l(t == null ? void 0 : t.quantity),
    available: (t == null ? void 0 : t.is_available) !== !1 && (t == null ? void 0 : t.status) !== "out"
  };
}
const k = (t) => (Array.isArray(t) ? t : []).map((e) => Number(typeof e == "object" && e ? e.value : e)).filter((e) => Number.isFinite(e) && e > 0);
async function _(t) {
  return await v(), (await Promise.all(k(t).map((i) => {
    var a, n, r, s;
    return (s = (r = (n = (a = f()) == null ? void 0 : a.product) == null ? void 0 : n.api) == null ? void 0 : r.getDetails) == null ? void 0 : s.call(r, i).then((c) => q(c == null ? void 0 : c.data)).catch(() => null);
  }))).filter((i) => !!i && !!i.name);
}
const y = (t) => {
  var e, i;
  try {
    return ((i = (e = f()) == null ? void 0 : e.money) == null ? void 0 : i.call(e, t)) ?? `${t} ${x("ر.س", "SAR")}`;
  } catch {
    return `${t} ${x("ر.س", "SAR")}`;
  }
};
async function j(t) {
  var e, i, a;
  await v();
  try {
    await ((a = (i = (e = f()) == null ? void 0 : e.cart) == null ? void 0 : i.addItem) == null ? void 0 : a.call(i, { id: t, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${t}`;
  }
}
function S(t) {
  var e, i;
  try {
    (i = (e = f()) == null ? void 0 : e.success) == null || i.call(e, t);
  } catch {
  }
}
const N = () => {
  var t, e, i, a, n;
  try {
    const r = ((e = (t = f()) == null ? void 0 : t.lang) == null ? void 0 : e.locale) ?? ((n = (a = (i = f()) == null ? void 0 : i.config) == null ? void 0 : a.get) == null ? void 0 : n.call(a, "user.language_code"));
    if (typeof r == "string" && r) return r.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, p = (t) => {
  if (t == null) return "";
  if (typeof t == "string") {
    const e = t.trim();
    if (e.startsWith("{") && e.endsWith("}"))
      try {
        return p(JSON.parse(e));
      } catch {
      }
    return t;
  }
  if (typeof t == "number" || typeof t == "boolean") return String(t);
  if (typeof t == "object") {
    const e = t, i = e[N()] ?? e.ar ?? e.en ?? Object.values(e).find((a) => typeof a == "string" && a);
    return typeof i == "string" ? i : "";
  }
  return "";
}, C = (t) => t ? `--tf-custom:${t}` : "", A = g`
  .pc { display: flex; flex-direction: column; border-radius: 20px; overflow: hidden; background: #fff; color: #1b1408; border: 1px solid #0000000d; transition: transform .35s, box-shadow .35s; position: relative; }
  .pc:hover { transform: translateY(-6px); box-shadow: 0 24px 50px -24px #0006; }
  .pc .ph { aspect-ratio: 1; overflow: hidden; background: #f3eee4; display: block; } .pc .ph img { width: 100%; height: 100%; object-fit: cover; transition: transform .8s; }
  .pc:hover .ph img { transform: scale(1.07); }
  .pc .bd { padding: 14px 14px 16px; display: grid; gap: 6px; flex: 1; }
  .pc .nm { font-weight: 700; font-size: 15px; line-height: 1.5; color: inherit; text-decoration: none; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .pc .pr { display: flex; gap: 8px; align-items: baseline; flex-wrap: wrap; } .pc .pr b { color: var(--tf-accent); font-size: 17px; } .pc .pr s { opacity: .45; font-size: 13px; }
  .pc .add { margin-top: auto; justify-content: center; padding: 10px 16px; font-size: 14px; }
  .pc .add[disabled] { opacity: .45; cursor: not-allowed; transform: none; box-shadow: none; }
  .pc .tag { position: absolute; top: 12px; inset-inline-start: 12px; z-index: 1; font-size: 12px; font-weight: 800; padding: 5px 10px; border-radius: 999px; background: var(--tf-accent); color: #fff; }
`, O = (t, e = "") => o`<article class="pc">${e ? o`<span class="tag">${e}</span>` : ""}
  <a class="ph" href=${t.url}><img src=${t.image} alt=${t.name} loading="lazy" /></a>
  <div class="bd"><a class="nm" href=${t.url}>${t.name}</a>
    <div class="pr"><b>${y(t.price)}</b>${t.regular > t.price ? o`<s>${y(t.regular)}</s>` : ""}</div>
    <button class="btn add" ?disabled=${!t.available} @click=${async () => {
  await j(t.id), S("أُضيف للسلة ✓");
}}>${t.available ? "أضف للسلة" : "غير متوفر"}</button></div></article>`;
var Y = Object.defineProperty, u = (t, e, i, a) => {
  for (var n = void 0, r = t.length - 1, s; r >= 0; r--)
    (s = t[r]) && (n = s(e, i, n) || n);
  return n && Y(e, i, n), n;
};
const h = class h extends w {
  constructor() {
    super(...arguments), this.step = 0, this.picks = [], this.res = null;
  }
  qs() {
    const e = this.config ?? {};
    return [e.q1, e.q2, e.q3].map((i) => p(i)).map((i, a) => ({ q: i, i: a + 1, o: (e.options ?? []).filter((n) => Number(n.step ?? 1) === a + 1 && p(n.label)) })).filter((i) => i.q && i.o.length);
  }
  async pick(e) {
    var r;
    this.picks = [...this.picks, e];
    const i = this.qs();
    if (this.step + 1 < i.length) {
      this.step++;
      return;
    }
    this.step = i.length, this.res = null;
    const a = /* @__PURE__ */ new Map();
    for (const s of this.picks) for (const c of k(s.products)) a.set(c, (a.get(c) ?? 0) + 1);
    const n = await _([...a.keys()].map((s) => ({ value: s })));
    this.res = n.filter((s) => s.available).sort((s, c) => a.get(c.id) - a.get(s.id) || c.rating - s.rating).slice(0, ((r = this.config) == null ? void 0 : r.results) ?? 4);
  }
  reset() {
    this.step = 0, this.picks = [], this.res = null;
  }
  render() {
    const e = this.config ?? {}, i = this.qs();
    if (!i.length) return o`<div class="wrap"><p class="sub">أضف الأسئلة والخيارات من إعدادات العنصر.</p></div>`;
    const a = this.step >= i.length, n = i[this.step];
    return o`<div class="wrap" style=${C(e.color)}><div class="box dark"><span class="eyebrow">🧭 مساعد الاختيار</span><h2 class="title">${p(e.title) || "محتار؟ نختار معك في 3 خطوات"}</h2>
      <div class="prog">${i.map((r, s) => o`<i class=${s <= this.step ? "on" : ""}></i>`)}</div>
      ${a ? o`<h3>اخترنا لك هذي 👌</h3><p class="why">بناءً على: ${this.picks.map((r) => p(r.label)).join(" · ")}</p>
          <div class="res">${this.res === null ? o`<div class="skel" style="height:300px"></div>` : this.res.length ? this.res.map((r, s) => O(r, s === 0 ? "الأنسب لك" : "")) : o`<p>ما لقينا تطابق، جرّب خيارات ثانية.</p>`}</div>
          <button class="back" @click=${this.reset}>↺ ابدأ من جديد</button>` : o`${o`<h3>${n.q}</h3>`}<div class="opts">${n.o.map((r, s) => o`<button class="o" style="animation-delay:${s * 0.06}s" @click=${() => this.pick(r)}><span>${r.emoji || "✨"}</span><b>${p(r.label)}</b></button>`)}</div>
          ${this.step ? o`<button class="back" @click=${() => {
      this.step--, this.picks = this.picks.slice(0, -1);
    }}>→ رجوع</button>` : ""}`}</div></div>`;
  }
};
h.styles = [z, A, g`
    .box { border-radius: 30px; padding: clamp(24px, 5vw, 56px); text-align: center; position: relative; overflow: hidden; }
    .prog { display: flex; gap: 8px; justify-content: center; margin-bottom: 26px; } .prog i { width: 46px; height: 5px; border-radius: 9px; background: #ffffff22; transition: background .4s; } .prog i.on { background: var(--tf-accent); }
    h3 { font-size: clamp(22px, 3.4vw, 34px); margin: 0 0 26px; animation: up .5s both; } @keyframes up { from { opacity: 0; transform: translateY(14px); } }
    .opts { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 14px; max-width: 880px; margin: 0 auto; }
    .o { all: unset; cursor: pointer; padding: 22px 14px; border-radius: 22px; background: #ffffff0d; border: 1px solid #ffffff1c; display: grid; gap: 10px; justify-items: center; transition: transform .3s, border-color .3s, background .3s; animation: up .5s both; }
    .o:hover, .o:focus-visible { transform: translateY(-4px); border-color: var(--tf-accent); background: color-mix(in srgb, var(--tf-accent) 16%, transparent); }
    .o span { font-size: 38px; } .o b { font-size: 16px; }
    .back { margin-top: 22px; background: none; border: 0; color: inherit; opacity: .6; cursor: pointer; font: inherit; }
    .res { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 16px; text-align: start; margin-top: 10px; }
    .why { opacity: .7; margin: -12px 0 24px; }
  `];
let d = h;
u([
  $({ type: Object })
], d.prototype, "config");
u([
  m()
], d.prototype, "step");
u([
  m()
], d.prototype, "picks");
u([
  m()
], d.prototype, "res");
typeof d < "u" && d.registerSallaComponent("salla-thawq-quiz");
export {
  d as default
};
