import{Y as P,dO as j,k as _,bm as f,z as A,a4 as E,r as O,o as l,b as g,w as t,p as a,q as r,G,dC as B,m as o,B as u,P as X,O as D,c as p,F as v,a as x,D as z,y as b,n as w,Q as $,C as L,a8 as Y,a9 as H}from"./index-0956881b.js";import{V as J}from"./VCard-702ced82.js";import{V as I}from"./VCardText-32ad3780.js";import{V as W}from"./VTextField-82b0f00b.js";import{V as Z}from"./VDivider-48534f19.js";import{V as Q,d as ee,a as R,b as se}from"./VList-c6590cbe.js";import{a as te,V as ae}from"./VRow-82e82f01.js";import{V as re}from"./VDialog-8412e137.js";import"./VAvatar-9a40ad4a.js";import"./VImg-931cdecc.js";import"./transition-a6760ced.js";/* empty css                   */import"./VField-356968a1.js";import"./VInput-262443ee.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-19ae4b1a.js";import"./ssrBoot-e313c87d.js";import"./VOverlay-6b3709f3.js";import"./lazy-75296ee9.js";import"./dialog-transition-100394e6.js";const K=m=>(Y("data-v-c4522287"),m=m(),H(),m),le={class:"d-flex align-center text-high-emphasis me-1"},oe={class:"d-flex align-center"},ie={class:"h-100"},ne={class:"text-xs text-disabled text-uppercase"},ce={class:"h-100"},ue={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis h-100"},pe={class:"d-flex align-center flex-wrap justify-center gap-2 text-h6 my-3"},de=K(()=>o("span",null,"No Result For ",-1)),he={key:0,class:"mt-8"},fe=K(()=>o("span",{class:"d-flex justify-center text-disabled"},"Try searching for",-1)),me=["onClick"],ye={class:"text-sm"},_e={__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean,required:!0},searchQuery:{type:String,required:!0},searchResults:{type:Array,required:!0},suggestions:{type:Array,required:!1},noDataSuggestion:{type:Array,required:!1}},emits:["update:isDialogVisible","update:searchQuery","itemSelected"],setup(m,{emit:y}){const i=m,{ctrl_k:F,meta_k:T}=j({passive:!1,onEventFired(e){e.ctrlKey&&e.key==="k"&&e.type==="keydown"&&e.preventDefault()}}),S=_(),n=_(structuredClone(f(i.searchQuery))),q=_(),C=_(structuredClone(f(i.isDialogVisible))),d=_(structuredClone(f(i.searchResults)));A(i,()=>{C.value=structuredClone(f(i.isDialogVisible)),d.value=structuredClone(f(i.searchResults)),n.value=structuredClone(f(i.searchQuery))}),A([F,T],()=>{C.value=!0,y("update:isDialogVisible",!0)});const V=()=>{y("update:isDialogVisible",!1),y("update:searchQuery","")};E(()=>{n.value.length||(d.value=[])});const U=e=>{var c,k;e.key==="ArrowDown"?(e.preventDefault(),(c=S.value)==null||c.focus("next")):e.key==="ArrowUp"&&(e.preventDefault(),(k=S.value)==null||k.focus("prev"))},M=e=>{y("update:isDialogVisible",e),y("update:searchQuery","")},N=e=>e==="dashboards"?"Dashboards":e==="appsPages"?"Apps & Pages":e==="userInterface"?"User Interface":e==="formsTables"?"Forms Tables":e==="chartsMisc"?"Charts Misc":"Misc";return(e,c)=>{const k=O("IconBtn");return l(),g(re,{"max-width":"600","model-value":r(C),height:e.$vuetify.display.smAndUp?"550":"100%",fullscreen:e.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":M,onKeyup:B(V,["esc"])},{default:t(()=>[a(J,{height:"100%",width:"100%",class:"position-relative"},{default:t(()=>[a(I,{class:"pt-1",style:{"min-block-size":"65px"}},{default:t(()=>[a(W,{ref_key:"refSearchInput",ref:q,modelValue:r(n),"onUpdate:modelValue":[c[0]||(c[0]=s=>G(n)?n.value=s:null),c[1]||(c[1]=s=>e.$emit("update:searchQuery",r(n)))],autofocus:"",density:"comfortable",variant:"plain",class:"app-bar-autocomplete-box",onKeyup:B(V,["esc"]),onKeydown:U},{"prepend-inner":t(()=>[o("div",le,[a(u,{size:"22",icon:"tabler-search",class:"mt-1",style:{opacity:"1"}})])]),"append-inner":t(()=>[o("div",oe,[o("div",{class:"text-base text-disabled cursor-pointer me-1",onClick:V}," [esc] "),a(k,{size:"small",onClick:V},{default:t(()=>[a(u,{icon:"tabler-x"})]),_:1})])]),_:1},8,["modelValue","onKeyup"])]),_:1}),a(Z),a(r(X),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:t(()=>[D(a(r(Q),{ref_key:"refSearchList",ref:S,density:"compact",class:"app-bar-search-list"},{default:t(()=>[(l(!0),p(v,null,x(r(d),s=>(l(),p(v,{key:s.title},["header"in s?(l(),g(r(ee),{key:0,class:"text-disabled"},{default:t(()=>[z(b(N(s.title)),1)]),_:2},1024)):w(e.$slots,"searchResult",{key:1,item:s},()=>[a(r(R),{link:"",onClick:h=>e.$emit("itemSelected",s)},{prepend:t(()=>[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"])]),append:t(()=>[a(u,{size:"20",icon:"tabler-corner-down-left",class:"enter-icon text-disabled"})]),default:t(()=>[a(se,null,{default:t(()=>[z(b(s.title),1)]),_:2},1024)]),_:2},1032,["onClick"])],!0)],64))),128))]),_:3},512),[[$,r(n).length&&!!r(d).length]]),D(o("div",ie,[w(e.$slots,"suggestions",{},()=>[a(I,{class:"app-bar-search-suggestions h-100 pa-10"},{default:t(()=>[i.suggestions?(l(),g(te,{key:0,class:"gap-y-4"},{default:t(()=>[(l(!0),p(v,null,x(i.suggestions,s=>(l(),g(ae,{key:s.title,cols:"12",sm:"6",class:"ps-6"},{default:t(()=>[o("p",ne,b(s.title),1),a(r(Q),{class:"card-list"},{default:t(()=>[(l(!0),p(v,null,x(s.content,h=>(l(),g(r(R),{key:h.title,link:"",title:h.title,class:"app-bar-search-suggestion",onClick:ge=>e.$emit("itemSelected",h)},{prepend:t(()=>[a(u,{icon:h.icon,size:"20",class:"me-2"},null,8,["icon"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})):L("",!0)]),_:1})],!0)],512),[[$,!!r(d)&&!r(n)]]),D(o("div",ce,[w(e.$slots,"noData",{},()=>[a(I,{class:"h-100"},{default:t(()=>[o("div",ue,[a(u,{size:"75",icon:"tabler-file-x"}),o("div",pe,[de,o("span",null,'"'+b(r(n))+'"',1)]),i.noDataSuggestion?(l(),p("div",he,[fe,(l(!0),p(v,null,x(i.noDataSuggestion,s=>(l(),p("h6",{key:s.title,class:"app-bar-search-suggestion text-sm font-weight-regular cursor-pointer mt-3",onClick:h=>e.$emit("itemSelected",s)},[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"]),o("span",ye,b(s.title),1)],8,me))),128))])):L("",!0)])]),_:1})],!0)],512),[[$,!r(d).length&&r(n).length]])]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen","onKeyup"])}}},Ue=P(_e,[["__scopeId","data-v-c4522287"]]);export{Ue as default};
