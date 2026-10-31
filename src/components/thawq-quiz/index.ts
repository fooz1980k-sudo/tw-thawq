import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { card, cardCss } from '../../shared/card';
import { ids, Prod, products, style, txt } from '../../shared/salla';

type Opt = { step?: unknown; emoji?: string; label?: unknown; products?: unknown };
/** Product-finder quiz: up to 3 questions; each answer votes for products; results are ranked by votes then rating. */
export default class ThawqQuiz extends LitElement {
  @property({ type: Object }) config?: { title?: unknown; q1?: unknown; q2?: unknown; q3?: unknown; options?: Opt[]; results?: number; color?: string };
  @state() private step = 0;
  @state() private picks: Opt[] = [];
  @state() private res: Prod[] | null = null;
  static styles = [base, cardCss, css`
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
  private qs() { const c = this.config ?? {}; return [c.q1, c.q2, c.q3].map(txt).map((q, i) => ({ q, i: i + 1, o: (c.options ?? []).filter((o) => Number(o.step ?? 1) === i + 1 && txt(o.label)) })).filter((x) => x.q && x.o.length); }
  private async pick(o: Opt) {
    this.picks = [...this.picks, o]; const qs = this.qs();
    if (this.step + 1 < qs.length) { this.step++; return; }
    this.step = qs.length; this.res = null;
    const votes = new Map<number, number>(); for (const p of this.picks) for (const id of ids(p.products)) votes.set(id, (votes.get(id) ?? 0) + 1);
    const all = await products([...votes.keys()].map((value) => ({ value })));
    this.res = all.filter((p) => p.available).sort((a, b) => (votes.get(b.id)! - votes.get(a.id)!) || b.rating - a.rating).slice(0, this.config?.results ?? 4);
  }
  private reset() { this.step = 0; this.picks = []; this.res = null; }
  render() {
    const c = this.config ?? {}; const qs = this.qs(); if (!qs.length) return html`<div class="wrap"><p class="sub">أضف الأسئلة والخيارات من إعدادات العنصر.</p></div>`;
    const done = this.step >= qs.length; const cur = qs[this.step];
    return html`<div class="wrap" style=${style(c.color)}><div class="box dark"><span class="eyebrow">🧭 مساعد الاختيار</span><h2 class="title">${txt(c.title) || 'محتار؟ نختار معك في 3 خطوات'}</h2>
      <div class="prog">${qs.map((_, i) => html`<i class=${i <= this.step ? 'on' : ''}></i>`)}</div>
      ${!done ? html`${html`<h3>${cur.q}</h3>`}<div class="opts">${cur.o.map((o, i) => html`<button class="o" style="animation-delay:${i * 0.06}s" @click=${() => this.pick(o)}><span>${o.emoji || '✨'}</span><b>${txt(o.label)}</b></button>`)}</div>
          ${this.step ? html`<button class="back" @click=${() => { this.step--; this.picks = this.picks.slice(0, -1); }}>→ رجوع</button>` : ''}`
        : html`<h3>اخترنا لك هذي 👌</h3><p class="why">بناءً على: ${this.picks.map((p) => txt(p.label)).join(' · ')}</p>
          <div class="res">${this.res === null ? html`<div class="skel" style="height:300px"></div>` : this.res.length ? this.res.map((p, i) => card(p, i === 0 ? 'الأنسب لك' : '')) : html`<p>ما لقينا تطابق، جرّب خيارات ثانية.</p>`}</div>
          <button class="back" @click=${this.reset}>↺ ابدأ من جديد</button>`}</div></div>`;
  }
}
