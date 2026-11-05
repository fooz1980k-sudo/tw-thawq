import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { cartTotal, money, onCart, style, localizedString } from '../../shared/salla';

/** Free-shipping progress: reads the live cart total and tells the shopper exactly how much is left. */
export default class ThawqShipping extends LitElement {
  @property({ type: Object }) config?: { threshold?: number; reward?: unknown; done?: unknown; link?: string; button?: unknown; color?: string };
  @state() private total: number | null = null;
  private off?: () => void;
  static styles = [base, css`
    .b { border-radius: 22px; padding: 18px 22px; display: grid; grid-template-columns: auto 1fr auto; gap: 18px; align-items: center; }
    @media (max-width: 640px) { .b { grid-template-columns: auto 1fr; } .b .btn { grid-column: 1 / -1; justify-content: center; } }
    .ic { width: 54px; height: 54px; border-radius: 16px; display: grid; place-items: center; font-size: 26px; background: color-mix(in srgb, var(--tf-accent) 18%, transparent); }
    .truck { display: inline-block; animation: drive 2.4s ease-in-out infinite; } @keyframes drive { 50% { transform: translateX(-4px); } }
    p { margin: 0 0 10px; font-size: 15px; } p b { color: var(--tf-accent); }
    .tr { height: 10px; border-radius: 99px; background: #ffffff1a; overflow: hidden; position: relative; } .fl { height: 100%; border-radius: inherit; background: var(--tf-gold); transition: width .8s cubic-bezier(.2,.8,.2,1); position: relative; overflow: hidden; }
    .fl::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, transparent, #fff8, transparent); animation: sh 2s infinite; } @keyframes sh { from { transform: translateX(100%); } to { transform: translateX(-100%); } }
    .ok .ic { background: #2fbf7130; }
  `];
  connectedCallback() { super.connectedCallback(); cartTotal().then((t) => (this.total = t)); this.off = onCart((t) => (this.total = t)); }
  disconnectedCallback() { super.disconnectedCallback(); this.off?.(); }
  render() {
    const c = this.config ?? {}; const T = Math.max(1, Number(c.threshold ?? 300)); const tot = this.total ?? 0; const left = Math.max(0, T - tot); const ok = left === 0;
    return html`<div class="wrap" style="padding-block:16px;${style(c.color)}"><div class="b dark ${ok ? 'ok' : ''}" role="status">
      <span class="ic"><span class="truck">${ok ? '🎉' : '🚚'}</span></span>
      <div><p>${ok ? html`<b>${localizedString(c.done) || 'مبروك! طلبك صار شحنه مجاني'}</b>` : tot > 0 ? html`باقي <b>${money(left)}</b> و${localizedString(c.reward) || 'يصير الشحن مجاني'}` : html`${localizedString(c.reward) || 'الشحن مجاني'} للطلبات فوق <b>${money(T)}</b>`}</p>
        <div class="tr" aria-hidden="true"><div class="fl" style="width:${Math.min(100, (tot / T) * 100)}%"></div></div></div>
      ${!ok && localizedString(c.button) && c.link ? html`<a class="btn" href=${c.link}>${localizedString(c.button)}</a>` : ''}</div></div>`;
  }
}
