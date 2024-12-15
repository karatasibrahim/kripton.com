import{_ as k}from"./AppTextField-5882686e.js";import{k as m,o as v,b as x,w as s,p as e,m as r,q as t,V as y,x as P,a0 as C,K as I,D as V,B as R,r as B}from"./index-8abefeb0.js";import{u}from"./useGenerateImageVariant-f02832c8.js";import{m as N,a as T}from"./misc-mask-light-eb104613.js";import{b as c}from"./route-block-83d24a4e.js";import{V as f}from"./VImg-d074e4c4.js";import{V as a,a as _}from"./VRow-4bd89dfc.js";import{V as j}from"./VCard-0e65e470.js";import{V as w}from"./VCardText-db993edb.js";import{V as L}from"./VForm-42c42d33.js";import"./VInput-18f5ff20.js";import"./transition-27cd020f.js";import"./VTextField-c12e6cf7.js";/* empty css                   */import"./VField-babfa9a2.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-29118a28.js";import"./VAvatar-3c40fe41.js";const M="/assets/auth-v2-reset-password-illustration-dark-7eb92536.png",D="/assets/auth-v2-reset-password-illustration-light-bc472d54.png";const $={class:"position-relative bg-background rounded-lg w-100 ma-8 me-0"},F={class:"d-flex align-center justify-center w-100 h-100"},S=r("h5",{class:"text-h5 mb-1"}," Reset Password 🔒 ",-1),U=r("p",{class:"mb-0"},[V(" for "),r("span",{class:"font-weight-bold"},"john.doe@email.com")],-1),q=r("span",null,"Back to login",-1),A={__name:"reset-password-v2",setup(G){const l=m({newPassword:"",confirmPassword:""}),b=u(D,M),g=u(T,N),i=m(!1),d=m(!1);return(K,o)=>{const p=k,h=B("RouterLink");return v(),x(_,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:s(()=>[e(a,{md:"8",class:"d-none d-md-flex"},{default:s(()=>[r("div",$,[r("div",F,[e(f,{"max-width":"400",src:t(b),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(f,{class:"auth-footer-mask",src:t(g)},null,8,["src"])])]),_:1}),e(a,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:s(()=>[e(j,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:s(()=>[e(w,null,{default:s(()=>[e(t(y),{nodes:t(P).app.logo,class:"mb-6"},null,8,["nodes"]),S,U]),_:1}),e(w,null,{default:s(()=>[e(L,{onSubmit:o[4]||(o[4]=C(()=>{},["prevent"]))},{default:s(()=>[e(_,null,{default:s(()=>[e(a,{cols:"12"},{default:s(()=>[e(p,{modelValue:t(l).newPassword,"onUpdate:modelValue":o[0]||(o[0]=n=>t(l).newPassword=n),autofocus:"",label:"New Password",type:t(i)?"text":"password","append-inner-icon":t(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[1]||(o[1]=n=>i.value=!t(i))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(a,{cols:"12"},{default:s(()=>[e(p,{modelValue:t(l).confirmPassword,"onUpdate:modelValue":o[2]||(o[2]=n=>t(l).confirmPassword=n),label:"Confirm Password",type:t(d)?"text":"password","append-inner-icon":t(d)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[3]||(o[3]=n=>d.value=!t(d))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(a,{cols:"12"},{default:s(()=>[e(I,{block:"",type:"submit"},{default:s(()=>[V(" Set New Password ")]),_:1})]),_:1}),e(a,{cols:"12"},{default:s(()=>[e(h,{class:"d-flex align-center justify-center",to:{name:"pages-authentication-login-v2"}},{default:s(()=>[e(R,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),q]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};typeof c=="function"&&c(A);export{A as default};