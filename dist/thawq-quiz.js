import { css as g, html as o, LitElement as w } from "lit";
import { property as $, state as m } from "lit/decorators.js";
const q = g`
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
`, p = () => window.Salla, v = async () => {
  var t, a;
  try {
    await ((a = (t = p()) == null ? void 0 : t.onReady) == null ? void 0 : a.call(t));
  } catch {
  }
}, x = (t, a) => (document.documentElement.lang || "ar").startsWith("en") ? a : t, l = (t) => {
  const a = typeof t == "object" && t ? t.amount : t, i = Number(a);
  return Number.isFinite(i) ? i : 0;
};
function z(t) {
  var n, s, e, r, c, b;
  const a = l(t == null ? void 0 : t.sale_price) && l(t == null ? void 0 : t.sale_price) < l((t == null ? void 0 : t.regular_price) ?? (t == null ? void 0 : t.price)) ? l(t == null ? void 0 : t.sale_price) : l(t == null ? void 0 : t.price), i = Math.max(l(t == null ? void 0 : t.regular_price), l(t == null ? void 0 : t.price), a);
  return {
    id: Number(t == null ? void 0 : t.id),
    name: String((t == null ? void 0 : t.name) ?? ""),
    url: String((t == null ? void 0 : t.url) ?? "#"),
    image: String(((n = t == null ? void 0 : t.image) == null ? void 0 : n.url) ?? (t == null ? void 0 : t.main_image) ?? (t == null ? void 0 : t.thumbnail) ?? ((e = (s = t == null ? void 0 : t.images) == null ? void 0 : s[0]) == null ? void 0 : e.url) ?? ""),
    price: a,
    regular: i,
    rating: l(((r = t == null ? void 0 : t.rating) == null ? void 0 : r.stars) ?? ((c = t == null ? void 0 : t.rating) == null ? void 0 : c.rate) ?? (t == null ? void 0 : t.rating)),
    ratingCount: l((b = t == null ? void 0 : t.rating) == null ? void 0 : b.count),
    qty: (t == null ? void 0 : t.quantity) == null || t != null && t.unlimited_quantity ? null : l(t == null ? void 0 : t.quantity),
    available: (t == null ? void 0 : t.is_available) !== !1 && (t == null ? void 0 : t.status) !== "out"
  };
}
const k = (t) => (Array.isArray(t) ? t : []).map((a) => Number(typeof a == "object" && a ? a.value : a)).filter((a) => Number.isFinite(a) && a > 0);
async function _(t) {
  return await v(), (await Promise.all(k(t).map((i) => {
    var n, s, e, r;
    return (r = (e = (s = (n = p()) == null ? void 0 : n.product) == null ? void 0 : s.api) == null ? void 0 : e.getDetails) == null ? void 0 : r.call(e, i).then((c) => z(c == null ? void 0 : c.data)).catch(() => null);
  }))).filter((i) => !!i && !!i.name);
}
const y = (t) => {
  var a, i;
  try {
    return ((i = (a = p()) == null ? void 0 : a.money) == null ? void 0 : i.call(a, t)) ?? `${t} ${x("ر.س", "SAR")}`;
  } catch {
    return `${t} ${x("ر.س", "SAR")}`;
  }
};
async function j(t) {
  var a, i, n;
  await v();
  try {
    await ((n = (i = (a = p()) == null ? void 0 : a.cart) == null ? void 0 : i.addItem) == null ? void 0 : n.call(i, { id: t, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${t}`;
  }
}
function S(t) {
  var a, i;
  try {
    (i = (a = p()) == null ? void 0 : a.success) == null || i.call(a, t);
  } catch {
  }
}
const f = (t) => String(t && typeof t == "object" ? t[(document.documentElement.lang || "ar").slice(0, 2)] ?? t.ar ?? "" : t ?? ""), C = (t) => t ? `--tf-custom:${t}` : "", N = g`
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
`, A = (t, a = "") => o`<article class="pc">${a ? o`<span class="tag">${a}</span>` : ""}
  <a class="ph" href=${t.url}><img src=${t.image} alt=${t.name} loading="lazy" /></a>
  <div class="bd"><a class="nm" href=${t.url}>${t.name}</a>
    <div class="pr"><b>${y(t.price)}</b>${t.regular > t.price ? o`<s>${y(t.regular)}</s>` : ""}</div>
    <button class="btn add" ?disabled=${!t.available} @click=${async () => {
  await j(t.id), S("أُضيف للسلة ✓");
}}>${t.available ? "أضف للسلة" : "غير متوفر"}</button></div></article>`;
var Y = Object.defineProperty, u = (t, a, i, n) => {
  for (var s = void 0, e = t.length - 1, r; e >= 0; e--)
    (r = t[e]) && (s = r(a, i, s) || s);
  return s && Y(a, i, s), s;
};
const h = class h extends w {
  constructor() {
    super(...arguments), this.step = 0, this.picks = [], this.res = null;
  }
  qs() {
    const a = this.config ?? {};
    return [a.q1, a.q2, a.q3].map(f).map((i, n) => ({ q: i, i: n + 1, o: (a.options ?? []).filter((s) => Number(s.step ?? 1) === n + 1 && f(s.label)) })).filter((i) => i.q && i.o.length);
  }
  async pick(a) {
    var e;
    this.picks = [...this.picks, a];
    const i = this.qs();
    if (this.step + 1 < i.length) {
      this.step++;
      return;
    }
    this.step = i.length, this.res = null;
    const n = /* @__PURE__ */ new Map();
    for (const r of this.picks) for (const c of k(r.products)) n.set(c, (n.get(c) ?? 0) + 1);
    const s = await _([...n.keys()].map((r) => ({ value: r })));
    this.res = s.filter((r) => r.available).sort((r, c) => n.get(c.id) - n.get(r.id) || c.rating - r.rating).slice(0, ((e = this.config) == null ? void 0 : e.results) ?? 4);
  }
  reset() {
    this.step = 0, this.picks = [], this.res = null;
  }
  render() {
    const a = this.config ?? {}, i = this.qs();
    if (!i.length) return o`<div class="wrap"><p class="sub">أضف الأسئلة والخيارات من إعدادات العنصر.</p></div>`;
    const n = this.step >= i.length, s = i[this.step];
    return o`<div class="wrap" style=${C(a.color)}><div class="box dark"><span class="eyebrow">🧭 مساعد الاختيار</span><h2 class="title">${f(a.title) || "محتار؟ نختار معك في 3 خطوات"}</h2>
      <div class="prog">${i.map((e, r) => o`<i class=${r <= this.step ? "on" : ""}></i>`)}</div>
      ${n ? o`<h3>اخترنا لك هذي 👌</h3><p class="why">بناءً على: ${this.picks.map((e) => f(e.label)).join(" · ")}</p>
          <div class="res">${this.res === null ? o`<div class="skel" style="height:300px"></div>` : this.res.length ? this.res.map((e, r) => A(e, r === 0 ? "الأنسب لك" : "")) : o`<p>ما لقينا تطابق، جرّب خيارات ثانية.</p>`}</div>
          <button class="back" @click=${this.reset}>↺ ابدأ من جديد</button>` : o`${o`<h3>${s.q}</h3>`}<div class="opts">${s.o.map((e, r) => o`<button class="o" style="animation-delay:${r * 0.06}s" @click=${() => this.pick(e)}><span>${e.emoji || "✨"}</span><b>${f(e.label)}</b></button>`)}</div>
          ${this.step ? o`<button class="back" @click=${() => {
      this.step--, this.picks = this.picks.slice(0, -1);
    }}>→ رجوع</button>` : ""}`}</div></div>`;
  }
};
h.styles = [q, N, g`
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
