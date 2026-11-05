import { css as k, LitElement as w, html as l } from "lit";
import { property as $, state as m } from "lit/decorators.js";
const z = k`
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
`, g = () => window.Salla, v = async () => {
  var t, i;
  try {
    await ((i = (t = g()) == null ? void 0 : t.onReady) == null ? void 0 : i.call(t));
  } catch {
  }
}, p = (t, i) => (document.documentElement.lang || "ar").startsWith("en") ? i : t, d = (t) => {
  const i = typeof t == "object" && t ? t.amount : t, e = Number(i);
  return Number.isFinite(e) ? e : 0;
};
function _(t) {
  var a, r, n, o, s, c;
  const i = d(t == null ? void 0 : t.sale_price) && d(t == null ? void 0 : t.sale_price) < d((t == null ? void 0 : t.regular_price) ?? (t == null ? void 0 : t.price)) ? d(t == null ? void 0 : t.sale_price) : d(t == null ? void 0 : t.price), e = Math.max(d(t == null ? void 0 : t.regular_price), d(t == null ? void 0 : t.price), i);
  return {
    id: Number(t == null ? void 0 : t.id),
    name: String((t == null ? void 0 : t.name) ?? ""),
    url: String((t == null ? void 0 : t.url) ?? "#"),
    image: String(((a = t == null ? void 0 : t.image) == null ? void 0 : a.url) ?? (t == null ? void 0 : t.main_image) ?? (t == null ? void 0 : t.thumbnail) ?? ((n = (r = t == null ? void 0 : t.images) == null ? void 0 : r[0]) == null ? void 0 : n.url) ?? ""),
    price: i,
    regular: e,
    rating: d(((o = t == null ? void 0 : t.rating) == null ? void 0 : o.stars) ?? ((s = t == null ? void 0 : t.rating) == null ? void 0 : s.rate) ?? (t == null ? void 0 : t.rating)),
    ratingCount: d((c = t == null ? void 0 : t.rating) == null ? void 0 : c.count),
    qty: (t == null ? void 0 : t.quantity) == null || t != null && t.unlimited_quantity ? null : d(t == null ? void 0 : t.quantity),
    available: (t == null ? void 0 : t.is_available) !== !1 && (t == null ? void 0 : t.status) !== "out"
  };
}
const S = (t) => (Array.isArray(t) ? t : []).map((i) => Number(typeof i == "object" && i ? i.value : i)).filter((i) => Number.isFinite(i) && i > 0);
async function j(t) {
  return await v(), (await Promise.all(S(t).map((e) => {
    var a, r, n, o;
    return (o = (n = (r = (a = g()) == null ? void 0 : a.product) == null ? void 0 : r.api) == null ? void 0 : n.getDetails) == null ? void 0 : o.call(n, e).then((s) => _(s == null ? void 0 : s.data)).catch(() => null);
  }))).filter((e) => !!e && !!e.name);
}
const x = (t) => {
  var i, e;
  try {
    return ((e = (i = g()) == null ? void 0 : i.money) == null ? void 0 : e.call(i, t)) ?? `${t} ${p("ر.س", "SAR")}`;
  } catch {
    return `${t} ${p("ر.س", "SAR")}`;
  }
};
async function N(t) {
  var i, e, a;
  await v();
  try {
    await ((a = (e = (i = g()) == null ? void 0 : i.cart) == null ? void 0 : e.addItem) == null ? void 0 : a.call(e, { id: t, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${t}`;
  }
}
function y(t) {
  var i, e;
  try {
    (e = (i = g()) == null ? void 0 : i.success) == null || e.call(i, t);
  } catch {
  }
}
const q = () => {
  var t, i, e, a, r;
  try {
    const n = ((i = (t = g()) == null ? void 0 : t.lang) == null ? void 0 : i.locale) ?? ((r = (a = (e = g()) == null ? void 0 : e.config) == null ? void 0 : a.get) == null ? void 0 : r.call(a, "user.language_code"));
    if (typeof n == "string" && n) return n.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, f = (t) => {
  if (t == null) return "";
  if (typeof t == "string") {
    const i = t.trim();
    if (i.startsWith("{") && i.endsWith("}"))
      try {
        return f(JSON.parse(i));
      } catch {
      }
    return t;
  }
  if (typeof t == "number" || typeof t == "boolean") return String(t);
  if (typeof t == "object") {
    const i = t, e = i[q()] ?? i.ar ?? i.en ?? Object.values(i).find((a) => typeof a == "string" && a);
    return typeof e == "string" ? e : "";
  }
  return "";
}, A = (t) => t ? `--tf-custom:${t}` : "";
var C = Object.defineProperty, b = (t, i, e, a) => {
  for (var r = void 0, n = t.length - 1, o; n >= 0; n--)
    (o = t[n]) && (r = o(i, e, r) || r);
  return r && C(i, e, r), r;
};
const h = class h extends w {
  constructor() {
    super(...arguments), this.list = null, this.picked = [], this.busy = !1, this.seq = 0;
  }
  willUpdate(i) {
    var e;
    if (i.has("config")) {
      const a = ++this.seq;
      this.list = null, this.picked = [], j((e = this.config) == null ? void 0 : e.products).then((r) => {
        a === this.seq && (this.list = r);
      });
    }
  }
  size() {
    var i;
    return Math.min(8, Math.max(2, Number(((i = this.config) == null ? void 0 : i.size) ?? 3)));
  }
  tap(i) {
    if (!i.available) return;
    this.picked.indexOf(i.id) >= 0 ? this.picked = this.picked.filter((a) => a !== i.id) : this.picked.length < this.size() ? this.picked = [...this.picked, i.id] : y(`الصندوق ممتلئ (${this.size()} قطع)`);
  }
  async add(i) {
    this.busy = !0;
    for (const e of i) await N(e.id);
    this.busy = !1, y("صندوقك في السلة ✓");
  }
  render() {
    const i = this.config ?? {}, e = this.size(), a = this.list ?? [], r = this.picked.map((s) => a.find((c) => c.id === s)).filter(Boolean), n = r.reduce((s, c) => s + c.price, 0), o = e - r.length;
    return l`<div class="wrap" style=${A(i.color)}><span class="eyebrow">🎁 صمّم صندوقك</span><h2 class="title">${f(i.title) || "اختر " + e + " قطع وكوّن صندوقك"}</h2>${f(i.subtitle) ? l`<p class="sub">${f(i.subtitle)}</p>` : ""}
      <div class="g"><div class="grid">${this.list === null ? l`<div class="skel" style="height:260px"></div>` : a.map((s) => {
      const c = this.picked.includes(s.id);
      return l`<button class="p ${c ? "on" : ""}" aria-pressed=${c} aria-disabled=${!s.available} @click=${() => this.tap(s)}><span class="ck">${c ? "✓" : "+"}</span><img src=${s.image} alt="" loading="lazy" /><div>${s.name}<b>${s.available ? x(s.price) : "غير متوفر"}</b></div></button>`;
    })}</div>
        <aside class="box dark"><b>صندوقك</b><div class="slots" style="--n:${e}">${Array.from({ length: e }, (s, c) => l`<div class="slot">${r[c] ? l`<img src=${r[c].image} alt="" />` : c + 1}</div>`)}</div>
          <div class="bar"><i style="width:${r.length / e * 100}%"></i></div>
          <p class="msg">${o > 0 ? l`باقي <b>${o}</b> ${o === 1 ? "قطعة" : "قطع"}${f(i.reward) ? l` وتحصل على <b>${f(i.reward)}</b>` : ""}` : l`🎉 اكتمل صندوقك!${f(i.reward) ? l` ${f(i.reward)}` : ""}${i.coupon ? l` — استخدم الكود <code>${i.coupon}</code> في السلة` : ""}`}</p>
          <p class="msg">المجموع: <b>${x(n)}</b></p>
          <button class="btn" ?disabled=${o > 0 || this.busy} @click=${() => this.add(r)}>${this.busy ? "جاري الإضافة…" : o > 0 ? `اختر ${o} لإكمال الصندوق` : "أضف الصندوق للسلة"}</button></aside></div></div>`;
  }
};
h.styles = [z, k`
    .g { display: grid; grid-template-columns: 1fr 340px; gap: 24px; align-items: start; } @media (max-width: 900px) { .g { grid-template-columns: 1fr; } .box { position: static !important; } }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 14px; }
    .p { all: unset; cursor: pointer; border-radius: 20px; overflow: hidden; background: #fff; border: 2px solid transparent; position: relative; transition: transform .3s, border-color .3s; box-shadow: 0 10px 30px -22px #0006; color: #1b1408; }
    .p:hover { transform: translateY(-4px); } .p.on { border-color: var(--tf-accent); } .p[aria-disabled=true] { opacity: .4; cursor: not-allowed; }
    .p img { width: 100%; aspect-ratio: 1; object-fit: cover; display: block; } .p div { padding: 10px 12px; font-size: 14px; } .p b { color: var(--tf-accent); display: block; }
    .ck { position: absolute; top: 10px; inset-inline-end: 10px; width: 30px; height: 30px; border-radius: 50%; background: #fff; display: grid; place-items: center; font-weight: 800; box-shadow: 0 4px 12px #0003; }
    .on .ck { background: var(--tf-accent); color: #fff; }
    .box { position: sticky; top: 90px; border-radius: 26px; padding: 22px; }
    .slots { display: grid; grid-template-columns: repeat(var(--n), 1fr); gap: 8px; margin: 16px 0; }
    .slot { aspect-ratio: 1; border-radius: 14px; border: 1.5px dashed #ffffff40; overflow: hidden; display: grid; place-items: center; color: #ffffff55; font-size: 22px; }
    .slot img { width: 100%; height: 100%; object-fit: cover; animation: pop .4s; } @keyframes pop { from { transform: scale(.6); opacity: 0; } }
    .bar { height: 8px; border-radius: 9px; background: #ffffff1a; overflow: hidden; } .bar i { display: block; height: 100%; background: var(--tf-gold); transition: width .5s; }
    .msg { margin: 14px 0; font-size: 14px; line-height: 1.7; } .msg code { direction: ltr; display: inline-block; padding: 2px 8px; border: 1px dashed var(--tf-accent); border-radius: 8px; }
    .btn { width: 100%; justify-content: center; } .btn[disabled] { opacity: .5; cursor: not-allowed; }
  `];
let u = h;
b([
  $({ type: Object })
], u.prototype, "config");
b([
  m()
], u.prototype, "list");
b([
  m()
], u.prototype, "picked");
b([
  m()
], u.prototype, "busy");
typeof u < "u" && u.registerSallaComponent("salla-thawq-box");
export {
  u as default
};
