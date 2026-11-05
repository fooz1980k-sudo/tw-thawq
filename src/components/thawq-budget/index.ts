import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { card, cardCss } from '../../shared/card';
import { money, Prod, products, style, localizedString } from '../../shared/salla';

type Band = { label?: unknown; min?: number; max?: number };
/** Shop by budget: tabs filter the chosen products by live price; empty bands are hidden automatically. */
export default class ThawqBudget extends LitElement {
  @property({ type: Object }) config?: { title?: unknown; subtitle?: unknown; products?: unknown; bands?: Band[]; color?: string };
  @state() private list: Prod[] | null = null;
  @state() private tab = 0;
  private seq = 0;
  static styles = [base, cardCss, css`
    .tabs { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 24px; }
    .t { all: unset; cursor: pointer; padding: 12px 20px; border-radius: 99px; border: 1px solid #0000001c; font-weight: 700; display: inline-flex; gap: 8px; align-items: center; transition: .3s; }
    .t small { opacity: .55; font-weight: 500; } .t.on { background: var(--tf-accent); color: #fff; border-color: transparent; box-shadow: 0 14px 30px -14px var(--tf-accent); } .t.on small { opacity: .85; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 18px; } .grid > * { animation: up .45s both; } @keyframes up { from { opacity: 0; transform: translateY(14px); } }
  `];
  willUpdate(ch: Map<string, unknown>) { if (ch.has('config')) { const n = ++this.seq; this.list = null; this.tab = 0; products(this.config?.products).then((l) => { if (n === this.seq) this.list = l; }); } }
  private bands() {
    const b = (this.config?.bands ?? []).filter((x) => localizedString(x.label));
    return b.length ? b : [{ label: 'أقل من 100', min: 0, max: 100 }, { label: '100 – 300', min: 100, max: 300 }, { label: 'أكثر من 300', min: 300, max: 0 }];
  }
  render() {
    const c = this.config ?? {}; const list = this.list ?? [];
    const groups = this.bands().map((b) => ({ b, items: list.filter((p) => p.price >= Number(b.min ?? 0) && (!Number(b.max) || p.price < Number(b.max))) })).filter((g) => this.list === null || g.items.length);
    const cur = groups[Math.min(this.tab, groups.length - 1)];
    return html`<div class="wrap" style=${style(c.color)}><span class="eyebrow">💰 حسب ميزانيتك</span><h2 class="title">${localizedString(c.title) || 'هدية تناسب ميزانيتك'}</h2>${localizedString(c.subtitle) ? html`<p class="sub">${localizedString(c.subtitle)}</p>` : ''}
      <div class="tabs" role="tablist">${groups.map((g, i) => html`<button class="t ${g === cur ? 'on' : ''}" role="tab" aria-selected=${g === cur} @click=${() => (this.tab = i)}>${localizedString(g.b.label)} <small>${g.items.length}</small></button>`)}</div>
      <div class="grid" role="tabpanel">${this.list === null ? html`<div class="skel" style="height:300px"></div>` : cur?.items.sort((a, b) => b.rating - a.rating).map((p, i) => card(p, i === 0 ? 'الأعلى تقييماً' : p.regular > p.price ? `وفّر ${money(p.regular - p.price)}` : ''))}</div></div>`;
  }
}
