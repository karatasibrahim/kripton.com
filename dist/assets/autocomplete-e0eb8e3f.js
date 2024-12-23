import{_,V as A}from"./AppAutocomplete-7298bdc3.js";import{k as f,o as v,b as g,q as u,G as C,w as o,p as e,dN as N,B as T,z as G,$ as V,aj as I,ak as D,a3 as F,a1 as W,a2 as R,al as L,am as H,an as E,m as s,D as n}from"./index-8abefeb0.js";import{V as q}from"./VChip-9bbbdea6.js";import{a as O}from"./VList-6ff14ab1.js";import{V as p,a as w}from"./VRow-4bd89dfc.js";import{_ as $}from"./AppCardCode-3489ae32.js";import"./VInput-18f5ff20.js";import"./transition-27cd020f.js";import"./VSelect-8ac6da1d.js";import"./VTextField-c12e6cf7.js";/* empty css                   */import"./VField-babfa9a2.js";import"./easing-9f15041e.js";import"./VImg-d074e4c4.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-29118a28.js";import"./dialog-transition-7521edc7.js";import"./VMenu-c1c5f8c8.js";import"./VOverlay-1ac83a71.js";import"./lazy-b3330141.js";import"./VCheckboxBtn-4b1fa09e.js";import"./VSelectionControl-a112161f.js";import"./filter-da4abc64.js";import"./VAvatar-3c40fe41.js";import"./ssrBoot-17b7fef3.js";import"./VDivider-ed71c803.js";import"./vue.runtime.esm-bundler-b454e122.js";import"./VCard-0e65e470.js";import"./VCardText-db993edb.js";const z={__name:"DemoAutocompleteValidation",setup(h){const a=["foo","bar","fizz","buzz"],l=f(["foo"]),m=[t=>!!t.length||"Select at least one option."];return(t,r)=>{const c=_;return v(),g(c,{modelValue:u(l),"onUpdate:modelValue":r[0]||(r[0]=i=>C(l)?l.value=i:null),items:a,rules:m,multiple:""},null,8,["modelValue"])}}},P={__name:"DemoAutocompleteStateSelector",setup(h){const a=f(!1),l=f(null),m=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];return(t,r)=>{const c=_;return v(),g(c,{modelValue:u(l),"onUpdate:modelValue":r[1]||(r[1]=i=>C(l)?l.value=i:null),hint:u(a)?"Click the icon to save":"Click the icon to edit",items:m,readonly:!u(a),label:`State — ${u(a)?"Editable":"Readonly"}`,"persistent-hint":"","prepend-icon":"tabler-building","menu-props":{maxHeight:"200px"}},{append:o(()=>[e(N,{mode:"out-in"},{default:o(()=>[(v(),g(T,{key:`icon-${u(a)}`,color:u(a)?"success":"info",icon:u(a)?"tabler-checks":"tabler-edit-circle",onClick:r[0]||(r[0]=i=>a.value=!u(a))},null,8,["color","icon"]))]),_:1})]),_:1},8,["modelValue","hint","readonly","label"])}}},U={__name:"DemoAutocompleteAsyncItems",setup(h){const a=f(!1),l=f(),m=f(null),t=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],r=f(t),c=i=>{a.value=!0,setTimeout(()=>{r.value=t.filter(d=>(d||"").toLowerCase().includes((i||"").toLowerCase())),a.value=!1},500)};return G(l,i=>{i&&i!==m.value&&c(i)}),(i,d)=>(v(),g(A,{modelValue:u(m),"onUpdate:modelValue":d[0]||(d[0]=b=>C(m)?m.value=b:null),search:u(l),"onUpdate:search":d[1]||(d[1]=b=>C(l)?l.value=b:null),loading:u(a),items:u(r),label:"What state are you from?",variant:"underlined","menu-props":{maxHeight:"200px"}},null,8,["modelValue","search","loading","items"]))}},j={__name:"DemoAutocompleteSlots",setup(h){const a=f(["Sandra Adams","Britta Holt"]),l=[{name:"Sandra Adams",group:"Group 1",avatar:I},{name:"Ali Connors",group:"Group 1",avatar:D},{name:"Trevor Hansen",group:"Group 1",avatar:F},{name:"Tucker Smith",group:"Group 1",avatar:W},{name:"Britta Holt",group:"Group 2",avatar:R},{name:"Jane Smith ",group:"Group 2",avatar:L},{name:"John Smith",group:"Group 2",avatar:H},{name:"Sandra Williams",group:"Group 2",avatar:E}];return(m,t)=>{const r=_;return v(),g(r,{modelValue:u(a),"onUpdate:modelValue":t[0]||(t[0]=c=>C(a)?a.value=c:null),chips:"","closable-chips":"",multiple:"",items:l,"item-title":"name","item-value":"name",label:"Select"},{chip:o(({props:c,item:i})=>[e(q,V(c,{"prepend-avatar":i.raw.avatar,text:i.raw.name}),null,16,["prepend-avatar","text"])]),item:o(({props:c,item:i})=>{var d,b,y;return[e(O,V(c,{"prepend-avatar":(d=i==null?void 0:i.raw)==null?void 0:d.avatar,title:(b=i==null?void 0:i.raw)==null?void 0:b.name,subtitle:(y=i==null?void 0:i.raw)==null?void 0:y.group}),null,16,["prepend-avatar","title","subtitle"])]}),_:1},8,["modelValue"])}}},B={__name:"DemoAutocompleteCustomFilter",setup(h){const a=[{name:"Florida",abbr:"FL",id:1},{name:"Georgia",abbr:"GA",id:2},{name:"Nebraska",abbr:"NE",id:3},{name:"California",abbr:"CA",id:4},{name:"New York",abbr:"NY",id:5}];function l(m,t,r){const c=r.title.toLowerCase(),i=r.value.toLowerCase(),d=t.toLocaleLowerCase();return c.includes(d)||i.includes(d)}return(m,t)=>{const r=_;return v(),g(r,{label:"States",items:a,"custom-filter":l,"item-title":"name","item-value":"abbr"})}}},Y={__name:"DemoAutocompleteChips",setup(h){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(l,m)=>{const t=_;return v(),g(t,{label:"States",items:a,chips:"",multiple:""})}}},J={__name:"DemoAutocompleteClearable",setup(h){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(l,m)=>{const t=_;return v(),g(t,{label:"States",items:a,multiple:"",clearable:""})}}},K={__name:"DemoAutocompleteMultiple",setup(h){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(l,m)=>{const t=_;return v(),g(t,{label:"States",items:a,multiple:"",eager:""})}}},X={__name:"DemoAutocompleteVariant",setup(h){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(l,m)=>(v(),g(w,null,{default:o(()=>[e(p,{cols:"12",md:"6"},{default:o(()=>[e(A,{variant:"solo",label:"solo",items:a,eager:""})]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(A,{variant:"outlined",label:"outlined",items:a})]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(A,{variant:"underlined",label:"underlined",items:a})]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(A,{variant:"filled",label:"filled",items:a})]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(A,{variant:"plain",label:"plain",items:a})]),_:1})]),_:1}))}},Q={__name:"DemoAutocompleteDensity",setup(h){const a=f(["Florida"]),l=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(m,t)=>{const r=_;return v(),g(r,{modelValue:u(a),"onUpdate:modelValue":t[0]||(t[0]=c=>C(a)?a.value=c:null),label:"States",density:"compact",items:l},null,8,["modelValue"])}}},Z={__name:"DemoAutocompleteBasic",setup(h){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(l,m)=>{const t=_;return v(),g(t,{label:"States",items:a})}}},ee={ts:`<script setup lang="ts">
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = (query: string) => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`,js:`<script setup>
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = query => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`},ae={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
  />
</template>
`},te={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    chips
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    chips
    multiple
  />
</template>
`},oe={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    multiple
    clearable
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    multiple
    clearable
  />
</template>
`},ie={ts:`<script setup lang="ts">
const states = [
  { name: 'Florida', abbr: 'FL', id: 1 },
  { name: 'Georgia', abbr: 'GA', id: 2 },
  { name: 'Nebraska', abbr: 'NE', id: 3 },
  { name: 'California', abbr: 'CA', id: 4 },
  { name: 'New York', abbr: 'NY', id: 5 },
]

function customFilter(item: string, queryText: string, itemText: { title: string; value: string }) {
  const textOne = itemText.title.toLowerCase()
  const textTwo = itemText.value.toLowerCase()
  const searchText = queryText.toLocaleLowerCase()

  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
  />
</template>
`,js:`<script setup>
const states = [
  {
    name: 'Florida',
    abbr: 'FL',
    id: 1,
  },
  {
    name: 'Georgia',
    abbr: 'GA',
    id: 2,
  },
  {
    name: 'Nebraska',
    abbr: 'NE',
    id: 3,
  },
  {
    name: 'California',
    abbr: 'CA',
    id: 4,
  },
  {
    name: 'New York',
    abbr: 'NY',
    id: 5,
  },
]

function customFilter(item, queryText, itemText) {
  const textOne = itemText.title.toLowerCase()
  const textTwo = itemText.value.toLowerCase()
  const searchText = queryText.toLocaleLowerCase()
  
  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
  />
</template>
`},se={ts:`<script setup lang="ts">
const select = ref(['Florida'])
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    v-model="select"
    label="States"
    density="compact"
    :items="items"
  />
</template>
`,js:`<script setup>
const select = ref(['Florida'])

const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    v-model="select"
    label="States"
    density="compact"
    :items="items"
  />
</template>
`},le={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    multiple
    eager
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    multiple
    eager
  />
</template>
`},ne={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref(['Sandra Adams', 'Britta Holt'])

const people = [
  { name: 'Sandra Adams', group: 'Group 1', avatar: avatar1 },
  { name: 'Ali Connors', group: 'Group 1', avatar: avatar2 },
  { name: 'Trevor Hansen', group: 'Group 1', avatar: avatar3 },
  { name: 'Tucker Smith', group: 'Group 1', avatar: avatar4 },
  { name: 'Britta Holt', group: 'Group 2', avatar: avatar5 },
  { name: 'Jane Smith ', group: 'Group 2', avatar: avatar6 },
  { name: 'John Smith', group: 'Group 2', avatar: avatar7 },
  { name: 'Sandra Williams', group: 'Group 2', avatar: avatar8 },
]
<\/script>

<template>
  <AppAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </AppAutocomplete>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref([
  'Sandra Adams',
  'Britta Holt',
])

const people = [
  {
    name: 'Sandra Adams',
    group: 'Group 1',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    group: 'Group 1',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    group: 'Group 1',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    group: 'Group 1',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    group: 'Group 2',
    avatar: avatar5,
  },
  {
    name: 'Jane Smith ',
    group: 'Group 2',
    avatar: avatar6,
  },
  {
    name: 'John Smith',
    group: 'Group 2',
    avatar: avatar7,
  },
  {
    name: 'Sandra Williams',
    group: 'Group 2',
    avatar: avatar8,
  },
]
<\/script>

<template>
  <AppAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </AppAutocomplete>
</template>
`},re={ts:`<script setup lang="ts">
const isEditing = ref(false)
const selectedState = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="tabler-building"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'tabler-checks' : 'tabler-edit-circle'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </AppAutocomplete>
</template>
`,js:`<script setup>
const isEditing = ref(false)
const selectedState = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="tabler-building"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'tabler-checks' : 'tabler-edit-circle'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </AppAutocomplete>
</template>
`},me={ts:`<script setup lang="ts">
const items = ['foo', 'bar', 'fizz', 'buzz']
const values = ref(['foo'])
const nameRules = [(v: string) => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <AppAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref(['foo'])
const nameRules = [v => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <AppAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    multiple
  />
</template>
`},ce={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="solo"
        :items="items"
        eager
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="outlined"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="underlined"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="filled"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="plain"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="solo"
        :items="items"
        eager
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="outlined"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="underlined"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="filled"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="plain"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`},pe=s("p",null,[n(" The "),s("code",null," v-autocomplete "),n(" component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically fetching information from an API. ")],-1),ue=s("p",null,[n(" You can use "),s("code",null," density "),n(" prop to adjusts vertical spacing within the component. Available options are: "),s("code",null,"default"),n(", "),s("code",null,"comfortable"),n(", and "),s("code",null,"compact"),n(". ")],-1),de=s("p",null,[n("Use "),s("code",null,"solo"),n(", "),s("code",null,"outlined"),n(", "),s("code",null,"underlined"),n(", "),s("code",null,"filled"),n(" and "),s("code",null,"plain"),n(" options of "),s("code",null,"variant"),n(" prop to change the look of Autocomplete. ")],-1),ve=s("p",null,[n("Use "),s("code",null,"multiple"),n(" prop to select multiple. Accepts array for value")],-1),ge=s("p",null,[n("Use "),s("code",null,"clearable"),n(" prop to add input clear functionality.")],-1),he=s("p",null,[n("Use "),s("code",null," chips "),n(" prop to use chips in select.")],-1),fe=s("p",null,[n("The "),s("code",null," custom-filter "),n(" prop can be used to filter each individual item with custom logic.In example we will filter state based on their name and abbreviations ")],-1),_e=s("p",null,"With the power of slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items using their props. ",-1),be=s("p",null,"Sometimes you need to load data externally based upon a search query. ",-1),Ae=s("p",null,"Using a combination of v-autocomplete slots and transitions, you can create a stylish toggle able autocomplete field such as below state selector.",-1),Ce=s("p",null,[n("Use "),s("code",null,"rules"),n(" prop to validate autocomplete. Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.")],-1),Xe={__name:"autocomplete",setup(h){return(a,l)=>{const m=Z,t=$,r=Q,c=X,i=K,d=J,b=Y,y=B,S=j,x=U,k=P,M=z;return v(),g(w,{class:"match-height"},{default:o(()=>[e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Basic",code:ae},{default:o(()=>[pe,e(m)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Density",code:se},{default:o(()=>[ue,e(r)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"12"},{default:o(()=>[e(t,{title:"Variant",code:ce},{default:o(()=>[de,e(c)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Multiple",code:le},{default:o(()=>[ve,e(i)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Clearable",code:oe},{default:o(()=>[ge,e(d)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Chips",code:te},{default:o(()=>[he,e(b)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Custom-Filter",code:ie},{default:o(()=>[fe,e(y)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Slots",code:ne},{default:o(()=>[_e,e(S)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Async items",code:ee},{default:o(()=>[be,e(x)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"State Selector",code:re},{default:o(()=>[Ae,e(k)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"validation",code:me},{default:o(()=>[Ce,e(M)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Xe as default};
