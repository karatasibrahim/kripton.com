import{aI as U,bH as V,k as C,I as P,aP as Ee,z as R,a4 as ie,bb as J,bI as Ae,bn as le,bJ as Se,bB as B,bC as Te,aS as se,bK as Le,bL as ue,bM as X,bN as Z,bO as fe,bP as Fe,bQ as ve,ay as F,bR as de,b7 as Re,av as Be,bS as ke,aN as Ie,bD as De,bm as Me,az as Ne,bj as _e,aB as He,ar as Ve,at as We,aC as $e,b3 as je,b5 as qe,aE as ze,bk as Ue,b9 as Ye,aw as Ge,p as N,$ as z,bT as ee,bU as Ke,O as Qe,Q as Je,bl as Xe,F as Ze,T as et,bV as tt}from"./index-0956881b.js";import{m as nt,u as ot}from"./lazy-75296ee9.js";import{B as te,g as me,n as at,a as rt,s as it}from"./easing-9f15041e.js";import{m as lt,M as st}from"./transition-a6760ced.js";function xe(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function ct(e){for(;e;){if(ce(e))return e;e=e.parentElement}return document.scrollingElement}function K(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(ce(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function ce(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function ut(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const ft=U({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function vt(e,t){const n={},o=r=>()=>{if(!V)return Promise.resolve(!0);const l=r==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(s=>{const i=parseInt(e[r]??0,10);n[r]=window.setTimeout(()=>{t==null||t(l),s(l)},i)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const dt=Symbol.for("vuetify:v-menu"),mt=U({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...ft()},"v-overlay-activator");function yt(e,t){let{isActive:n,isTop:o}=t;const r=C();let l=!1,s=!1,i=!0;const u=P(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=P(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!u.value),{runOpenDelay:c,runCloseDelay:y}=vt(e,a=>{a===(e.openOnHover&&l||u.value&&s)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==a&&(i=!0),n.value=a)}),h={click:a=>{a.stopPropagation(),r.value=a.currentTarget||a.target,n.value=!n.value},mouseenter:a=>{var A;(A=a.sourceCapabilities)!=null&&A.firesTouchEvents||(l=!0,r.value=a.currentTarget||a.target,c())},mouseleave:a=>{l=!1,y()},focus:a=>{Te&&!a.target.matches(":focus-visible")||(s=!0,a.stopPropagation(),r.value=a.currentTarget||a.target,c())},blur:a=>{s=!1,a.stopPropagation(),y()}},p=P(()=>{const a={};return f.value&&(a.click=h.click),e.openOnHover&&(a.mouseenter=h.mouseenter,a.mouseleave=h.mouseleave),u.value&&(a.focus=h.focus,a.blur=h.blur),a}),d=P(()=>{const a={};if(e.openOnHover&&(a.mouseenter=()=>{l=!0,c()},a.mouseleave=()=>{l=!1,y()}),e.closeOnContentClick){const A=Ee(dt,null);a.click=()=>{n.value=!1,A==null||A.closeParents()}}return a}),v=P(()=>{const a={};return e.openOnHover&&(a.mouseenter=()=>{i&&(l=!0,i=!1,c())},a.mouseleave=()=>{l=!1,y()}),a});R(o,a=>{a&&(e.openOnHover&&!l&&(!u.value||!s)||u.value&&!s&&(!e.openOnHover||!l))&&(n.value=!1)});const O=C();ie(()=>{O.value&&J(()=>{const a=O.value;r.value=Ae(a)?a.$el:a})});const x=le("useActivator");let w;return R(()=>!!e.activator,a=>{a&&V?(w=Se(),w.run(()=>{gt(e,x,{activatorEl:r,activatorEvents:p})})):w&&w.stop()},{flush:"post",immediate:!0}),B(()=>{w==null||w.stop()}),{activatorEl:r,activatorRef:O,activatorEvents:p,contentEvents:d,scrimEvents:v}}function gt(e,t,n){let{activatorEl:o,activatorEvents:r}=n;R(()=>e.activator,(u,f)=>{if(f&&u!==f){const c=i(f);c&&s(c)}u&&J(()=>l())},{immediate:!0}),R(()=>e.activatorProps,()=>{l()}),B(()=>{s()});function l(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&(Object.entries(r.value).forEach(c=>{let[y,h]=c;u.addEventListener(y,h)}),Object.keys(f).forEach(c=>{f[c]==null?u.removeAttribute(c):u.setAttribute(c,f[c])}))}function s(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&(Object.entries(r.value).forEach(c=>{let[y,h]=c;u.removeEventListener(y,h)}),Object.keys(f).forEach(c=>{u.removeAttribute(c)}))}function i(){var c,y;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,f;if(u)if(u==="parent"){let h=(y=(c=t==null?void 0:t.proxy)==null?void 0:c.$el)==null?void 0:y.parentNode;for(;h.hasAttribute("data-no-activator");)h=h.parentNode;f=h}else typeof u=="string"?f=document.querySelector(u):"$el"in u?f=u.$el:f=u;return o.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:null,o.value}}function ne(e,t){return{x:e.x+t.x,y:e.y+t.y}}function ht(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ye(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,r=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,l=n==="top"?0:n==="bottom"?t.height:n;return ne({x:r,y:l},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,r=n==="left"?0:n==="right"?t.width:n,l=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return ne({x:r,y:l},t)}return ne({x:t.width/2,y:t.height/2},t)}const Oe={static:Et,connected:kt},bt=U({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Oe},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function wt(e,t){const n=C({}),o=C();V&&(se(()=>!!(t.isActive.value&&e.locationStrategy),l=>{var s,i;R(()=>e.locationStrategy,l),B(()=>{o.value=void 0}),typeof e.locationStrategy=="function"?o.value=(s=e.locationStrategy(t,e,n))==null?void 0:s.updateLocation:o.value=(i=Oe[e.locationStrategy](t,e,n))==null?void 0:i.updateLocation}),window.addEventListener("resize",r,{passive:!0}),B(()=>{window.removeEventListener("resize",r),o.value=void 0}));function r(l){var s;(s=o.value)==null||s.call(o,l)}return{contentStyles:n,updateLocation:o}}function Et(){}function St(e,t){const n=at(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function kt(e,t,n){ut(e.activatorEl.value)&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:r,preferredOrigin:l}=Le(()=>{const d=ue(t.location,e.isRtl.value),v=t.origin==="overlap"?d:t.origin==="auto"?X(d):ue(t.origin,e.isRtl.value);return d.side===v.side&&d.align===Z(v).align?{preferredAnchor:fe(d),preferredOrigin:fe(v)}:{preferredAnchor:d,preferredOrigin:v}}),[s,i,u,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>P(()=>{const v=parseFloat(t[d]);return isNaN(v)?1/0:v})),c=P(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const d=t.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let y=!1;const h=new ResizeObserver(()=>{y&&p()});R([e.activatorEl,e.contentEl],(d,v)=>{let[O,x]=d,[w,a]=v;w&&h.unobserve(w),O&&h.observe(O),a&&h.unobserve(a),x&&h.observe(x)},{immediate:!0}),B(()=>{h.disconnect()});function p(){if(y=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>y=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const d=e.activatorEl.value.getBoundingClientRect(),v=St(e.contentEl.value,e.isRtl.value),O=K(e.contentEl.value),x=12;O.length||(O.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const w=O.reduce((S,E)=>{const m=E.getBoundingClientRect(),b=new te({x:E===document.documentElement?0:m.x,y:E===document.documentElement?0:m.y,width:E.clientWidth,height:E.clientHeight});return S?new te({x:Math.max(S.left,b.left),y:Math.max(S.top,b.top),width:Math.min(S.right,b.right)-Math.max(S.left,b.left),height:Math.min(S.bottom,b.bottom)-Math.max(S.top,b.top)}):b},void 0);w.x+=x,w.y+=x,w.width-=x*2,w.height-=x*2;let a={anchor:r.value,origin:l.value};function A(S){const E=new te(v),m=ye(S.anchor,d),b=ye(S.origin,E);let{x:T,y:L}=ht(m,b);switch(S.anchor.side){case"top":L-=c.value[0];break;case"bottom":L+=c.value[0];break;case"left":T-=c.value[0];break;case"right":T+=c.value[0];break}switch(S.anchor.align){case"top":L-=c.value[1];break;case"bottom":L+=c.value[1];break;case"left":T-=c.value[1];break;case"right":T+=c.value[1];break}return E.x+=T,E.y+=L,E.width=Math.min(E.width,u.value),E.height=Math.min(E.height,f.value),{overflows:me(E,w),x:T,y:L}}let D=0,_=0;const H={x:0,y:0},$={x:!1,y:!1};let j=-1;for(;;){if(j++>10){Fe("Infinite loop detected in connectedLocationStrategy");break}const{x:S,y:E,overflows:m}=A(a);D+=S,_+=E,v.x+=S,v.y+=E;{const b=ve(a.anchor),T=m.x.before||m.x.after,L=m.y.before||m.y.after;let W=!1;if(["x","y"].forEach(k=>{if(k==="x"&&T&&!$.x||k==="y"&&L&&!$.y){const g={anchor:{...a.anchor},origin:{...a.origin}},I=k==="x"?b==="y"?Z:X:b==="y"?X:Z;g.anchor=I(g.anchor),g.origin=I(g.origin);const{overflows:Y}=A(g);(Y[k].before<=m[k].before&&Y[k].after<=m[k].after||Y[k].before+Y[k].after<(m[k].before+m[k].after)/2)&&(a=g,W=$[k]=!0)}}),W)continue}m.x.before&&(D+=m.x.before,v.x+=m.x.before),m.x.after&&(D-=m.x.after,v.x-=m.x.after),m.y.before&&(_+=m.y.before,v.y+=m.y.before),m.y.after&&(_-=m.y.after,v.y-=m.y.after);{const b=me(v,w);H.x=w.width-b.x.before-b.x.after,H.y=w.height-b.y.before-b.y.after,D+=b.x.before,v.x+=b.x.before,_+=b.y.before,v.y+=b.y.before}break}const M=ve(a.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${a.anchor.side} ${a.anchor.align}`,transformOrigin:`${a.origin.side} ${a.origin.align}`,top:F(oe(_)),left:e.isRtl.value?void 0:F(oe(D)),right:e.isRtl.value?F(oe(-D)):void 0,minWidth:F(M==="y"?Math.min(s.value,d.width):s.value),maxWidth:F(ge(de(H.x,s.value===1/0?0:s.value,u.value))),maxHeight:F(ge(de(H.y,i.value===1/0?0:i.value,f.value)))}),{available:H,contentBox:v}}return R(()=>[r.value,l.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>p()),J(()=>{const d=p();if(!d)return;const{available:v,contentBox:O}=d;O.height>v.y&&requestAnimationFrame(()=>{p(),requestAnimationFrame(()=>{p()})})}),{updateLocation:p}}function oe(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function ge(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ae=!0;const Q=[];function xt(e){!ae||Q.length?(Q.push(e),re()):(ae=!1,e(),re())}let he=-1;function re(){cancelAnimationFrame(he),he=requestAnimationFrame(()=>{const e=Q.shift();e&&e(),Q.length?re():ae=!0})}const G={none:null,close:Pt,block:Ct,reposition:At},Ot=U({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in G}},"v-overlay-scroll-strategies");function pt(e,t){if(!V)return;let n;ie(async()=>{n==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(n=Se(),await J(),n.active&&n.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):(o=G[e.scrollStrategy])==null||o.call(G,t,e,n)}))}),B(()=>{n==null||n.stop()})}function Pt(e){function t(n){e.isActive.value=!1}pe(e.activatorEl.value??e.contentEl.value,t)}function Ct(e,t){var s;const n=(s=e.root.value)==null?void 0:s.offsetParent,o=[...new Set([...K(e.activatorEl.value,t.contained?n:void 0),...K(e.contentEl.value,t.contained?n:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),r=window.innerWidth-document.documentElement.offsetWidth,l=(i=>ce(i)&&i)(n||document.documentElement);l&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((i,u)=>{i.style.setProperty("--v-body-scroll-x",F(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",F(-i.scrollTop)),i.style.setProperty("--v-scrollbar-offset",F(r)),i.classList.add("v-overlay-scroll-blocked")}),B(()=>{o.forEach((i,u)=>{const f=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),c=parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-f,i.scrollTop=-c}),l&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function At(e,t,n){let o=!1,r=-1,l=-1;function s(i){xt(()=>{var c,y;const u=performance.now();(y=(c=e.updateLocation).value)==null||y.call(c,i),o=(performance.now()-u)/(1e3/60)>2})}l=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{n.run(()=>{pe(e.activatorEl.value??e.contentEl.value,i=>{o?(cancelAnimationFrame(r),r=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{s(i)})})):s(i)})})}),B(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(l),cancelAnimationFrame(r)})}function pe(e,t){const n=[document,...K(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),B(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}function Tt(){if(!V)return C(!1);const{ssr:e}=Re();if(e){const t=C(!1);return Be(()=>{t.value=!0}),t}else return C(!0)}function Lt(){const t=le("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const be=Symbol.for("vuetify:stack"),q=ke([]);function Ft(e,t,n){const o=le("useStack"),r=!n,l=Ee(be,void 0),s=ke({activeChildren:new Set});Ie(be,s);const i=C(+t.value);se(e,()=>{var y;const c=(y=q.at(-1))==null?void 0:y[1];i.value=c?c+10:+t.value,r&&q.push([o.uid,i.value]),l==null||l.activeChildren.add(o.uid),B(()=>{if(r){const h=Me(q).findIndex(p=>p[0]===o.uid);q.splice(h,1)}l==null||l.activeChildren.delete(o.uid)})});const u=C(!0);r&&ie(()=>{var y;const c=((y=q.at(-1))==null?void 0:y[0])===o.uid;setTimeout(()=>u.value=c)});const f=P(()=>!s.activeChildren.size);return{globalTop:De(u),localTop:f,stackStyles:P(()=>({zIndex:i.value}))}}function Rt(e){return{teleportTarget:P(()=>{const n=e.value;if(n===!0||!V)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let r=o.querySelector(":scope > .v-overlay-container");return r||(r=document.createElement("div"),r.className="v-overlay-container",o.appendChild(r)),r})}}function Bt(){return!0}function Pe(e,t,n){if(!e||Ce(e,n)===!1)return!1;const o=xe(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const r=(typeof n.value=="object"&&n.value.include||(()=>[]))();return r.push(t),!r.some(l=>l==null?void 0:l.contains(e.target))}function Ce(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Bt)(e)}function It(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Pe(e,t,n)&&setTimeout(()=>{Ce(e,n)&&o&&o(e)},0)}function we(e,t){const n=xe(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Dt={mounted(e,t){const n=r=>It(r,e,t),o=r=>{e._clickOutside.lastMousedownWasOutside=Pe(r,e,t)};we(e,r=>{r.addEventListener("click",n,!0),r.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(we(e,n=>{var l;if(!n||!((l=e._clickOutside)!=null&&l[t.instance.$.uid]))return;const{onClick:o,onMousedown:r}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",r,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Mt(e){const{modelValue:t,color:n,...o}=e;return N(et,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&N("div",z({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Nt=U({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...mt(),...Ne(),..._e(),...nt(),...bt(),...Ot(),...He(),...lt()},"v-overlay"),$t=Ve()({name:"VOverlay",directives:{ClickOutside:Dt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Nt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:r}=t;const l=We(e,"modelValue"),s=P({get:()=>l.value,set:g=>{g&&e.disabled||(l.value=g)}}),{teleportTarget:i}=Rt(P(()=>e.attach||e.contained)),{themeClasses:u}=$e(e),{rtlClasses:f,isRtl:c}=je(),{hasContent:y,onAfterLeave:h}=ot(e,s),p=qe(P(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:v,stackStyles:O}=Ft(s,ze(e,"zIndex"),e._disableGlobalStack),{activatorEl:x,activatorRef:w,activatorEvents:a,contentEvents:A,scrimEvents:D}=yt(e,{isActive:s,isTop:v}),{dimensionStyles:_}=Ue(e),H=Tt(),{scopeId:$}=Lt();R(()=>e.disabled,g=>{g&&(s.value=!1)});const j=C(),M=C(),{contentStyles:S,updateLocation:E}=wt(e,{isRtl:c,contentEl:M,activatorEl:x,isActive:s});pt(e,{root:j,contentEl:M,activatorEl:x,isActive:s,updateLocation:E});function m(g){r("click:outside",g),e.persistent?k():s.value=!1}function b(){return s.value&&d.value}V&&R(s,g=>{g?window.addEventListener("keydown",T):window.removeEventListener("keydown",T)},{immediate:!0});function T(g){g.key==="Escape"&&d.value&&(e.persistent?k():s.value=!1)}const L=Ye();se(()=>e.closeOnBack,()=>{tt(L,g=>{d.value&&s.value?(g(!1),e.persistent?k():s.value=!1):g()})});const W=C();R(()=>s.value&&(e.absolute||e.contained)&&i.value==null,g=>{if(g){const I=ct(j.value);I&&I!==document.scrollingElement&&(W.value=I.scrollTop)}});function k(){e.noClickAnimation||M.value&&rt(M.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:it})}return Ge(()=>{var g;return N(Ze,null,[(g=n.activator)==null?void 0:g.call(n,{isActive:s.value,props:z({ref:w},ee(a.value),e.activatorProps)}),H.value&&N(Ke,{disabled:!i.value,to:i.value},{default:()=>[y.value&&N("div",z({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},u.value,f.value,e.class],style:[O.value,{top:F(W.value)},e.style],ref:j},$,o),[N(Mt,z({color:p,modelValue:s.value&&!!e.scrim},ee(D.value)),null),N(st,{appear:!0,persisted:!0,transition:e.transition,target:x.value,onAfterLeave:()=>{h(),r("afterLeave")}},{default:()=>{var I;return[Qe(N("div",z({ref:M,class:["v-overlay__content",e.contentClass],style:[_.value,S.value]},ee(A.value),e.contentProps),[(I=n.default)==null?void 0:I.call(n,{isActive:s})]),[[Je,s.value],[Xe("click-outside"),{handler:m,closeConditional:b,include:()=>[x.value]}]])]}})])]})])}),{activatorEl:x,animateClick:k,contentEl:M,globalTop:d,localTop:v,updateLocation:E}}});export{dt as V,$t as a,Nt as m,Lt as u};
