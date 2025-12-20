(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,Q=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),ot=new WeakMap;let mt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Q&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=ot.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ot.set(e,t))}return t}toString(){return this.cssText}};const wt=i=>new mt(typeof i=="string"?i:i+"",void 0,X),Et=(i,...t)=>{const e=i.length===1?i[0]:t.reduce(((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1]),i[0]);return new mt(e,i,X)},St=(i,t)=>{if(Q)i.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const s=document.createElement("style"),r=H.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},nt=Q?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return wt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ct,defineProperty:xt,getOwnPropertyDescriptor:Ot,getOwnPropertyNames:Rt,getOwnPropertySymbols:Pt,getPrototypeOf:Mt}=Object,I=globalThis,lt=I.trustedTypes,Nt=lt?lt.emptyScript:"",Ut=I.reactiveElementPolyfillSupport,P=(i,t)=>i,q={toAttribute(i,t){switch(t){case Boolean:i=i?Nt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},tt=(i,t)=>!Ct(i,t),ct={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:tt};Symbol.metadata??=Symbol("metadata"),I.litPropertyMetadata??=new WeakMap;let S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ct){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&xt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:o}=Ot(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){const a=r?.call(this);o?.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ct}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=Mt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,s=[...Rt(e),...Pt(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(nt(r))}else t!==void 0&&e.push(nt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return St(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:q).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const o=s.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:q;this._$Em=r;const a=n.fromAttribute(e,o.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const r=this.constructor,o=this[t];if(s??=r.getPropertyOptions(t),!((s.hasChanged??tt)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s){const{wrapped:n}=o,a=this[r];n!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[P("elementProperties")]=new Map,S[P("finalized")]=new Map,Ut?.({ReactiveElement:S}),(I.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=globalThis,D=et.trustedTypes,at=D?D.createPolicy("lit-html",{createHTML:i=>i}):void 0,gt="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,_t="?"+y,Tt=`<${_t}>`,w=document,U=()=>w.createComment(""),T=i=>i===null||typeof i!="object"&&typeof i!="function",st=Array.isArray,kt=i=>st(i)||typeof i?.[Symbol.iterator]=="function",Y=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ht=/-->/g,dt=/>/g,A=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ut=/'/g,pt=/"/g,yt=/^(?:script|style|textarea|title)$/i,zt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),v=zt(1),C=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),ft=new WeakMap,b=w.createTreeWalker(w,129);function At(i,t){if(!st(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return at!==void 0?at.createHTML(t):t}const Ht=(i,t)=>{const e=i.length-1,s=[];let r,o=t===2?"<svg>":t===3?"<math>":"",n=R;for(let a=0;a<e;a++){const l=i[a];let u,h,p=-1,c=0;for(;c<l.length&&(n.lastIndex=c,h=n.exec(l),h!==null);)c=n.lastIndex,n===R?h[1]==="!--"?n=ht:h[1]!==void 0?n=dt:h[2]!==void 0?(yt.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=A):h[3]!==void 0&&(n=A):n===A?h[0]===">"?(n=r??R,p=-1):h[1]===void 0?p=-2:(p=n.lastIndex-h[2].length,u=h[1],n=h[3]===void 0?A:h[3]==='"'?pt:ut):n===pt||n===ut?n=A:n===ht||n===dt?n=R:(n=A,r=void 0);const d=n===A&&i[a+1].startsWith("/>")?" ":"";o+=n===R?l+Tt:p>=0?(s.push(u),l.slice(0,p)+gt+l.slice(p)+y+d):l+y+(p===-2?a:d)}return[At(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class k{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[u,h]=Ht(t,e);if(this.el=k.createElement(u,s),b.currentNode=this.el.content,e===2||e===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=b.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const p of r.getAttributeNames())if(p.endsWith(gt)){const c=h[n++],d=r.getAttribute(p).split(y),$=/([.?@])?(.*)/.exec(c);l.push({type:1,index:o,name:$[2],strings:d,ctor:$[1]==="."?Wt:$[1]==="?"?qt:$[1]==="@"?Dt:B}),r.removeAttribute(p)}else p.startsWith(y)&&(l.push({type:6,index:o}),r.removeAttribute(p));if(yt.test(r.tagName)){const p=r.textContent.split(y),c=p.length-1;if(c>0){r.textContent=D?D.emptyScript:"";for(let d=0;d<c;d++)r.append(p[d],U()),b.nextNode(),l.push({type:2,index:++o});r.append(p[c],U())}}}else if(r.nodeType===8)if(r.data===_t)l.push({type:2,index:o});else{let p=-1;for(;(p=r.data.indexOf(y,p+1))!==-1;)l.push({type:7,index:o}),p+=y.length-1}o++}}static createElement(t,e){const s=w.createElement("template");return s.innerHTML=t,s}}function x(i,t,e=i,s){if(t===C)return t;let r=s!==void 0?e._$Co?.[s]:e._$Cl;const o=T(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,e,s)),s!==void 0?(e._$Co??=[])[s]=r:e._$Cl=r),r!==void 0&&(t=x(i,r._$AS(i,t.values),r,s)),t}class Lt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??w).importNode(e,!0);b.currentNode=r;let o=b.nextNode(),n=0,a=0,l=s[0];for(;l!==void 0;){if(n===l.index){let u;l.type===2?u=new z(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new Vt(o,this,t)),this._$AV.push(u),l=s[++a]}n!==l?.index&&(o=b.nextNode(),n++)}return b.currentNode=w,r}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),T(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):kt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=k.createElement(At(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{const o=new Lt(r,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=ft.get(t.strings);return e===void 0&&ft.set(t.strings,e=new k(t)),e}k(t){st(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const o of t)r===e.length?e.push(s=new z(this.O(U()),this.O(U()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(t,e=this,s,r){const o=this.strings;let n=!1;if(o===void 0)t=x(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==C,n&&(this._$AH=t);else{const a=t;let l,u;for(t=o[0],l=0;l<o.length-1;l++)u=x(this,a[s+l],e,l),u===C&&(u=this._$AH[l]),n||=!T(u)||u!==this._$AH[l],u===f?t=f:t!==f&&(t+=(u??"")+o[l+1]),this._$AH[l]=u}n&&!r&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Wt extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}class qt extends B{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}}class Dt extends B{constructor(t,e,s,r,o){super(t,e,s,r,o),this.type=5}_$AI(t,e=this){if((t=x(this,t,e,0)??f)===C)return;const s=this._$AH,r=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==f&&(s===f||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Vt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const It=et.litHtmlPolyfillSupport;It?.(k,z),(et.litHtmlVersions??=[]).push("3.3.1");const Bt=(i,t,e)=>{const s=e?.renderBefore??t;let r=s._$litPart$;if(r===void 0){const o=e?.renderBefore??null;s._$litPart$=r=new z(t.insertBefore(U(),o),o,void 0,e??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=globalThis;let M=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Bt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C}};M._$litElement$=!0,M.finalized=!0,it.litElementHydrateSupport?.({LitElement:M});const jt=it.litElementPolyfillSupport;jt?.({LitElement:M});(it.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:tt},Ft=(i=Gt,t,e)=>{const{kind:s,metadata:r}=e;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),s==="accessor"){const{name:n}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,i)},init(a){return a!==void 0&&this.C(n,void 0,i,a),a}}}if(s==="setter"){const{name:n}=e;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,i)}}throw Error("Unsupported decorator location: "+s)};function j(i){return(t,e)=>typeof e=="object"?Ft(i,t,e):((s,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(r,o):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function G(i){return j({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt={CHILD:2},Kt=i=>(...t)=>({_$litDirective$:i,values:t});class Zt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=(i,t)=>{const e=i._$AN;if(e===void 0)return!1;for(const s of e)s._$AO?.(t,!1),N(s,t);return!0},V=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while(e?.size===0)},bt=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),te(t)}};function Qt(i){this._$AN!==void 0?(V(this),this._$AM=i,bt(this)):this._$AM=i}function Xt(i,t=!1,e=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let o=e;o<s.length;o++)N(s[o],!1),V(s[o]);else s!=null&&(N(s,!1),V(s));else N(this,i)}const te=i=>{i.type==Jt.CHILD&&(i._$AP??=Xt,i._$AQ??=Qt)};class ee extends Zt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),bt(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(N(this,t),V(this))}setValue(t){if(Yt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=()=>new se;class se{}const K=new WeakMap,Z=Kt(class extends ee{render(i){return f}update(i,[t]){const e=t!==this.G;return e&&this.G!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=i.options?.host,this.rt(this.ct=i.element)),f}rt(i){if(this.isConnected||(i=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let e=K.get(t);e===void 0&&(e=new WeakMap,K.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,i),i!==void 0&&this.G.call(this.ht,i)}else this.G.value=i}get lt(){return typeof this.G=="function"?K.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var ie=Object.defineProperty,E=(i,t,e,s)=>{for(var r=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(r=n(t,e,r)||r);return r&&ie(t,e,r),r};const rt=class rt extends M{constructor(){super(...arguments),this.itemRefs=[],this.overflowRef=J(),this.resizeObserver=null,this.measuredWidths=[],this.overflowWidth=0,this.measured=!1,this.visibleCount=0,this._cumulativeWidths=null,this.items=[],this.itemRenderer=null,this.overflowRenderer=null}async firstUpdated(){await this.updateComplete,this.resizeObserver||(this.resizeObserver=new ResizeObserver(()=>this.onContainerResize()),this.resizeObserver.observe(this.parentElement||this))}async updated(t){t.has("items")&&(this.measured=!1,this.itemRefs=[],await this.updateComplete,this.measureAllItems())}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.resizeObserver=null}measureAllItems(){this.items.forEach((t,e)=>{this.itemRefs[e]||(this.itemRefs[e]=J())}),this.updateComplete.then(()=>{const t=[];this.items.forEach((e,s)=>{const r=this.itemRefs[s]?.value||null;t[s]=r?r.getBoundingClientRect().width:0}),this.measureOverflowWidth(),this.measuredWidths=t,this.measured=!0,this.updateComplete.then(()=>{this.computeVisibleForCurrentWidth({force:!0})})})}measureOverflowWidth(){const t=this.overflowRef.value;this.overflowWidth=t?.getBoundingClientRect().width??0}onContainerResize(){this.computeVisibleForCurrentWidth()}async computeVisibleForCurrentWidth({force:t=!1}={}){const e=this.parentElement?.clientWidth??0,s=this.measuredWidths,r=this.items.length;if(r===0||e<=0){this.visibleCount!==0&&(this.visibleCount=0);return}if(t||!this._cumulativeWidths||this._cumulativeWidths.length!==s.length){const d=new Array(s.length);let $=0;for(let m=0;m<s.length;m++)$+=s[m]??0,d[m]=$;this._cumulativeWidths=d}const o=this._cumulativeWidths,n=this.overflowWidth||0;let a=0,l=s.length-1,u;for(;a<=l;)u=a+l>>1,o[u]<=e?a=u+1:l=u-1;let h=a;if(r-h>0&&n>0)for(;h>0&&o[h-1]+n>e;)h--;h!==this.visibleCount&&(this.visibleCount=h)}render(){const{items:t,visibleCount:e,itemRenderer:s,overflowRenderer:r,measured:o,itemRefs:n}=this;if(!s)return v`<div>No renderer provided</div>`;if(!o)return t.forEach((u,h)=>{n[h]||(n[h]=J())}),v`
        ${t.map((u,h)=>v`<span ${Z(n[h])}
              >${s(u,h)}</span
            >`)}
        ${r?v`<span ${Z(this.overflowRef)}
              >${r(t)}</span
            >`:f}
      `;if(e===0)return f;const a=t.slice(0,e).map((u,h)=>v`<span>${s(u,h)}</span>`),l=e<t.length?v`<span ${Z(this.overflowRef)}
            >${r(t.slice(e))}</span
          >`:f;return v`${a}${l}`}};rt.styles=Et`
    :host {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      text-align: left;
    }
    span {
      display: inline-block;
    }
    *:not(:defined) {
      display: none;
    }
    cds-tag,
    cds-operational-tag,
    cds-dismissible-tag {
      margin: 0.125rem;
    }
  `;let g=rt;E([G()],g.prototype,"measuredWidths");E([G()],g.prototype,"overflowWidth");E([G()],g.prototype,"measured");E([G()],g.prototype,"visibleCount");E([j({type:Array})],g.prototype,"items");E([j({attribute:!1})],g.prototype,"itemRenderer");E([j({attribute:!1})],g.prototype,"overflowRenderer");customElements.define("overflow-wc",g);const $t=["red","magenta","purple","blue","cyan","teal","green","gray","cool-gray","warm-gray"],vt=["Alpha","Beta","Gamma","Delta","Orion","Zenith","Nova","Cosmos","Pixel","Quantum"];function re(i){const t=new Array(i),e=vt.length,s=$t.length,r=(o,n)=>{alert(`Clicked item-${o} ${n}`)};for(let o=0;o<i;o++){const n=o+1,a=vt[o%e];t[o]={id:`item-${n}`,label:a,type:$t[o%s],onClick:()=>r(n,a)}}return t}let L="tag",W="operational-tag";function oe(i){switch(L){case"tag":return v`
        <cds-tag data-id=${i.id} type=${i.type} size="md">
          ${i.label}
        </cds-tag>
      `;case"dismissable-tag":return v`
        <cds-dismissible-tag
          dismiss-tooltip-alignment="right"
          data-id=${i.id}
          type=${i.type}
          text=${i.label}
          size="md"
        >
        </cds-dismissible-tag>
      `;case"button":return v`
        <cds-button kind="ghost" size="md" @click=${()=>i.onClick?.(i)}>
          ${i.label}
        </cds-button>
      `;case"icon-button":default:return v`
        <div style="block-size: 40px; inline-size: 40px;">
          <cds-button
          kind="ghost"
          size="md"
          tooltip-text=${i.label}
          tooltip-position="right"
          @click=${()=>i.onClick?.(i)}
        >
          <svg
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            slot="icon"
            fill="currentColor"
            width="16"
            height="16"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z"></path>
          </svg>
        </cds-button>
        </div>
      `}}function ne(i){switch(W){case"tag":return v`
        <cds-tag
          @click=${()=>console.log(i)}
          type="gray"
          size=${i[0]?.size||"md"}
        >
          +${i.length}
        </cds-tag>
      `;case"operational-tag":return v`
        <cds-popover
          caret
          align="bottom-right"
          autoalign
          highcontrast
          autoalign-boundary="#left"
        >
          <cds-operational-tag
            style="user-select: none;"
            @cds-operational-tag-selected=${t=>{let e=t.target.selected;const s=t.target?.closest("cds-popover");requestAnimationFrame(()=>{s&&(s.open=e||!1)})}}
            type="gray"
            text="+${i.length}"
            size=${i[0]?.size||"md"}
          ></cds-operational-tag>
          <cds-popover-content>
            <div style="padding: 1rem; font-size: 14px;">
              ${i.slice(0,10).map(t=>v` <div>${t.label}</div> `)}
              ${i.length>10?v`<button @click=${()=>console.log(i)} style="padding: 0; outline: none; border: none; background: transparent; color: var(--cds-link-inverse); cursor: pointer; margin-top: 0.4rem;">View all (${i.length})</button>`:""}
            </div>
          </cds-popover-content>
        </cds-popover>
      `;case"button":return v`
        <cds-icon-button
          @click=${()=>console.log("Hidden:",i)}
          align="left"
          kind="ghost"
          size=${i[0]?.size||"md"}
        >
          <svg
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            fill="currentColor"
            slot="icon"
            width="16"
            height="16"
            viewBox="0 0 32 32"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="8" r="2"></circle>
            <circle cx="16" cy="16" r="2"></circle>
            <circle cx="16" cy="24" r="2"></circle>
            <title>Overflow menu vertical</title>
          </svg>
          <span slot="tooltip-content">+${i.length}</span>
        </cds-icon-button>
      `;case"icon-button":return v`
      <div style="block-size: 40px; inline-size: 40px;">
        <cds-icon-button
          @click=${()=>console.log("Hidden:",i)}
          align="left"
          kind="ghost"
          size="md"
        >
          <svg
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            fill="currentColor"
            slot="icon"
            width="16"
            height="16"
            viewBox="0 0 32 32"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="8" r="2"></circle>
            <circle cx="16" cy="16" r="2"></circle>
            <circle cx="16" cy="24" r="2"></circle>
            <title>Overflow menu vertical</title>
          </svg>
          <span slot="tooltip-content">+${i.length}</span>
        </cds-icon-button>
        </div>
      `;case"overflow-menu":return v`<cds-overflow-menu size="md" index="1" kind="ghost">
        <svg
          focusable="false"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="cds--overflow-menu__icon"
          slot="icon"
          width="16"
          height="16"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <circle cx="16" cy="8" r="2"></circle>
          <circle cx="16" cy="16" r="2"></circle>
          <circle cx="16" cy="24" r="2"></circle>
        </svg>
        <span slot="tooltip-content"> Options </span>
        <cds-overflow-menu-body flipped>
          ${i.map(t=>v` <cds-overflow-menu-item
              @click=${()=>t.onClick?.(t)}
              >${t.label}</cds-overflow-menu-item
            >`)}
        </cds-overflow-menu-body>
      </cds-overflow-menu> `;default:return v``}}window.addEventListener("DOMContentLoaded",()=>{const i=document.querySelectorAll("overflow-wc"),t=document.querySelector("cds-number-input"),e=document.querySelectorAll("cds-popover"),s=document.querySelector('cds-select[label-text="Theme"]'),r=document.querySelector('cds-select[label-text="Item Renderer"]'),o=document.querySelector('cds-select[label-text="Overflow Renderer"]'),n=c=>c?c.value??c.getAttribute?.("value")??c.querySelector?.("cds-select-item[selected]")?.getAttribute("value")??null:null,a="overflow-wc-config",l=c=>{try{localStorage.setItem(a,JSON.stringify(c))}catch{}},u=()=>{try{const c=localStorage.getItem(a);return c?JSON.parse(c):null}catch{return null}},h=()=>{const c=t?.value??t?.getAttribute?.("value"),d=parseInt(c||"0",10)||0;i.forEach(m=>{m.items=re(d),m.itemRenderer=oe,m.overflowRenderer=ne});const $=u()||{};$.count=d,l($)},p=()=>{const c=u(),d=c?.itemVariant??n(r);if(d&&["tag","dismissable-tag","button","icon-button"].includes(d)){L=d;try{if(r){r.value=d,r.setAttribute?.("value",d);const _=r.querySelector?.(`cds-select-item[value="${d}"]`);_&&(r.querySelectorAll?.("cds-select-item[selected]")?.forEach(O=>O.removeAttribute("selected")),_.setAttribute("selected",""))}}catch{}}const $=c?.overflowVariant??n(o);if($){W=$;try{if(o){o.value=$,o.setAttribute?.("value",$);const _=o.querySelector?.(`cds-select-item[value="${$}"]`);_&&(o.querySelectorAll?.("cds-select-item[selected]")?.forEach(O=>O.removeAttribute("selected")),_.setAttribute("selected",""))}}catch{}}const m=c?.theme??n(s);if(m){document.body.className=`cds-theme-zone-${m}`;try{if(s){s.value=m,s.setAttribute?.("value",m);const _=s.querySelector?.(`cds-select-item[value="${m}"]`);_&&(s.querySelectorAll?.("cds-select-item[selected]")?.forEach(O=>O.removeAttribute("selected")),_.setAttribute("selected",""))}}catch{}}const F=c?.count;if(typeof F=="number")try{t&&(t.setAttribute?.("value",String(F)),t.value=String(F))}catch{}};t&&(t.addEventListener("cds-number-input",c=>{h();const d=c?.detail?.value??c?.detail?.valueAsNumber;if(typeof d<"u"){const $=u()||{};$.count=parseInt(String(d),10)||$.count||0,l($)}}),t.addEventListener("change",h),t.addEventListener("input",h)),r?.addEventListener("cds-select-selected",()=>{const c=n(r);if(c){L=c;const d=u()||{};d.itemVariant=L,l(d),h()}}),o?.addEventListener("cds-select-selected",()=>{const c=n(o);if(c){W=c;const d=u()||{};d.overflowVariant=W,l(d),h()}}),s?.addEventListener("cds-select-selected",()=>{const c=n(s);if(c){document.body.className=`cds-theme-zone-${c}`;const d=u()||{};d.theme=c,l(d)}}),e.forEach(c=>c.addEventListener("click",d=>d.stopPropagation())),p(),requestAnimationFrame(()=>{h()})});
