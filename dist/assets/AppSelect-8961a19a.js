import{d as m,I as r,aA as o,o as c,c as u,q as t,b as f,C as _,p as b,ab as h,a as $,w as C,n as V,ac as i,ad as p,s as g}from"./index-0956881b.js";import{V as k}from"./VInput-262443ee.js";import{V as v}from"./VSelect-56803d9f.js";const S=m({name:"AppSelect",inheritAttrs:!1}),P=Object.assign(S,{setup(A){const a=r(()=>{const e=o(),s=e.id||e.label;return s?`app-select-${s}-${Math.random().toString(36).slice(2,7)}`:void 0}),n=r(()=>o().label);return(e,s)=>(c(),u("div",{class:g(["app-select flex-grow-1",e.$attrs.class])},[t(n)?(c(),f(k,{key:0,for:t(a),class:"mb-1 text-body-2 text-high-emphasis",text:t(n)},null,8,["for","text"])):_("",!0),b(v,i(p({...e.$attrs,class:null,label:void 0,variant:"outlined",id:t(a),menuProps:{contentClass:["app-inner-list","app-select__content","v-select__content",e.$attrs.multiple!==void 0?"v-list-select-multiple":""]}})),h({_:2},[$(e.$slots,(w,l)=>({name:l,fn:C(d=>[V(e.$slots,l,i(p(d||{})))])}))]),1040)],2))}});export{P as _};