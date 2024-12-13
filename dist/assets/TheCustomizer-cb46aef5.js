import{_ as Y}from"./AppSelect-8961a19a.js";import{V as W}from"./VDivider-48534f19.js";import{o as i,c as u,b,C as D,m as o,y as A,n as Z,F as m,k as ee,v as le,H as te,j as ae,I as se,J as h,N as P,r as oe,q as t,p as a,w as s,B as M,K as ne,P as ie,G as r,a as f,S as re,L as ue,s as E,M as de,O as me,Q as ce,R as pe,U as fe,D as y,W as ve,x as H,X as Ve}from"./index-0956881b.js";import{V,a as _}from"./VRadioGroup-72fcb86a.js";import{V as C}from"./VInput-262443ee.js";import{V as k}from"./VSwitch-df752549.js";import{a as _e,V as F}from"./VRow-82e82f01.js";import{V as be}from"./VNavigationDrawer-bb199079.js";const ge={class:"customizer-section"},he={class:"text-caption"},ye={__name:"CustomizerSection",props:{title:{type:String,required:!0},divider:{type:Boolean,required:!1,default:!0}},setup(L){const c=L;return(g,x)=>(i(),u(m,null,[c.divider?(i(),b(W,{key:0})):D("",!0),o("div",ge,[o("p",he,A(c.title),1),Z(g.$slots,"default")])],64))}};const Ce={class:"customizer-heading d-flex align-center justify-space-between"},xe=o("div",null,[o("h6",{class:"text-h6"}," THEME CUSTOMIZER "),o("span",{class:"text-body-1"},"Customize & Preview in Real Time")],-1),we=o("h6",{class:"text-base font-weight-regular"}," Skins ",-1),ze=o("h6",{class:"mt-3 text-base font-weight-regular"}," Theme ",-1),Te=o("h6",{class:"mt-3 text-base font-weight-regular"}," Primary Color ",-1),ke={class:"d-flex gap-x-4 mt-2"},Se=["onClick"],Ne=o("h6",{class:"text-base font-weight-regular"}," Content width ",-1),Ue={class:"mt-3 text-base font-weight-regular"},je=o("h6",{class:"mt-3 text-base font-weight-regular"}," Footer Type ",-1),Be={class:"mt-4 d-flex align-center justify-space-between"},Re=o("h6",{class:"text-base font-weight-regular"}," Menu Type ",-1),$e={key:0,class:"mt-4 d-flex align-center justify-space-between"},Oe={class:"d-flex align-center justify-space-between"},Ie={class:"mt-6"},qe={__name:"TheCustomizer",setup(L){const c=ee(!1),{theme:g,skin:x,appRouteTransition:S,navbarType:N,footerType:U,isVerticalNavCollapsed:j,isVerticalNavSemiDark:B,appContentWidth:R,appContentLayoutNav:p,isAppRtl:$,isNavbarBlurEnabled:O,isLessThanOverlayNavBreakpoint:q}=le(),v=te(),w=JSON.parse(JSON.stringify(v.current.value.colors)),G=["primary","secondary","success","info","warning","error"],J=d=>{const l=v.name.value;v.themes.value[l].colors.primary=d,localStorage.setItem(`${H.app.title}-${l}ThemePrimaryColor`,d),localStorage.setItem(`${H.app.title}-initial-loader-color`,d)},z=(d,l)=>l?d:Ve,{width:K}=ae(),Q=se(()=>{const d=Object.entries(P);return p.value===h.Horizontal?d.filter(([l,I])=>I!==P.Hidden):d});return(d,l)=>{const I=oe("IconBtn"),T=ye,X=Y;return t(q)(t(K))?D("",!0):(i(),u(m,{key:0},[a(ne,{icon:"",size:"small",class:"app-customizer-toggler rounded-s-lg rounded-0",style:{"z-index":"1001"},onClick:l[0]||(l[0]=e=>c.value=!0)},{default:s(()=>[a(M,{size:"22",icon:"tabler-settings"})]),_:1}),a(be,{modelValue:t(c),"onUpdate:modelValue":l[13]||(l[13]=e=>r(c)?c.value=e:null),temporary:"",border:"0",location:"end",width:"400",scrim:!1,class:"app-customizer"},{default:s(()=>[o("div",Ce,[xe,a(I,{onClick:l[1]||(l[1]=e=>c.value=!1)},{default:s(()=>[a(M,{icon:"tabler-x",size:"20"})]),_:1})]),a(W),a(t(ie),{tag:"ul",options:{wheelPropagation:!1}},{default:s(()=>[a(T,{title:"THEMING",divider:!1},{default:s(()=>[we,a(V,{modelValue:t(x),"onUpdate:modelValue":l[2]||(l[2]=e=>r(x)?x.value=e:null),inline:""},{default:s(()=>[(i(!0),u(m,null,f(Object.entries(t(re)),([e,n])=>(i(),b(_,{key:e,label:e,value:n},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),ze,a(V,{modelValue:t(g),"onUpdate:modelValue":l[3]||(l[3]=e=>r(g)?g.value=e:null),inline:""},{default:s(()=>[(i(),u(m,null,f(["system","light","dark"],e=>a(_,{key:e,label:e,value:e,class:"text-capitalize"},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),Te,o("div",ke,[(i(),u(m,null,f(G,(e,n)=>o("div",{key:e,style:ue([{"border-radius":"0.5rem","block-size":"2.5rem","inline-size":"2.5rem",transition:"all 0.25s ease"},{backgroundColor:z(t(w)[e],n)}]),class:E(["cursor-pointer d-flex align-center justify-center",{"elevation-4":t(v).current.value.colors.primary===z(t(w)[e],n)}]),onClick:Me=>J(z(t(w)[e],n))},[a(de,null,{default:s(()=>[me(a(M,{icon:"tabler-check",color:"white"},null,512),[[ce,t(v).current.value.colors.primary===z(t(w)[e],n)]])]),_:2},1024)],14,Se)),64))])]),_:1}),a(T,{title:"LAYOUT"},{default:s(()=>[Ne,a(V,{modelValue:t(R),"onUpdate:modelValue":l[4]||(l[4]=e=>r(R)?R.value=e:null),inline:""},{default:s(()=>[(i(!0),u(m,null,f(Object.entries(t(pe)),([e,n])=>(i(),b(_,{key:e,label:e,value:n},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),o("h6",Ue,A(t(p)===t(h).Vertical?"Navbar":"Header")+" Type ",1),a(V,{modelValue:t(N),"onUpdate:modelValue":l[5]||(l[5]=e=>r(N)?N.value=e:null),inline:""},{default:s(()=>[(i(!0),u(m,null,f(t(Q),([e,n])=>(i(),b(_,{key:e,label:e,value:n},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),je,a(V,{modelValue:t(U),"onUpdate:modelValue":l[6]||(l[6]=e=>r(U)?U.value=e:null),inline:""},{default:s(()=>[(i(!0),u(m,null,f(Object.entries(t(fe)),([e,n])=>(i(),b(_,{key:e,label:e,value:n},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),o("div",Be,[a(C,{for:"customizer-navbar-blur",class:"text-high-emphasis"},{default:s(()=>[y(" Navbar Blur ")]),_:1}),o("div",null,[a(k,{id:"customizer-navbar-blur",modelValue:t(O),"onUpdate:modelValue":l[7]||(l[7]=e=>r(O)?O.value=e:null),class:"ms-2"},null,8,["modelValue"])])])]),_:1}),a(T,{title:"MENU"},{default:s(()=>[Re,a(V,{modelValue:t(p),"onUpdate:modelValue":l[8]||(l[8]=e=>r(p)?p.value=e:null),inline:""},{default:s(()=>[(i(!0),u(m,null,f(Object.entries(t(h)),([e,n])=>(i(),b(_,{key:e,label:e,value:n},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),t(p)===t(h).Vertical?(i(),u("div",$e,[a(C,{for:"customizer-menu-collapsed",class:"text-high-emphasis"},{default:s(()=>[y(" Collapsed Menu ")]),_:1}),o("div",null,[a(k,{id:"customizer-menu-collapsed",modelValue:t(j),"onUpdate:modelValue":l[9]||(l[9]=e=>r(j)?j.value=e:null),class:"ms-2"},null,8,["modelValue"])])])):D("",!0),o("div",{class:E(["mt-4 align-center justify-space-between",t(v).global.name.value==="light"&&t(p)===t(h).Vertical?"d-flex":"d-none"])},[a(C,{for:"customizer-menu-semi-dark",class:"text-high-emphasis"},{default:s(()=>[y(" Semi Dark Menu ")]),_:1}),o("div",null,[a(k,{id:"customizer-menu-semi-dark",modelValue:t(B),"onUpdate:modelValue":l[10]||(l[10]=e=>r(B)?B.value=e:null),class:"ms-2"},null,8,["modelValue"])])],2)]),_:1}),a(T,{title:"MISC"},{default:s(()=>[o("div",Oe,[a(C,{for:"customizer-rtl",class:"text-high-emphasis"},{default:s(()=>[y(" RTL ")]),_:1}),o("div",null,[a(k,{id:"customizer-rtl",modelValue:t($),"onUpdate:modelValue":l[11]||(l[11]=e=>r($)?$.value=e:null),class:"ms-2"},null,8,["modelValue"])])]),o("div",Ie,[a(_e,null,{default:s(()=>[a(F,{cols:"5",class:"d-flex align-center"},{default:s(()=>[a(C,{for:"route-transition",class:"text-high-emphasis"},{default:s(()=>[y(" Router Transition ")]),_:1})]),_:1}),a(F,{cols:"7"},{default:s(()=>[a(X,{id:"route-transition",modelValue:t(S),"onUpdate:modelValue":l[12]||(l[12]=e=>r(S)?S.value=e:null),items:Object.entries(t(ve)).map(([e,n])=>({key:e,value:n})),"item-title":"key","item-value":"value","single-line":""},null,8,["modelValue","items"])]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}};export{qe as _};
