import{_ as $}from"./TheCustomizer-9281a062.js";import{o as r,c as d,F as g,a as w,b as f,e as b,_ as C,f as k,i as z,j as N,k as S,l as V,m as a,n as c,p as t,q as o,s as h,t as L,v as R,w as n,V as B,x as v,y as I,T as x,r as y}from"./index-8abefeb0.js";import T from"./Footer-8398f74d.js";import E from"./NavBarI18n-83690c8e.js";import W from"./NavBarNotifications-ba9bd883.js";import q from"./NavbarShortcuts-49a3dc1c.js";import D from"./NavbarThemeSwitcher-251b1593.js";import F from"./NavSearchBar-866e496a.js";import H from"./UserProfile-484b104e.js";import{V as A}from"./VSpacer-08757058.js";import"./AppSelect-91c7dcae.js";import"./VInput-18f5ff20.js";import"./transition-27cd020f.js";import"./VSelect-8ac6da1d.js";import"./VTextField-c12e6cf7.js";/* empty css                   */import"./VField-babfa9a2.js";import"./easing-9f15041e.js";import"./VImg-d074e4c4.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-29118a28.js";import"./VList-6ff14ab1.js";import"./ssrBoot-17b7fef3.js";import"./VAvatar-3c40fe41.js";import"./VDivider-ed71c803.js";import"./dialog-transition-7521edc7.js";import"./VMenu-c1c5f8c8.js";import"./VOverlay-1ac83a71.js";import"./lazy-b3330141.js";import"./VCheckboxBtn-4b1fa09e.js";import"./VSelectionControl-a112161f.js";import"./VChip-9bbbdea6.js";import"./VRadioGroup-fe834474.js";import"./VSwitch-5af32f45.js";import"./VRow-4bd89dfc.js";import"./VNavigationDrawer-4b9add6d.js";import"./formatters-9ef7de78.js";import"./index-61e4df1a.js";import"./VBadge-8e6c4096.js";import"./VCard-0e65e470.js";import"./VCardText-db993edb.js";import"./VTooltip-fbb04fe8.js";import"./VListItemAction-8f161f58.js";import"./shepherd.esm-7d7e64e6.js";import"./useAppAbility-98ffedb4.js";const Y={class:"nav-items"},j={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(p){const i=m=>"children"in m?C:k;return(m,u)=>(r(),d("ul",Y,[(r(!0),d(g,null,w(p.navItems,(e,l)=>(r(),f(b(i(e)),{key:l,item:e},null,8,["item"]))),128))]))}},K={class:"layout-navbar"},P={class:"navbar-content-container"},G={class:"layout-horizontal-nav"},J={class:"horizontal-nav-content-container"},M={class:"layout-page-content"},O={class:"layout-footer"},Q={class:"footer-content-container"},U={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(p){const{y:i}=z(),{width:m}=N(),u=L(),e=S(!1);u.beforeEach(()=>{e.value=!0}),u.afterEach(()=>{e.value=!1});const{_layoutClasses:l,isNavbarBlurEnabled:_}=V();return(s,ot)=>(r(),d("div",{class:h(["layout-wrapper",o(l)(o(m),o(i))])},[a("div",{class:h(["layout-navbar-and-nav-container",o(_)&&"header-blur"])},[a("div",K,[a("div",P,[c(s.$slots,"navbar")])]),a("div",G,[a("div",J,[t(o(j),{"nav-items":p.navItems},null,8,["nav-items"])])])],2),a("main",M,[s.$slots["content-loading"]?(r(),d(g,{key:0},[o(e)?c(s.$slots,"content-loading",{key:0}):c(s.$slots,"default",{key:1})],64)):c(s.$slots,"default",{key:1})]),a("footer",O,[a("div",Q,[c(s.$slots,"footer")])])],2))}},X=[{title:"Ana Sayfa",icon:{icon:"tabler-smart-home"},to:"dashboards-crm",children:[{title:"Analiz",to:"dashboards-analytics"},{title:"Yatırım",to:"dashboards-ecommerce"},{title:"Kategori",to:"dashboards-crm"}],badgeContent:"3",badgeClass:"bg-primary"}],Z=[...X],tt={class:"app-title font-weight-bold leading-normal text-xl text-capitalize"},Jt={__name:"DefaultLayoutWithHorizontalNav",setup(p){const{appRouteTransition:i}=R();return(m,u)=>{const e=y("RouterLink"),l=y("RouterView"),_=$;return r(),f(o(U),{"nav-items":o(Z)},{navbar:n(()=>[t(e,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:n(()=>[t(o(B),{nodes:o(v).app.logo},null,8,["nodes"]),a("h1",tt,I(o(v).app.title),1)]),_:1}),t(A),t(F,{"trigger-btn-class":"ms-lg-n3"}),t(E,{class:"me-1"}),t(D,{class:"me-1"}),t(q,{class:"me-1"}),t(W,{class:"me-2"}),t(H)]),footer:n(()=>[t(T)]),default:n(()=>[t(l,null,{default:n(({Component:s})=>[t(x,{name:o(i),mode:"out-in"},{default:n(()=>[(r(),f(b(s)))]),_:2},1032,["name"])]),_:1}),t(_)]),_:1},8,["nav-items"])}}};export{Jt as default};