import{Q}from"./QInput.065ab3ab.js";import{a as O,Q as g}from"./QCard.e274b725.js";import{Q as T}from"./QSelect.5a6c435d.js";import{_ as H,aL as L,s as z,ab as R,u as S,a2 as k,b as j,o as i,c as _,f as l,k as n,e,i as B,a as x,F as V,r as I,a0 as v,t as h,Z as f,aY as W,z as Y,Q as Z,a4 as G,a5 as J,a3 as K}from"./index.02f27234.js";import{Q as X}from"./QCardActions.80ddd09b.js";import{Q as ee}from"./QForm.de99fdd2.js";import{Q as te}from"./QDialog.15234f7a.js";import{Q as le,a as U}from"./QBreadcrumbs.5d3dada1.js";import{Q as M}from"./QMarkupTable.f07f05c2.js";import{Q as ae}from"./QImg.9790429d.js";import{C as oe}from"./ClosePopup.4f745407.js";import{u as se}from"./use-quasar.7f289e7c.js";import{Q as re}from"./QSpinnerHearts.5571e6f8.js";import{v as ne}from"./index.2235b520.js";/* empty css                */import"./use-dark.4a373d89.js";import"./focus-manager.a1b6aa0a.js";import"./QChip.9fe71918.js";import"./QItem.65ae7322.js";import"./QMenu.152f2ce4.js";import"./use-model-toggle.3a190faa.js";import"./focusout.5d11ae75.js";import"./rtl.b51694b1.js";import"./format.865294d5.js";import"./use-prevent-scroll.7fa09ed6.js";import"./use-ratio.0edd2179.js";const u=y=>(G("data-v-6f738fa8"),y=y(),J(),y),de={id:"form"},ie=u(()=>e("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u806F\u7D61\u59D3\u540D",-1)),ue=u(()=>e("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u806F\u7D61\u96FB\u8A71",-1)),ce=u(()=>e("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u806F\u7D61\u5730\u5740",-1)),pe=u(()=>e("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u4ED8\u6B3E\u65B9\u5F0F",-1)),me={id:"container",class:"q-ma-md"},_e={id:"head",class:"q-my-md"},he=u(()=>e("div",{id:"title",class:"text-weight-bold non-selectable q-mt-md q-pl-md"},"\u8CFC\u7269\u8ECA",-1)),fe={id:"section",class:"q-ma-xl"},ve=u(()=>e("thead",null,[e("tr",null,[e("td",{colspan:"7"},"\u6C92\u6709\u5546\u54C1")])],-1)),ye={colspan:"7"},be={class:"text-h6"},Ce=u(()=>e("tr",null,[e("th"),e("th",null,[e("span",null,"\u5716\u7247")]),e("th",{class:"name"},[e("span",null,"\u540D\u7A31")]),e("th",null,[e("span",null,"\u55AE\u50F9")]),e("th",null,[e("span",null,"\u6578\u91CF")]),e("th",null,[e("span",null,"\u5C0F\u8A08")]),e("th",null,[e("span",null,"\u64CD\u4F5C")])],-1)),ge={key:0},xe={key:1},qe={key:2},Qe=u(()=>e("br",null,null,-1)),ke={class:"image"},Ve={class:"name"},we={class:"price"},Ne=u(()=>e("hr",null,null,-1)),ze={class:"text-h4 text-weight-bold q-pt-sm non-selectable"},Se={class:"text-red-10"},Be={__name:"CartView",setup(y){const $=L(),m=se(),r=z([]),b=z(!1),w=["\u8F49\u5E33","linepay","\u8CA8\u5230\u4ED8\u6B3E"],C={required:s=>!!s||"\u6B04\u4F4D\u5FC5\u586B",phone:s=>ne.isMobilePhone(s,"zh-TW")||"\u624B\u6A5F\u683C\u5F0F\u932F\u8AA4",paymentRequired:s=>w.includes(s)||"\u6C92\u6709\u8A72\u5206\u985E"},d=R({realName:"",phoneNumber:"",address:"",payment:""}),q=async(s,o,c)=>{try{await k.post("/users/cart",{seller:s,product:o,quantity:c});const t=r.value.findIndex(a=>a.seller._id===s),p=r.value[t].productCart.findIndex(a=>a.product._id===o);r.value[t].productCart[p].quantity+=c,r.value[t].productCart[p].quantity<=0&&r.value[t].productCart.splice(p,1),r.value[t].productCart.length<=0&&r.value.splice(t,1),m.notify({type:"positive",message:"\u66F4\u65B0\u6210\u529F"})}catch(t){m.notify({type:"negative",message:t.response.data.message})}},A=S(()=>r.value.reduce((s,o)=>{const c=o.productCart.reduce((t,p)=>t+p.quantity*p.product.price,0);return s+c},0)),D=S(()=>r.value.length>0&&!r.value.some(s=>s.productCart.some(o=>!o.product.sell))),E=async(s,o)=>{try{await k.post("/orders",d),await K.fire({icon:"success",title:"\u8A02\u55AE\u5EFA\u7ACB\u6210\u529F",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"},iconColor:"#B0A9EC",confirmButtonColor:"#B0A9EC",width:"20rem"}),$.push("/member/orders")}catch(c){m.notify({type:"negative",message:c.response.data.message})}},F=()=>{b.value=!0};return(async()=>{try{m.loading.show({spinner:re,spinnerSize:140,message:"<h6>\u8CC7\u6599\u8F09\u5165\u4E2D\uFF0C\u8ACB\u8010\u5FC3\u7B49\u5019...</h6>",html:!0});const{data:s}=await k.get("/users/cart");r.value.push(...s.result),m.loading.hide()}catch(s){m.loading.hide(),m.notify({type:"negative",message:s.response.data.message})}})(),(s,o)=>{const c=j("router-link");return i(),_(V,null,[l(te,{modelValue:b.value,"onUpdate:modelValue":o[5]||(o[5]=t=>b.value=t)},{default:n(()=>[e("div",de,[l(ee,{onSubmit:W(E,["prevent"])},{default:n(()=>[l(O,{class:"flex column justify-center items-center q-pa-lg q-ma-xl"},{default:n(()=>[l(g,{horizontal:""},{default:n(()=>[ie,l(Q,{color:"accent",type:"text",label:"\u82E5\u70BA\u4EA4\u6613\u5BE6\u9AD4\u5546\u54C1(\u5468\u908A)\uFF0C\u8ACB\u8F38\u5165\u771F\u5BE6\u59D3\u540D\u65B9\u4FBF\u5BC4\u4EF6\u3002",modelValue:d.realName,"onUpdate:modelValue":o[0]||(o[0]=t=>d.realName=t),rules:[C.required],"hide-hint":""},null,8,["modelValue","rules"])]),_:1}),l(g,{horizontal:""},{default:n(()=>[ue,l(Q,{color:"accent",type:"text",label:"\u8ACB\u8F38\u5165\u9023\u7D61\u96FB\u8A71\u3002","hide-hint":"",modelValue:d.phoneNumber,"onUpdate:modelValue":o[1]||(o[1]=t=>d.phoneNumber=t),rules:[C.required,C.phone]},null,8,["modelValue","rules"])]),_:1}),l(g,{horizontal:""},{default:n(()=>[ce,l(Q,{color:"accent",type:"text",label:"\u8ACB\u8F38\u5165\u9001\u8CA8\u5730\u5740/\u597D\u53CB\u9023\u7D50\u3002","hide-hint":"",modelValue:d.address,"onUpdate:modelValue":o[2]||(o[2]=t=>d.address=t)},null,8,["modelValue"])]),_:1}),l(g,{horizontal:""},{default:n(()=>[pe,l(T,{options:w,color:"accent",label:"\u5206\u985E",modelValue:d.payment,"onUpdate:modelValue":o[3]||(o[3]=t=>d.payment=t),rules:[C.required]},null,8,["modelValue","rules"])]),_:1}),l(X,{class:"q-mt-sm"},{default:n(()=>[Y(l(f,{type:"submit",unelevated:"",rounded:"",style:{width:"6rem"},size:"1rem",color:"accent",label:"\u9001\u51FA"},null,512),[[oe]]),l(f,{unelevated:"",rounded:"",style:{width:"6rem"},size:"1rem",outline:"",color:"accent",label:"\u53D6\u6D88",onClick:o[4]||(o[4]=t=>b.value=!1)})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1},8,["modelValue"]),e("div",me,[e("div",_e,[l(le,null,{default:n(()=>[l(U,{label:"Home",to:"/"}),l(U,{label:"\u8CFC\u7269\u8ECA"})]),_:1}),he]),e("div",fe,[r.value.length===0?(i(),B(M,{key:0},{default:n(()=>[ve]),_:1})):x("",!0),(i(!0),_(V,null,I(r.value,(t,p)=>(i(),B(M,{key:p,class:"q-mb-xl"},{default:n(()=>[e("thead",null,[e("tr",null,[e("th",ye,[e("span",be,"\u8CE3\u5BB6\uFF1A"+h(t.seller.nickname)+"\uFF08"+h(t.seller._id)+"\uFF09",1)])]),Ce]),e("tbody",null,[(i(!0),_(V,null,I(t.productCart,(a,P)=>(i(),_("tr",{key:P,class:"text-center"},[e("td",null,[!a.product.sell||a.product.MaxNumber<a.quantity?(i(),_("div",ge,[l(Z,{name:"mdi-alert",color:"red",size:"25px"})])):x("",!0),a.product.sell?x("",!0):(i(),_("div",xe,"\u5DF2\u4E0B\u67B6")),a.product.MaxNumber<a.quantity?(i(),_("div",qe,[v("\u6578\u91CF\u4E0D\u8DB3"),Qe,v("\u8ACB\u4FEE\u6539\u6578\u91CF")])):x("",!0)]),e("td",ke,[l(ae,{src:a.product.image,style:{height:"140px",width:"150px"}},null,8,["src"])]),e("td",Ve,[l(c,{to:"/trade/"+a.product._id},{default:n(()=>[v(h(a.product.name),1)]),_:2},1032,["to"])]),e("td",null,h(a.product.price),1),e("td",null,[l(f,{round:"",color:"accent",icon:"mdi-minus",flat:"",onClick:N=>q(t.seller._id,a.product._id,-1)},null,8,["onClick"]),v(" "+h(a.quantity)+" ",1),l(f,{round:"",color:"accent",icon:"mdi-plus",flat:"",onClick:N=>q(t.seller._id,a.product._id,1)},null,8,["onClick"])]),e("td",null,h(a.quantity*a.product.price),1),e("td",null,[l(f,{round:"",color:"accent",icon:"mdi-delete",onClick:N=>q(t.seller._id,a.product._id,a.quantity*-1)},null,8,["onClick"])])]))),128))])]),_:2},1024))),128)),e("div",we,[Ne,e("div",ze,[v("\u5546\u54C1\u7E3D\u91D1\u984D\uFF1A"),e("span",Se,h(A.value),1)]),l(f,{color:"accent",size:"18px",label:"\u524D\u5F80\u7D50\u5E33",onClick:F,disable:!D.value},null,8,["disable"])])])])],64)}}};var ot=H(Be,[["__scopeId","data-v-6f738fa8"]]);export{ot as default};
