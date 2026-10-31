var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.js
var t, e, s, o, n, r, i, S, c;
var init_css_tag = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.js"() {
    t = globalThis;
    e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
    s = Symbol();
    o = /* @__PURE__ */ new WeakMap();
    n = class {
      constructor(t3, e5, o6) {
        if (this._$cssResult$ = true, o6 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t3, this.t = e5;
      }
      get styleSheet() {
        let t3 = this.o;
        const s5 = this.t;
        if (e && void 0 === t3) {
          const e5 = void 0 !== s5 && 1 === s5.length;
          e5 && (t3 = o.get(s5)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e5 && o.set(s5, t3));
        }
        return t3;
      }
      toString() {
        return this.cssText;
      }
    };
    r = (t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s);
    i = (t3, ...e5) => {
      const o6 = 1 === t3.length ? t3[0] : e5.reduce((e6, s5, o7) => e6 + ((t4) => {
        if (true === t4._$cssResult$) return t4.cssText;
        if ("number" == typeof t4) return t4;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      })(s5) + t3[o7 + 1], t3[0]);
      return new n(o6, t3, s);
    };
    S = (s5, o6) => {
      if (e) s5.adoptedStyleSheets = o6.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
      else for (const e5 of o6) {
        const o7 = document.createElement("style"), n5 = t.litNonce;
        void 0 !== n5 && o7.setAttribute("nonce", n5), o7.textContent = e5.cssText, s5.appendChild(o7);
      }
    };
    c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
      let e5 = "";
      for (const s5 of t4.cssRules) e5 += s5.cssText;
      return r(e5);
    })(t3) : t3;
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.js
var i2, e2, h, r2, o2, n2, a, c2, l, p, d, u, f, b, y;
var init_reactive_element = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.js"() {
    init_css_tag();
    init_css_tag();
    ({ is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object);
    a = globalThis;
    c2 = a.trustedTypes;
    l = c2 ? c2.emptyScript : "";
    p = a.reactiveElementPolyfillSupport;
    d = (t3, s5) => t3;
    u = { toAttribute(t3, s5) {
      switch (s5) {
        case Boolean:
          t3 = t3 ? l : null;
          break;
        case Object:
        case Array:
          t3 = null == t3 ? t3 : JSON.stringify(t3);
      }
      return t3;
    }, fromAttribute(t3, s5) {
      let i5 = t3;
      switch (s5) {
        case Boolean:
          i5 = null !== t3;
          break;
        case Number:
          i5 = null === t3 ? null : Number(t3);
          break;
        case Object:
        case Array:
          try {
            i5 = JSON.parse(t3);
          } catch (t4) {
            i5 = null;
          }
      }
      return i5;
    } };
    f = (t3, s5) => !i2(t3, s5);
    b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
    Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
    y = class extends HTMLElement {
      static addInitializer(t3) {
        this._$Ei(), (this.l ??= []).push(t3);
      }
      static get observedAttributes() {
        return this.finalize(), this._$Eh && [...this._$Eh.keys()];
      }
      static createProperty(t3, s5 = b) {
        if (s5.state && (s5.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s5 = Object.create(s5)).wrapped = true), this.elementProperties.set(t3, s5), !s5.noAccessor) {
          const i5 = Symbol(), h7 = this.getPropertyDescriptor(t3, i5, s5);
          void 0 !== h7 && e2(this.prototype, t3, h7);
        }
      }
      static getPropertyDescriptor(t3, s5, i5) {
        const { get: e5, set: r6 } = h(this.prototype, t3) ?? { get() {
          return this[s5];
        }, set(t4) {
          this[s5] = t4;
        } };
        return { get: e5, set(s6) {
          const h7 = e5?.call(this);
          r6?.call(this, s6), this.requestUpdate(t3, h7, i5);
        }, configurable: true, enumerable: true };
      }
      static getPropertyOptions(t3) {
        return this.elementProperties.get(t3) ?? b;
      }
      static _$Ei() {
        if (this.hasOwnProperty(d("elementProperties"))) return;
        const t3 = n2(this);
        t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
      }
      static finalize() {
        if (this.hasOwnProperty(d("finalized"))) return;
        if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
          const t4 = this.properties, s5 = [...r2(t4), ...o2(t4)];
          for (const i5 of s5) this.createProperty(i5, t4[i5]);
        }
        const t3 = this[Symbol.metadata];
        if (null !== t3) {
          const s5 = litPropertyMetadata.get(t3);
          if (void 0 !== s5) for (const [t4, i5] of s5) this.elementProperties.set(t4, i5);
        }
        this._$Eh = /* @__PURE__ */ new Map();
        for (const [t4, s5] of this.elementProperties) {
          const i5 = this._$Eu(t4, s5);
          void 0 !== i5 && this._$Eh.set(i5, t4);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
      }
      static finalizeStyles(s5) {
        const i5 = [];
        if (Array.isArray(s5)) {
          const e5 = new Set(s5.flat(1 / 0).reverse());
          for (const s6 of e5) i5.unshift(c(s6));
        } else void 0 !== s5 && i5.push(c(s5));
        return i5;
      }
      static _$Eu(t3, s5) {
        const i5 = s5.attribute;
        return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
      }
      constructor() {
        super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
      }
      _$Ev() {
        this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
      }
      addController(t3) {
        (this._$EO ??= /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
      }
      removeController(t3) {
        this._$EO?.delete(t3);
      }
      _$E_() {
        const t3 = /* @__PURE__ */ new Map(), s5 = this.constructor.elementProperties;
        for (const i5 of s5.keys()) this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
        t3.size > 0 && (this._$Ep = t3);
      }
      createRenderRoot() {
        const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return S(t3, this.constructor.elementStyles), t3;
      }
      connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
      }
      enableUpdating(t3) {
      }
      disconnectedCallback() {
        this._$EO?.forEach((t3) => t3.hostDisconnected?.());
      }
      attributeChangedCallback(t3, s5, i5) {
        this._$AK(t3, i5);
      }
      _$ET(t3, s5) {
        const i5 = this.constructor.elementProperties.get(t3), e5 = this.constructor._$Eu(t3, i5);
        if (void 0 !== e5 && true === i5.reflect) {
          const h7 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s5, i5.type);
          this._$Em = t3, null == h7 ? this.removeAttribute(e5) : this.setAttribute(e5, h7), this._$Em = null;
        }
      }
      _$AK(t3, s5) {
        const i5 = this.constructor, e5 = i5._$Eh.get(t3);
        if (void 0 !== e5 && this._$Em !== e5) {
          const t4 = i5.getPropertyOptions(e5), h7 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
          this._$Em = e5;
          const r6 = h7.fromAttribute(s5, t4.type);
          this[e5] = r6 ?? this._$Ej?.get(e5) ?? r6, this._$Em = null;
        }
      }
      requestUpdate(t3, s5, i5, e5 = false, h7) {
        if (void 0 !== t3) {
          const r6 = this.constructor;
          if (false === e5 && (h7 = this[t3]), i5 ??= r6.getPropertyOptions(t3), !((i5.hasChanged ?? f)(h7, s5) || i5.useDefault && i5.reflect && h7 === this._$Ej?.get(t3) && !this.hasAttribute(r6._$Eu(t3, i5)))) return;
          this.C(t3, s5, i5);
        }
        false === this.isUpdatePending && (this._$ES = this._$EP());
      }
      C(t3, s5, { useDefault: i5, reflect: e5, wrapped: h7 }, r6) {
        i5 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t3) && (this._$Ej.set(t3, r6 ?? s5 ?? this[t3]), true !== h7 || void 0 !== r6) || (this._$AL.has(t3) || (this.hasUpdated || i5 || (s5 = void 0), this._$AL.set(t3, s5)), true === e5 && this._$Em !== t3 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t3));
      }
      async _$EP() {
        this.isUpdatePending = true;
        try {
          await this._$ES;
        } catch (t4) {
          Promise.reject(t4);
        }
        const t3 = this.scheduleUpdate();
        return null != t3 && await t3, !this.isUpdatePending;
      }
      scheduleUpdate() {
        return this.performUpdate();
      }
      performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
          if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
            for (const [t5, s6] of this._$Ep) this[t5] = s6;
            this._$Ep = void 0;
          }
          const t4 = this.constructor.elementProperties;
          if (t4.size > 0) for (const [s6, i5] of t4) {
            const { wrapped: t5 } = i5, e5 = this[s6];
            true !== t5 || this._$AL.has(s6) || void 0 === e5 || this.C(s6, void 0, i5, e5);
          }
        }
        let t3 = false;
        const s5 = this._$AL;
        try {
          t3 = this.shouldUpdate(s5), t3 ? (this.willUpdate(s5), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s5)) : this._$EM();
        } catch (s6) {
          throw t3 = false, this._$EM(), s6;
        }
        t3 && this._$AE(s5);
      }
      willUpdate(t3) {
      }
      _$AE(t3) {
        this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
      }
      _$EM() {
        this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._$ES;
      }
      shouldUpdate(t3) {
        return true;
      }
      update(t3) {
        this._$Eq &&= this._$Eq.forEach((t4) => this._$ET(t4, this[t4])), this._$EM();
      }
      updated(t3) {
      }
      firstUpdated(t3) {
      }
    };
    y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.2");
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js
function V(t3, i5) {
  if (!u2(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i5) : i5;
}
function M(t3, i5, s5 = t3, e5) {
  if (i5 === E) return i5;
  let h7 = void 0 !== e5 ? s5._$Co?.[e5] : s5._$Cl;
  const o6 = a2(i5) ? void 0 : i5._$litDirective$;
  return h7?.constructor !== o6 && (h7?._$AO?.(false), void 0 === o6 ? h7 = void 0 : (h7 = new o6(t3), h7._$AT(t3, s5, e5)), void 0 !== e5 ? (s5._$Co ??= [])[e5] = h7 : s5._$Cl = h7), void 0 !== h7 && (i5 = M(t3, h7._$AS(t3, i5.values), h7, e5)), i5;
}
var t2, i3, s2, e3, h2, o3, n3, r3, l2, c3, a2, u2, d2, f2, v, _, m, p2, g, $, y2, x, b2, w, T, E, A, C, P, N, S2, R, k, H, I, L, z, Z, B, D;
var init_lit_html = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js"() {
    t2 = globalThis;
    i3 = (t3) => t3;
    s2 = t2.trustedTypes;
    e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
    h2 = "$lit$";
    o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
    n3 = "?" + o3;
    r3 = `<${n3}>`;
    l2 = document;
    c3 = () => l2.createComment("");
    a2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
    u2 = Array.isArray;
    d2 = (t3) => u2(t3) || "function" == typeof t3?.[Symbol.iterator];
    f2 = "[ 	\n\f\r]";
    v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
    _ = /-->/g;
    m = />/g;
    p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
    g = /'/g;
    $ = /"/g;
    y2 = /^(?:script|style|textarea|title)$/i;
    x = (t3) => (i5, ...s5) => ({ _$litType$: t3, strings: i5, values: s5 });
    b2 = x(1);
    w = x(2);
    T = x(3);
    E = Symbol.for("lit-noChange");
    A = Symbol.for("lit-nothing");
    C = /* @__PURE__ */ new WeakMap();
    P = l2.createTreeWalker(l2, 129);
    N = (t3, i5) => {
      const s5 = t3.length - 1, e5 = [];
      let n5, l4 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c5 = v;
      for (let i6 = 0; i6 < s5; i6++) {
        const s6 = t3[i6];
        let a3, u6, d5 = -1, f6 = 0;
        for (; f6 < s6.length && (c5.lastIndex = f6, u6 = c5.exec(s6), null !== u6); ) f6 = c5.lastIndex, c5 === v ? "!--" === u6[1] ? c5 = _ : void 0 !== u6[1] ? c5 = m : void 0 !== u6[2] ? (y2.test(u6[2]) && (n5 = RegExp("</" + u6[2], "g")), c5 = p2) : void 0 !== u6[3] && (c5 = p2) : c5 === p2 ? ">" === u6[0] ? (c5 = n5 ?? v, d5 = -1) : void 0 === u6[1] ? d5 = -2 : (d5 = c5.lastIndex - u6[2].length, a3 = u6[1], c5 = void 0 === u6[3] ? p2 : '"' === u6[3] ? $ : g) : c5 === $ || c5 === g ? c5 = p2 : c5 === _ || c5 === m ? c5 = v : (c5 = p2, n5 = void 0);
        const x7 = c5 === p2 && t3[i6 + 1].startsWith("/>") ? " " : "";
        l4 += c5 === v ? s6 + r3 : d5 >= 0 ? (e5.push(a3), s6.slice(0, d5) + h2 + s6.slice(d5) + o3 + x7) : s6 + o3 + (-2 === d5 ? i6 : x7);
      }
      return [V(t3, l4 + (t3[s5] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), e5];
    };
    S2 = class _S {
      constructor({ strings: t3, _$litType$: i5 }, e5) {
        let r6;
        this.parts = [];
        let l4 = 0, a3 = 0;
        const u6 = t3.length - 1, d5 = this.parts, [f6, v5] = N(t3, i5);
        if (this.el = _S.createElement(f6, e5), P.currentNode = this.el.content, 2 === i5 || 3 === i5) {
          const t4 = this.el.content.firstChild;
          t4.replaceWith(...t4.childNodes);
        }
        for (; null !== (r6 = P.nextNode()) && d5.length < u6; ) {
          if (1 === r6.nodeType) {
            if (r6.hasAttributes()) for (const t4 of r6.getAttributeNames()) if (t4.endsWith(h2)) {
              const i6 = v5[a3++], s5 = r6.getAttribute(t4).split(o3), e6 = /([.?@])?(.*)/.exec(i6);
              d5.push({ type: 1, index: l4, name: e6[2], strings: s5, ctor: "." === e6[1] ? I : "?" === e6[1] ? L : "@" === e6[1] ? z : H }), r6.removeAttribute(t4);
            } else t4.startsWith(o3) && (d5.push({ type: 6, index: l4 }), r6.removeAttribute(t4));
            if (y2.test(r6.tagName)) {
              const t4 = r6.textContent.split(o3), i6 = t4.length - 1;
              if (i6 > 0) {
                r6.textContent = s2 ? s2.emptyScript : "";
                for (let s5 = 0; s5 < i6; s5++) r6.append(t4[s5], c3()), P.nextNode(), d5.push({ type: 2, index: ++l4 });
                r6.append(t4[i6], c3());
              }
            }
          } else if (8 === r6.nodeType) if (r6.data === n3) d5.push({ type: 2, index: l4 });
          else {
            let t4 = -1;
            for (; -1 !== (t4 = r6.data.indexOf(o3, t4 + 1)); ) d5.push({ type: 7, index: l4 }), t4 += o3.length - 1;
          }
          l4++;
        }
      }
      static createElement(t3, i5) {
        const s5 = l2.createElement("template");
        return s5.innerHTML = t3, s5;
      }
    };
    R = class {
      constructor(t3, i5) {
        this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
      }
      get parentNode() {
        return this._$AM.parentNode;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      u(t3) {
        const { el: { content: i5 }, parts: s5 } = this._$AD, e5 = (t3?.creationScope ?? l2).importNode(i5, true);
        P.currentNode = e5;
        let h7 = P.nextNode(), o6 = 0, n5 = 0, r6 = s5[0];
        for (; void 0 !== r6; ) {
          if (o6 === r6.index) {
            let i6;
            2 === r6.type ? i6 = new k(h7, h7.nextSibling, this, t3) : 1 === r6.type ? i6 = new r6.ctor(h7, r6.name, r6.strings, this, t3) : 6 === r6.type && (i6 = new Z(h7, this, t3)), this._$AV.push(i6), r6 = s5[++n5];
          }
          o6 !== r6?.index && (h7 = P.nextNode(), o6++);
        }
        return P.currentNode = l2, e5;
      }
      p(t3) {
        let i5 = 0;
        for (const s5 of this._$AV) void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t3, s5, i5), i5 += s5.strings.length - 2) : s5._$AI(t3[i5])), i5++;
      }
    };
    k = class _k {
      get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
      }
      constructor(t3, i5, s5, e5) {
        this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s5, this.options = e5, this._$Cv = e5?.isConnected ?? true;
      }
      get parentNode() {
        let t3 = this._$AA.parentNode;
        const i5 = this._$AM;
        return void 0 !== i5 && 11 === t3?.nodeType && (t3 = i5.parentNode), t3;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(t3, i5 = this) {
        t3 = M(this, t3, i5), a2(t3) ? t3 === A || null == t3 || "" === t3 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t3 !== this._$AH && t3 !== E && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : d2(t3) ? this.k(t3) : this._(t3);
      }
      O(t3) {
        return this._$AA.parentNode.insertBefore(t3, this._$AB);
      }
      T(t3) {
        this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
      }
      _(t3) {
        this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(l2.createTextNode(t3)), this._$AH = t3;
      }
      $(t3) {
        const { values: i5, _$litType$: s5 } = t3, e5 = "number" == typeof s5 ? this._$AC(t3) : (void 0 === s5.el && (s5.el = S2.createElement(V(s5.h, s5.h[0]), this.options)), s5);
        if (this._$AH?._$AD === e5) this._$AH.p(i5);
        else {
          const t4 = new R(e5, this), s6 = t4.u(this.options);
          t4.p(i5), this.T(s6), this._$AH = t4;
        }
      }
      _$AC(t3) {
        let i5 = C.get(t3.strings);
        return void 0 === i5 && C.set(t3.strings, i5 = new S2(t3)), i5;
      }
      k(t3) {
        u2(this._$AH) || (this._$AH = [], this._$AR());
        const i5 = this._$AH;
        let s5, e5 = 0;
        for (const h7 of t3) e5 === i5.length ? i5.push(s5 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s5 = i5[e5], s5._$AI(h7), e5++;
        e5 < i5.length && (this._$AR(s5 && s5._$AB.nextSibling, e5), i5.length = e5);
      }
      _$AR(t3 = this._$AA.nextSibling, s5) {
        for (this._$AP?.(false, true, s5); t3 !== this._$AB; ) {
          const s6 = i3(t3).nextSibling;
          i3(t3).remove(), t3 = s6;
        }
      }
      setConnected(t3) {
        void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
      }
    };
    H = class {
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      constructor(t3, i5, s5, e5, h7) {
        this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e5, this.options = h7, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = A;
      }
      _$AI(t3, i5 = this, s5, e5) {
        const h7 = this.strings;
        let o6 = false;
        if (void 0 === h7) t3 = M(this, t3, i5, 0), o6 = !a2(t3) || t3 !== this._$AH && t3 !== E, o6 && (this._$AH = t3);
        else {
          const e6 = t3;
          let n5, r6;
          for (t3 = h7[0], n5 = 0; n5 < h7.length - 1; n5++) r6 = M(this, e6[s5 + n5], i5, n5), r6 === E && (r6 = this._$AH[n5]), o6 ||= !a2(r6) || r6 !== this._$AH[n5], r6 === A ? t3 = A : t3 !== A && (t3 += (r6 ?? "") + h7[n5 + 1]), this._$AH[n5] = r6;
        }
        o6 && !e5 && this.j(t3);
      }
      j(t3) {
        t3 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
      }
    };
    I = class extends H {
      constructor() {
        super(...arguments), this.type = 3;
      }
      j(t3) {
        this.element[this.name] = t3 === A ? void 0 : t3;
      }
    };
    L = class extends H {
      constructor() {
        super(...arguments), this.type = 4;
      }
      j(t3) {
        this.element.toggleAttribute(this.name, !!t3 && t3 !== A);
      }
    };
    z = class extends H {
      constructor(t3, i5, s5, e5, h7) {
        super(t3, i5, s5, e5, h7), this.type = 5;
      }
      _$AI(t3, i5 = this) {
        if ((t3 = M(this, t3, i5, 0) ?? A) === E) return;
        const s5 = this._$AH, e5 = t3 === A && s5 !== A || t3.capture !== s5.capture || t3.once !== s5.once || t3.passive !== s5.passive, h7 = t3 !== A && (s5 === A || e5);
        e5 && this.element.removeEventListener(this.name, this, s5), h7 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
      }
      handleEvent(t3) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
      }
    };
    Z = class {
      constructor(t3, i5, s5) {
        this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s5;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(t3) {
        M(this, t3);
      }
    };
    B = t2.litHtmlPolyfillSupport;
    B?.(S2, k), (t2.litHtmlVersions ??= []).push("3.3.3");
    D = (t3, i5, s5) => {
      const e5 = s5?.renderBefore ?? i5;
      let h7 = e5._$litPart$;
      if (void 0 === h7) {
        const t4 = s5?.renderBefore ?? null;
        e5._$litPart$ = h7 = new k(i5.insertBefore(c3(), t4), t4, void 0, s5 ?? {});
      }
      return h7._$AI(t3), h7;
    };
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.js
var s3, i4, o4;
var init_lit_element = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.js"() {
    init_reactive_element();
    init_reactive_element();
    init_lit_html();
    init_lit_html();
    s3 = globalThis;
    i4 = class extends y {
      constructor() {
        super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
      }
      createRenderRoot() {
        const t3 = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t3.firstChild, t3;
      }
      update(t3) {
        const r6 = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = D(r6, this.renderRoot, this.renderOptions);
      }
      connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(true);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(false);
      }
      render() {
        return E;
      }
    };
    i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
    o4 = s3.litElementPolyfillSupport;
    o4?.({ LitElement: i4 });
    (s3.litElementVersions ??= []).push("4.2.2");
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/is-server.js
var init_is_server = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/is-server.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/index.js
var init_lit = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/index.js"() {
    init_reactive_element();
    init_lit_html();
    init_lit_element();
    init_is_server();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.js
