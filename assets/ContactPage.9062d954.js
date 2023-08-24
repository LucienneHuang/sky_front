import{Q as x,a as _}from"./QBreadcrumbs.89584424.js";import{Q as h}from"./QInput.1ed68736.js";import{a as g,Q as p}from"./QCard.d4646db3.js";import{_ as v,X as q,aL as w,ab as Q,o as y,c as V,e as t,f as e,k as s,aY as C,Z as S,a4 as k,a5 as B,aH as U,a3 as z}from"./index.73ae0b1c.js";import{Q as I}from"./QCardActions.dabb9f66.js";import{Q as E}from"./QForm.a6613e19.js";import{v as H}from"./index.728bcdfb.js";import{u as P}from"./use-quasar.3f991aeb.js";import{Q as j}from"./QSpinnerHearts.fdf6becc.js";import"./use-dark.4a66847d.js";import"./focus-manager.a1b6aa0a.js";const r=d=>(k("data-v-2b05730e"),d=d(),B(),d),F={id:"container",class:"q-ma-md"},N={id:"head",class:"q-my-md"},A=r(()=>t("div",{id:"title",class:"text-weight-bold non-selectable q-mt-md q-pl-md"},"\u806F\u7D61\u6211\u5011",-1)),L={id:"section",class:"flex justify-center q-ma-xl"},M={id:"background",class:"q-ma-xl"},R=r(()=>t("div",{id:"backgroundtext",class:"text-white text-h4 text-weight-bold"},"Contact Us",-1)),X=r(()=>t("div",{class:"text-h5 text-weight-bold text-white q-mr-md"},"\u540D\u7A31",-1)),Y=r(()=>t("div",{class:"text-h5 text-weight-bold text-white q-mr-md"},"\u4FE1\u7BB1",-1)),Z=r(()=>t("div",{class:"text-h5 text-weight-bold text-white q-mr-md"},"\u5167\u5BB9",-1)),$={__name:"ContactPage",setup(d){const c=q(),n=P(),b=w();let u="";c.nickname!=="\u904A\u5BA2"?u=c.nickname:u="";const a=Q({name:u,email:c.email,message:""}),m={required:l=>!!l||"\u6B04\u4F4D\u5FC5\u586B",email:l=>H.isEmail(l)||"\u4FE1\u7BB1\u683C\u5F0F\u932F\u8AA4"},f=async()=>{try{n.loading.show({spinner:j,spinnerSize:140,message:"<h6>\u8CC7\u6599\u9001\u51FA\u4E2D\uFF0C\u8ACB\u8010\u5FC3\u7B49\u5019...</h6>",html:!0}),await U.post("/contactUs",a),n.loading.hide(),await z.fire({icon:"success",title:"\u6210\u529F\u9001\u51FA",text:"\u975C\u5F85\u6211\u5011\u7684\u56DE\u8986"}),b.push("/")}catch{n.loading.hide(),n.notify({type:"negative",message:"\u767C\u751F\u932F\u8AA4"})}};return(l,o)=>(y(),V("div",F,[t("div",N,[e(x,null,{default:s(()=>[e(_,{label:"Home",to:"/"}),e(_,{label:"\u806F\u7D61"})]),_:1}),A]),t("div",L,[t("div",M,[R,e(E,{onSubmit:C(f,["prevent"]),class:"q-ma-xl"},{default:s(()=>[e(g,{class:"bg-accent flex column justify-center items-center q-ma-xl"},{default:s(()=>[e(p,{class:"q-mb-sm",horizontal:""},{default:s(()=>[X,e(h,{type:"text",modelValue:a.name,"onUpdate:modelValue":o[0]||(o[0]=i=>a.name=i),rules:[m.required],dense:"",rounded:"",outlined:"","bg-color":"white",label:"\u7A31\u547C",hint:"\u8ACB\u8F38\u5165\u540D\u7A31","hide-hint":"",clearable:""},null,8,["modelValue","rules"])]),_:1}),e(p,{class:"q-mb-sm",horizontal:""},{default:s(()=>[Y,e(h,{type:"email",modelValue:a.email,"onUpdate:modelValue":o[1]||(o[1]=i=>a.email=i),rules:[m.required,m.email],rounded:"",outlined:"","bg-color":"white",label:"\u4FE1\u7BB1",hint:"\u8ACB\u8F38\u5165\u4FE1\u7BB1",dense:"","hide-hint":"",clearable:""},null,8,["modelValue","rules"])]),_:1}),e(p,{class:"q-mb-sm",horizontal:""},{default:s(()=>[Z,e(h,{type:"textarea",modelValue:a.message,"onUpdate:modelValue":o[2]||(o[2]=i=>a.message=i),rules:[m.required],rounded:"",outlined:"","bg-color":"white",label:"\u5167\u5BB9",hint:"\u8ACB\u8F38\u5165\u5167\u5BB9",dense:"","hide-hint":"",clearable:""},null,8,["modelValue","rules"])]),_:1}),e(I,{class:"q-mt-sm"},{default:s(()=>[e(S,{type:"submit",unelevated:"",rounded:"",style:{width:"6rem"},size:"1rem",color:"primary",label:"\u9001\u51FA"})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])])]))}};var oe=v($,[["__scopeId","data-v-2b05730e"]]);export{oe as default};