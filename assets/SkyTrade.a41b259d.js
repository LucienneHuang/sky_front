import{Q as P,a as x}from"./QBreadcrumbs.bfb1d474.js";import{_ as Q,s as r,K as p,x as b,aX as q,o as v,c as _,e as l,f as t,k as c,a0 as g,F as w,r as O,aH as V,Q as S,aI as B}from"./index.3acf5172.js";import{Q as C}from"./QInput.5d87e253.js";import{Q as y}from"./QChip.5bb7a192.js";import{Q as I}from"./QPagination.5ef3c3af.js";import{u as T}from"./use-quasar.f9129251.js";import{Q as H}from"./QSpinnerHearts.dc7aa5ee.js";import{P as N}from"./ProductCard.cffbd5ba.js";import"./use-dark.da062060.js";import"./focus-manager.a1b6aa0a.js";import"./format.865294d5.js";import"./QImg.6d160184.js";import"./use-ratio.31e88f86.js";import"./QCard.fcdc6374.js";/* empty css                */const $={id:"container",class:"q-ma-md"},z={id:"head",class:"q-my-md"},E={id:"title",class:"text-weight-bold non-selectable q-mt-md q-pl-md flex"},F={class:"q-mt-md q-ml-lg"},U={id:"section",class:"flex justify-center"},j={class:"q-pa-lg flex flex-center"},A={__name:"SkyTrade",setup(K){const n=T(),u=r([]),m=r("desc"),f=r(0),k=r(9),s=r(1),d=r(""),i=async()=>{try{n.loading.show({spinner:H,spinnerSize:140,message:"<h6>\u8CC7\u6599\u8F09\u5165\u4E2D\uFF0C\u8ACB\u8010\u5FC3\u7B49\u5019...</h6>",html:!0});const{data:a}=await V.get("/products",{params:{currentPage:s.value,productsPerPage:k.value,sortOrder:m.value,search:d.value}});u.value.splice(0,u.value.length,...a.result.data),f.value=a.result.count,n.loading.hide()}catch{n.loading.hide(),n.notify({type:"negative",message:"\u767C\u751F\u932F\u8AA4"})}};i();const h=a=>{m.value=a};return p(s,async(a,e)=>{i()}),p(m,async(a,e)=>{s.value=1,i()}),p(d,async(a,e)=>{s.value=1,i()}),b(()=>{q.init()}),(a,e)=>(v(),_("div",$,[l("div",z,[t(P,null,{default:c(()=>[t(x,{label:"Home",to:"/"}),t(x,{label:"\u4EA4\u6613"})]),_:1}),l("div",E,[g("\u4EA4\u6613\u5C08\u5340 "),t(C,{class:"q-ml-md q-mt-sm",rounded:"",outlined:"",modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=o=>d.value=o),color:"accent",label:"\u8ACB\u8F38\u5165\u5546\u54C1\u95DC\u9375\u5B57"},{append:c(()=>[t(S,{name:"search",color:"accent",size:"2.5rem"})]),_:1},8,["modelValue"])]),l("div",F,[t(y,{clickable:"",onClick:e[1]||(e[1]=o=>h("decs")),color:"accent","text-color":"white"},{default:c(()=>[g(" \u6700\u65B0 ")]),_:1}),t(y,{clickable:"",onClick:e[2]||(e[2]=o=>h("asc")),color:"accent","text-color":"white"},{default:c(()=>[g(" \u6700\u820A ")]),_:1})])]),l("div",U,[(v(!0),_(w,null,O(u.value,o=>(v(),_("div",{key:o._id},[t(N,B(o,{"data-aos":"flip-left","data-aos-duration":"1300","data-aos-easing":"ease-in-out-back"}),null,16)]))),128))]),l("div",j,[t(I,{modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=o=>s.value=o),max:f.value,"boundary-links":"","direction-links":""},null,8,["modelValue","max"])])]))}};var re=Q(A,[["__scopeId","data-v-9be83080"]]);export{re as default};