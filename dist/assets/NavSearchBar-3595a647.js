import{Y as k,d as B,v as x,k as i,a4 as A,a5 as P,o as d,c as m,m as u,p as c,w as V,q as a,C as T,$ as D,G as b,F as N,a6 as R,r as q,B as L,t as $,a7 as w,a8 as E,a9 as U}from"./index-0956881b.js";import{S as g}from"./shepherd.esm-7d7e64e6.js";const h=l=>(E("data-v-b62f09a0"),l=l(),U(),l),O=h(()=>u("span",{class:"me-3"},"Search",-1)),z=h(()=>u("span",{class:"meta-key"},"⌘K",-1)),F=[O,z],G=B({inheritAttrs:!1}),Q=Object.assign(G,{__name:"NavSearchBar",setup(l){const{appContentLayoutNav:_}=x(),t=i(!1),f=[{title:"Popular Searches",content:[{icon:"tabler-chart-donut",title:"Analytics",url:{name:"dashboards-analytics"}},{icon:"tabler-chart-bubble",title:"CRM",url:{name:"dashboards-crm"}},{icon:"tabler-file",title:"Invoice List",url:{name:"apps-invoice-list"}},{icon:"tabler-users",title:"User List",url:{name:"apps-user-list"}}]},{title:"Apps & Pages",content:[{icon:"tabler-calendar",title:"Calendar",url:{name:"apps-calendar"}},{icon:"tabler-file-plus",title:"Invoice Add",url:{name:"apps-invoice-add"}},{icon:"tabler-currency-dollar",title:"Pricing",url:{name:"pages-pricing"}},{icon:"tabler-user",title:"Account Settings",url:{name:"pages-account-settings-tab",params:{tab:"account"}}}]},{title:"User Interface",content:[{icon:"tabler-letter-a",title:"Typography",url:{name:"pages-typography"}},{icon:"tabler-square",title:"Tabs",url:{name:"components-tabs"}},{icon:"tabler-hand-click",title:"Buttons",url:{name:"components-button"}},{icon:"tabler-keyboard",title:"Statistics",url:{name:"pages-cards-card-statistics"}}]},{title:"Popular Searches",content:[{icon:"tabler-list",title:"Select",url:{name:"forms-select"}},{icon:"tabler-space",title:"Combobox",url:{name:"forms-combobox"}},{icon:"tabler-calendar",title:"Date & Time Picker",url:{name:"forms-date-time-picker"}},{icon:"tabler-hexagon",title:"Rating",url:{name:"forms-rating"}}]}],v=[{title:"Analytics Dashboard",icon:"tabler-shopping-cart",url:{name:"dashboards-analytics"}},{title:"Account Settings",icon:"tabler-user",url:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing Page",icon:"tabler-cash",url:{name:"pages-pricing"}}],n=i(""),p=i([]),y=$();A(()=>{R.get("/app-bar/search",{params:{q:n.value}}).then(r=>{p.value=r.data})});const S=r=>{y.push(r.url),t.value=!1,n.value=""},C=P(()=>w(()=>import("./AppBarSearch-c07479ac.js"),["assets/AppBarSearch-c07479ac.js","assets/index-0956881b.js","assets/index-0cb8a874.css","assets/VCard-702ced82.js","assets/VAvatar-9a40ad4a.js","assets/VImg-931cdecc.js","assets/transition-a6760ced.js","assets/VImg-3a095760.css","assets/VAvatar-0c2eeb2f.css","assets/VCardText-32ad3780.js","assets/VCard-299ea093.css","assets/VTextField-82b0f00b.js","assets/VField-356968a1.js","assets/VInput-262443ee.js","assets/VInput-b8f08c94.css","assets/easing-9f15041e.js","assets/VField-ad850893.css","assets/forwardRefs-a29b5f65.js","assets/VCounter-19ae4b1a.js","assets/VCounter-66d880d8.css","assets/VTextField-ad436dbf.css","assets/VDivider-48534f19.js","assets/VDivider-357e019d.css","assets/VList-c6590cbe.js","assets/ssrBoot-e313c87d.js","assets/VList-d0f6ebef.css","assets/VRow-82e82f01.js","assets/VRow-37f80755.css","assets/VDialog-8412e137.js","assets/VOverlay-6b3709f3.js","assets/lazy-75296ee9.js","assets/VOverlay-b9f3c1b7.css","assets/dialog-transition-100394e6.js","assets/VDialog-f7015bc7.css","assets/AppBarSearch-c4c40763.css"]));return(r,e)=>{const I=q("IconBtn");return d(),m(N,null,[u("div",D({class:"d-flex align-center cursor-pointer"},r.$attrs,{style:{"user-select":"none"},onClick:e[2]||(e[2]=s=>t.value=!a(t))}),[c(I,{class:"me-1",onClick:e[0]||(e[0]=s=>{var o;return(o=a(g).activeTour)==null?void 0:o.cancel()})},{default:V(()=>[c(L,{size:"26",icon:"tabler-search"})]),_:1}),a(_)==="vertical"?(d(),m("span",{key:0,class:"d-none d-md-flex align-center text-disabled",onClick:e[1]||(e[1]=s=>{var o;return(o=a(g).activeTour)==null?void 0:o.cancel()})},F)):T("",!0)],16),c(a(C),{isDialogVisible:a(t),"onUpdate:isDialogVisible":e[3]||(e[3]=s=>b(t)?t.value=s:null),"search-query":a(n),"onUpdate:searchQuery":e[4]||(e[4]=s=>b(n)?n.value=s:null),"search-results":a(p),suggestions:f,"no-data-suggestion":v,onItemSelected:S},null,8,["isDialogVisible","search-query","search-results"])],64)}}}),M=k(Q,[["__scopeId","data-v-b62f09a0"]]);export{M as default};