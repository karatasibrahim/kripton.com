import{ar as y,as as V,az as h,bf as N,b2 as x,aZ as P,aB as T,b5 as w,aE as d,b8 as R,au as _,aD as $,H as L,bg as A,aw as D,bh as I,p as t,O as M,Q as X,$ as u,B as Y}from"./index-0956881b.js";import{m as z,M as E}from"./transition-a6760ced.js";const Q=y()({name:"VBadge",inheritAttrs:!1,props:{bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:V,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...h(),...N({location:"top end"}),...x(),...P(),...T(),...z({transition:"scale-rotate-transition"})},setup(e,o){const{backgroundColorClasses:c,backgroundColorStyles:b}=w(d(e,"color")),{roundedClasses:g}=R(e),{t:m}=_(),{textColorClasses:f,textColorStyles:v}=$(d(e,"textColor")),{themeClasses:C}=L(),{locationStyles:B}=A(e,!0,a=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(a)?+(e.offsetY??0):["left","right"].includes(a)?+(e.offsetX??0):0));return D(()=>{const a=Number(e.content),n=!e.max||isNaN(a)?e.content:a<=+e.max?a:`${e.max}+`,[S,k]=I(o.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return t(e.tag,u({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},k,{style:e.style}),{default:()=>{var l,s;return[t("div",{class:"v-badge__wrapper"},[(s=(l=o.slots).default)==null?void 0:s.call(l),t(E,{transition:e.transition},{default:()=>{var i,r;return[M(t("span",u({class:["v-badge__badge",C.value,c.value,g.value,f.value],style:[b.value,v.value,e.inline?{}:B.value],"aria-atomic":"true","aria-label":m(e.label,a),"aria-live":"polite",role:"status"},S),[e.dot?void 0:o.slots.badge?(r=(i=o.slots).badge)==null?void 0:r.call(i):e.icon?t(Y,{icon:e.icon},null):n]),[[X,e.modelValue]])]}})])]}})}),{}}});export{Q as V};