var init_custom_element = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.js
function n4(t3) {
  return (e5, o6) => "object" == typeof o6 ? r4(t3, e5, o6) : ((t4, e6, o7) => {
    const r6 = e6.hasOwnProperty(o7);
    return e6.constructor.createProperty(o7, t4), r6 ? Object.getOwnPropertyDescriptor(e6, o7) : void 0;
  })(t3, e5, o6);
}
var o5, r4;
var init_property = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.js"() {
    init_reactive_element();
    o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
    r4 = (t3 = o5, e5, r6) => {
      const { kind: n5, metadata: i5 } = r6;
      let s5 = globalThis.litPropertyMetadata.get(i5);
      if (void 0 === s5 && globalThis.litPropertyMetadata.set(i5, s5 = /* @__PURE__ */ new Map()), "setter" === n5 && ((t3 = Object.create(t3)).wrapped = true), s5.set(r6.name, t3), "accessor" === n5) {
        const { name: o6 } = r6;
        return { set(r7) {
          const n6 = e5.get.call(this);
          e5.set.call(this, r7), this.requestUpdate(o6, n6, t3, true, r7);
        }, init(e6) {
          return void 0 !== e6 && this.C(o6, void 0, t3, e6), e6;
        } };
      }
      if ("setter" === n5) {
        const { name: o6 } = r6;
        return function(r7) {
          const n6 = this[o6];
          e5.call(this, r7), this.requestUpdate(o6, n6, t3, true, r7);
        };
      }
      throw Error("Unsupported decorator location: " + n5);
    };
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.js
function r5(r6) {
  return n4({ ...r6, state: true, attribute: false });
}
var init_state = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.js"() {
    init_property();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/event-options.js
