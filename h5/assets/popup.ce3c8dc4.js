import{D as o,a5 as s,Y as e,ai as l,ac as a,a_ as n,aj as t,a$ as i,b0 as c,r,J as p,Q as d,U as u,T as y,b1 as k,t as v,R as m,d as C,o as f,b as I,c as b,ar as h,a as x,v as O,h as $,w as _,X as z,O as S,x as w,F as A,i as g,_ as N}from"./index-9a4aa426.js";import{N as j}from"./transition.47a8b3f2.js";import{o as B,N as P}from"./overlay.65ef5d67.js";const T={center:"fade",top:"slide-down",bottom:"slide-up",left:"slide-left",right:"slide-right"},D={...B,...o,position:s("center"),transition:{type:String,default:""},popClass:s(""),closeable:Boolean,closeIconPosition:s("top-right"),closeIcon:s("close"),destroyOnClose:e,overlay:e,round:Boolean,safeAreaInsetBottom:Boolean,safeAreaInsetTop:e},E={[l]:o=>a(o),"click-pop":o=>o instanceof Object,"click-close-icon":()=>!0,[n]:()=>!0,[t]:()=>!0,[i]:()=>!0,opend:()=>!0,[c]:()=>!0,"click-overlay":()=>!0};let L=500;const Q=`${m}-popup`;function F(o,s){let e;const a=r({zIndex:o.zIndex,showSlot:!0,closed:o.closeable}),m=p((()=>d(o,Q,{round:o.round,[`hs-popup--${o.position}`]:!0,[`hs-popup--${o.position}--safebottom`]:"bottom"===o.position&&o.safeAreaInsetBottom,[`hs-popup--${o.position}--safetop`]:"top"===o.position&&o.safeAreaInsetTop,[o.popClass]:!0}))),C=p((()=>u(o,{zIndex:+a.zIndex,transitionDuration:`${o.duration}ms`}))),f=p((()=>o.transition?o.transition:`${T[o.position]}`)),I=()=>{e&&(e=!1,s(l,!1),s(t))};return y((()=>o.visible),(t=>{t&&!e&&(e||(e=!0,500!==o.zIndex&&(L=Number(o.zIndex)),s(l,!0),a.zIndex=++L,a.showSlot=!0,s(n))),!t&&e&&(e=!1,s("close"))})),k((()=>{a.closed=o.closeable})),{...v(a),popStyle:C,transitionName:f,classes:m,onClick:o=>{s("click-pop",o)},onClickCloseIcon:o=>{o.stopPropagation(),s("click-close-icon"),I()},onClickOverlay:()=>{s("click-overlay"),o.closeOnClickOverlay&&I()},onOpened:()=>{s("opend"),s(i)},onClosed:()=>{s(c),a.showSlot=!o.destroyOnClose}}}const G=C({name:`${m}-popup`,options:{virtualHost:!0,addGlobalClass:!0}}),H=N(C({...G,props:D,emits:E,setup(o,{emit:s}){const e=o,l=s,{onClickOverlay:a,showSlot:n,onClickCloseIcon:t,closed:i,transitionName:c,onOpened:r,onClosed:p,classes:d,popStyle:u,onClick:y}=F(e,l);return(o,s)=>{const e=g;return f(),I(A,null,[o.overlay?(f(),b(P,h({key:0,visible:o.visible,"close-on-click-overlay":o.closeOnClickOverlay,"z-index":o.zIndex,"lock-scroll":o.lockScroll,duration:o.duration,"overlay-class":o.overlayClass,"overlay-style":o.overlayStyle,"destroy-on-close":o.destroyOnClose},o.$attrs,{onClick:x(a)}),null,16,["visible","close-on-click-overlay","z-index","lock-scroll","duration","overlay-class","overlay-style","destroy-on-close","onClick"])):O("",!0),$(j,{name:x(c),"custom-class":x(d),show:o.visible,"destroy-on-close":o.destroyOnClose,"custom-style":x(u),duration:Number(o.duration),onAfterEnter:x(r),onAfterLeave:x(p),onClick:x(y)},{default:_((()=>[x(n)?z(o.$slots,"default",{key:0},void 0,!0):O("",!0),x(i)?(f(),b(e,{key:1,class:S(["hs-popup__close-icon",`hs-popup__close-icon--${o.closeIconPosition}`]),onClick:x(t)},{default:_((()=>[z(o.$slots,"closeIcon",{},(()=>[$(w,{name:"close",height:"12px"})]),!0)])),_:3},8,["class","onClick"])):O("",!0)])),_:3},8,["name","custom-class","show","destroy-on-close","custom-style","duration","onAfterEnter","onAfterLeave","onClick"])],64)}}}),[["__scopeId","data-v-9951e517"]]);export{H as _,D as p};
