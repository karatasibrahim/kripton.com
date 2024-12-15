import{m as W,V as _}from"./VTextField-c12e6cf7.js";import{f as Y}from"./forwardRefs-a29b5f65.js";import{aI as G,as as J,bw as Q,ar as X,aF as Z,au as ee,k as x,at as O,I as D,aw as ae,p as s,F as le,$ as V,ax as te,D as ne,aM as oe}from"./index-8abefeb0.js";import{m as ue,u as se,V as ie,a as R}from"./VList-6ff14ab1.js";import{m as re}from"./transition-27cd020f.js";import{b as ce}from"./VInput-18f5ff20.js";import{V as de}from"./dialog-transition-7521edc7.js";import{V as fe}from"./VMenu-c1c5f8c8.js";import{V as me}from"./VCheckboxBtn-4b1fa09e.js";import{V as ve}from"./VChip-9bbbdea6.js";const pe=G({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:J,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:Q},...ue({itemChildren:!1})},"v-select"),be=X()({name:"VSelect",props:{...pe(),...Z(W({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...re({transition:{component:de}})},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,E){let{slots:l}=E;const{t:M}=ee(),P=x(),B=x(),b=O(e,"menu"),i=D({get:()=>b.value,set:a=>{var n;b.value&&!a&&((n=B.value)!=null&&n.ΨopenChildren)||(b.value=a)}}),{items:h,transformIn:A,transformOut:K}=se(e),o=O(e,"modelValue",[],a=>A(oe(a)),a=>{const n=K(a);return e.multiple?n:n[0]??null}),v=ce(),k=D(()=>o.value.map(a=>h.value.find(n=>e.valueComparator(n.value,a.value))||a)),L=D(()=>k.value.map(a=>a.props.value)),y=x(!1);let I="",S;const F=D(()=>e.hideSelected?h.value.filter(a=>!k.value.some(n=>n===a)):h.value),p=x();function U(a){e.openOnClear&&(i.value=!0)}function N(){e.hideNoData&&!h.value.length||e.readonly||v!=null&&v.isReadonly.value||(i.value=!i.value)}function $(a){var t,f,m,r;if(e.readonly||v!=null&&v.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(a.key)&&a.preventDefault(),["Enter","ArrowDown"," "].includes(a.key)&&(i.value=!0),["Escape","Tab"].includes(a.key)&&(i.value=!1),a.key==="ArrowDown"?(t=p.value)==null||t.focus("next"):a.key==="ArrowUp"?(f=p.value)==null||f.focus("prev"):a.key==="Home"?(m=p.value)==null||m.focus("first"):a.key==="End"&&((r=p.value)==null||r.focus("last"));const n=1e3;function d(u){const c=u.key.length===1,T=!u.ctrlKey&&!u.metaKey&&!u.altKey;return c&&T}if(e.multiple||!d(a))return;const g=performance.now();g-S>n&&(I=""),I+=a.key.toLowerCase(),S=g;const w=h.value.find(u=>u.title.toLowerCase().startsWith(I));w!==void 0&&(o.value=[w])}function C(a){if(e.multiple){const n=L.value.findIndex(d=>e.valueComparator(d,a.value));if(n===-1)o.value=[...o.value,a];else{const d=[...o.value];d.splice(n,1),o.value=d}}else o.value=[a],i.value=!1}function H(a){var n;(n=p.value)!=null&&n.$el.contains(a.relatedTarget)||(i.value=!1)}function j(a){y.value=!0}function z(a){var n;a.relatedTarget==null&&((n=P.value)==null||n.focus())}return ae(()=>{const a=!!(e.chips||l.chip),n=!!(!e.hideNoData||F.value.length||l.prepend||l.append||l["no-data"]),d=o.value.length>0,[g]=_.filterProps(e),w=d||!y.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return s(_,V({ref:P},g,{modelValue:o.value.map(t=>t.props.value).join(", "),"onUpdate:modelValue":t=>{t==null&&(o.value=[])},focused:y.value,"onUpdate:focused":t=>y.value=t,validationValue:o.externalValue,dirty:d,class:["v-select",{"v-select--active-menu":i.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":o.value.length},e.class],style:e.style,appendInnerIcon:e.menuIcon,readonly:!0,placeholder:w,"onClick:clear":U,"onMousedown:control":N,onBlur:H,onKeydown:$}),{...l,default:()=>s(le,null,[s(fe,V({ref:B,modelValue:i.value,"onUpdate:modelValue":t=>i.value=t,activator:"parent",contentClass:"v-select__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition},e.menuProps),{default:()=>[n&&s(ie,{ref:p,selected:L.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:t=>t.preventDefault(),onFocusin:j,onFocusout:z},{default:()=>{var t,f,m;return[!F.value.length&&!e.hideNoData&&(((t=l["no-data"])==null?void 0:t.call(l))??s(R,{title:M(e.noDataText)},null)),(f=l["prepend-item"])==null?void 0:f.call(l),F.value.map((r,u)=>{var c;return l.item?(c=l.item)==null?void 0:c.call(l,{item:r,index:u,props:V(r.props,{onClick:()=>C(r)})}):s(R,V({key:u},r.props,{onClick:()=>C(r)}),{prepend:T=>{let{isSelected:q}=T;return e.multiple&&!e.hideSelected?s(me,{modelValue:q,ripple:!1,tabindex:"-1"},null):void 0}})}),(m=l["append-item"])==null?void 0:m.call(l)]}})]}),k.value.map((t,f)=>{var u;function m(c){c.stopPropagation(),c.preventDefault(),C(t)}const r={"onClick:close":m,modelValue:!0,"onUpdate:modelValue":void 0};return s("div",{key:t.value,class:"v-select__selection"},[a?l.chip?s(te,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:t.title}}},{default:()=>{var c;return[(c=l.chip)==null?void 0:c.call(l,{item:t,index:f,props:r})]}}):s(ve,V({key:"chip",closable:e.closableChips,size:"small",text:t.title},r),null):((u=l.selection)==null?void 0:u.call(l,{item:t,index:f}))??s("span",{class:"v-select__selection-text"},[t.title,e.multiple&&f<k.value.length-1&&s("span",{class:"v-select__selection-comma"},[ne(",")])])])})])})}),Y({isFocused:y,menu:i,select:C},P)}});export{be as V,pe as m};