var init_event_options = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/event-options.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/base.js
var init_base = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/base.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.js
var init_query = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.js
var init_query_all = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-async.js
var init_query_async = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-async.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
var init_query_assigned_elements = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js
var init_query_assigned_nodes = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/decorators.js
var init_decorators = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/decorators.js"() {
    init_custom_element();
    init_property();
    init_state();
    init_event_options();
    init_query();
    init_query_all();
    init_query_async();
    init_query_assigned_elements();
    init_query_assigned_nodes();
  }
});

// ../dist/thawq-quiz.js
var thawq_quiz_exports = {};
__export(thawq_quiz_exports, {
  default: () => d3
});
function z2(t3) {
  var n5, s5, e5, r6, c5, b4;
  const a3 = l3(t3 == null ? void 0 : t3.sale_price) && l3(t3 == null ? void 0 : t3.sale_price) < l3((t3 == null ? void 0 : t3.regular_price) ?? (t3 == null ? void 0 : t3.price)) ? l3(t3 == null ? void 0 : t3.sale_price) : l3(t3 == null ? void 0 : t3.price), i5 = Math.max(l3(t3 == null ? void 0 : t3.regular_price), l3(t3 == null ? void 0 : t3.price), a3);
  return {
    id: Number(t3 == null ? void 0 : t3.id),
    name: String((t3 == null ? void 0 : t3.name) ?? ""),
    url: String((t3 == null ? void 0 : t3.url) ?? "#"),
    image: String(((n5 = t3 == null ? void 0 : t3.image) == null ? void 0 : n5.url) ?? (t3 == null ? void 0 : t3.main_image) ?? (t3 == null ? void 0 : t3.thumbnail) ?? ((e5 = (s5 = t3 == null ? void 0 : t3.images) == null ? void 0 : s5[0]) == null ? void 0 : e5.url) ?? ""),
    price: a3,
    regular: i5,
    rating: l3(((r6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : r6.stars) ?? ((c5 = t3 == null ? void 0 : t3.rating) == null ? void 0 : c5.rate) ?? (t3 == null ? void 0 : t3.rating)),
    ratingCount: l3((b4 = t3 == null ? void 0 : t3.rating) == null ? void 0 : b4.count),
    qty: (t3 == null ? void 0 : t3.quantity) == null || t3 != null && t3.unlimited_quantity ? null : l3(t3 == null ? void 0 : t3.quantity),
    available: (t3 == null ? void 0 : t3.is_available) !== false && (t3 == null ? void 0 : t3.status) !== "out"
  };
}
async function _2(t3) {
  return await v2(), (await Promise.all(k2(t3).map((i5) => {
    var n5, s5, e5, r6;
    return (r6 = (e5 = (s5 = (n5 = p3()) == null ? void 0 : n5.product) == null ? void 0 : s5.api) == null ? void 0 : e5.getDetails) == null ? void 0 : r6.call(e5, i5).then((c5) => z2(c5 == null ? void 0 : c5.data)).catch(() => null);
  }))).filter((i5) => !!i5 && !!i5.name);
}
async function j(t3) {
  var a3, i5, n5;
  await v2();
  try {
    await ((n5 = (i5 = (a3 = p3()) == null ? void 0 : a3.cart) == null ? void 0 : i5.addItem) == null ? void 0 : n5.call(i5, { id: t3, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${t3}`;
  }
}
function S3(t3) {
  var a3, i5;
  try {
    (i5 = (a3 = p3()) == null ? void 0 : a3.success) == null || i5.call(a3, t3);
  } catch {
  }
}
var q, p3, v2, x2, l3, k2, y3, f3, C2, N2, A2, Y, u3, h3, d3;
var init_thawq_quiz = __esm({
  "../dist/thawq-quiz.js"() {
    "use strict";
    init_lit();
    init_decorators();
    q = i`
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
`;
    p3 = () => window.Salla;
    v2 = async () => {
      var t3, a3;
      try {
        await ((a3 = (t3 = p3()) == null ? void 0 : t3.onReady) == null ? void 0 : a3.call(t3));
      } catch {
      }
    };
    x2 = (t3, a3) => (document.documentElement.lang || "ar").startsWith("en") ? a3 : t3;
    l3 = (t3) => {
      const a3 = typeof t3 == "object" && t3 ? t3.amount : t3, i5 = Number(a3);
      return Number.isFinite(i5) ? i5 : 0;
    };
    k2 = (t3) => (Array.isArray(t3) ? t3 : []).map((a3) => Number(typeof a3 == "object" && a3 ? a3.value : a3)).filter((a3) => Number.isFinite(a3) && a3 > 0);
    y3 = (t3) => {
      var a3, i5;
      try {
        return ((i5 = (a3 = p3()) == null ? void 0 : a3.money) == null ? void 0 : i5.call(a3, t3)) ?? `${t3} ${x2("\u0631.\u0633", "SAR")}`;
      } catch {
        return `${t3} ${x2("\u0631.\u0633", "SAR")}`;
      }
    };
    f3 = (t3) => String(t3 && typeof t3 == "object" ? t3[(document.documentElement.lang || "ar").slice(0, 2)] ?? t3.ar ?? "" : t3 ?? "");
    C2 = (t3) => t3 ? `--tf-custom:${t3}` : "";
    N2 = i`
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
`;
    A2 = (t3, a3 = "") => b2`<article class="pc">${a3 ? b2`<span class="tag">${a3}</span>` : ""}
  <a class="ph" href=${t3.url}><img src=${t3.image} alt=${t3.name} loading="lazy" /></a>
  <div class="bd"><a class="nm" href=${t3.url}>${t3.name}</a>
    <div class="pr"><b>${y3(t3.price)}</b>${t3.regular > t3.price ? b2`<s>${y3(t3.regular)}</s>` : ""}</div>
    <button class="btn add" ?disabled=${!t3.available} @click=${async () => {
      await j(t3.id), S3("\u0623\u064F\u0636\u064A\u0641 \u0644\u0644\u0633\u0644\u0629 \u2713");
    }}>${t3.available ? "\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629" : "\u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631"}</button></div></article>`;
    Y = Object.defineProperty;
    u3 = (t3, a3, i5, n5) => {
      for (var s5 = void 0, e5 = t3.length - 1, r6; e5 >= 0; e5--)
        (r6 = t3[e5]) && (s5 = r6(a3, i5, s5) || s5);
      return s5 && Y(a3, i5, s5), s5;
    };
    h3 = class h4 extends i4 {
      constructor() {
        super(...arguments), this.step = 0, this.picks = [], this.res = null;
      }
      qs() {
        const a3 = this.config ?? {};
        return [a3.q1, a3.q2, a3.q3].map(f3).map((i5, n5) => ({ q: i5, i: n5 + 1, o: (a3.options ?? []).filter((s5) => Number(s5.step ?? 1) === n5 + 1 && f3(s5.label)) })).filter((i5) => i5.q && i5.o.length);
      }
      async pick(a3) {
        var e5;
        this.picks = [...this.picks, a3];
        const i5 = this.qs();
        if (this.step + 1 < i5.length) {
          this.step++;
          return;
        }
        this.step = i5.length, this.res = null;
        const n5 = /* @__PURE__ */ new Map();
        for (const r6 of this.picks) for (const c5 of k2(r6.products)) n5.set(c5, (n5.get(c5) ?? 0) + 1);
        const s5 = await _2([...n5.keys()].map((r6) => ({ value: r6 })));
        this.res = s5.filter((r6) => r6.available).sort((r6, c5) => n5.get(c5.id) - n5.get(r6.id) || c5.rating - r6.rating).slice(0, ((e5 = this.config) == null ? void 0 : e5.results) ?? 4);
      }
      reset() {
        this.step = 0, this.picks = [], this.res = null;
      }
      render() {
        const a3 = this.config ?? {}, i5 = this.qs();
        if (!i5.length) return b2`<div class="wrap"><p class="sub">أضف الأسئلة والخيارات من إعدادات العنصر.</p></div>`;
        const n5 = this.step >= i5.length, s5 = i5[this.step];
        return b2`<div class="wrap" style=${C2(a3.color)}><div class="box dark"><span class="eyebrow">🧭 مساعد الاختيار</span><h2 class="title">${f3(a3.title) || "\u0645\u062D\u062A\u0627\u0631\u061F \u0646\u062E\u062A\u0627\u0631 \u0645\u0639\u0643 \u0641\u064A 3 \u062E\u0637\u0648\u0627\u062A"}</h2>
      <div class="prog">${i5.map((e5, r6) => b2`<i class=${r6 <= this.step ? "on" : ""}></i>`)}</div>
      ${n5 ? b2`<h3>اخترنا لك هذي 👌</h3><p class="why">بناءً على: ${this.picks.map((e5) => f3(e5.label)).join(" \xB7 ")}</p>
          <div class="res">${this.res === null ? b2`<div class="skel" style="height:300px"></div>` : this.res.length ? this.res.map((e5, r6) => A2(e5, r6 === 0 ? "\u0627\u0644\u0623\u0646\u0633\u0628 \u0644\u0643" : "")) : b2`<p>ما لقينا تطابق، جرّب خيارات ثانية.</p>`}</div>
          <button class="back" @click=${this.reset}>↺ ابدأ من جديد</button>` : b2`${b2`<h3>${s5.q}</h3>`}<div class="opts">${s5.o.map((e5, r6) => b2`<button class="o" style="animation-delay:${r6 * 0.06}s" @click=${() => this.pick(e5)}><span>${e5.emoji || "\u2728"}</span><b>${f3(e5.label)}</b></button>`)}</div>
          ${this.step ? b2`<button class="back" @click=${() => {
          this.step--, this.picks = this.picks.slice(0, -1);
        }}>→ رجوع</button>` : ""}`}</div></div>`;
      }
    };
    h3.styles = [q, N2, i`
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
    d3 = h3;
    u3([
      n4({ type: Object })
    ], d3.prototype, "config");
    u3([
      r5()
    ], d3.prototype, "step");
    u3([
      r5()
    ], d3.prototype, "picks");
    u3([
      r5()
    ], d3.prototype, "res");
    typeof d3 < "u" && d3.registerSallaComponent("salla-thawq-quiz");
  }
});

// ../dist/thawq-box.js
var thawq_box_exports = {};
__export(thawq_box_exports, {
  default: () => f4
});
function _3(t3) {
  var s5, a3, c5, o6, r6, n5;
  const i5 = d4(t3 == null ? void 0 : t3.sale_price) && d4(t3 == null ? void 0 : t3.sale_price) < d4((t3 == null ? void 0 : t3.regular_price) ?? (t3 == null ? void 0 : t3.price)) ? d4(t3 == null ? void 0 : t3.sale_price) : d4(t3 == null ? void 0 : t3.price), e5 = Math.max(d4(t3 == null ? void 0 : t3.regular_price), d4(t3 == null ? void 0 : t3.price), i5);
  return {
    id: Number(t3 == null ? void 0 : t3.id),
    name: String((t3 == null ? void 0 : t3.name) ?? ""),
    url: String((t3 == null ? void 0 : t3.url) ?? "#"),
    image: String(((s5 = t3 == null ? void 0 : t3.image) == null ? void 0 : s5.url) ?? (t3 == null ? void 0 : t3.main_image) ?? (t3 == null ? void 0 : t3.thumbnail) ?? ((c5 = (a3 = t3 == null ? void 0 : t3.images) == null ? void 0 : a3[0]) == null ? void 0 : c5.url) ?? ""),
    price: i5,
    regular: e5,
    rating: d4(((o6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : o6.stars) ?? ((r6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : r6.rate) ?? (t3 == null ? void 0 : t3.rating)),
    ratingCount: d4((n5 = t3 == null ? void 0 : t3.rating) == null ? void 0 : n5.count),
    qty: (t3 == null ? void 0 : t3.quantity) == null || t3 != null && t3.unlimited_quantity ? null : d4(t3 == null ? void 0 : t3.quantity),
    available: (t3 == null ? void 0 : t3.is_available) !== false && (t3 == null ? void 0 : t3.status) !== "out"
  };
}
async function j2(t3) {
  return await k3(), (await Promise.all(S4(t3).map((e5) => {
    var s5, a3, c5, o6;
    return (o6 = (c5 = (a3 = (s5 = b3()) == null ? void 0 : s5.product) == null ? void 0 : a3.api) == null ? void 0 : c5.getDetails) == null ? void 0 : o6.call(c5, e5).then((r6) => _3(r6 == null ? void 0 : r6.data)).catch(() => null);
  }))).filter((e5) => !!e5 && !!e5.name);
}
async function q2(t3) {
  var i5, e5, s5;
  await k3();
  try {
    await ((s5 = (e5 = (i5 = b3()) == null ? void 0 : i5.cart) == null ? void 0 : e5.addItem) == null ? void 0 : s5.call(e5, { id: t3, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${t3}`;
  }
}
function y4(t3) {
  var i5, e5;
  try {
    (e5 = (i5 = b3()) == null ? void 0 : i5.success) == null || e5.call(i5, t3);
  } catch {
  }
}
var z3, b3, k3, x3, d4, S4, p4, u4, N3, A3, g2, h5, f4;
var init_thawq_box = __esm({
  "../dist/thawq-box.js"() {
    "use strict";
    init_lit();
    init_decorators();
    z3 = i`
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
`;
    b3 = () => window.Salla;
    k3 = async () => {
      var t3, i5;
      try {
        await ((i5 = (t3 = b3()) == null ? void 0 : t3.onReady) == null ? void 0 : i5.call(t3));
      } catch {
      }
    };
    x3 = (t3, i5) => (document.documentElement.lang || "ar").startsWith("en") ? i5 : t3;
    d4 = (t3) => {
      const i5 = typeof t3 == "object" && t3 ? t3.amount : t3, e5 = Number(i5);
      return Number.isFinite(e5) ? e5 : 0;
    };
    S4 = (t3) => (Array.isArray(t3) ? t3 : []).map((i5) => Number(typeof i5 == "object" && i5 ? i5.value : i5)).filter((i5) => Number.isFinite(i5) && i5 > 0);
    p4 = (t3) => {
      var i5, e5;
      try {
        return ((e5 = (i5 = b3()) == null ? void 0 : i5.money) == null ? void 0 : e5.call(i5, t3)) ?? `${t3} ${x3("\u0631.\u0633", "SAR")}`;
      } catch {
        return `${t3} ${x3("\u0631.\u0633", "SAR")}`;
      }
    };
    u4 = (t3) => String(t3 && typeof t3 == "object" ? t3[(document.documentElement.lang || "ar").slice(0, 2)] ?? t3.ar ?? "" : t3 ?? "");
    N3 = (t3) => t3 ? `--tf-custom:${t3}` : "";
    A3 = Object.defineProperty;
    g2 = (t3, i5, e5, s5) => {
      for (var a3 = void 0, c5 = t3.length - 1, o6; c5 >= 0; c5--)
        (o6 = t3[c5]) && (a3 = o6(i5, e5, a3) || a3);
      return a3 && A3(i5, e5, a3), a3;
    };
    h5 = class h6 extends i4 {
      constructor() {
        super(...arguments), this.list = null, this.picked = [], this.busy = false, this.seq = 0;
      }
      willUpdate(i5) {
        var e5;
        if (i5.has("config")) {
          const s5 = ++this.seq;
          this.list = null, this.picked = [], j2((e5 = this.config) == null ? void 0 : e5.products).then((a3) => {
            s5 === this.seq && (this.list = a3);
          });
        }
      }
      size() {
        var i5;
        return Math.min(8, Math.max(2, Number(((i5 = this.config) == null ? void 0 : i5.size) ?? 3)));
      }
      tap(i5) {
        if (!i5.available) return;
        this.picked.indexOf(i5.id) >= 0 ? this.picked = this.picked.filter((s5) => s5 !== i5.id) : this.picked.length < this.size() ? this.picked = [...this.picked, i5.id] : y4(`\u0627\u0644\u0635\u0646\u062F\u0648\u0642 \u0645\u0645\u062A\u0644\u0626 (${this.size()} \u0642\u0637\u0639)`);
      }
      async add(i5) {
        this.busy = true;
        for (const e5 of i5) await q2(e5.id);
        this.busy = false, y4("\u0635\u0646\u062F\u0648\u0642\u0643 \u0641\u064A \u0627\u0644\u0633\u0644\u0629 \u2713");
      }
      render() {
        const i5 = this.config ?? {}, e5 = this.size(), s5 = this.list ?? [], a3 = this.picked.map((r6) => s5.find((n5) => n5.id === r6)).filter(Boolean), c5 = a3.reduce((r6, n5) => r6 + n5.price, 0), o6 = e5 - a3.length;
        return b2`<div class="wrap" style=${N3(i5.color)}><span class="eyebrow">🎁 صمّم صندوقك</span><h2 class="title">${u4(i5.title) || "\u0627\u062E\u062A\u0631 " + e5 + " \u0642\u0637\u0639 \u0648\u0643\u0648\u0651\u0646 \u0635\u0646\u062F\u0648\u0642\u0643"}</h2>${u4(i5.subtitle) ? b2`<p class="sub">${u4(i5.subtitle)}</p>` : ""}
      <div class="g"><div class="grid">${this.list === null ? b2`<div class="skel" style="height:260px"></div>` : s5.map((r6) => {
          const n5 = this.picked.includes(r6.id);
          return b2`<button class="p ${n5 ? "on" : ""}" aria-pressed=${n5} aria-disabled=${!r6.available} @click=${() => this.tap(r6)}><span class="ck">${n5 ? "\u2713" : "+"}</span><img src=${r6.image} alt="" loading="lazy" /><div>${r6.name}<b>${r6.available ? p4(r6.price) : "\u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631"}</b></div></button>`;
        })}</div>
        <aside class="box dark"><b>صندوقك</b><div class="slots" style="--n:${e5}">${Array.from({ length: e5 }, (r6, n5) => b2`<div class="slot">${a3[n5] ? b2`<img src=${a3[n5].image} alt="" />` : n5 + 1}</div>`)}</div>
          <div class="bar"><i style="width:${a3.length / e5 * 100}%"></i></div>
          <p class="msg">${o6 > 0 ? b2`باقي <b>${o6}</b> ${o6 === 1 ? "\u0642\u0637\u0639\u0629" : "\u0642\u0637\u0639"}${u4(i5.reward) ? b2` وتحصل على <b>${u4(i5.reward)}</b>` : ""}` : b2`🎉 اكتمل صندوقك!${u4(i5.reward) ? b2` ${u4(i5.reward)}` : ""}${i5.coupon ? b2` — استخدم الكود <code>${i5.coupon}</code> في السلة` : ""}`}</p>
          <p class="msg">المجموع: <b>${p4(c5)}</b></p>
          <button class="btn" ?disabled=${o6 > 0 || this.busy} @click=${() => this.add(a3)}>${this.busy ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u2026" : o6 > 0 ? `\u0627\u062E\u062A\u0631 ${o6} \u0644\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u0635\u0646\u062F\u0648\u0642` : "\u0623\u0636\u0641 \u0627\u0644\u0635\u0646\u062F\u0648\u0642 \u0644\u0644\u0633\u0644\u0629"}</button></aside></div></div>`;
      }
    };
    h5.styles = [z3, i`
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
    f4 = h5;
    g2([
      n4({ type: Object })
    ], f4.prototype, "config");
    g2([
      r5()
    ], f4.prototype, "list");
    g2([
      r5()
    ], f4.prototype, "picked");
    g2([
      r5()
    ], f4.prototype, "busy");
    typeof f4 < "u" && f4.registerSallaComponent("salla-thawq-box");
  }
});

// ../dist/thawq-budget.js
var thawq_budget_exports = {};
__export(thawq_budget_exports, {
  default: () => c4
});
function z4(t3) {
  var n5, r6, i5, o6, d5, h7;
  const a3 = s4(t3 == null ? void 0 : t3.sale_price) && s4(t3 == null ? void 0 : t3.sale_price) < s4((t3 == null ? void 0 : t3.regular_price) ?? (t3 == null ? void 0 : t3.price)) ? s4(t3 == null ? void 0 : t3.sale_price) : s4(t3 == null ? void 0 : t3.price), e5 = Math.max(s4(t3 == null ? void 0 : t3.regular_price), s4(t3 == null ? void 0 : t3.price), a3);
  return {
    id: Number(t3 == null ? void 0 : t3.id),
    name: String((t3 == null ? void 0 : t3.name) ?? ""),
    url: String((t3 == null ? void 0 : t3.url) ?? "#"),
    image: String(((n5 = t3 == null ? void 0 : t3.image) == null ? void 0 : n5.url) ?? (t3 == null ? void 0 : t3.main_image) ?? (t3 == null ? void 0 : t3.thumbnail) ?? ((i5 = (r6 = t3 == null ? void 0 : t3.images) == null ? void 0 : r6[0]) == null ? void 0 : i5.url) ?? ""),
    price: a3,
    regular: e5,
    rating: s4(((o6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : o6.stars) ?? ((d5 = t3 == null ? void 0 : t3.rating) == null ? void 0 : d5.rate) ?? (t3 == null ? void 0 : t3.rating)),
    ratingCount: s4((h7 = t3 == null ? void 0 : t3.rating) == null ? void 0 : h7.count),
    qty: (t3 == null ? void 0 : t3.quantity) == null || t3 != null && t3.unlimited_quantity ? null : s4(t3 == null ? void 0 : t3.quantity),
    available: (t3 == null ? void 0 : t3.is_available) !== false && (t3 == null ? void 0 : t3.status) !== "out"
  };
}
async function S5(t3) {
  return await w2(), (await Promise.all(_4(t3).map((e5) => {
    var n5, r6, i5, o6;
    return (o6 = (i5 = (r6 = (n5 = m2()) == null ? void 0 : n5.product) == null ? void 0 : r6.api) == null ? void 0 : i5.getDetails) == null ? void 0 : o6.call(i5, e5).then((d5) => z4(d5 == null ? void 0 : d5.data)).catch(() => null);
  }))).filter((e5) => !!e5 && !!e5.name);
}
async function N4(t3) {
  var a3, e5, n5;
  await w2();
  try {
    await ((n5 = (e5 = (a3 = m2()) == null ? void 0 : a3.cart) == null ? void 0 : e5.addItem) == null ? void 0 : n5.call(e5, { id: t3, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${t3}`;
  }
}
function j3(t3) {
  var a3, e5;
  try {
    (e5 = (a3 = m2()) == null ? void 0 : a3.success) == null || e5.call(a3, t3);
  } catch {
  }
}
var k4, m2, w2, p5, s4, _4, u5, f5, q3, C3, A4, E2, g3, x4, c4;
var init_thawq_budget = __esm({
  "../dist/thawq-budget.js"() {
    "use strict";
    init_lit();
    init_decorators();
    k4 = i`
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
`;
    m2 = () => window.Salla;
    w2 = async () => {
      var t3, a3;
      try {
        await ((a3 = (t3 = m2()) == null ? void 0 : t3.onReady) == null ? void 0 : a3.call(t3));
      } catch {
      }
    };
    p5 = (t3, a3) => (document.documentElement.lang || "ar").startsWith("en") ? a3 : t3;
    s4 = (t3) => {
      const a3 = typeof t3 == "object" && t3 ? t3.amount : t3, e5 = Number(a3);
      return Number.isFinite(e5) ? e5 : 0;
    };
    _4 = (t3) => (Array.isArray(t3) ? t3 : []).map((a3) => Number(typeof a3 == "object" && a3 ? a3.value : a3)).filter((a3) => Number.isFinite(a3) && a3 > 0);
    u5 = (t3) => {
      var a3, e5;
      try {
        return ((e5 = (a3 = m2()) == null ? void 0 : a3.money) == null ? void 0 : e5.call(a3, t3)) ?? `${t3} ${p5("\u0631.\u0633", "SAR")}`;
      } catch {
        return `${t3} ${p5("\u0631.\u0633", "SAR")}`;
      }
    };
    f5 = (t3) => String(t3 && typeof t3 == "object" ? t3[(document.documentElement.lang || "ar").slice(0, 2)] ?? t3.ar ?? "" : t3 ?? "");
    q3 = (t3) => t3 ? `--tf-custom:${t3}` : "";
    C3 = i`
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
`;
    A4 = (t3, a3 = "") => b2`<article class="pc">${a3 ? b2`<span class="tag">${a3}</span>` : ""}
  <a class="ph" href=${t3.url}><img src=${t3.image} alt=${t3.name} loading="lazy" /></a>
  <div class="bd"><a class="nm" href=${t3.url}>${t3.name}</a>
    <div class="pr"><b>${u5(t3.price)}</b>${t3.regular > t3.price ? b2`<s>${u5(t3.regular)}</s>` : ""}</div>
    <button class="btn add" ?disabled=${!t3.available} @click=${async () => {
      await N4(t3.id), j3("\u0623\u064F\u0636\u064A\u0641 \u0644\u0644\u0633\u0644\u0629 \u2713");
    }}>${t3.available ? "\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629" : "\u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631"}</button></div></article>`;
    E2 = Object.defineProperty;
    g3 = (t3, a3, e5, n5) => {
      for (var r6 = void 0, i5 = t3.length - 1, o6; i5 >= 0; i5--)
        (o6 = t3[i5]) && (r6 = o6(a3, e5, r6) || r6);
      return r6 && E2(a3, e5, r6), r6;
    };
    x4 = class x5 extends i4 {
      constructor() {
        super(...arguments), this.list = null, this.tab = 0, this.seq = 0;
      }
      willUpdate(a3) {
        var e5;
        if (a3.has("config")) {
          const n5 = ++this.seq;
          this.list = null, this.tab = 0, S5((e5 = this.config) == null ? void 0 : e5.products).then((r6) => {
            n5 === this.seq && (this.list = r6);
          });
        }
      }
      bands() {
        var e5;
        const a3 = (((e5 = this.config) == null ? void 0 : e5.bands) ?? []).filter((n5) => f5(n5.label));
        return a3.length ? a3 : [{ label: "\u0623\u0642\u0644 \u0645\u0646 100", min: 0, max: 100 }, { label: "100 \u2013 300", min: 100, max: 300 }, { label: "\u0623\u0643\u062B\u0631 \u0645\u0646 300", min: 300, max: 0 }];
      }
      render() {
        const a3 = this.config ?? {}, e5 = this.list ?? [], n5 = this.bands().map((i5) => ({ b: i5, items: e5.filter((o6) => o6.price >= Number(i5.min ?? 0) && (!Number(i5.max) || o6.price < Number(i5.max))) })).filter((i5) => this.list === null || i5.items.length), r6 = n5[Math.min(this.tab, n5.length - 1)];
        return b2`<div class="wrap" style=${q3(a3.color)}><span class="eyebrow">💰 حسب ميزانيتك</span><h2 class="title">${f5(a3.title) || "\u0647\u062F\u064A\u0629 \u062A\u0646\u0627\u0633\u0628 \u0645\u064A\u0632\u0627\u0646\u064A\u062A\u0643"}</h2>${f5(a3.subtitle) ? b2`<p class="sub">${f5(a3.subtitle)}</p>` : ""}
      <div class="tabs" role="tablist">${n5.map((i5, o6) => b2`<button class="t ${i5 === r6 ? "on" : ""}" role="tab" aria-selected=${i5 === r6} @click=${() => this.tab = o6}>${f5(i5.b.label)} <small>${i5.items.length}</small></button>`)}</div>
      <div class="grid" role="tabpanel">${this.list === null ? b2`<div class="skel" style="height:300px"></div>` : r6 == null ? void 0 : r6.items.sort((i5, o6) => o6.rating - i5.rating).map((i5, o6) => A4(i5, o6 === 0 ? "\u0627\u0644\u0623\u0639\u0644\u0649 \u062A\u0642\u064A\u064A\u0645\u0627\u064B" : i5.regular > i5.price ? `\u0648\u0641\u0651\u0631 ${u5(i5.regular - i5.price)}` : ""))}</div></div>`;
      }
    };
    x4.styles = [k4, C3, i`
    .tabs { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 24px; }
    .t { all: unset; cursor: pointer; padding: 12px 20px; border-radius: 99px; border: 1px solid #0000001c; font-weight: 700; display: inline-flex; gap: 8px; align-items: center; transition: .3s; }
    .t small { opacity: .55; font-weight: 500; } .t.on { background: var(--tf-accent); color: #fff; border-color: transparent; box-shadow: 0 14px 30px -14px var(--tf-accent); } .t.on small { opacity: .85; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 18px; } .grid > * { animation: up .45s both; } @keyframes up { from { opacity: 0; transform: translateY(14px); } }
  `];
    c4 = x4;
    g3([
      n4({ type: Object })
    ], c4.prototype, "config");
    g3([
      r5()
    ], c4.prototype, "list");
    g3([
      r5()
    ], c4.prototype, "tab");
    typeof c4 < "u" && c4.registerSallaComponent("salla-thawq-budget");
  }
});

// ../dist/thawq-shipping.js
var thawq_shipping_exports = {};
__export(thawq_shipping_exports, {
  default: () => p6
});
async function g4() {
  var t3, e5, i5, a3, r6, c5;
  await N5();
  const n5 = x6();
  try {
    const s5 = await (((i5 = (e5 = (t3 = n5 == null ? void 0 : n5.cart) == null ? void 0 : t3.api) == null ? void 0 : e5.details) == null ? void 0 : i5.call(e5)) ?? ((r6 = (a3 = n5 == null ? void 0 : n5.cart) == null ? void 0 : a3.details) == null ? void 0 : r6.call(a3))), o6 = ((c5 = s5 == null ? void 0 : s5.data) == null ? void 0 : c5.cart) ?? (s5 == null ? void 0 : s5.data) ?? s5, l4 = j4((o6 == null ? void 0 : o6.sub_total) ?? (o6 == null ? void 0 : o6.total) ?? (o6 == null ? void 0 : o6.total_price));
    if (l4 || l4 === 0) return l4;
  } catch {
  }
  return null;
}
function R2(n5) {
  var a3, r6, c5, s5, o6, l4, b4, y5, h7, k5;
  const t3 = x6(), e5 = (d5) => {
    var $2;
    const f6 = (($2 = d5 == null ? void 0 : d5.data) == null ? void 0 : $2.cart) ?? (d5 == null ? void 0 : d5.cart) ?? d5, w3 = f6 && (f6.sub_total ?? f6.total) != null ? j4(f6.sub_total ?? f6.total) : null;
    w3 != null ? n5(w3) : g4().then(n5);
  };
  try {
    (c5 = (r6 = (a3 = t3 == null ? void 0 : t3.cart) == null ? void 0 : a3.event) == null ? void 0 : r6.onUpdated) == null || c5.call(r6, e5), (l4 = (o6 = (s5 = t3 == null ? void 0 : t3.cart) == null ? void 0 : s5.event) == null ? void 0 : o6.onItemAdded) == null || l4.call(o6, e5);
  } catch {
  }
  try {
    (y5 = (b4 = t3 == null ? void 0 : t3.event) == null ? void 0 : b4.on) == null || y5.call(b4, "cart::updated", e5), (k5 = (h7 = t3 == null ? void 0 : t3.event) == null ? void 0 : h7.on) == null || k5.call(h7, "cart::item.added", e5);
  } catch {
  }
  const i5 = () => {
    g4().then(n5);
  };
  return window.addEventListener("focus", i5), () => window.removeEventListener("focus", i5);
}
var M2, x6, N5, z5, j4, C4, m3, X, O, E3, v3, p6;
var init_thawq_shipping = __esm({
  "../dist/thawq-shipping.js"() {
    "use strict";
    init_lit();
    init_decorators();
    M2 = i`
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
`;
    x6 = () => window.Salla;
    N5 = async () => {
      var n5, t3;
      try {
        await ((t3 = (n5 = x6()) == null ? void 0 : n5.onReady) == null ? void 0 : t3.call(n5));
      } catch {
      }
    };
    z5 = (n5, t3) => (document.documentElement.lang || "ar").startsWith("en") ? t3 : n5;
    j4 = (n5) => {
      const t3 = typeof n5 == "object" && n5 ? n5.amount : n5, e5 = Number(t3);
      return Number.isFinite(e5) ? e5 : 0;
    };
    C4 = (n5) => {
      var t3, e5;
      try {
        return ((e5 = (t3 = x6()) == null ? void 0 : t3.money) == null ? void 0 : e5.call(t3, n5)) ?? `${n5} ${z5("\u0631.\u0633", "SAR")}`;
      } catch {
        return `${n5} ${z5("\u0631.\u0633", "SAR")}`;
      }
    };
    m3 = (n5) => String(n5 && typeof n5 == "object" ? n5[(document.documentElement.lang || "ar").slice(0, 2)] ?? n5.ar ?? "" : n5 ?? "");
    X = (n5) => n5 ? `--tf-custom:${n5}` : "";
    O = Object.defineProperty;
    E3 = (n5, t3, e5, i5) => {
      for (var a3 = void 0, r6 = n5.length - 1, c5; r6 >= 0; r6--)
        (c5 = n5[r6]) && (a3 = c5(t3, e5, a3) || a3);
      return a3 && O(t3, e5, a3), a3;
    };
    v3 = class v4 extends i4 {
      constructor() {
        super(...arguments), this.total = null;
      }
      connectedCallback() {
        super.connectedCallback(), g4().then((t3) => this.total = t3), this.off = R2((t3) => this.total = t3);
      }
      disconnectedCallback() {
        var t3;
        super.disconnectedCallback(), (t3 = this.off) == null || t3.call(this);
      }
      render() {
        const t3 = this.config ?? {}, e5 = Math.max(1, Number(t3.threshold ?? 300)), i5 = this.total ?? 0, a3 = Math.max(0, e5 - i5), r6 = a3 === 0;
        return b2`<div class="wrap" style="padding-block:16px;${X(t3.color)}"><div class="b dark ${r6 ? "ok" : ""}" role="status">
      <span class="ic"><span class="truck">${r6 ? "\u{1F389}" : "\u{1F69A}"}</span></span>
      <div><p>${r6 ? b2`<b>${m3(t3.done) || "\u0645\u0628\u0631\u0648\u0643! \u0637\u0644\u0628\u0643 \u0635\u0627\u0631 \u0634\u062D\u0646\u0647 \u0645\u062C\u0627\u0646\u064A"}</b>` : i5 > 0 ? b2`باقي <b>${C4(a3)}</b> و${m3(t3.reward) || "\u064A\u0635\u064A\u0631 \u0627\u0644\u0634\u062D\u0646 \u0645\u062C\u0627\u0646\u064A"}` : b2`${m3(t3.reward) || "\u0627\u0644\u0634\u062D\u0646 \u0645\u062C\u0627\u0646\u064A"} للطلبات فوق <b>${C4(e5)}</b>`}</p>
        <div class="tr" aria-hidden="true"><div class="fl" style="width:${Math.min(100, i5 / e5 * 100)}%"></div></div></div>
      ${!r6 && m3(t3.button) && t3.link ? b2`<a class="btn" href=${t3.link}>${m3(t3.button)}</a>` : ""}</div></div>`;
      }
    };
    v3.styles = [M2, i`
    .b { border-radius: 22px; padding: 18px 22px; display: grid; grid-template-columns: auto 1fr auto; gap: 18px; align-items: center; }
    @media (max-width: 640px) { .b { grid-template-columns: auto 1fr; } .b .btn { grid-column: 1 / -1; justify-content: center; } }
    .ic { width: 54px; height: 54px; border-radius: 16px; display: grid; place-items: center; font-size: 26px; background: color-mix(in srgb, var(--tf-accent) 18%, transparent); }
    .truck { display: inline-block; animation: drive 2.4s ease-in-out infinite; } @keyframes drive { 50% { transform: translateX(-4px); } }
    p { margin: 0 0 10px; font-size: 15px; } p b { color: var(--tf-accent); }
    .tr { height: 10px; border-radius: 99px; background: #ffffff1a; overflow: hidden; position: relative; } .fl { height: 100%; border-radius: inherit; background: var(--tf-gold); transition: width .8s cubic-bezier(.2,.8,.2,1); position: relative; overflow: hidden; }
    .fl::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, transparent, #fff8, transparent); animation: sh 2s infinite; } @keyframes sh { from { transform: translateX(100%); } to { transform: translateX(-100%); } }
    .ok .ic { background: #2fbf7130; }
  `];
    p6 = v3;
    E3([
      n4({ type: Object })
    ], p6.prototype, "config");
    E3([
      r5()
    ], p6.prototype, "total");
    typeof p6 < "u" && p6.registerSallaComponent("salla-thawq-shipping");
  }
});

// entry.js
init_lit();
i4.registerSallaComponent = function(n5) {
  if (!customElements.get(n5)) customElements.define(n5, this);
};
await Promise.resolve().then(() => (init_thawq_quiz(), thawq_quiz_exports));
await Promise.resolve().then(() => (init_thawq_box(), thawq_box_exports));
await Promise.resolve().then(() => (init_thawq_budget(), thawq_budget_exports));
await Promise.resolve().then(() => (init_thawq_shipping(), thawq_shipping_exports));
window.__ready = true;
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
