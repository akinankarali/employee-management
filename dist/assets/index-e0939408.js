var ve=Object.defineProperty;var $e=(n,e,t)=>e in n?ve(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var u=(n,e,t)=>($e(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,K=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),te=new WeakMap;let pe=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(K&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=te.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&te.set(t,e))}return e}toString(){return this.cssText}};const we=n=>new pe(typeof n=="string"?n:n+"",void 0,Z),k=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,a)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[a+1],n[0]);return new pe(t,n,Z)},_e=(n,e)=>{if(K)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=I.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)}},ie=K?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return we(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ee,defineProperty:Se,getOwnPropertyDescriptor:xe,getOwnPropertyNames:Ae,getOwnPropertySymbols:Ce,getPrototypeOf:ke}=Object,$=globalThis,se=$.trustedTypes,Pe=se?se.emptyScript:"",q=$.reactiveElementPolyfillSupport,M=(n,e)=>n,X={toAttribute(n,e){switch(e){case Boolean:n=n?Pe:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},me=(n,e)=>!Ee(n,e),ae={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:me};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);class x extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ae){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Se(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:a}=xe(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const h=s==null?void 0:s.call(this);a.call(this,o),this.requestUpdate(e,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ae}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;const e=ke(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){const t=this.properties,i=[...Ae(t),...Ce(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(ie(s))}else e!==void 0&&t.push(ie(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _e(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var a;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((a=i.converter)==null?void 0:a.toAttribute)!==void 0?i.converter:X).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var a;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((a=o.converter)==null?void 0:a.fromAttribute)!==void 0?o.converter:X;this._$Em=s,this[s]=h.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??me)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,o]of this._$Ep)this[a]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,o]of s)o.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var a;return(a=s.hostUpdate)==null?void 0:a.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[M("elementProperties")]=new Map,x[M("finalized")]=new Map,q==null||q({ReactiveElement:x}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,O=D.trustedTypes,ne=O?O.createPolicy("lit-html",{createHTML:n=>n}):void 0,ue="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,ge="?"+v,Me=`<${ge}>`,E=document,N=()=>E.createComment(""),T=n=>n===null||typeof n!="object"&&typeof n!="function",ee=Array.isArray,De=n=>ee(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",H=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oe=/-->/g,re=/>/g,w=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),le=/'/g,de=/"/g,ye=/^(?:script|style|textarea|title)$/i,Ne=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),l=Ne(1),A=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),he=new WeakMap,_=E.createTreeWalker(E,129);function fe(n,e){if(!ee(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ne!==void 0?ne.createHTML(e):e}const Te=(n,e)=>{const t=n.length-1,i=[];let s,a=e===2?"<svg>":e===3?"<math>":"",o=P;for(let h=0;h<t;h++){const r=n[h];let c,p,d=-1,g=0;for(;g<r.length&&(o.lastIndex=g,p=o.exec(r),p!==null);)g=o.lastIndex,o===P?p[1]==="!--"?o=oe:p[1]!==void 0?o=re:p[2]!==void 0?(ye.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=w):p[3]!==void 0&&(o=w):o===w?p[0]===">"?(o=s??P,d=-1):p[1]===void 0?d=-2:(d=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?w:p[3]==='"'?de:le):o===de||o===le?o=w:o===oe||o===re?o=P:(o=w,s=void 0);const y=o===w&&n[h+1].startsWith("/>")?" ":"";a+=o===P?r+Me:d>=0?(i.push(c),r.slice(0,d)+ue+r.slice(d)+v+y):r+v+(d===-2?h:y)}return[fe(n,a+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class L{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let a=0,o=0;const h=e.length-1,r=this.parts,[c,p]=Te(e,t);if(this.el=L.createElement(c,i),_.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=_.nextNode())!==null&&r.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(ue)){const g=p[o++],y=s.getAttribute(d).split(v),S=/([.?@])?(.*)/.exec(g);r.push({type:1,index:a,name:S[2],strings:y,ctor:S[1]==="."?ze:S[1]==="?"?Ue:S[1]==="@"?Ie:R}),s.removeAttribute(d)}else d.startsWith(v)&&(r.push({type:6,index:a}),s.removeAttribute(d));if(ye.test(s.tagName)){const d=s.textContent.split(v),g=d.length-1;if(g>0){s.textContent=O?O.emptyScript:"";for(let y=0;y<g;y++)s.append(d[y],N()),_.nextNode(),r.push({type:2,index:++a});s.append(d[g],N())}}}else if(s.nodeType===8)if(s.data===ge)r.push({type:2,index:a});else{let d=-1;for(;(d=s.data.indexOf(v,d+1))!==-1;)r.push({type:7,index:a}),d+=v.length-1}a++}}static createElement(e,t){const i=E.createElement("template");return i.innerHTML=e,i}}function C(n,e,t=n,i){var o,h;if(e===A)return e;let s=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const a=T(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),a===void 0?s=void 0:(s=new a(n),s._$AT(n,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=C(n,s._$AS(n,e.values),s,i)),e}class Le{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??E).importNode(t,!0);_.currentNode=s;let a=_.nextNode(),o=0,h=0,r=i[0];for(;r!==void 0;){if(o===r.index){let c;r.type===2?c=new z(a,a.nextSibling,this,e):r.type===1?c=new r.ctor(a,r.name,r.strings,this,e):r.type===6&&(c=new Oe(a,this,e)),this._$AV.push(c),r=i[++h]}o!==(r==null?void 0:r.index)&&(a=_.nextNode(),o++)}return _.currentNode=E,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class z{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),T(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==A&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):De(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=L.createElement(fe(i.h,i.h[0]),this.options)),i);if(((a=this._$AH)==null?void 0:a._$AD)===s)this._$AH.p(t);else{const o=new Le(s,this),h=o.u(this.options);o.p(t),this.T(h),this._$AH=o}}_$AC(e){let t=he.get(e.strings);return t===void 0&&he.set(e.strings,t=new L(e)),t}k(e){ee(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const a of e)s===t.length?t.push(i=new z(this.O(N()),this.O(N()),this,this.options)):i=t[s],i._$AI(a),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,a){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(e,t=this,i,s){const a=this.strings;let o=!1;if(a===void 0)e=C(this,e,t,0),o=!T(e)||e!==this._$AH&&e!==A,o&&(this._$AH=e);else{const h=e;let r,c;for(e=a[0],r=0;r<a.length-1;r++)c=C(this,h[i+r],t,r),c===A&&(c=this._$AH[r]),o||(o=!T(c)||c!==this._$AH[r]),c===m?e=m:e!==m&&(e+=(c??"")+a[r+1]),this._$AH[r]=c}o&&!s&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ze extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}class Ue extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}}class Ie extends R{constructor(e,t,i,s,a){super(e,t,i,s,a),this.type=5}_$AI(e,t=this){if((e=C(this,e,t,0)??m)===A)return;const i=this._$AH,s=e===m&&i!==m||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==m&&(i===m||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Oe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}}const B=D.litHtmlPolyfillSupport;B==null||B(L,z),(D.litHtmlVersions??(D.litHtmlVersions=[])).push("3.2.1");const Re=(n,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const a=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new z(e.insertBefore(N(),a),a,void 0,t??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class b extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Re(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return A}}var ce;b._$litElement$=!0,b.finalized=!0,(ce=globalThis.litElementHydrateSupport)==null||ce.call(globalThis,{LitElement:b});const F=globalThis.litElementPolyfillSupport;F==null||F({LitElement:b});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const U={tr:{navbar:{employees:"Çalışanlar",searchPlaceholder:"Çalışan ara...",addNew:"Yeni Ekle"},list:{selectedEmployees:"çalışan seçildi",deleteSelected:"Seçilenleri Sil",save:"Kaydet",add:"Ekle",loading:"Yükleniyor...",confirmDelete:"Silme Onayı",deleteConfirmSingle:"Bu çalışanı silmek istediğinizden emin misiniz?",deleteConfirmMultiple:"Seçili çalışanları silmek istediğinizden emin misiniz?",noEmployees:"Henüz çalışan bulunmamaktadır",noSearchResults:'"{query}" aramasına uygun çalışan bulunamadı',name:"İsim",email:"E-posta",phone:"Telefon",department:"Departman",position:"Pozisyon",actions:"İşlemler",edit:"Düzenle",delete:"Sil",itemsPerPage:"Sayfa başına öğe",page:"Sayfa",firstName:"İsim",lastName:"Soyisim",employmentDate:"İşe Giriş Tarihi",birthDate:"Doğum Tarihi",addEmployee:"Yeni Çalışan Ekle",editEmployee:"Çalışan Düzenle",saveChanges:"Değişiklikleri Kaydet",cancel:"İptal",deleteConfirmTitle:"Çalışanı Sil",deleteConfirmMessage:"Bu çalışanı silmek istediğinizden emin misiniz?",deleteMultipleConfirmTitle:"Çoklu Silme",deleteAllConfirmMessage:"Bu sayfadaki tüm çalışanları silmek istediğinizden emin misiniz?",deleteSelectedConfirmMessage:"Seçili çalışanları ({names}) silmek istediğinizden emin misiniz?",delete:"Sil",selectAll:"Hepsini Seç",deleteMultipleConfirmMessage:"Bu sayfadaki tüm çalışanları silmek istediğinizden emin misiniz?",noResults:"Aradığınız sonuç bulunamadı.",emptyList:"Henüz çalışan bulunmuyor.",departments:{Analytics:"Analytics",Tech:"Tech"},positions:{Junior:"Junior",Medior:"Medior",Senior:"Senior"},selectDepartment:"Departman seçin",selectPosition:"Pozisyon seçin",placeholders:{firstName:"Örn: Ahmet",lastName:"Örn: Yılmaz",email:"ornek@sirket.com",phone:"+90 5XX XXX XX XX"}},form:{addTitle:"Yeni Çalışan Ekle",editTitle:"Çalışan Düzenle",firstName:"Ad",lastName:"Soyad",email:"E-posta",phone:"Telefon",department:"Departman",position:"Pozisyon",employmentDate:"İşe Başlama Tarihi",birthDate:"Doğum Tarihi",submit:"Kaydet",cancel:"İptal",saveChanges:"Değişiklikleri Kaydet",selectDepartment:"Departman seçin",selectPosition:"Pozisyon seçin",departments:{Analytics:"Analytics",Tech:"Tech"},positions:{Junior:"Junior",Medior:"Medior",Senior:"Senior"},placeholders:{firstName:"Örn: Ahmet",lastName:"Örn: Yılmaz",email:"ornek@sirket.com",phone:"+90 5XX XXX XX XX"}},employeeList:"Çalışan Listesi",selectAll:"Hepsini Seç",addEmployee:"Yeni Çalışan Ekle",editEmployee:"Çalışan Düzenle",saveChanges:"Değişiklikleri Kaydet",cancel:"İptal"},en:{navbar:{employees:"Employees",searchPlaceholder:"Search employees...",addNew:"Add New"},list:{selectedEmployees:"employees selected",deleteSelected:"Delete Selected",save:"Save",add:"Add",loading:"Loading...",confirmDelete:"Confirm Delete",deleteConfirmSingle:"Are you sure you want to delete this employee?",deleteConfirmMultiple:"Are you sure you want to delete selected employees?",noEmployees:"No employees found",noSearchResults:'No employees found matching "{query}"',name:"Name",email:"Email",phone:"Phone",department:"Department",position:"Position",actions:"Actions",edit:"Edit",delete:"Delete",itemsPerPage:"Items per page",page:"Page",firstName:"First Name",lastName:"Last Name",employmentDate:"Employment Date",birthDate:"Birth Date",addEmployee:"Add New Employee",editEmployee:"Edit Employee",saveChanges:"Save Changes",cancel:"Cancel",deleteConfirmTitle:"Delete Employee",deleteConfirmMessage:"Are you sure you want to delete this employee?",deleteMultipleConfirmTitle:"Multiple Delete",deleteAllConfirmMessage:"Are you sure you want to delete all employees on this page?",deleteSelectedConfirmMessage:"Are you sure you want to delete the selected employees ({names})?",delete:"Delete",selectAll:"Select All",deleteMultipleConfirmMessage:"Are you sure you want to delete all employees on this page?",noResults:"No results found.",emptyList:"No employees yet.",departments:{Analytics:"Analytics",Tech:"Tech"},positions:{Junior:"Junior",Medior:"Medior",Senior:"Senior"},selectDepartment:"Select department",selectPosition:"Select position",placeholders:{firstName:"Ex: John",lastName:"Ex: Doe",email:"example@company.com",phone:"+90 5XX XXX XX XX"}},form:{addTitle:"Add New Employee",editTitle:"Edit Employee",firstName:"First Name",lastName:"Last Name",email:"Email",phone:"Phone",department:"Department",position:"Position",employmentDate:"Employment Date",birthDate:"Birth Date",submit:"Save",cancel:"Cancel",saveChanges:"Save Changes",selectDepartment:"Select department",selectPosition:"Select position",departments:{Analytics:"Analytics",Tech:"Tech"},positions:{Junior:"Junior",Medior:"Medior",Senior:"Senior"},placeholders:{firstName:"Ex: John",lastName:"Ex: Doe",email:"example@company.com",phone:"+90 5XX XXX XX XX"}},employeeList:"Employee List",selectAll:"Select All",addEmployee:"Add New Employee",editEmployee:"Edit Employee",saveChanges:"Save Changes",cancel:"Cancel"}};class j{constructor(){this.DEPARTMENTS=["Analytics","Tech"],this.POSITIONS=["Junior","Medior","Senior"],this.employees=[],this.listeners=new Set,this._loadFromLocalStorage(),this.employees.length===0&&this._generateMockData()}_turkishToEnglish(e){const t={ı:"i",ğ:"g",ü:"u",ş:"s",ö:"o",ç:"c",İ:"i",Ğ:"g",Ü:"u",Ş:"s",Ö:"o",Ç:"c"},i=s=>s.replace(/[ıİğĞüÜşŞöÖçÇ]/g,a=>t[a]||a);return Array.isArray(e)?e.map(s=>i(s)):i(e)}_generateMockData(){this.employees=[];const e=["Ali","Ayşe","Mehmet","Fatma","Ahmet","Zeynep","Can","Elif","Mustafa","Esra","Emre","Selin","Burak","Deniz","Cem","İrem","Onur","Gizem","Tolga","Yasemin"],t=["Yılmaz","Kaya","Demir","Çelik","Şahin","Öztürk","Aydın","Özdemir","Arslan","Doğan","Kurt","Koç","Erdoğan","Özer","Şen","Yıldız","Özcan","Aktaş","Aslan","Çetin"],i=this._turkishToEnglish(e),s=this._turkishToEnglish(t),a=(r,c)=>new Date(r.getTime()+Math.random()*(c.getTime()-r.getTime())).toISOString().split("T")[0],o=()=>`+90 5${Math.floor(Math.random()*100).toString().padStart(2,"0")} ${Math.floor(Math.random()*1e7).toString().padStart(7,"0")}`,h=new Set;for(let r=1;r<=60;r++){let c,p,d,g,y;do c=Math.floor(Math.random()*e.length),p=Math.floor(Math.random()*t.length),d=e[c],g=t[p],y=`${d}-${g}`;while(h.has(y));h.add(y);const S={id:r,firstName:d,lastName:g,email:`${i[c].toLowerCase()}.${s[p].toLowerCase()}@company.com`,phone:o(),position:this.POSITIONS[Math.floor(Math.random()*this.POSITIONS.length)],department:this.DEPARTMENTS[Math.floor(Math.random()*this.DEPARTMENTS.length)],employmentDate:a(new Date(2020,0,1),new Date),birthDate:a(new Date(1970,0,1),new Date(2e3,0,1))};this.employees.push(S)}this._saveToLocalStorage(),this._notifyChange()}clearAllData(){this.employees=[],this._saveToLocalStorage(),this._notifyChange()}generateNewMockData(){this._generateMockData()}addEmployee(e){if(this.employees.some(a=>a.firstName.toLowerCase()===e.firstName.toLowerCase()&&a.lastName.toLowerCase()===e.lastName.toLowerCase()))throw new Error("Employee already exists");const i=Math.max(...this.employees.map(a=>a.id),0)+1,s={...e,id:i};return this.employees.push(s),this._saveToLocalStorage(),this._notifyChange(),i}_loadFromLocalStorage(){const e=localStorage.getItem("employees");if(e)try{this.employees=JSON.parse(e)}catch(t){console.error("Error loading data from localStorage:",t),this.employees=[]}}_saveToLocalStorage(){localStorage.setItem("employees",JSON.stringify(this.employees))}getAllEmployees(){return[...this.employees]}getEmployeeById(e){return this.employees.find(t=>t.id===e)}updateEmployee(e,t){this.employees=this.employees.map(i=>i.id===e?{...i,...t}:i),this._saveToLocalStorage(),this._notifyChange()}deleteEmployee(e){this.employees=this.employees.filter(t=>t.id!==e),this._saveToLocalStorage(),this._notifyChange()}getFilteredEmployees(e=""){if(!e.trim())return this.employees;const t=this._turkishToEnglish(e.toLowerCase().trim());return this.employees.filter(i=>{const s=this._turkishToEnglish(i.firstName.toLowerCase()),a=this._turkishToEnglish(i.lastName.toLowerCase()),o=`${s} ${a}`,h=`${a} ${s}`;return o.includes(t)||h.includes(t)||s.includes(t)||a.includes(t)})}filterByDepartment(e){return this.employees.filter(t=>t.department.toLowerCase()===e.toLowerCase())}_notifyChange(){typeof window<"u"&&window.dispatchEvent(new CustomEvent("employees-changed",{detail:{employees:this.employees}})),this.listeners.forEach(e=>{try{e(this.employees)}catch(t){console.error("Error notifying listener:",t)}})}getEmployee(e){return this.employees.find(t=>t.id===e)}updateEmployee(e,t){const i=this.employees.findIndex(a=>a.id===e);if(i===-1)throw new Error("Employee not found");if(this.employees.some(a=>a.id!==e&&a.firstName.toLowerCase()===t.firstName.toLowerCase()&&a.lastName.toLowerCase()===t.lastName.toLowerCase()))throw new Error("An employee with this name already exists");this.employees[i]={...this.employees[i],...t,id:e},this._saveToLocalStorage(),this._notifyChange()}async deleteEmployees(e){try{const t=localStorage.getItem("employees");if(t){let i=JSON.parse(t);i=i.filter(s=>!e.includes(s.id)),localStorage.setItem("employees",JSON.stringify(i)),this.employees=i,this.notifyListeners()}return!0}catch(t){throw console.error("Error deleting employees:",t),t}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notifyListeners(){this.listeners.forEach(e=>e(this.employees))}}u(j,"DEPARTMENTS",["Analytics","Tech"]),u(j,"POSITIONS",["Junior","Medior","Senior"]);const f=new j;class J extends b{constructor(){super(),this.isMultiDelete=!1,this.selectedNames=[]}_handleConfirm(){this.dispatchEvent(new CustomEvent("confirm"))}_handleCancel(){this.dispatchEvent(new CustomEvent("cancel"))}_getModalMessage(e){return e?this.isMultiDelete?this.selectedNames&&this.selectedNames.length>0?e.deleteSelectedConfirmMessage.replace("{names}",this.selectedNames.join(", ")):e.deleteAllConfirmMessage:e.deleteConfirmMessage:""}render(){var i;const e=(i=U[this.language])==null?void 0:i.list;if(!e)return null;const t=this._getModalMessage(e);return l`
      <div class="modal-overlay" @click=${this._handleCancel}>
        <div class="modal-content" @click=${s=>s.stopPropagation()}>
          <h3 class="modal-title">
            ${this.isMultiDelete?e.deleteConfirmMultiple:e.deleteConfirmSingle}
          </h3>
          <p class="modal-message">${t}</p>
          <div class="modal-actions">
            <button class="cancel-btn" @click=${this._handleCancel}>
              ${e.cancel}
            </button>
            <button class="confirm-btn" @click=${this._handleConfirm}>
              ${e.delete}
            </button>
          </div>
        </div>
      </div>
    `}}u(J,"styles",k`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .modal-content {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      width: 90%;
      max-width: 400px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .modal-title {
      color: #333;
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }

    .modal-message {
      color: #666;
      margin-bottom: 1.5rem;
    }

    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }

    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.875rem;
      transition: all 0.2s;
    }

    .confirm-btn {
      background: #ff3b30;
      color: white;
    }

    .confirm-btn:hover {
      background: #ff2d20;
    }

    .cancel-btn {
      background: #f5f5f5;
      color: #666;
    }

    .cancel-btn:hover {
      background: #eee;
    }
  `),u(J,"properties",{language:{type:String,reflect:!0},isMultiDelete:{type:Boolean},selectedNames:{type:Array}});customElements.define("delete-modal",J);class V extends b{render(){return l`
      <button 
        class="arrow" 
        ?disabled=${this.currentPage===1}
        @click=${()=>this._handlePageChange(this.currentPage-1)}
      >
        <span class="material-symbols-outlined">
          arrow_back_ios
        </span>
      </button>

      ${this._generatePageNumbers()}

      <button 
        class="arrow"
        ?disabled=${this.currentPage===this.totalPages}
        @click=${()=>this._handlePageChange(this.currentPage+1)}
      >
        <span class="material-symbols-outlined">
          arrow_forward_ios
        </span>
      </button>
    `}_generatePageNumbers(){const e=[],t=this.totalPages,i=this.currentPage;e.push(this._createPageButton(1)),i>3&&e.push(l`<span class="ellipsis">...</span>`);for(let s=2;s<t;s++)e.push(this._createPageButton(s));return i<t-2&&e.push(l`<span class="ellipsis">...</span>`),t>1&&e.push(this._createPageButton(t)),e}_createPageButton(e){return l`
      <button
        class=${e===this.currentPage?"active":""}
        @click=${()=>this._handlePageChange(e)}
      >
        ${e}
      </button>
    `}_handlePageChange(e){e>=1&&e<=this.totalPages&&this.dispatchEvent(new CustomEvent("page-change",{detail:{page:e}}))}}u(V,"properties",{currentPage:{type:Number},totalPages:{type:Number}}),u(V,"styles",k`
    :host {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: center;
    }

    button {
      padding: 0.5rem 0.75rem;
      border: none;
      background: none;
      cursor: pointer;
      color: #666;
      border-radius: 4px;
      min-width: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button:hover {
      color: #ff6600;
    }

    button.active {
      background: #ff6600;
      color: white;
      border-radius: 50%;
    }

    .arrow {
      color: #ff6600;
      font-size: 1.2rem;
    }

    .arrow:disabled {
      color: #ccc;
      cursor: not-allowed;
    }

    .ellipsis {
      color: #666;
      padding: 0.5rem;
    }

    .material-symbols-outlined {
      font-family: 'Material Symbols Outlined';
      font-size: 16px;
    }
  `);customElements.define("pagination-control",V);class Y extends b{constructor(){super(),this.employees=[],this.selectedEmployees=[],this.currentPage=1,this.itemsPerPage=10,this.viewMode="list",this.language=localStorage.getItem("language")||"tr",this.showDeleteModal=!1,this.isMultiDelete=!1,this.searchQuery="",this.totalPages=0,this.autoSwitchedToGrid=!1,this._handleStoreChange=this._handleStoreChange.bind(this),this._handleResize=this._handleResize.bind(this),f.subscribe(()=>{this.requestUpdate()}),window.addEventListener("search",this._handleSearchEvent.bind(this))}_handleStoreChange(e){this.employees=e.detail.employees||[],this.requestUpdate()}firstUpdated(){super.firstUpdated(),this._calculateTotalPages()}updated(e){e.has("language")&&localStorage.setItem("language",this.language),super.updated(e)}get filteredEmployees(){return this.searchQuery.trim()?f.getFilteredEmployees(this.searchQuery):this.employees}get paginatedEmployees(){const e=(this.currentPage-1)*this.itemsPerPage,t=e+this.itemsPerPage;return this.filteredEmployees.slice(e,t)}_calculateTotalPages(){const e=this.filteredEmployees.length;this.totalPages=Math.ceil(e/this.itemsPerPage),this._dispatchPaginationUpdate()}_dispatchPaginationUpdate(){this.dispatchEvent(new CustomEvent("pagination-update",{detail:{currentPage:this.currentPage,totalPages:this.totalPages},bubbles:!0,composed:!0}))}_handlePageChange(e){this.currentPage=e.detail.page,this._dispatchPaginationUpdate(),this.requestUpdate()}_handleSelectAll(e){e.target.checked?this.selectedEmployees=this.paginatedEmployees.map(t=>t.id):this.selectedEmployees=[],this.requestUpdate()}_handleSelectOne(e){this.selectedEmployees.includes(e)?this.selectedEmployees=this.selectedEmployees.filter(t=>t!==e):this.selectedEmployees=[...this.selectedEmployees,e],this.requestUpdate()}_isSelected(e){return this.selectedEmployees.includes(e)}_handleSearchEvent(e){this.searchQuery=e.detail.query,this.currentPage=1,this._calculateTotalPages(),this.requestUpdate()}_handleDeleteSelected(){this.isMultiDelete=!0,this.showDeleteModal=!0,this.requestUpdate()}_handleDeleteClick(e){this.selectedEmployees.length===0&&(this.selectedEmployees=[e]),this.isMultiDelete=this.selectedEmployees.length>1,this.showDeleteModal=!0,this.requestUpdate()}_handleMultiDeleteClick(){this.isMultiDelete=!0,this.showDeleteModal=!0,this.requestUpdate()}async _handleDeleteConfirm(){try{if(this.selectedEmployees.length>0){this.showDeleteModal=!1;const e=[...this.selectedEmployees];this.selectedEmployees=[],await f.deleteEmployees(e),this.employees=[...f.employees];const t=this.shadowRoot.querySelector('thead input[type="checkbox"]');t&&(t.checked=!1),this.requestUpdate()}}catch(e){console.error("Delete error:",e)}}_handleDeleteCancel(){this.showDeleteModal=!1,this.isMultiDelete=!1,this.selectedEmployees=[];const e=this.shadowRoot.querySelector('thead input[type="checkbox"]'),t=this.shadowRoot.querySelector("#grid-select-all");e&&(e.checked=!1),t&&(t.checked=!1),this.requestUpdate()}_getSelectedEmployeeNames(){try{return!Array.isArray(this.selectedEmployees)||!Array.isArray(f.employees)?[]:this.selectedEmployees.map(e=>{try{const t=f.employees.find(i=>(i==null?void 0:i.id)===e);return t?`${t.firstName||""} ${t.lastName||""}`.trim():""}catch(t){return console.error("Error in employee mapping:",t),""}}).filter(e=>e!=="")}catch(e){return console.error("Error in _getSelectedEmployeeNames:",e),[]}}_handleEdit(e){window.location.href=`/edit/${e}`}_handleDelete(e){this.selectedEmployees.length>1?this.isMultiDelete=!0:this.selectedEmployees.length===1&&this.selectedEmployees[0]!==e?(this.selectedEmployees=[...this.selectedEmployees,e],this.isMultiDelete=!0):(this.selectedEmployees=[e],this.isMultiDelete=!1),this.showDeleteModal=!0,this.requestUpdate()}_handleResize(){const e=window.innerWidth;e<992&&this.viewMode==="list"&&!this.autoSwitchedToGrid?(this.viewMode="grid",this.autoSwitchedToGrid=!0):e>=992&&this.autoSwitchedToGrid&&(this.viewMode="list",this.autoSwitchedToGrid=!1)}_handleViewChange(e){this.viewMode=e,this.autoSwitchedToGrid=!1,this.requestUpdate()}connectedCallback(){super.connectedCallback(),this.employees=f.getAllEmployees()||[],window.addEventListener("employees-changed",this._handleStoreChange),window.addEventListener("resize",this._handleResize),window.addEventListener("language-change",this._handleLanguageChange.bind(this)),window.addEventListener("search",this._handleSearchEvent.bind(this)),this.language=localStorage.getItem("language")||"tr",this._handleResize()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("employees-changed",this._handleStoreChange),window.removeEventListener("resize",this._handleResize),window.removeEventListener("language-change",this._handleLanguageChange.bind(this)),window.removeEventListener("search",this._handleSearchEvent.bind(this))}_handleLanguageChange(e){this.language=e.detail.language,this.requestUpdate()}render(){const e=U[this.language].list,t=this.viewMode==="grid"?"view-grid":"";return l`
      <div class="list-container ${t}">

        <div class="table-container">
          ${this._renderListView(e)}
        </div>

        <div class="grid-container">
          ${this._renderGridView(e)}
        </div>

        ${this.showDeleteModal?l`
          <delete-modal
            .language=${this.language}
            .isMultiDelete=${this.isMultiDelete}
            .selectedNames=${this._getSelectedEmployeeNames()}
            @confirm=${this._handleDeleteConfirm}
            @cancel=${this._handleDeleteCancel}
          ></delete-modal>
        `:""}
      </div>
    `}_renderListView(e){const t=this.paginatedEmployees;return t?this.searchQuery&&t.length===0?l`
        <div class="empty-state">
          ${e.noResults}
        </div>
      `:t.length===0?l`
        <div class="empty-state">
          ${e.emptyList}
        </div>
      `:l`
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th style="width: 40px">
                <input type="checkbox" @change=${this._handleSelectAll}>
              </th>
              <th style="width: 120px">${e.firstName}</th>
              <th style="width: 120px">${e.lastName}</th>
              <th class="optional" style="width: 120px">${e.employmentDate}</th>
              <th class="optional" style="width: 120px">${e.birthDate}</th>
              <th style="width: 140px">${e.phone}</th>
              <th class="email-col">${e.email}</th>
              <th class="department-col">${e.department}</th>
              <th class="position-col">${e.position}</th>
              <th style="width: 100px">${e.actions}</th>
            </tr>
          </thead>
          <tbody>
            ${this.paginatedEmployees.map(i=>l`
              <tr>
                <td>
                  <input 
                    type="checkbox"
                    .checked=${this._isSelected(i.id)}
                    @change=${()=>this._handleSelectOne(i.id)}
                  >
                </td>
                <td>${i.firstName}</td>
                <td>${i.lastName}</td>
                <td class="optional">${i.employmentDate}</td>
                <td class="optional">${i.birthDate}</td>
                <td>${i.phone}</td>
                <td class="email-col">${i.email}</td>
                <td class="department-col">${i.department}</td>
                <td class="position-col">${i.position}</td>
                <td>
                  <div class="actions">
                    <button class="action-btn edit-btn" @click=${()=>this._handleEdit(i.id)}>
                      <span class="material-symbols-outlined">edit_square</span>
                    </button>
                    <button class="action-btn delete-btn" @click=${()=>this._handleDelete(i.id)}>
                     <span class="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `:l`<div>${e.loading}</div>`}_renderGridView(e){const t=this.paginatedEmployees;return t?this.searchQuery&&t.length===0?l`
        <div class="empty-state">
          ${e.noResults}
        </div>
      `:t.length===0?l`
        <div class="empty-state">
          ${e.emptyList}
        </div>
      `:l`
      <div class="grid-container">
        <div class="grid-select-all">
          <input 
            type="checkbox" 
            id="grid-select-all"
            @change=${this._handleSelectAll}
            .checked=${this.selectedEmployees.length===this.paginatedEmployees.length&&this.paginatedEmployees.length>0}
          >
          <label for="grid-select-all">${e.selectAll}</label>
        </div>
        <div class="grid-view">
          ${this.paginatedEmployees.map(i=>l`
            <div class="employee-card">
              <div class="card-header">
                <div class="checkbox-wrapper">
                  <input 
                    type="checkbox"
                    .checked=${this._isSelected(i.id)}
                    @change=${()=>this._handleSelectOne(i.id)}
                  >
                </div>
                <div class="actions">
                  <button class="action-btn edit-btn" @click=${()=>this._handleEdit(i.id)}>
                    <span class="material-symbols-outlined">edit_square</span>
                  </button>
                  <button class="action-btn delete-btn" @click=${()=>this._handleDelete(i.id)}>
                    <span class="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
              <div class="employee-name-section">
                <div class="name-field">
                  <span class="name-label">${e.firstName}:</span>
                  <span class="name-value">${i.firstName}</span>
                </div>
                <div class="name-field">
                  <span class="name-label">${e.lastName}:</span>
                  <span class="name-value">${i.lastName}</span>
                </div>
              </div>
              <div class="card-content">
                <div class="field">
                  <span class="field-label">${e.email}:</span>
                  <span class="field-value">${i.email}</span>
                </div>
                <div class="field">
                  <span class="field-label">${e.phone}:</span>
                  <span class="field-value">${i.phone}</span>
                </div>
                <div class="field">
                  <span class="field-label">${e.position}:</span>
                  <span class="field-value">${i.position}</span>
                </div>
                <div class="field">
                  <span class="field-label">${e.employmentDate}:</span>
                  <span class="field-value">${i.employmentDate}</span>
                </div>
                <div class="field">
                  <span class="field-label">${e.birthDate}:</span>
                  <span class="field-value">${i.birthDate}</span>
                </div>
              </div>
              <div class="department-tag">${i.department}</div>
            </div>
          `)}
        </div>
      </div>
    `:l`<div>${e.loading}</div>`}_handleCheckboxChange(e,t){e.target.checked?this.selectedEmployees=[...this.selectedEmployees,t]:this.selectedEmployees=this.selectedEmployees.filter(i=>i!==t),this.requestUpdate()}_handleSelectAll(e){if(e.target.checked){const t=this._getCurrentPageEmployees();this.selectedEmployees=t.map(i=>i.id)}else this.selectedEmployees=[];this.requestUpdate()}_getCurrentPageEmployees(){const e=(this.currentPage-1)*this.itemsPerPage,t=e+this.itemsPerPage;return f.employees.slice(e,t)}_handleSingleDelete(e){this.selectedEmployees=[e],this.isMultiDelete=!1,this.showDeleteModal=!0}}u(Y,"properties",{employees:{type:Array},selectedEmployees:{type:Array},currentPage:{type:Number},itemsPerPage:{type:Number},viewMode:{type:String,reflect:!0},language:{type:String,reflect:!0},showDeleteModal:{type:Boolean},employeeToDelete:{type:Number},autoSwitchedToGrid:{type:Boolean},searchQuery:{type:String},totalPages:{type:Number},isMultiDelete:{type:Boolean}}),u(Y,"styles",k`
    :host {
      display: block;
      width: 100%;
    }

    .list-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .table-container {
      width: 100%;
      background: white;
      border-radius: 8px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    thead {
      background: white;
    }

    th {
      padding: 1rem;
      text-align: left;
      font-weight: normal;
      color: #FF6600;
      border-bottom: 1px solid #eee;
    }

    td {
      padding: 1rem;
      border-bottom: 1px solid #eee;
      color: #333;
    }

    @media (max-width: 1200px) {
      .table-container {
        overflow: visible;
      }

      th.optional,
      td.optional {
        display: none;
      }

      th.email-col,
      td.email-col {
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    @media (max-width: 900px) {
      th.email-col,
      td.email-col {
        max-width: 150px;
      }
    }

    @media (max-width: 768px) {
      th.department-col,
      td.department-col {
        display: none;
      }

      th.email-col,
      td.email-col {
        max-width: 120px;
      }
    }

    @media (max-width: 576px) {
      th.position-col,
      td.position-col {
        display: none;
      }
    }

    .grid-container {
      width: 100%;
    }

    .grid-view {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
      padding: 0.5rem;
    }

    .employee-card {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      transition: all 0.2s;
      border: 1px solid #eee;
    }

    .employee-card:hover {
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transform: translateY(-2px);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid #eee;
    }

    .employee-name-section {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .name-field {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .name-label {
      color: #FF6600;
      font-size: 0.875rem;
      min-width: 100px;
      flex-shrink: 0;
    }

    .name-value {
      color: #333;
      font-weight: 500;
      flex: 1;
    }

    .field {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .field-label {
      color: #FF6600;
      font-size: 0.875rem;
      min-width: 100px;
      flex-shrink: 0;
    }

    .field-value {
      color: #333;
      flex: 1;
    }

    .department-tag {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: #fff5eb;
      color: #FF6600;
      border-radius: 4px;
      font-size: 0.875rem;
      margin-top: 0.5rem;
    }

    .actions {
      display: flex;
      gap: 0.5rem;
      justify-content: flex-end;
    }

    .action-btn {
      padding: 0.5rem;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.2s;
    }

    .edit-btn {
      color: #ff6600;
    }

    .edit-btn:hover {
      background: #fff5eb;
    }

    .delete-btn {
      color: #ff3b30;
    }

    .delete-btn:hover {
      background: #ffebeb;
    }

    /* Empty State */
    .empty-state {
      padding: 3rem;
      text-align: center;
      background: white;
      border-radius: 8px;
      color: #666;
    }

    .view-controls {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .view-btn {
      padding: 0.5rem;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .view-btn svg {
      width: 20px;
      height: 20px;
      stroke: #666;
      fill: none;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .view-btn.active svg {
      stroke: #FF5722;
    }

    .view-btn:hover {
      background-color: rgba(255, 87, 34, 0.1);
    }

    .list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .list-title {
      font-size: 1.25rem;
      font-weight: 500;
      color: #333;
    }

    .view-controls {
      display: flex;
      gap: 0.5rem;
    }

    .select-all-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
      padding: 0.5rem;
      background: white;
      border-radius: 4px;
      border: 1px solid #eee;
    }

    .select-all-label {
      color: #666;
      font-size: 0.875rem;
    }

    .search-container {
      margin-bottom: 1rem;
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .search-input {
      flex: 1;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 0.875rem;
      transition: all 0.2s;
    }

    .search-input:focus {
      outline: none;
      border-color: #FF6600;
      box-shadow: 0 0 0 2px rgba(255,102,0,0.1);
    }

    .search-input::placeholder {
      color: #999;
    }

    .table-container {
      display: block;
    }

    .grid-container {
      display: none;
    }

    .view-grid .table-container {
      display: none;
    }

    .view-grid .grid-container {
      display: block;
    }

    .multi-delete-container {
      display: none;
      padding: 0.5rem 1rem;
      background: white;
      border-radius: 4px;
      margin-bottom: 1rem;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #eee;
    }

    .multi-delete-container.show {
      display: flex;
    }

    .multi-delete-info {
      color: #666;
      font-size: 0.875rem;
    }

    .multi-delete-btn {
      padding: 0.5rem 1rem;
      background: #ff3b30;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .multi-delete-btn:hover {
      background: #ff2d20;
    }

    .material-symbols-outlined {
      font-family: 'Material Symbols Outlined';
      font-size: 16px;
    }
  `);customElements.define("employee-list",Y);class W extends b{constructor(){super(),this.language="tr",this.editMode=!1,this.employee={firstName:"",lastName:"",email:"",phone:"",position:"",department:"",employmentDate:"",birthDate:""},this.employeeId=null}firstUpdated(){super.firstUpdated()}updated(e){super.updated(e)}_navigateToList(){window.location.href="/"}connectedCallback(){super.connectedCallback();const e=window.location.pathname;e.startsWith("/edit/")&&(this.editMode=!0,this.employeeId=parseInt(e.split("/")[2]),this._loadEmployee()),window.addEventListener("language-change",this._handleLanguageChange.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("language-change",this._handleLanguageChange.bind(this))}_handleLanguageChange(e){this.language=e.detail.language,this.requestUpdate()}_loadEmployee(){if(this.employeeId){const e=f.getEmployee(this.employeeId);e&&(this.employee={...e})}}_getMaxBirthDate(){const e=new Date;return new Date(e.getFullYear()-18,e.getMonth(),e.getDate()).toISOString().split("T")[0]}_getMaxEmploymentDate(){return new Date().toISOString().split("T")[0]}_handleInputChange(e){const{name:t,value:i}=e.target;this.employee={...this.employee,[t]:i}}_handleCancel(){window.history.back()}async _handleSubmit(e){e.preventDefault();try{this.editMode?await f.updateEmployee(this.employeeId,this.employee):await f.addEmployee(this.employee),this._navigateToList()}catch(t){console.error("Form submission error:",t),alert(t.message)}}render(){var s;const e=U[this.language].form,t=["Analytics","Tech"],i=["Junior","Medior","Senior"];return l`
      <div class="form-container">
        <div class="form-header">
          <h2 class="form-title">
            ${this.editMode?e.editTitle:e.addTitle}
          </h2>
        </div>
        <form @submit=${this._handleSubmit}>
          <div class="form-group">
            <label for="firstName">${e.firstName}</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName"
              .value=${this.employee.firstName}
              @input=${this._handleInputChange}
              placeholder=${((s=e.placeholders)==null?void 0:s.firstName)||""}
              required
            >
          </div>

          <div class="form-group">
            <label for="lastName">${e.lastName}</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName"
              .value=${this.employee.lastName}
              @input=${this._handleInputChange}
              placeholder=${e.placeholders.lastName}
              required
            >
          </div>

          <div class="form-group">
            <label for="email">${e.email}</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              .value=${this.employee.email}
              @input=${this._handleInputChange}
              placeholder=${e.placeholders.email}
              required
            >
          </div>

          <div class="form-group">
            <label for="phone">${e.phone}</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              .value=${this.employee.phone}
              @input=${this._handleInputChange}
              placeholder=${e.placeholders.phone}
              required
            >
          </div>

          <div class="form-group">
            <label for="birthDate">${e.birthDate}</label>
            <input 
              type="date" 
              id="birthDate" 
              name="birthDate"
              .value=${this.employee.birthDate}
              @input=${this._handleInputChange}
              max=${this._getMaxBirthDate()}
              required
            >
          </div>

          <div class="form-group">
            <label for="employmentDate">${e.employmentDate}</label>
            <input 
              type="date" 
              id="employmentDate" 
              name="employmentDate"
              .value=${this.employee.employmentDate}
              @input=${this._handleInputChange}
              max=${this._getMaxEmploymentDate()}
              required
            >
          </div>

          <div class="form-group">
            <label for="department">${e.department}</label>
            <select 
              id="department" 
              name="department" 
              .value=${this.employee.department}
              @change=${this._handleInputChange}
              required
            >
              <option value="" disabled selected>${e.selectDepartment}</option>
              ${t.map(a=>l`
                <option value=${a} ?selected=${this.employee.department===a}>
                  ${e.departments[a]}
                </option>
              `)}
            </select>
          </div>

          <div class="form-group">
            <label for="position">${e.position}</label>
            <select 
              id="position" 
              name="position" 
              .value=${this.employee.position}
              @change=${this._handleInputChange}
              required
            >
              <option value="" disabled selected>${e.selectPosition}</option>
              ${i.map(a=>l`
                <option value=${a} ?selected=${this.employee.position===a}>
                  ${e.positions[a]}
                </option>
              `)}
            </select>
          </div>

          <div class="form-actions">
            <button type="button" class="cancel-btn" @click=${this._handleCancel}>
              ${e.cancel}
            </button>
            <button type="submit" class="submit-btn">
              ${this.editMode?e.saveChanges:e.submit}
            </button>
          </div>
        </form>
      </div>
    `}}u(W,"styles",k`
  :host {
      display: block;
      width: 100%;
      min-height: 100vh;
    }

    .form-container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      display: block;
    }

  .form-header {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
  }

  .form-title {
    color: #333;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .form-group {
    margin-bottom: 1.5rem;
    width: 100%;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #FF6600;
    font-size: 0.875rem;
    font-weight: 500;
  }

  input, select {
  width: 100%;
  box-sizing: border-box;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #333;
  background: white;
  transition: all 0.2s;
}

  input:focus, select:focus {
    outline: none;
    border-color: #FF6600;
    box-shadow: 0 0 0 2px rgba(255, 102, 0, 0.1);
  }
  input:hover, select:hover {
    border-color: #FF6600;
  }

  select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 1em;
    padding-right: 2.5rem;
  }

  input::placeholder {
    color: #999;
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;
  }

  button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  .submit-btn {
    background-color: #FF6600;
    color: white;
  }

  .submit-btn:hover {
    background-color: #ff8533;
  }

  .cancel-btn {
    background-color: #f5f5f5;
    color: #666;
  }

  .cancel-btn:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 768px) {
    .form-container {
      margin: 1rem;
      padding: 1rem;
    }
  }
`),u(W,"properties",{language:{type:String,reflect:!0},editMode:{type:Boolean},employee:{type:Object},employeeId:{type:Number}});customElements.define("employee-form",W);const qe="/assets/ing-logo-64d17135.png",He="/assets/turkey-ee27ac48.png",Be="/assets/united-kingdom-5261c400.png";class Q extends b{constructor(){super(),this.isSearching=!1,this.searchQuery="",this.language=localStorage.getItem("language")||"tr",this.currentPath=window.location.pathname,window.addEventListener("app-navigation",()=>{this.currentPath=window.location.pathname,this.isSearching=!1,this.searchQuery=""})}render(){const e=U[this.language].navbar,t=this.currentPath==="/";return l`
      <div class="nav-container">
        <a href="/" class="logo">
          <img src=${qe} alt="ING Logo">
        </a>

        <div class="nav-right">
          ${t?l`
            <div class="employees-section">
              <button 
                class="employees-button ${this.isSearching?"searching":""}"
                @click=${this._toggleSearch}
              >
                <span class="material-symbols-outlined">
                  group
                </span>
                <span>${e.employees}</span>
              </button>
              ${this.isSearching?l`
                  <div class="search-container">
                    <span class="material-symbols-outlined search-icon">
                      search
                    </span>
                    <input
                      type="text"
                      class="search-input"
                      .value=${this.searchQuery}
                      @input=${this._handleSearch}
                      @blur=${this._handleBlur}
                      placeholder="${e.searchPlaceholder}"
                      autofocus
                    >
                  </div>
                `:""}
            </div>
          `:""}

          <a href="/add" class="add-new">
          <span class="material-symbols-outlined">
            add
          </span>
            ${e.addNew}
          </a>

          <button 
            class="language-button"
            @click=${this._toggleLanguage}
          >
            ${this.language==="tr"?l`<img src=${He} class="flag-icon" alt="TR">`:l`<img src=${Be} class="flag-icon" alt="EN">`}
          </button>
        </div>
      </div>
    `}_toggleSearch(){this.isSearching=!0}_handleSearch(e){this.searchQuery=e.target.value,this.dispatchEvent(new CustomEvent("search",{detail:{query:this.searchQuery},bubbles:!0,composed:!0}))}_handleBlur(e){this.searchQuery||(this.isSearching=!1)}_toggleLanguage(){const e=this.language==="tr"?"en":"tr";this.language=e,localStorage.setItem("language",e),this.dispatchEvent(new CustomEvent("language-change",{detail:{language:e},bubbles:!0,composed:!0}))}}u(Q,"properties",{language:{type:String},isSearching:{type:Boolean},searchQuery:{type:String},currentPath:{type:String}}),u(Q,"styles",k`
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 500;
      color: #333;
      text-decoration: none;
    }

    .logo img {
      height: 32px;
    }

    .nav-right {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    .employees-section {
      position: relative;
      display: flex;
      align-items: center;
    }

    .employees-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border: none;
      background: none;
      cursor: pointer;
      color: #ff6600;
      font-size: 1rem;
      white-space: nowrap;
      transition: margin 0.3s ease-out;
    }

    .employees-button.searching {
      margin-right: 320px;
    }

    .search-container {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 300px;
      animation: slideIn 0.3s ease-out;
      transform-origin: left center;
    }

    @keyframes slideIn {
      from {
        width: 0;
        opacity: 0;
      }
      to {
        width: 300px;
        opacity: 1;
      }
    }

    .search-input {
      width: 100%;
      padding: 0.5rem 1rem;
      padding-left: 2.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      outline: none;
      transition: all 0.2s;
      background: white;
    }

    .search-input:focus {
      border-color: #ff6600;
      box-shadow: 0 0 0 2px rgba(255, 102, 0, 0.1);
    }

    .search-icon {
      position: absolute;
      left: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      color: #666;
      pointer-events: none;
    }

    .add-new {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: #fff;
      color: #ff6600;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.2s;
    }

    .language-button {
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .language-button:hover {
      background: #f5f5f5;
    }

    .flag-icon {
      width: 20px;
      height: 20px;
    }

    .nav-container {
      border-radius: 4px;
    }

    .material-symbols-outlined {
      font-family: 'Material Symbols Outlined';
      font-size: 16px;
    }
  `);customElements.define("nav-bar",Q);const be=document.createElement("style");be.textContent=`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }
`;document.head.appendChild(be);class G extends b{constructor(){super(),this._updateRoute(),this.currentPage=1,this.totalPages=1,this.viewMode=window.innerWidth<=992?"grid":"list",this.language="tr",window.addEventListener("resize",()=>{const e=window.innerWidth<=992?"grid":this.viewMode;if(e!==this.viewMode){this.viewMode=e;const t=this.shadowRoot.querySelector("employee-list");t&&(t.viewMode=this.viewMode)}}),window.addEventListener("language-change",e=>{this.language=e.detail.language,localStorage.setItem("language",this.language),this.requestUpdate()})}firstUpdated(){this.viewMode=window.innerWidth<=992?"grid":"list";const e=this.shadowRoot.querySelector("employee-list");e&&(e.viewMode=this.viewMode)}_updateRoute(){const e=window.location.pathname;e.startsWith("/edit/")?(this.route="edit",this.employeeId=parseInt(e.split("/")[2])):e==="/add"?(this.route="add",this.employeeId=null):(this.route="list",this.employeeId=null)}_handlePageChange(e){this.currentPage=e.detail.page;const t=this.shadowRoot.querySelector("employee-list");t&&(t.currentPage=this.currentPage)}_handleViewModeChange(e){this.viewMode=e;const t=this.shadowRoot.querySelector("employee-list");t&&(t.viewMode=e)}render(){const e=U[this.language],t=this.route==="add"||this.route==="edit";return l`
      <div class="container">
        <nav-bar .language=${this.language}></nav-bar>
        ${this.route==="list"?l`
          <div class="list-header">
            <div class="list-title">${e.employeeList}</div>
            <div class="header-actions">
              <div class="view-controls">
                <button 
                  class="view-btn ${this.viewMode==="list"?"active":""}"
                  data-view="list"
                  @click=${()=>this._handleViewModeChange("list")}
                >
                  <span class="material-symbols-outlined">
                    reorder
                  </span>
                </button>
                <button 
                  class="view-btn ${this.viewMode==="grid"?"active":""}"
                  data-view="grid"
                  @click=${()=>this._handleViewModeChange("grid")}
                >
                  <span class="material-symbols-outlined">
                    grid_on
                  </span>
                </button>
              </div>
            </div>
          </div>
        `:""}
        <div class="content ${t?"form-page":""}">
          ${this._renderContent()}
        </div>
        ${this.route==="list"&&this.totalPages>1?l`
          <pagination-control
            .currentPage=${this.currentPage}
            .totalPages=${this.totalPages}
            @page-change=${this._handlePageChange}
          ></pagination-control>
        `:""}
      </div>
    `}_renderContent(){switch(this.route){case"edit":return l`<employee-form .employeeId=${this.employeeId} editMode></employee-form>`;case"add":return l`<employee-form></employee-form>`;default:return l`<employee-list 
          .currentPage=${this.currentPage}
          .viewMode=${this.viewMode}
          .language=${this.language}
          @pagination-update=${e=>{this.currentPage=e.detail.currentPage,this.totalPages=e.detail.totalPages}}
        ></employee-list>`}}}u(G,"properties",{route:{type:String},employeeId:{type:Number},currentPage:{type:Number},totalPages:{type:Number},viewMode:{type:String},language:{type:String}}),u(G,"styles",k`
    :host {
      display: block;
      width: 100%;
      min-height: 100vh;
      background-color: #f0f0f0;
    }

    .container {
      max-width: 1440px;
      margin: 0 auto;
      padding: 1rem 2rem;
    }

    nav-bar {
      display: block;
      background-color: #fff;
      border-radius: 4px;
    }

    .list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;
      margin-bottom: 16px;
    }

    .list-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #ff6600;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .view-controls {
      display: flex;
      gap: 0.5rem;
    }

    .view-btn {
      padding: 0.5rem;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .view-btn span {
      color: #666;
    }

    .view-btn.active span {
      color: #ff6600;
    }

    .view-btn:hover {
      background-color: rgba(255, 87, 34, 0.1);
    }

    .content {
      margin-top: 24px;
      background-color: #fff;
      border-radius: 4px;
      padding: 1rem 1rem 0 1rem;
      margin-bottom: 1rem;
    }

    .content.form-page {
      background-color: transparent;
    }

    @media (max-width: 768px) {
      .container {
        padding: 1rem;
      }
    }

    @media (max-width: 992px) {
      .container {
        padding: 1rem;
      }

      .view-controls {
        display: none;
      }
    }

    .material-symbols-outlined {
      font-family: 'Material Symbols Outlined';
      font-size: 24px;
    }
  `);customElements.define("app-root",G);
