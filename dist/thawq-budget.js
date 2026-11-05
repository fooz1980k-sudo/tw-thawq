import { css as b, html as l, LitElement as v } from "lit";
import { property as $, state as y } from "lit/decorators.js";
const k = b`
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
`, c = () => window.Salla, w = async () => {
  var t, a;
  try {
    await ((a = (t = c()) == null ? void 0 : t.onReady) == null ? void 0 : a.call(t));
  } catch {
  }
}, p = (t, a) => (document.documentElement.lang || "ar").startsWith("en") ? a : t, s = (t) => {
  const a = typeof t == "object" && t ? t.amount : t, e = Number(a);
  return Number.isFinite(e) ? e : 0;
};
function z(t) {
  var r, n, i, o, f, h;
  const a = s(t == null ? void 0 : t.sale_price) && s(t == null ? void 0 : t.sale_price) < s((t == null ? void 0 : t.regular_price) ?? (t == null ? void 0 : t.price)) ? s(t == null ? void 0 : t.sale_price) : s(t == null ? void 0 : t.price), e = Math.max(s(t == null ? void 0 : t.regular_price), s(t == null ? void 0 : t.price), a);
  return {
    id: Number(t == null ? void 0 : t.id),
    name: String((t == null ? void 0 : t.name) ?? ""),
    url: String((t == null ? void 0 : t.url) ?? "#"),
    image: String(((r = t == null ? void 0 : t.image) == null ? void 0 : r.url) ?? (t == null ? void 0 : t.main_image) ?? (t == null ? void 0 : t.thumbnail) ?? ((i = (n = t == null ? void 0 : t.images) == null ? void 0 : n[0]) == null ? void 0 : i.url) ?? ""),
    price: a,
    regular: e,
    rating: s(((o = t == null ? void 0 : t.rating) == null ? void 0 : o.stars) ?? ((f = t == null ? void 0 : t.rating) == null ? void 0 : f.rate) ?? (t == null ? void 0 : t.rating)),
    ratingCount: s((h = t == null ? void 0 : t.rating) == null ? void 0 : h.count),
    qty: (t == null ? void 0 : t.quantity) == null || t != null && t.unlimited_quantity ? null : s(t == null ? void 0 : t.quantity),
    available: (t == null ? void 0 : t.is_available) !== !1 && (t == null ? void 0 : t.status) !== "out"
  };
}
const _ = (t) => (Array.isArray(t) ? t : []).map((a) => Number(typeof a == "object" && a ? a.value : a)).filter((a) => Number.isFinite(a) && a > 0);
async function S(t) {
  return await w(), (await Promise.all(_(t).map((e) => {
    var r, n, i, o;
    return (o = (i = (n = (r = c()) == null ? void 0 : r.product) == null ? void 0 : n.api) == null ? void 0 : i.getDetails) == null ? void 0 : o.call(i, e).then((f) => z(f == null ? void 0 : f.data)).catch(() => null);
  }))).filter((e) => !!e && !!e.name);
}
const m = (t) => {
  var a, e;
  try {
    return ((e = (a = c()) == null ? void 0 : a.money) == null ? void 0 : e.call(a, t)) ?? `${t} ${p("ر.س", "SAR")}`;
  } catch {
    return `${t} ${p("ر.س", "SAR")}`;
  }
};
async function N(t) {
  var a, e, r;
  await w();
  try {
    await ((r = (e = (a = c()) == null ? void 0 : a.cart) == null ? void 0 : e.addItem) == null ? void 0 : r.call(e, { id: t, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${t}`;
  }
}
function j(t) {
  var a, e;
  try {
    (e = (a = c()) == null ? void 0 : a.success) == null || e.call(a, t);
  } catch {
  }
}
const q = () => {
  var t, a, e, r, n;
  try {
    const i = ((a = (t = c()) == null ? void 0 : t.lang) == null ? void 0 : a.locale) ?? ((n = (r = (e = c()) == null ? void 0 : e.config) == null ? void 0 : r.get) == null ? void 0 : n.call(r, "user.language_code"));
    if (typeof i == "string" && i) return i.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, u = (t) => {
  if (t == null) return "";
  if (typeof t == "string") {
    const a = t.trim();
    if (a.startsWith("{") && a.endsWith("}"))
      try {
        return u(JSON.parse(a));
      } catch {
      }
    return t;
  }
  if (typeof t == "number" || typeof t == "boolean") return String(t);
  if (typeof t == "object") {
    const a = t, e = a[q()] ?? a.ar ?? a.en ?? Object.values(a).find((r) => typeof r == "string" && r);
    return typeof e == "string" ? e : "";
  }
  return "";
}, C = (t) => t ? `--tf-custom:${t}` : "", A = b`
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
`, O = (t, a = "") => l`<article class="pc">${a ? l`<span class="tag">${a}</span>` : ""}
  <a class="ph" href=${t.url}><img src=${t.image} alt=${t.name} loading="lazy" /></a>
  <div class="bd"><a class="nm" href=${t.url}>${t.name}</a>
    <div class="pr"><b>${m(t.price)}</b>${t.regular > t.price ? l`<s>${m(t.regular)}</s>` : ""}</div>
    <button class="btn add" ?disabled=${!t.available} @click=${async () => {
  await N(t.id), j("أُضيف للسلة ✓");
}}>${t.available ? "أضف للسلة" : "غير متوفر"}</button></div></article>`;
var E = Object.defineProperty, g = (t, a, e, r) => {
  for (var n = void 0, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (n = o(a, e, n) || n);
  return n && E(a, e, n), n;
};
const x = class x extends v {
  constructor() {
    super(...arguments), this.list = null, this.tab = 0, this.seq = 0;
  }
  willUpdate(a) {
    var e;
    if (a.has("config")) {
      const r = ++this.seq;
      this.list = null, this.tab = 0, S((e = this.config) == null ? void 0 : e.products).then((n) => {
        r === this.seq && (this.list = n);
      });
    }
  }
  bands() {
    var e;
    const a = (((e = this.config) == null ? void 0 : e.bands) ?? []).filter((r) => u(r.label));
    return a.length ? a : [{ label: "أقل من 100", min: 0, max: 100 }, { label: "100 – 300", min: 100, max: 300 }, { label: "أكثر من 300", min: 300, max: 0 }];
  }
  render() {
    const a = this.config ?? {}, e = this.list ?? [], r = this.bands().map((i) => ({ b: i, items: e.filter((o) => o.price >= Number(i.min ?? 0) && (!Number(i.max) || o.price < Number(i.max))) })).filter((i) => this.list === null || i.items.length), n = r[Math.min(this.tab, r.length - 1)];
    return l`<div class="wrap" style=${C(a.color)}><span class="eyebrow">💰 حسب ميزانيتك</span><h2 class="title">${u(a.title) || "هدية تناسب ميزانيتك"}</h2>${u(a.subtitle) ? l`<p class="sub">${u(a.subtitle)}</p>` : ""}
      <div class="tabs" role="tablist">${r.map((i, o) => l`<button class="t ${i === n ? "on" : ""}" role="tab" aria-selected=${i === n} @click=${() => this.tab = o}>${u(i.b.label)} <small>${i.items.length}</small></button>`)}</div>
      <div class="grid" role="tabpanel">${this.list === null ? l`<div class="skel" style="height:300px"></div>` : n == null ? void 0 : n.items.sort((i, o) => o.rating - i.rating).map((i, o) => O(i, o === 0 ? "الأعلى تقييماً" : i.regular > i.price ? `وفّر ${m(i.regular - i.price)}` : ""))}</div></div>`;
  }
};
x.styles = [k, A, b`
    .tabs { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 24px; }
    .t { all: unset; cursor: pointer; padding: 12px 20px; border-radius: 99px; border: 1px solid #0000001c; font-weight: 700; display: inline-flex; gap: 8px; align-items: center; transition: .3s; }
    .t small { opacity: .55; font-weight: 500; } .t.on { background: var(--tf-accent); color: #fff; border-color: transparent; box-shadow: 0 14px 30px -14px var(--tf-accent); } .t.on small { opacity: .85; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 18px; } .grid > * { animation: up .45s both; } @keyframes up { from { opacity: 0; transform: translateY(14px); } }
  `];
let d = x;
g([
  $({ type: Object })
], d.prototype, "config");
g([
  y()
], d.prototype, "list");
g([
  y()
], d.prototype, "tab");
typeof d < "u" && d.registerSallaComponent("salla-thawq-budget");
export {
  d as default
};
