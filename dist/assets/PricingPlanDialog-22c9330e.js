import{_ as m}from"./AppPricing-68627279.js";import{_ as c}from"./DialogCloseBtn-4da1a8f1.js";import{V as d}from"./VCard-0e65e470.js";import{V as _}from"./VCardText-db993edb.js";import{V as u}from"./VDialog-8c7dec3f.js";import{o as g,b as V,w as a,p as i}from"./index-8abefeb0.js";const P={__name:"PricingPlanDialog",props:{isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible"],setup(l,{emit:s}){const t=l,n=o=>{s("update:isDialogVisible",o)};return(o,e)=>{const p=c,r=m;return g(),V(u,{"model-value":t.isDialogVisible,class:"v-dialog-xl","onUpdate:modelValue":n},{default:a(()=>[i(p,{onClick:e[0]||(e[0]=f=>o.$emit("update:isDialogVisible",!1))}),i(d,{class:"pricing-dialog pa-5 pa-sm-8"},{default:a(()=>[i(_,null,{default:a(()=>[i(r,{title:"Subscription Plan",md:"4"})]),_:1})]),_:1})]),_:1},8,["model-value"])}}};export{P as _};