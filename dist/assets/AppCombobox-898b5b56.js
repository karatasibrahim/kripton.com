import{b as ve,V as de}from"./VInput-18f5ff20.js";import{m as fe}from"./VSelect-8ac6da1d.js";import{f as me}from"./forwardRefs-a29b5f65.js";import{m as be,u as pe}from"./filter-da4abc64.js";import{m as he}from"./transition-27cd020f.js";import{u as xe,t as R,V as ge,a as K}from"./VList-6ff14ab1.js";import{ar as ye,aF as ke,au as Ce,k as V,at as q,I as p,aD as Ve,aM as _e,z as T,bb as H,aw as we,p as s,F as Y,$ as D,ax as Ie,D as Ae,d as De,aA as G,o as J,c as Pe,q as $,b as Fe,C as Se,ab as Re,a as Te,w as $e,n as Ee,ac as Q,ad as W,s as Me}from"./index-8abefeb0.js";import{m as Le,V as X}from"./VTextField-c12e6cf7.js";import{V as Ne}from"./VMenu-c1c5f8c8.js";import{V as Be}from"./VCheckboxBtn-4b1fa09e.js";import{V as Oe}from"./VChip-9bbbdea6.js";function Ue(e,d,y){if(d==null)return e;if(Array.isArray(d))throw new Error("Multiple matches is not implemented");return typeof d=="number"&&~d?s(Y,null,[s("span",{class:"v-combobox__unmask"},[e.substr(0,d)]),s("span",{class:"v-combobox__mask"},[e.substr(d,y)]),s("span",{class:"v-combobox__unmask"},[e.substr(d+y)])]):e}const ze=ye()({name:"VCombobox",props:{delimiters:Array,...be({filterKeys:["title"]}),...fe({hideNoData:!0,returnObject:!0}),...ke(Le({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...he({transition:!1})},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,d){var j;let{emit:y,slots:a}=d;const{t:I}=Ce(),g=V(),m=V(!1),h=V(!0),U=V(),E=q(e,"menu"),v=p({get:()=>E.value,set:l=>{var t;E.value&&!l&&((t=U.value)!=null&&t.ΨopenChildren)||(E.value=l)}}),u=V(-1);let M=!1;const Z=p(()=>{var l;return(l=g.value)==null?void 0:l.color}),{items:L,transformIn:ee,transformOut:le}=xe(e),{textColorClasses:ae,textColorStyles:te}=Ve(Z),c=q(e,"modelValue",[],l=>ee(_e(l)),l=>{const t=le(l);return e.multiple?t:t[0]??null}),_=ve(),w=V(e.multiple?"":((j=c.value[0])==null?void 0:j.title)??""),i=p({get:()=>w.value,set:l=>{var t;if(w.value=l,e.multiple||(c.value=[R(e,l)]),l&&e.multiple&&((t=e.delimiters)!=null&&t.length)){const r=l.split(new RegExp(`(?:${e.delimiters.join("|")})+`));r.length>1&&(r.forEach(x=>{x=x.trim(),x&&C(R(e,x))}),w.value="")}l||(u.value=-1),h.value=!l}});T(w,l=>{M?H(()=>M=!1):m.value&&!v.value&&(v.value=!0),y("update:search",l)}),T(c,l=>{var t;e.multiple||(w.value=((t=l[0])==null?void 0:t.title)??"")});const{filteredItems:P,getMatches:ne}=pe(e,L,p(()=>h.value?void 0:i.value)),k=p(()=>c.value.map(l=>L.value.find(t=>e.valueComparator(t.value,l.value))||l)),N=p(()=>e.hideSelected?P.value.filter(l=>!k.value.some(t=>t.value===l.value)):P.value),B=p(()=>k.value.map(l=>l.props.value)),z=p(()=>k.value[u.value]),O=V();function ue(l){M=!0,e.openOnClear&&(v.value=!0)}function oe(){e.hideNoData&&!L.value.length||e.readonly||_!=null&&_.isReadonly.value||(v.value=!0)}function se(l){var x,n;if(e.readonly||_!=null&&_.isReadonly.value)return;const t=g.value.selectionStart,r=B.value.length;if((u.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(v.value=!0),["Escape"].includes(l.key)&&(v.value=!1),["Enter","Escape","Tab"].includes(l.key)&&(h.value=!0),l.key==="ArrowDown"?(x=O.value)==null||x.focus("next"):l.key==="ArrowUp"&&((n=O.value)==null||n.focus("prev")),!!e.multiple){if(["Backspace","Delete"].includes(l.key)){if(u.value<0){l.key==="Backspace"&&!i.value&&(u.value=r-1);return}const o=u.value;z.value&&C(z.value),u.value=o>=r-1?r-2:o}if(l.key==="ArrowLeft"){if(u.value<0&&t>0)return;const o=u.value>-1?u.value-1:r-1;k.value[o]?u.value=o:(u.value=-1,g.value.setSelectionRange(i.value.length,i.value.length))}if(l.key==="ArrowRight"){if(u.value<0)return;const o=u.value+1;k.value[o]?u.value=o:(u.value=-1,g.value.setSelectionRange(0,0))}l.key==="Enter"&&i.value&&(C(R(e,i.value)),i.value="")}}function ie(){m.value&&(h.value=!0)}function C(l){if(e.multiple){const t=B.value.findIndex(r=>e.valueComparator(r,l.value));if(t===-1)c.value=[...c.value,l];else{const r=[...c.value];r.splice(t,1),c.value=r}i.value=""}else c.value=[l],w.value=l.title,H(()=>{v.value=!1,h.value=!0})}function re(l){m.value=!0}function ce(l){var t;l.relatedTarget==null&&((t=g.value)==null||t.focus())}return T(P,l=>{!l.length&&e.hideNoData&&(v.value=!1)}),T(m,l=>{if(l)u.value=-1;else{if(v.value=!1,!e.multiple||!i.value)return;c.value=[...c.value,R(e,i.value)],i.value=""}}),we(()=>{const l=!!(e.chips||a.chip),t=!!(!e.hideNoData||N.value.length||a.prepend||a.append||a["no-data"]),r=c.value.length>0,[x]=X.filterProps(e);return s(X,D({ref:g},x,{modelValue:i.value,"onUpdate:modelValue":[n=>i.value=n,n=>{n==null&&(c.value=[])}],focused:m.value,"onUpdate:focused":n=>m.value=n,validationValue:c.externalValue,dirty:r,class:["v-combobox",{"v-combobox--active-menu":v.value,"v-combobox--chips":!!e.chips,"v-combobox--selecting-index":u.value>-1,[`v-combobox--${e.multiple?"multiple":"single"}`]:!0},e.class],style:e.style,appendInnerIcon:e.items.length?e.menuIcon:void 0,readonly:e.readonly,placeholder:r?void 0:e.placeholder,"onClick:clear":ue,"onMousedown:control":oe,onKeydown:se}),{...a,default:()=>s(Y,null,[s(Ne,D({ref:U,modelValue:v.value,"onUpdate:modelValue":n=>v.value=n,activator:"parent",contentClass:"v-combobox__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:ie},e.menuProps),{default:()=>[t&&s(ge,{ref:O,selected:B.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:n=>n.preventDefault(),onFocusin:re,onFocusout:ce},{default:()=>{var n,o,F;return[!N.value.length&&!e.hideNoData&&(((n=a["no-data"])==null?void 0:n.call(a))??s(K,{title:I(e.noDataText)},null)),(o=a["prepend-item"])==null?void 0:o.call(a),N.value.map(f=>{var A;return((A=a.item)==null?void 0:A.call(a,{item:f,props:D(f.props,{onClick:()=>C(f)})}))??s(K,D({key:f.value},f.props,{onClick:()=>C(f)}),{prepend:b=>{let{isSelected:S}=b;return e.multiple&&!e.hideSelected?s(Be,{modelValue:S,ripple:!1,tabindex:"-1"},null):void 0},title:()=>{var b,S;return h.value?f.title:Ue(f.title,(b=ne(f))==null?void 0:b.title,((S=i.value)==null?void 0:S.length)??0)}})}),(F=a["append-item"])==null?void 0:F.call(a)]}})]}),k.value.map((n,o)=>{var A;function F(b){b.stopPropagation(),b.preventDefault(),C(n)}const f={"onClick:close":F,modelValue:!0,"onUpdate:modelValue":void 0};return s("div",{key:n.value,class:["v-combobox__selection",o===u.value&&["v-combobox__selection--selected",ae.value]],style:o===u.value?te.value:{}},[l?a.chip?s(Ie,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:n.title}}},{default:()=>{var b;return[(b=a.chip)==null?void 0:b.call(a,{item:n,index:o,props:f})]}}):s(Oe,D({key:"chip",closable:e.closableChips,size:"small",text:n.title},f),null):((A=a.selection)==null?void 0:A.call(a,{item:n,index:o}))??s("span",{class:"v-combobox__selection-text"},[n.title,e.multiple&&o<k.value.length-1&&s("span",{class:"v-combobox__selection-comma"},[Ae(",")])])])})])})}),me({isFocused:m,isPristine:h,menu:v,search:i,selectionIndex:u,filteredItems:P,select:C},g)}}),je=De({name:"AppCombobox",inheritAttrs:!1}),ll=Object.assign(je,{setup(e){const d=p(()=>{const a=G(),I=a.id||a.label;return I?`app-combobox-${I}-${Math.random().toString(36).slice(2,7)}`:void 0}),y=p(()=>G().label);return(a,I)=>(J(),Pe("div",{class:Me(["app-combobox flex-grow-1",a.$attrs.class])},[$(y)?(J(),Fe(de,{key:0,for:$(d),class:"mb-1 text-body-2 text-high-emphasis",text:$(y)},null,8,["for","text"])):Se("",!0),s(ze,Q(W({...a.$attrs,class:null,label:void 0,variant:"outlined",id:$(d),menuProps:{contentClass:["app-inner-list","app-combobox__content","v-combobox__content",a.$attrs.multiple!==void 0?"v-list-select-multiple":""]}})),Re({_:2},[Te(a.$slots,(g,m)=>({name:m,fn:$e(h=>[Ee(a.$slots,m,Q(W(h||{})))])}))]),1040)],2))}});export{ze as V,ll as _};