import{D as e,S as a,a5 as s,Y as l,E as t,ab as o,a1 as c,a0 as n,a6 as r,aV as i,aW as u,ae as h,b8 as d,d as m,aE as f,r as p,J as g,y as b,o as _,c as V,w as y,X as v,v as k,h as x,O as j,N as I,C as S,a as $,aX as L,x as C,Q as B,U as O,i as T,I as U,aM as A,R as N,_ as E,t as R,g as w,j as D,k as F,m as X}from"./index-9a4aa426.js";/* empty css              */import{u as q}from"./form.b2296b86.js";import{u as z}from"./useTranslate.6f3ff1af.js";import"./useInject.f710a5e3.js";const G={...e,modelValue:a(""),inputType:s("text"),shape:s("round"),maxLength:a(9999),placeholder:String,clearable:l,clearIcon:s("circle-close"),background:String,inputBackground:String,focusStyle:{type:Object,default:()=>({})},autofocus:Boolean,disabled:Boolean,readonly:Boolean,inputAlign:s("left"),confirmType:s("done"),safeAreaInsetBottom:Boolean,cursorSpacing:t(0)},H={[o]:(e,a)=>(c(e)||n(e)||void 0===e)&&a instanceof Object,[r]:(e,a)=>(c(e)||n(e)||void 0===e)&&a instanceof Object,[i]:(e,a)=>(c(e)||n(e)||void 0===e)&&a instanceof Object,[u]:(e,a)=>(c(e)||n(e)||void 0===e)&&a instanceof Object,[h]:e=>c(e)||n(e)||void 0===e,[d]:e=>c(e)||n(e)||void 0===e,clickInput:e=>e instanceof Object,clickLeftIcon:(e,a)=>(c(e)||n(e)||void 0===e)&&a instanceof Object,clickRightIcon:(e,a)=>(c(e)||n(e)||void 0===e)&&a instanceof Object},J=`${N}-searchbar`,{translate:M}=z(J),Q=m({name:J,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),W=E(m({...Q,props:G,emits:H,setup(e,{emit:a}){const s=e,l=a,t=q(f(s,"disabled")),c=p({active:!1}),n=g((()=>B(s,J,{"safe-area-inset-bottom":s.safeAreaInsetBottom}))),m=g((()=>O(s,{background:s.background}))),N=g((()=>({background:s.inputBackground})));function E(e){let a=e.detail.value;s.maxLength&&(null==a?void 0:a.length)>Number(s.maxLength)&&(a=a.slice(0,Number(s.maxLength))),l(o,a,e),l(r,a,e)}const R=b({});function w(e){const a=e.detail.value;c.active=!0,R.value=s.focusStyle,l(u,a,e)}function D(e){setTimeout((()=>{c.active=!1}),0);let a=e.detail.value;s.maxLength&&(null==a?void 0:a.length)>Number(s.maxLength)&&(a=a.slice(0,Number(s.maxLength))),R.value={},l(i,a,e)}function F(e){l(o,"",e),l(r,"",e),l(h,"")}function X(){l(d,s.modelValue)}function z(e){l("clickInput",e)}function G(e){l("clickLeftIcon",s.modelValue,e)}function H(e){l("clickRightIcon",s.modelValue,e)}const Q=g((()=>({textAlign:s.inputAlign}))),W=b(null);return(e,a)=>{const s=T,l=U,o=A;return _(),V(s,{class:j(n.value),style:I(m.value)},{default:y((()=>[e.$slots.leftout?(_(),V(s,{key:0,class:"hs-searchbar__search-icon hs-searchbar__left-search-icon",onClick:G},{default:y((()=>[v(e.$slots,"leftout",{},void 0,!0)])),_:3},8,["onClick"])):k("",!0),x(s,{class:j(["hs-searchbar__search-input",[e.shape]]),style:I({...N.value,...R.value})},{default:y((()=>[e.$slots.leftin?(_(),V(s,{key:0,class:"hs-searchbar__search-icon hs-searchbar__iptleft-search-icon"},{default:y((()=>[v(e.$slots,"leftin",{},void 0,!0)])),_:3})):k("",!0),x(s,{class:j(["hs-searchbar__input-inner",[e.$slots.rightin&&"hs-searchbar__input-inner-absolute"]])},{default:y((()=>[x(o,{class:"hs-searchbar__input-form",action:"#",onsubmit:"return false",onSubmit:S(X,["prevent"])},{default:y((()=>[x(l,{ref_key:"inputsearch",ref:W,class:j(["hs-searchbar__input-bar",[e.clearable&&"hs-searchbar__input-bar_clear"]]),type:e.inputType,maxlength:e.maxLength?+e.maxLength:-1,placeholder:e.placeholder||$(M)("placeholder"),value:String(e.modelValue),"auto-focus":e.autofocus,"confirm-type":e.confirmType,disabled:$(t),readonly:"readonly"in e?e.readonly:$(L),style:I(Q.value),"cursor-spacing":e.cursorSpacing,onClick:z,onInput:E,onFocus:w,onBlur:D,onConfirm:X},null,8,["class","type","maxlength","placeholder","value","auto-focus","confirm-type","disabled","readonly","style","cursor-spacing","onClick"])])),_:1})])),_:1},8,["class"]),x(s,{class:j(["hs-searchbar__input-inner-icon",[e.$slots.rightin&&"hs-searchbar__input-inner-icon-absolute"]])},{default:y((()=>[e.clearable?(_(),V(s,{key:0,class:j(["hs-searchbar__search-icon hs-searchbar__input-clear",{"hs-hidden":String(e.modelValue).length<=0}]),onClick:F},{default:y((()=>[e.$slots["clear-icon"]?v(e.$slots,"clear-icon",{key:0},void 0,!0):(_(),V(C,{key:1,name:e.clearIcon},null,8,["name"]))])),_:3},8,["class","onClick"])):k("",!0),e.$slots.rightin?(_(),V(s,{key:1,class:"hs-searchbar__search-icon hs-searchbar__iptright-search-icon",onClick:H},{default:y((()=>[v(e.$slots,"rightin",{},void 0,!0)])),_:3},8,["onClick"])):k("",!0)])),_:3},8,["class"])])),_:3},8,["class","style"]),e.$slots.rightout?(_(),V(s,{key:1,class:"hs-searchbar__search-icon hs-searchbar__right-search-icon"},{default:y((()=>[v(e.$slots,"rightout",{},void 0,!0)])),_:3})):k("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-91ae767a"]]);const Y=E({props:{},setup(){const e=p({searchValue:"",searchValue1:"",searchValue2:"",searchValue3:"",searchValue4:"",searchValue5:"",searchValue6:"",confirmType:"search"});return{icon:"https://img10.360buyimg.com/imagetools/jfs/t1/170133/30/22902/10546/61833626E32d7ccde/a7c373ba30de9a89.png",clickLeft:function(){console.log("点击回退按钮")},search:function(){console.log("搜索触发")},...R(e)}}},[["render",function(e,a,s,l,t,o){const c=W,n=C,r=X,i=w("layout-default-uni");return _(),V(i,null,{default:y((()=>[D("div",{class:"demo full"},[D("h2",{class:"title"}," 基础用法 "),x(c,{modelValue:e.searchValue,"onUpdate:modelValue":a[0]||(a[0]=a=>e.searchValue=a)},null,8,["modelValue"]),D("h2",{class:"title"}," 设置搜索框形状 "),x(c,{shape:"square"}),D("h2",{class:"title"}," 搜索事件监听 "),x(c,{modelValue:e.searchValue1,"onUpdate:modelValue":a[1]||(a[1]=a=>e.searchValue1=a),onSearch:l.search},null,8,["modelValue","onSearch"]),D("h2",{class:"title"}," 显示搜索 icon "),x(c,{modelValue:e.searchValue2,"onUpdate:modelValue":a[2]||(a[2]=a=>e.searchValue2=a)},{leftin:y((()=>[x(n,{name:"search2"})])),_:1},8,["modelValue"]),D("h2",{class:"title"}," 右侧添加搜索文字 "),x(c,{modelValue:e.searchValue3,"onUpdate:modelValue":a[3]||(a[3]=a=>e.searchValue3=a),"confirm-type":e.confirmType},{rightout:y((()=>[F(" 搜索 ")])),_:1},8,["modelValue","confirm-type"]),D("h2",{class:"title"}," 更改输入框内部及外部的背景样式 "),x(c,{modelValue:e.searchValue4,"onUpdate:modelValue":a[4]||(a[4]=a=>e.searchValue4=a),background:"linear-gradient(to right, #9866F0, #EB4D50)","input-background":"#fff"},null,8,["modelValue"]),D("h2",{class:"title"}," 自定义清除按钮 icon "),x(c,{modelValue:e.searchValue6,"onUpdate:modelValue":a[5]||(a[5]=a=>e.searchValue6=a)},{"clear-icon":y((()=>[x(r,{src:l.icon,style:{width:"20px",height:"20px"}},null,8,["src"])])),_:1},8,["modelValue"]),D("h2",{class:"title"}," 显示全部 icon "),x(c,{modelValue:e.searchValue5,"onUpdate:modelValue":a[6]||(a[6]=a=>e.searchValue5=a)},{leftout:y((()=>[x(n,{name:"left"})])),leftin:y((()=>[x(n,{name:"search2"})])),rightin:y((()=>[x(n,{name:"photograph"})])),rightout:y((()=>[x(n,{name:"message"})])),_:1},8,["modelValue"])])])),_:1})}]]);export{Y as default};
