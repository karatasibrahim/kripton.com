import{ar as S,aF as h,at as O,aG as x,I as e,k as w,$ as u,aw as I,p as T}from"./index-0956881b.js";import{m as $,u as k,a as d}from"./VOverlay-6b3709f3.js";import{f as p}from"./forwardRefs-a29b5f65.js";const R=S()({name:"VTooltip",props:{id:String,text:String,...h($({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},emits:{"update:modelValue":t=>!0},setup(t,v){let{slots:a}=v;const n=O(t,"modelValue"),{scopeId:m}=k(),f=x(),r=e(()=>t.id||`v-tooltip-${f}`),l=w(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),y=e(()=>u({"aria-describedby":r.value},t.activatorProps));return I(()=>{const[b]=d.filterProps(t);return T(d,u({ref:l,class:["v-tooltip",t.class],style:t.style,id:r.value},b,{modelValue:n.value,"onUpdate:modelValue":o=>n.value=o,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:y.value,_disableGlobalStack:!0},m),{activator:a.activator,default:function(){var c;for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return((c=a.default)==null?void 0:c.call(a,...s))??t.text}})}),p({},l)}});export{R as V};
