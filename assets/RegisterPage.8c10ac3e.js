import{_ as F,X as I,aL as B,ab as U,s as b,K as x,o as Q,c as v,e as n,f as e,k as a,aY as A,Z as c,$ as L,a1 as R,a0 as u,F as E,r as N,t as z,Q as p,a4 as D,a5 as H,aH as M,a3 as T}from"./index.73ae0b1c.js";import{Q as f,a as _}from"./QItem.afa24165.js";import{Q as $,a as y}from"./QList.4b1b6602.js";import{Q as j}from"./QMenu.4875dc57.js";import{Q as K}from"./QToolbar.9c5090a9.js";import{a as O,Q as i}from"./QCard.d4646db3.js";import{Q as h}from"./QInput.1ed68736.js";import{Q as k}from"./QCardActions.dabb9f66.js";import{Q as X}from"./QForm.a6613e19.js";import{v as Y}from"./index.728bcdfb.js";import{u as Z}from"./use-quasar.3f991aeb.js";import{Q as G}from"./QSpinnerHearts.fdf6becc.js";/* empty css                */import"./use-dark.4a66847d.js";import"./use-model-toggle.aef624cd.js";import"./focusout.fd89a999.js";import"./focus-manager.a1b6aa0a.js";const q=d=>(D("data-v-3c55d782"),d=d(),H(),d),J={class:"container"},W={class:"bg_effect"},ee=q(()=>n("div",{id:"shine"},null,-1)),ae=["src"],te={class:"row flex-center register"},se=q(()=>n("div",{class:"title text-center text-h4 q-py-md non-selectable"},"\u8A3B\u518A\u6703\u54E1",-1)),oe={__name:"RegisterPage",setup(d){const P=I(),m=Z(),S=B(),t=U({email:"",password:"",confirmPassword:""}),g=b(null),w=b(null),o={required:s=>!!s||"\u6B04\u4F4D\u5FC5\u586B",email:s=>Y.isEmail(s)||"\u4FE1\u7BB1\u683C\u5F0F\u932F\u8AA4",min:s=>s.length>=4||"\u9577\u5EA6\u5FC5\u9808\u5927\u65BC 4 \u500B\u5B57",max:s=>s.length<=20||"\u9577\u5EA6\u5FC5\u9808\u5C0F\u65BC 20 \u500B\u5B57",confirm:()=>t.confirmPassword===t.password||"\u5BC6\u78BC\u4E0D\u4E00\u81F4"};x(()=>t.confirmPassword,()=>{g.value.validate()}),x(()=>t.password,()=>{w.value.validate()});const V=async()=>{try{m.loading.show({spinner:G,spinnerSize:140,message:"<h6>\u8A3B\u518A\u4E2D\uFF0C\u8ACB\u8010\u5FC3\u7B49\u5019...</h6>",html:!0}),await M.post("/users",t),m.loading.hide(),await T.fire({icon:"success",title:"\u8A3B\u518A\u6210\u529F",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"},iconColor:"#F198AF",confirmButtonColor:"#F198AF",width:"20rem"}),S.push("/login")}catch(s){console.log(s),m.loading.hide(),m.notify({type:"negative",message:s.response.data.message})}},C=[{to:"/latestnews",label:"\u6700\u65B0\u6D88\u606F",icon:"announcement"},{to:"/realms",label:"\u5340\u57DF\u4ECB\u7D39",icon:"location_on"},{to:"/trade",label:"\u4EA4\u6613\u5C08\u5340",icon:"local_mall"},{to:"/contact",label:"\u806F\u7D61\u6211\u5011",icon:"call"}];return(s,r)=>(Q(),v("div",J,[n("div",W,[ee,e(K,{class:"text-white q-px-lg q-pt-md",style:{height:"50px"}},{default:a(()=>[e(c,{class:"q-ml-auto",flat:"",round:"",dense:""},{default:a(()=>[e(L,null,{default:a(()=>[n("img",{src:R(P).avatar},null,8,ae)]),_:1}),e(j,{square:"",class:"bg-primary text-center"},{default:a(()=>[e($,{dense:""},{default:a(()=>[e(f,{clickable:""},{default:a(()=>[e(_,null,{default:a(()=>[u("\u904A\u5BA2")]),_:1})]),_:1}),e(y,{inset:""}),(Q(),v(E,null,N(C,l=>e(f,{clickable:"",to:l.to,key:l.to},{default:a(()=>[e(_,null,{default:a(()=>[u(z(l.label),1)]),_:2},1024)]),_:2},1032,["to"])),64)),e(y,{inset:""}),e(f,{clickable:"",to:"/"},{default:a(()=>[e(_,null,{default:a(()=>[u("\u56DE\u9996\u9801")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n("div",te,[e(X,{onSubmit:A(V,["prevent"])},{default:a(()=>[e(O,null,{default:a(()=>[e(i,{horizontal:""},{default:a(()=>[e(i,{class:"left"}),e(i,{class:"right flex column justify-center"},{default:a(()=>[e(i,null,{default:a(()=>[se,e(h,{modelValue:t.email,"onUpdate:modelValue":r[0]||(r[0]=l=>t.email=l),rules:[o.required,o.email],dark:"",class:"q-mb-xs",type:"email",label:"Email",hint:"\u8ACB\u8F38\u5165\u4FE1\u7BB1","hide-hint":"",filled:"",dense:"",clearable:"","hide-bottom-space":"","clear-icon":"backspace"},{prepend:a(()=>[e(p,{name:"mail"})]),_:1},8,["modelValue","rules"])]),_:1}),e(i,null,{default:a(()=>[e(h,{modelValue:t.password,"onUpdate:modelValue":r[1]||(r[1]=l=>t.password=l),rules:[o.required,o.min,o.max,o.confirm],dark:"",class:"q-mb-xs",ref_key:"elPassword",ref:g,type:"password",label:"Password",hint:"\u8ACB\u8F38\u5165\u5BC6\u78BC","hide-hint":"",filled:"",dense:"","hide-bottom-space":"",maxlength:"20"},{prepend:a(()=>[e(p,{name:"vpn_key"})]),_:1},8,["modelValue","rules"])]),_:1}),e(i,null,{default:a(()=>[e(h,{modelValue:t.confirmPassword,"onUpdate:modelValue":r[2]||(r[2]=l=>t.confirmPassword=l),rules:[o.required,o.min,o.max,o.confirm],ref_key:"elPasswordConfirm",ref:w,dark:"",class:"q-mb-xs",type:"password",label:"Confirm Password",hint:"\u78BA\u8A8D\u5BC6\u78BC","hide-hint":"",filled:"",dense:"","hide-bottom-space":"",maxlength:"20"},{prepend:a(()=>[e(p,{name:"vpn_key"})]),_:1},8,["modelValue","rules"])]),_:1}),e(k,{class:"q-mt-md q-px-lg",vertical:""},{default:a(()=>[e(c,{label:"register",type:"submit",color:"secondary","text-color":"dark",class:"text-weight-bold"}),e(k,{align:"center"},{default:a(()=>[e(c,{label:"\u767B\u5165\u6703\u54E1","text-color":"white",to:"/login",flat:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])])]))}};var ve=F(oe,[["__scopeId","data-v-3c55d782"]]);export{ve as default};
