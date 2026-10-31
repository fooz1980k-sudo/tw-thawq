import { LitElement } from 'lit';
LitElement.registerSallaComponent = function (n) { if (!customElements.get(n)) customElements.define(n, this); };
await import('../dist/thawq-quiz.js');
await import('../dist/thawq-box.js');
await import('../dist/thawq-budget.js');
await import('../dist/thawq-shipping.js');
window.__ready = true;
