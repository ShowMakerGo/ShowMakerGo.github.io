import{D as s,E as a,a5 as e,d as t,J as o,o as l,c as d,w as n,N as u,X as r,v as b,O as c,k as i,q as _,U as p,aG as h,Q as v,i as g,R as m,_ as f}from"./index-9a4aa426.js";const y={...s,value:[String,Number],max:a(1e4),dot:Boolean,bubble:Boolean,hidden:Boolean,top:e("0"),right:e("0"),zIndex:a(10),customColor:e("")},x=`${m}-badge`,I=t({name:x,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),$=f(t({...I,props:y,setup(s){const a=s,e=o((()=>p(a,{top:h(a.top),right:h(a.right),zIndex:a.zIndex,background:a.customColor}))),t=o((()=>v(a,x))),m=o((()=>{if(a.dot)return;const s=a.value,e=a.max;return"number"==typeof s&&"number"==typeof e&&e<s?`${e}+`:s}));return(s,o)=>{const p=g;return l(),d(p,{class:c(t.value)},{default:n((()=>[a.hidden||a.dot||!s.$slots.icon?b("",!0):(l(),d(p,{key:0,class:"hs-badge__icon",style:u(e.value)},{default:n((()=>[r(s.$slots,"icon",{},void 0,!0)])),_:3},8,["style"])),r(s.$slots,"default",{},void 0,!0),a.hidden||!m.value&&!a.dot?b("",!0):(l(),d(p,{key:1,class:c(["hs-badge__content hs-badge__content--sup",{"hs-badge__content--dot":a.dot,"hs-badge__content--bubble":!a.dot&&a.bubble}]),style:u(e.value)},{default:n((()=>[i(_(m.value),1)])),_:1},8,["class","style"]))])),_:3},8,["class"])}}}),[["__scopeId","data-v-cb2fbc63"]]);export{$ as N,y as b};
