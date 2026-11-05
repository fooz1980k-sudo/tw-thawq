import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { addToCart, money, Prod, products, style, toast, localizedString } from '../../shared/salla';

/** Build-your-own box: pick N pieces, watch the box fill, see the tier reward, add everything at once. */
export default class ThawqBox extends LitElement {
  @property({ type: Object }) config?: { title?: unknown; subtitle?: unknown; products?: unknown; size?: number; reward?: unknown; coupon?: string; color?: string };
  @state() private list: Prod[] | null = null;
  @state() private picked: number[] = [];
  @state() private busy = false;
  private seq = 0;
  static styles = [base, css`
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
  willUpdate(ch: Map<string, unknown>) { if (ch.has('config')) { const n = ++this.seq; this.list = null; this.picked = []; products(this.config?.products).then((l) => { if (n === this.seq) this.list = l; }); } }
  private size() { return Math.min(8, Math.max(2, Number(this.config?.size ?? 3))); }
  private tap(p: Prod) {
    if (!p.available) return; const i = this.picked.indexOf(p.id);
    if (i >= 0) this.picked = this.picked.filter((x) => x !== p.id); else if (this.picked.length < this.size()) this.picked = [...this.picked, p.id]; else toast(`الصندوق ممتلئ (${this.size()} قطع)`);
  }
  private async add(sel: Prod[]) { this.busy = true; for (const p of sel) await addToCart(p.id); this.busy = false; toast('صندوقك في السلة ✓'); }
  render() {
    const c = this.config ?? {}; const N = this.size(); const list = this.list ?? []; const sel = this.picked.map((id) => list.find((p) => p.id === id)!).filter(Boolean);
    const tot = sel.reduce((a, p) => a + p.price, 0); const left = N - sel.length;
    return html`<div class="wrap" style=${style(c.color)}><span class="eyebrow">🎁 صمّم صندوقك</span><h2 class="title">${localizedString(c.title) || 'اختر ' + N + ' قطع وكوّن صندوقك'}</h2>${localizedString(c.subtitle) ? html`<p class="sub">${localizedString(c.subtitle)}</p>` : ''}
      <div class="g"><div class="grid">${this.list === null ? html`<div class="skel" style="height:260px"></div>` : list.map((p) => { const on = this.picked.includes(p.id);
          return html`<button class="p ${on ? 'on' : ''}" aria-pressed=${on} aria-disabled=${!p.available} @click=${() => this.tap(p)}><span class="ck">${on ? '✓' : '+'}</span><img src=${p.image} alt="" loading="lazy" /><div>${p.name}<b>${p.available ? money(p.price) : 'غير متوفر'}</b></div></button>`; })}</div>
        <aside class="box dark"><b>صندوقك</b><div class="slots" style="--n:${N}">${Array.from({ length: N }, (_, i) => html`<div class="slot">${sel[i] ? html`<img src=${sel[i].image} alt="" />` : i + 1}</div>`)}</div>
          <div class="bar"><i style="width:${(sel.length / N) * 100}%"></i></div>
          <p class="msg">${left > 0 ? html`باقي <b>${left}</b> ${left === 1 ? 'قطعة' : 'قطع'}${localizedString(c.reward) ? html` وتحصل على <b>${localizedString(c.reward)}</b>` : ''}` : html`🎉 اكتمل صندوقك!${localizedString(c.reward) ? html` ${localizedString(c.reward)}` : ''}${c.coupon ? html` — استخدم الكود <code>${c.coupon}</code> في السلة` : ''}`}</p>
          <p class="msg">المجموع: <b>${money(tot)}</b></p>
          <button class="btn" ?disabled=${left > 0 || this.busy} @click=${() => this.add(sel)}>${this.busy ? 'جاري الإضافة…' : left > 0 ? `اختر ${left} لإكمال الصندوق` : 'أضف الصندوق للسلة'}</button></aside></div></div>`;
  }
}
