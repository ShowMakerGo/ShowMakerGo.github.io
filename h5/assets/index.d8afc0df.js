import{D as a,S as e,a5 as o,a0 as t,a1 as s,ab as l,d as n,t as i,r as c,y as r,J as d,am as u,T as v,K as b,o as m,b as h,h as p,w as f,X as _,O as x,N as y,a as g,Q as C,i as S,R as I,P as V,_ as w,a4 as B,an as $,v as k,c as T,x as j,k as z,q as N,bf as O,bg as A,U as G}from"./index-9a4aa426.js";import{u as H}from"./useSelectorQuery.5ef6b069.js";import{b as Q,N as q}from"./badge.b3ca73d0.js";const D={...a,modelValue:e(0),bottom:Boolean,unactiveColor:String,activeColor:String,safeAreaInsetBottom:Boolean,placeholder:Boolean,size:o("20px"),dot:Boolean},J={tabSwitch:(a,e)=>a instanceof Object&&(t(e)||s(e)),[l]:a=>s(a)||t(a)},K=`${I}-tabbar`,P=n({name:K,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),R=w(n({...P,props:D,emits:J,setup(a,{emit:e}){const o=a,t=e,s=V(),{getSelectorNodeInfo:n}=H(s),{bottom:I,placeholder:w,safeAreaInsetBottom:B}=i(o),$=c({val:o.modelValue,children:[]}),k=r(),T=d((()=>C(o,K,{"hs-tabbar-bottom":I.value,"hs-tabbar-safebottom":B.value})));let j=c({children:$.children,size:o.size,modelValue:$.val,unactiveColor:o.unactiveColor,activeColor:o.activeColor,dot:o.dot,changeIndex:function(a,e){t(l,e),j.modelValue=e,t("tabSwitch",j.children[a],e)}});return u("parent",j),v((()=>o.modelValue),(a=>{j.modelValue=a})),b((()=>{I.value&&w.value&&setTimeout((async()=>{k.value=(await n(".hs-tabbar")).height}),500)})),(a,e)=>{const o=S;return m(),h("div",{class:x({"hs-tabbar__placeholder":g(I)&&g(w)}),style:y({height:`${k.value}px`})},[p(o,{class:x(T.value),style:y(a.customStyle)},{default:f((()=>[_(a.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])],6)}}}),[["__scopeId","data-v-eced3214"]]),U={...a,...Q,tabTitle:String,name:String,icon:String,href:String},W=`${I}-tabbar-item`,X=n({name:W,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),E=w(n({...X,props:U,setup(a){const e=a,o=B();function t(a){return o[a]}const s=$("parent"),l=c({unactiveColor:null==s?void 0:s.unactiveColor,activeColor:null==s?void 0:s.activeColor,active:null==s?void 0:s.modelValue,index:0});!function(a){if(a.proxy){null==s||s.children.push(a.proxy);const o=null==s?void 0:s.children.indexOf(a.proxy);l.index=e.name?e.name:o}}(V());const n=d((()=>l.index===(null==s?void 0:s.modelValue)));const i=d((()=>C(e,W,{"hs-tabbar-item__icon--unactive":!n.value}))),r=d((()=>G(e,{color:n.value?l.activeColor:l.unactiveColor})));return(a,o)=>{const c=S;return m(),h("div",{class:x(i.value),style:y(r.value),onClick:o[0]||(o[0]=a=>function(){const a=e.name?e.name:l.index;let o=null;e.name&&(o=null==s?void 0:s.children.findIndex((e=>e.name===a))),null==s||s.changeIndex(null!==o?+o:+a,l.index)}())},[p(q,O(A(e)),{default:f((()=>[p(c,{class:"hs-tabbar-item_icon-box"},{default:f((()=>[t("icon")?(m(),h("div",{key:0,class:"hs-tabbar-item_icon-box_icon"},[_(a.$slots,"icon",{active:n.value},void 0,!0)])):k("",!0),a.icon&&!t("icon")?(m(),T(c,{key:1},{default:f((()=>[p(j,{name:a.icon,"custom-class":"hs-popover-item-img"},null,8,["name"])])),_:1})):k("",!0),p(c,{class:x(["hs-tabbar-item_icon-box_nav-word",[{"hs-tabbar-item_icon-box_big-word":!a.icon&&!t("icon")}]])},{default:f((()=>[_(a.$slots,"default",{},(()=>[a.tabTitle?(m(),T(c,{key:0},{default:f((()=>[z(N(a.tabTitle),1)])),_:1})):k("",!0)]),!0)])),_:3},8,["class"])])),_:3})])),_:3},16)],6)}}}),[["__scopeId","data-v-5b811802"]]);export{E as _,R as a};
