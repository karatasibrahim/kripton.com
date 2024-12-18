import{_ as y}from"./AppTextField-5882686e.js";import{V as x,a as v}from"./VRow-4bd89dfc.js";import{V as b}from"./VCheckbox-3e596822.js";import{k as p,o as h,c as f,p as e,w as i,q as s,G as u,F as C,b as V,m as n,D as d,$ as S,a0 as O,y as I,a as U}from"./index-8abefeb0.js";import{V as $}from"./VTooltip-fbb04fe8.js";import{_ as z}from"./AppCardCode-3489ae32.js";import"./VInput-18f5ff20.js";import"./transition-27cd020f.js";import"./VTextField-c12e6cf7.js";/* empty css                   */import"./VField-babfa9a2.js";import"./easing-9f15041e.js";import"./VImg-d074e4c4.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-29118a28.js";import"./VCheckboxBtn-4b1fa09e.js";import"./VSelectionControl-a112161f.js";import"./VOverlay-1ac83a71.js";import"./lazy-b3330141.js";import"./vue.runtime.esm-bundler-b454e122.js";import"./VCard-0e65e470.js";import"./VAvatar-3c40fe41.js";import"./VCardText-db993edb.js";const D={__name:"DemoCheckboxInlineTextField",setup(k){const o=p(!0),t=p(!1);return(r,l)=>{const a=y;return h(),f(C,null,[e(v,null,{default:i(()=>[e(x,{sm:"1",cols:"2",class:"d-flex align-end"},{default:i(()=>[e(b,{modelValue:s(o),"onUpdate:modelValue":l[0]||(l[0]=c=>u(o)?o.value=c:null)},null,8,["modelValue"])]),_:1}),e(x,{sm:"11",cols:"10"},{default:i(()=>[e(a,{label:"Include files"})]),_:1})]),_:1}),e(v,null,{default:i(()=>[e(x,{cols:"2",sm:"1",class:"d-flex align-end"},{default:i(()=>[e(b,{modelValue:s(t),"onUpdate:modelValue":l[1]||(l[1]=c=>u(t)?t.value=c:null)},null,8,["modelValue"])]),_:1}),e(x,{cols:"10",sm:"11"},{default:i(()=>[e(a,{disabled:!s(t),label:"I only work if you check the box"},null,8,["disabled"])]),_:1})]),_:1})],64)}}},A={__name:"DemoCheckboxLabelSlot",setup(k){const o=p(!1);return(t,r)=>(h(),V(b,{modelValue:s(o),"onUpdate:modelValue":r[1]||(r[1]=l=>u(o)?o.value=l:null)},{label:i(()=>[n("div",null,[d(" I agree that "),e($,{location:"bottom"},{activator:i(({props:l})=>[n("a",S({href:"https://vuetifyjs.com/",target:"_blank",rel:"noopener noreferrer"},l,{onClick:r[0]||(r[0]=O(()=>{},["stop"]))})," Vuetify ",16)]),default:i(()=>[d(" Opens in new window ")]),_:1}),d(" is awesome ")])]),_:1},8,["modelValue"]))}},J={class:"demo-space-x"},F={__name:"DemoCheckboxStates",setup(k){const o=p(!0),t=p(!0),r=p(!0),l=p(!1);return(a,c)=>(h(),f("div",J,[e(b,{modelValue:s(o),"onUpdate:modelValue":c[0]||(c[0]=m=>u(o)?o.value=m:null),label:"On"},null,8,["modelValue"]),e(b,{modelValue:s(l),"onUpdate:modelValue":c[1]||(c[1]=m=>u(l)?l.value=m:null),label:"Off"},null,8,["modelValue"]),e(b,{indeterminate:s(t),"onUpdate:indeterminate":c[2]||(c[2]=m=>u(t)?t.value=m:null),modelValue:s(t),"onUpdate:modelValue":c[3]||(c[3]=m=>u(t)?t.value=m:null),label:"Indeterminate"},null,8,["indeterminate","modelValue"]),e(b,{"model-value":s(r),disabled:"",label:"On disabled"},null,8,["model-value"]),e(b,{disabled:"",label:"Off disabled"})]))}},j={class:"demo-space-x"},E={__name:"DemoCheckboxCheckboxValue",setup(k){const o=p(1),t=p("Show");return(r,l)=>(h(),f("div",j,[e(b,{modelValue:s(o),"onUpdate:modelValue":l[0]||(l[0]=a=>u(o)?o.value=a:null),"true-value":1,"false-value":0,label:`${s(o).toString()}`},null,8,["modelValue","label"]),e(b,{modelValue:s(t),"onUpdate:modelValue":l[1]||(l[1]=a=>u(t)?t.value=a:null),"true-value":"Show","false-value":"Hide",color:"success",label:`${s(t).toString()}`},null,8,["modelValue","label"])]))}},R={class:"demo-space-x"},B={__name:"DemoCheckboxIcon",setup(k){const o=p(!0),t=p(!0),r=p(!0),l=a=>{const c=a.toString();return c.charAt(0).toUpperCase()+c.slice(1)};return(a,c)=>(h(),f("div",R,[e(b,{modelValue:s(o),"onUpdate:modelValue":c[0]||(c[0]=m=>u(o)?o.value=m:null),label:l(s(o)),"true-icon":"tabler-check","false-icon":"tabler-x"},null,8,["modelValue","label"]),e(b,{modelValue:s(t),"onUpdate:modelValue":c[1]||(c[1]=m=>u(t)?t.value=m:null),label:l(s(t)),"true-icon":"tabler-alarm","false-icon":"tabler-alarm",color:"success"},null,8,["modelValue","label"]),e(b,{modelValue:s(r),"onUpdate:modelValue":c[2]||(c[2]=m=>u(r)?r.value=m:null),label:l(s(r)),"true-icon":"tabler-check","false-icon":"tabler-circle-x",color:"error"},null,8,["modelValue","label"])]))}},M={class:"demo-space-x"},H={class:"mt-1"},P={__name:"DemoCheckboxModelAsArray",setup(k){const o=p(["John"]);return(t,r)=>(h(),f(C,null,[n("div",M,[e(b,{modelValue:s(o),"onUpdate:modelValue":r[0]||(r[0]=l=>u(o)?o.value=l:null),label:"John",value:"John"},null,8,["modelValue"]),e(b,{modelValue:s(o),"onUpdate:modelValue":r[1]||(r[1]=l=>u(o)?o.value=l:null),label:"Jacob",color:"success",value:"Jacob"},null,8,["modelValue"]),e(b,{modelValue:s(o),"onUpdate:modelValue":r[2]||(r[2]=l=>u(o)?o.value=l:null),label:"Johnson",color:"info",value:"Johnson"},null,8,["modelValue"])]),n("p",H,I(s(o)),1)],64))}},N={class:"demo-space-x"},W={__name:"DemoCheckboxColors",setup(k){const o=p(["Primary","Secondary","Success","Info","Warning","Error"]),t=p([]);return(r,l)=>(h(),f("div",N,[(h(!0),f(C,null,U(s(o),a=>(h(),V(b,{key:a,modelValue:s(t),"onUpdate:modelValue":l[0]||(l[0]=c=>u(t)?t.value=c:null),label:a,color:a.toLowerCase(),value:a},null,8,["modelValue","label","color","value"]))),128))]))}},q={class:"demo-space-x"},G={__name:"DemoCheckboxDensity",setup(k){const o=p(!0),t=p(!1),r=l=>{const a=l.toString();return a.charAt(0).toUpperCase()+a.slice(1)};return(l,a)=>(h(),f("div",q,[e(b,{modelValue:s(o),"onUpdate:modelValue":a[0]||(a[0]=c=>u(o)?o.value=c:null),density:"compact",label:r(s(o))},null,8,["modelValue","label"]),e(b,{modelValue:s(t),"onUpdate:modelValue":a[1]||(a[1]=c=>u(t)?t.value=c:null),density:"compact",label:r(s(t))},null,8,["modelValue","label"])]))}},Y={class:"demo-space-x"},K={__name:"DemoCheckboxBasic",setup(k){const o=p(!0),t=p(!1),r=l=>{const a=l.toString();return a.charAt(0).toUpperCase()+a.slice(1)};return(l,a)=>(h(),f("div",Y,[e(b,{modelValue:s(o),"onUpdate:modelValue":a[0]||(a[0]=c=>u(o)?o.value=c:null),label:r(s(o))},null,8,["modelValue","label"]),e(b,{modelValue:s(t),"onUpdate:modelValue":a[1]||(a[1]=c=>u(t)?t.value=c:null),label:r(s(t))},null,8,["modelValue","label"])]))}},Q={ts:`<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`,js:`<script setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`},X={ts:`<script lang="ts" setup>
const checkbox = ref(1)
const checkboxString = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="\`\${checkbox.toString()}\`"
    />

    <VCheckbox
      v-model="checkboxString"
      true-value="Show"
      false-value="Hide"
      color="success"
      :label="\`\${checkboxString.toString()}\`"
    />
  </div>
</template>
`,js:`<script setup>
const checkbox = ref(1)
const checkboxString = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="\`\${checkbox.toString()}\`"
    />

    <VCheckbox
      v-model="checkboxString"
      true-value="Show"
      false-value="Hide"
      color="success"
      :label="\`\${checkboxString.toString()}\`"
    />
  </div>
</template>
`},Z={ts:`<script lang="ts" setup>
const colorCheckbox = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
const selectedCheckbox = ref([])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-for="color in colorCheckbox"
      :key="color"
      v-model="selectedCheckbox"
      :label="color"
      :color="color.toLowerCase()"
      :value="color"
    />
  </div>
</template>
`,js:`<script setup>
const colorCheckbox = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])

const selectedCheckbox = ref([])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-for="color in colorCheckbox"
      :key="color"
      v-model="selectedCheckbox"
      :label="color"
      :color="color.toLowerCase()"
      :value="color"
    />
  </div>
</template>
`},ee={ts:`<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      density="compact"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      density="compact"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`,js:`<script setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      density="compact"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      density="compact"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`},le={ts:`<script lang="ts" setup>
const toggleCheckboxOne = ref(true)
const toggleCheckboxTwo = ref(true)
const toggleCheckboxThree = ref(true)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckboxOne"
      :label="capitalizedLabel(toggleCheckboxOne)"
      true-icon="tabler-check"
      false-icon="tabler-x"
    />

    <VCheckbox
      v-model="toggleCheckboxTwo"
      :label="capitalizedLabel(toggleCheckboxTwo)"
      true-icon="tabler-alarm"
      false-icon="tabler-alarm"
      color="success"
    />

    <VCheckbox
      v-model="toggleCheckboxThree"
      :label="capitalizedLabel(toggleCheckboxThree)"
      true-icon="tabler-check"
      false-icon="tabler-circle-x"
      color="error"
    />
  </div>
</template>
`,js:`<script setup>
const toggleCheckboxOne = ref(true)
const toggleCheckboxTwo = ref(true)
const toggleCheckboxThree = ref(true)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckboxOne"
      :label="capitalizedLabel(toggleCheckboxOne)"
      true-icon="tabler-check"
      false-icon="tabler-x"
    />

    <VCheckbox
      v-model="toggleCheckboxTwo"
      :label="capitalizedLabel(toggleCheckboxTwo)"
      true-icon="tabler-alarm"
      false-icon="tabler-alarm"
      color="success"
    />

    <VCheckbox
      v-model="toggleCheckboxThree"
      :label="capitalizedLabel(toggleCheckboxThree)"
      true-icon="tabler-check"
      false-icon="tabler-circle-x"
      color="error"
    />
  </div>
</template>
`},oe={ts:`<script lang="ts" setup>
const includeFiles = ref(true)
const isInputEnabled = ref(false)
<\/script>

<template>
  <VRow>
    <VCol
      sm="1"
      cols="2"
      class="d-flex align-end"
    >
      <VCheckbox v-model="includeFiles" />
    </VCol>

    <VCol
      sm="11"
      cols="10"
    >
      <AppTextField label="Include files" />
    </VCol>
  </VRow>

  <VRow>
    <VCol
      cols="2"
      sm="1"
      class="d-flex align-end"
    >
      <VCheckbox v-model="isInputEnabled" />
    </VCol>

    <VCol
      cols="10"
      sm="11"
    >
      <AppTextField
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const includeFiles = ref(true)
const isInputEnabled = ref(false)
<\/script>

<template>
  <VRow>
    <VCol
      sm="1"
      cols="2"
      class="d-flex align-end"
    >
      <VCheckbox v-model="includeFiles" />
    </VCol>

    <VCol
      sm="11"
      cols="10"
    >
      <AppTextField label="Include files" />
    </VCol>
  </VRow>

  <VRow>
    <VCol
      cols="2"
      sm="1"
      class="d-flex align-end"
    >
      <VCheckbox v-model="isInputEnabled" />
    </VCol>

    <VCol
      cols="10"
      sm="11"
    >
      <AppTextField
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
      />
    </VCol>
  </VRow>
</template>
`},te={ts:`<script lang="ts" setup>
const checkbox = ref(false)
<\/script>

<template>
  <VCheckbox v-model="checkbox">
    <template #label>
      <div>
        I agree that
        <VTooltip location="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </VTooltip>
        is awesome
      </div>
    </template>
  </VCheckbox>
</template>
`,js:`<script setup>
const checkbox = ref(false)
<\/script>

<template>
  <VCheckbox v-model="checkbox">
    <template #label>
      <div>
        I agree that
        <VTooltip location="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </VTooltip>
        is awesome
      </div>
    </template>
  </VCheckbox>
</template>
`},ce={ts:`<script lang="ts" setup>
const selected = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="selected"
      label="John"
      value="John"
    />

    <VCheckbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
    />

    <VCheckbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
`,js:`<script setup>
const selected = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="selected"
      label="John"
      value="John"
    />

    <VCheckbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
    />

    <VCheckbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
`},ae={ts:`<script setup lang="ts">
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
const disabledCheckbox = ref(true)
const toggleOffCheckbox = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckbox"
      label="On"
    />

    <VCheckbox
      v-model="toggleOffCheckbox"
      label="Off"
    />

    <VCheckbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      v-model="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <VCheckbox
      :model-value="disabledCheckbox"
      disabled
      label="On disabled"
    />

    <VCheckbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
`,js:`<script setup>
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
const disabledCheckbox = ref(true)
const toggleOffCheckbox = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckbox"
      label="On"
    />

    <VCheckbox
      v-model="toggleOffCheckbox"
      label="Off"
    />

    <VCheckbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      v-model="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <VCheckbox
      :model-value="disabledCheckbox"
      disabled
      label="On disabled"
    />

    <VCheckbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
`},se=n("p",null,[n("code",null,"v-checkbox"),d(" in its simplest form provides a toggle between 2 values.")],-1),ne=n("p",null,[d("Use "),n("code",null,"density"),d(" prop to reduces the input height. Available options are: "),n("code",null,"default"),d(", "),n("code",null,"comfortable"),d(", and "),n("code",null,"compact"),d(".")],-1),re=n("p",null,[d("Checkboxes can be colored by using any of the builtin colors and contextual names using the "),n("code",null,"color"),d(" prop.")],-1),de=n("p",null,[d("Multiple "),n("code",null,"v-checkbox"),d("'s can share the same "),n("code",null,"v-model"),d(" by using an array.")],-1),ie=n("p",null,[d("Use "),n("code",null,"false-icon"),d(" and "),n("code",null,"true-icon"),d(" prop to change the icon on the checkbox.")],-1),be=n("p",null,[d("Use "),n("code",null,"false-value"),d(" and "),n("code",null,"true-value"),d(" prop to sets value for truthy and falsy state")],-1),ue=n("p",null,[n("code",null,"v-checkbox"),d(" can have different states such as "),n("code",null,"default"),d(", "),n("code",null,"disabled"),d(", and "),n("code",null,"indeterminate"),d(".")],-1),pe=n("p",null,[d("Checkbox labels can be defined in "),n("code",null,"label"),d(" slot - that will allow to use HTML content.")],-1),me=n("p",null,[d("You can place "),n("code",null,"v-checkbox"),d(" in line with other components such as "),n("code",null,"v-text-field"),d(".")],-1),je={__name:"checkbox",setup(k){return(o,t)=>{const r=K,l=z,a=G,c=W,m=P,g=B,_=E,T=F,w=A,L=D;return h(),V(v,{class:"match-height"},{default:i(()=>[e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Basic",code:Q},{default:i(()=>[se,e(r)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Density",code:ee},{default:i(()=>[ne,e(a)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Colors",code:Z},{default:i(()=>[re,e(c)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Model as array",code:ce},{default:i(()=>[de,e(m)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Icon",code:le},{default:i(()=>[ie,e(g)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Checkbox Value",code:X},{default:i(()=>[be,e(_)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"States",code:ae},{default:i(()=>[ue,e(T)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Label Slot",code:te},{default:i(()=>[pe,e(w)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Inline text-field",code:oe},{default:i(()=>[me,e(L)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{je as default};
