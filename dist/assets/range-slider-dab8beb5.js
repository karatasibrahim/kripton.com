import{m as X,u as Z,a as ee,V as le,b as W,g as Y}from"./VSliderTrack-b5f1e44b.js";import{c as ae,m as te,u as se,a as q,V as oe}from"./VInput-18f5ff20.js";import{ar as ue,k as V,at as ne,I as E,aw as re,p as a,F as ie,$ as de,o as S,b as R,q as $,G as w,w as i,B as ce,m as d,D as p}from"./index-8abefeb0.js";import{_ as me}from"./AppCardCode-3489ae32.js";import{V as k,a as pe}from"./VRow-4bd89dfc.js";import"./transition-27cd020f.js";import"./vue.runtime.esm-bundler-b454e122.js";import"./VCard-0e65e470.js";import"./VAvatar-3c40fe41.js";import"./VImg-d074e4c4.js";import"./VCardText-db993edb.js";const x=ue()({name:"VRangeSlider",props:{...ae(),...te(),...X(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,s){let{slots:u,emit:o}=s;const l=V(),n=V(),h=V();function I(c){if(!l.value||!n.value)return;const v=Y(c,l.value.$el,e.direction),b=Y(c,n.value.$el,e.direction),r=Math.abs(v),m=Math.abs(b);return r<m||r===m&&v<0?l.value.$el:n.value.$el}const C=Z(e),t=ne(e,"modelValue",void 0,c=>c!=null&&c.length?c.map(v=>C.roundValue(v)):[0,0]),{activeThumbRef:f,hasLabels:G,max:j,min:M,mousePressed:H,onSliderMousedown:J,onSliderTouchstart:K,position:z,trackContainerRef:Q}=ee({props:e,steps:C,onSliderStart:()=>{o("start",t.value)},onSliderEnd:c=>{var r;let{value:v}=c;const b=f.value===((r=l.value)==null?void 0:r.$el)?[v,t.value[1]]:[t.value[0],v];t.value=b,o("end",b)},onSliderMove:c=>{var m,_,D,y;let{value:v}=c;const[b,r]=t.value;!e.strict&&b===r&&b!==M.value&&(f.value=v>b?(m=n.value)==null?void 0:m.$el:(_=l.value)==null?void 0:_.$el,(D=f.value)==null||D.focus()),f.value===((y=l.value)==null?void 0:y.$el)?t.value=[Math.min(v,r),r]:t.value=[b,Math.max(b,v)]},getActiveThumb:I}),{isFocused:P,focus:L,blur:A}=se(e),N=E(()=>z(t.value[0])),O=E(()=>z(t.value[1]));return re(()=>{const[c,v]=q.filterProps(e),b=!!(e.label||u.label||u.prepend);return a(q,de({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!u["tick-label"]||G.value,"v-slider--focused":P.value,"v-slider--pressed":H.value,"v-slider--disabled":e.disabled},e.class],style:e.style,ref:h},c,{focused:P.value}),{...u,prepend:b?r=>{var m,_;return a(ie,null,[((m=u.label)==null?void 0:m.call(u,r))??e.label?a(oe,{class:"v-slider__label",text:e.label},null):void 0,(_=u.prepend)==null?void 0:_.call(u,r)])}:void 0,default:r=>{var D,y;let{id:m,messagesId:_}=r;return a("div",{class:"v-slider__container",onMousedown:J,onTouchstartPassive:K},[a("input",{id:`${m.value}_start`,name:e.name||m.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:t.value[0]},null),a("input",{id:`${m.value}_stop`,name:e.name||m.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:t.value[1]},null),a(le,{ref:Q,start:N.value,stop:O.value},{"tick-label":u["tick-label"]}),a(W,{ref:l,"aria-describedby":_.value,focused:P&&f.value===((D=l.value)==null?void 0:D.$el),modelValue:t.value[0],"onUpdate:modelValue":g=>t.value=[g,t.value[1]],onFocus:g=>{var T,B,F,U;L(),f.value=(T=l.value)==null?void 0:T.$el,t.value[0]===t.value[1]&&t.value[1]===M.value&&g.relatedTarget!==((B=n.value)==null?void 0:B.$el)&&((F=l.value)==null||F.$el.blur(),(U=n.value)==null||U.$el.focus())},onBlur:()=>{A(),f.value=void 0},min:M.value,max:t.value[1],position:N.value},{"thumb-label":u["thumb-label"]}),a(W,{ref:n,"aria-describedby":_.value,focused:P&&f.value===((y=n.value)==null?void 0:y.$el),modelValue:t.value[1],"onUpdate:modelValue":g=>t.value=[t.value[0],g],onFocus:g=>{var T,B,F,U;L(),f.value=(T=n.value)==null?void 0:T.$el,t.value[0]===t.value[1]&&t.value[0]===j.value&&g.relatedTarget!==((B=l.value)==null?void 0:B.$el)&&((F=n.value)==null||F.$el.blur(),(U=l.value)==null||U.$el.focus())},onBlur:()=>{A(),f.value=void 0},min:t.value[0],max:j.value,position:O.value},{"thumb-label":u["thumb-label"]})])}})}),{}}}),ve={__name:"DemoRangeSliderVertical",setup(e){const s=V([20,40]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),direction:"vertical"},null,8,["modelValue"]))}},be={__name:"DemoRangeSliderThumbLabel",setup(e){const s=["Winter","Spring","Summer","Fall"],u=["tabler-snowflake","tabler-leaf","tabler-flame","tabler-droplet"],o=V([1,2]);return(l,n)=>(S(),R(x,{modelValue:$(o),"onUpdate:modelValue":n[0]||(n[0]=h=>w(o)?o.value=h:null),tick:s,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":i(({modelValue:h})=>[a(ce,{icon:u[h]},null,8,["icon"])]),_:1},8,["modelValue"]))}},fe={__name:"DemoRangeSliderStep",setup(e){const s=V([20,40]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),step:"10"},null,8,["modelValue"]))}},Ve={__name:"DemoRangeSliderColor",setup(e){const s=V([10,60]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),color:"success","track-color":"warning"},null,8,["modelValue"]))}},_e={__name:"DemoRangeSliderDisabled",setup(e){const s=V([30,60]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}},he={__name:"DemoRangeSliderBasic",setup(e){const s=V([10,60]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null)},null,8,["modelValue"]))}},ge={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},Se={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="warning"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="warning"
  />
</template>
`},Re={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},ke={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},$e={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['tabler-snowflake', 'tabler-leaf', 'tabler-flame', 'tabler-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'tabler-snowflake',
  'tabler-leaf',
  'tabler-flame',
  'tabler-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},we={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},xe=d("p",null,[p("The "),d("code",null,"v-slider"),p(" component is a better visualization of the number input.")],-1),De=d("p",null,[p("You cannot interact with "),d("code",null,"disabled"),p(" sliders.")],-1),ye=d("p",null,[p("Use "),d("code",null,"color"),p(" prop to the sets the slider color. "),d("code",null,"track-color"),p(" prop to sets the color of slider's unfilled track.")],-1),Te=d("p",null,[d("code",null,"v-range-slider"),p(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),Be=d("p",null,[p(" Using the "),d("code",null,"tick-labels"),p(" prop along with the "),d("code",null,"thumb-label"),p(" slot, you can create a very customized solution. ")],-1),Fe=d("p",null,[p("You can use the "),d("code",null,"vertical"),p(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),We={__name:"range-slider",setup(e){return(s,u)=>{const o=he,l=me,n=_e,h=Ve,I=fe,C=be,t=ve;return S(),R(pe,null,{default:i(()=>[a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Basic",code:ge},{default:i(()=>[xe,a(o)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Disabled",code:Re},{default:i(()=>[De,a(n)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Color",code:Se},{default:i(()=>[ye,a(h)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Step",code:ke},{default:i(()=>[Te,a(I)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Thumb label",code:$e},{default:i(()=>[Be,a(C)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Vertical",code:we},{default:i(()=>[Fe,a(t)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{We as default};
