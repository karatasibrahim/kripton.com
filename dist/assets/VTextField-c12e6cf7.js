/* empty css                   */import{m as X,f as $,V as q}from"./VField-babfa9a2.js";import{m as G,u as J,a as b}from"./VInput-18f5ff20.js";import{i as K}from"./VImg-d074e4c4.js";import{f as L}from"./forwardRefs-a29b5f65.js";import{aI as Q,ar as Y,at as Z,I as m,k as x,aw as ee,aH as te,p as n,$ as V,O as ne,bl as le,F as y,bW as ae,bb as p,bX as oe}from"./index-8abefeb0.js";import{V as ue}from"./VCounter-29118a28.js";const ie=["color","file","time","date","datetime-local","week","month"],re=Q({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},modelModifiers:Object,...G(),...X()},"v-text-field"),ye=Y()({name:"VTextField",directives:{Intersect:K},inheritAttrs:!1,props:re(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,w){let{attrs:v,emit:g,slots:l}=w;const u=Z(e,"modelValue"),{isFocused:r,focus:S,blur:D}=J(e),R=m(()=>typeof e.counterValue=="function"?e.counterValue(u.value):(u.value??"").toString().length),A=m(()=>{if(v.maxlength)return v.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function B(t,a){var o,i;!e.autofocus||!t||(i=(o=a[0].target)==null?void 0:o.focus)==null||i.call(o)}const C=x(),h=x(),s=x(),M=m(()=>ie.includes(e.type)||e.persistentPlaceholder||r.value);function d(){var t;s.value!==document.activeElement&&((t=s.value)==null||t.focus()),r.value||S()}function T(t){g("mousedown:control",t),t.target!==s.value&&(d(),t.preventDefault())}function _(t){d(),g("click:control",t)}function E(t){t.stopPropagation(),d(),p(()=>{u.value=null,oe(e["onClick:clear"],t)})}function N(t){var o;const a=t.target;if(u.value=a.value,(o=e.modelModifiers)!=null&&o.trim&&["text","search","password","tel","url"].includes(e.type)){const i=[a.selectionStart,a.selectionEnd];p(()=>{a.selectionStart=i[0],a.selectionEnd=i[1]})}}return ee(()=>{const t=!!(l.counter||e.counter||e.counterValue),a=!!(t||l.details),[o,i]=te(v),[{modelValue:se,...O}]=b.filterProps(e),[j]=$(e);return n(b,V({ref:C,modelValue:u.value,"onUpdate:modelValue":c=>u.value=c,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)},e.class],style:e.style},o,O,{focused:r.value}),{...l,default:c=>{let{id:f,isDisabled:k,isDirty:F,isReadonly:z,isValid:H}=c;return n(q,V({ref:h,onMousedown:T,onClick:_,"onClick:clear":E,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},j,{id:f.value,active:M.value||F.value,dirty:F.value||e.dirty,disabled:k.value,focused:r.value,error:H.value===!1}),{...l,default:U=>{let{props:{class:I,...W}}=U;const P=ne(n("input",V({ref:s,value:u.value,onInput:N,autofocus:e.autofocus,readonly:z.value,disabled:k.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:d,onBlur:D},W,i),null),[[le("intersect"),{handler:B},null,{once:!0}]]);return n(y,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[e.prefix]),l.default?n("div",{class:I,"data-no-activator":""},[l.default(),P]):ae(P,{class:I}),e.suffix&&n("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:a?c=>{var f;return n(y,null,[(f=l.details)==null?void 0:f.call(l,c),t&&n(y,null,[n("span",null,null),n(ue,{active:e.persistentCounter||r.value,value:R.value,max:A.value},l.counter)])])}:void 0})}),L({},C,h,s)}});export{ye as V,re as m};