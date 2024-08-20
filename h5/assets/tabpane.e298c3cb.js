var e=Object.defineProperty,t=(t,l,a)=>(((t,l,a)=>{l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a})(t,"symbol"!=typeof l?l+"":l,a),a);import{D as l,S as a,a5 as s,Y as o,H as i,a6 as n,ab as u,a1 as r,y as c,aT as d,K as v,r as h,d as p,J as m,T as f,b4 as b,o as y,c as g,w as _,h as T,a as S,O as k,N as w,X as C,b as K,F as $,l as j,v as x,x as V,k as z,q as I,aG as H,Q as B,i as R,ak as E,R as D,P as G,ah as M,av as P,_ as N,U as O}from"./index-9a4aa426.js";import{r as Q}from"./raf.db71c386.js";import{u as U}from"./useTouch.ef102360.js";import{u as W}from"./useSelectorQuery.5ef6b069.js";import{u as X}from"./useProvide.92abce79.js";import{u as Y}from"./useRect.14507623.js";import{u as q}from"./useInject.f710a5e3.js";const A=Symbol("tabs"),F={...l,modelValue:a(0),customColor:String,direction:s("horizontal"),size:s("normal"),type:s("line"),titleScroll:Boolean,ellipsis:o,swipeable:Boolean,autoHeight:Boolean,background:String,animatedTime:a(300),titleGutter:a(0),align:s("center")},J={[i]:e=>e instanceof Object,[n]:e=>e instanceof Object,[u]:e=>r(e)};class L{constructor(){t(this,"title",""),t(this,"titleSlot"),t(this,"paneKey",""),t(this,"disabled",!1)}}function Z(e,t,l,a){const s=c(),o=`tabsContentRef-${d()}`,i=c({width:0,height:0});v((()=>{setTimeout((()=>{(async()=>{var e,t;if(l){const e=await a(o,l);i.value.width=e.width||0,i.value.height=e.height||0}else i.value.width=(null==(e=s.value)?void 0:e.clientWidth)||0,i.value.height=(null==(t=s.value)?void 0:t.clientHeight)||0})()}),100)}));const n=h({offset:0,moving:!1}),u=U();let r="";return{touchMethods:{onTouchStart(t){e.swipeable&&u.start(t)},onTouchMove(l){e.swipeable&&(u.move(l),n.moving=!0,((l,a)=>{var s;let o=l;switch("horizontal"===e.direction?(r=l>0?"right":"left",o=Math.abs(o)/i.value.width*100):(r=a>0?"bottom":"top",o=a,o=Math.abs(o)/(null==(s=i.value)?void 0:s.height)*100),o>85&&(o=85),r){case"left":case"top":t.isEnd()&&(o=0,n.moving=!1);break;case"right":case"bottom":o=-o,t.isBegin()&&(o=0,n.moving=!1)}n.offset=o})(u.deltaX.value,u.deltaY.value),"horizontal"===e.direction&&u.isHorizontal()&&(l.preventDefault(),l.stopPropagation()),"vertical"===e.direction&&u.isVertical()&&(l.preventDefault(),l.stopPropagation()))},onTouchEnd(){if(n.moving)switch(n.moving=!1,r){case"left":case"top":n.offset>35&&t.next();break;case"right":case"bottom":n.offset<-35&&t.prev()}}},touchState:n,tabsContentRef:s,tabsContentID:o}}const ee=`${D}-tabs`,te=p({name:ee,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),le=N(p({...te,props:F,emits:J,setup(e,{emit:t}){const l=e,a=t,s=G(),{getSelectorNodeInfo:o,getSelectorNodeInfos:r}=W(s),h=d(),p=c(null),{internalChildren:N}=X(A,`${D}-tabs`)({activeKey:m((()=>l.modelValue||0)),autoHeight:m((()=>l.autoHeight)),animatedTime:m((()=>l.animatedTime))}),O=c([]);function U(e){e.forEach(((e,t)=>{var l,a,s,o,i,n,u,r,c;let d=e.type;if(d=d.name||d,"hs-tab-pane"===d){const d=new L;if((null==(l=e.props)?void 0:l.title)||(null==(a=e.props)?void 0:a["pane-key"])||(null==(s=e.props)?void 0:s.paneKey)){const l=M(null==(o=e.props)?void 0:o["pane-key"]),a="number"===l||"string"===l?String(null==(i=e.props)?void 0:i["pane-key"]):null,s=M(null==(n=e.props)?void 0:n.paneKey),v="number"===s||"string"===s?String(null==(u=e.props)?void 0:u.paneKey):null;d.title=null==(r=e.props)?void 0:r.title,d.paneKey=a||v||String(t),d.disabled=null==(c=e.props)?void 0:c.disabled}O.value.push(d)}else{if(" "===e.children)return;U(e.children)}}))}const q=c(l.modelValue||0);function F(e){const t=O.value.findIndex((t=>t.paneKey===String(e)));q.value=t}const J=m((()=>l.titleScroll&&"horizontal"===l.direction)),te=m((()=>l.titleScroll&&"vertical"===l.direction)),le=c([]),ae=c(0),se=c(0),oe=c(!1),ie=c(),ne=c([]),ue=c(!1);function re(){l.titleScroll&&Q((()=>{Promise.all([o(`#hs-tabs__titles_${h}`),r(`#hs-tabs__titles_${h} .hs-tabs__titles-item`)]).then((([e,t])=>{var a,s,o,i;if(ie.value=e,ne.value=t,ie.value)if("vertical"===l.direction){t.reduce(((e,t)=>e+t.height),0)>(null==(a=ie.value)?void 0:a.height)?ue.value=!0:ue.value=!1}else{t.reduce(((e,t)=>e+t.width),0)>(null==(s=ie.value)?void 0:s.width)?ue.value=!0:ue.value=!1}const n=ne.value[q.value];let u=0;if("vertical"===l.direction){const e=11;u=t.slice(0,q.value).reduce(((e,t)=>e+t.height+0),e)-((null==(o=ie.value)?void 0:o.height)-n.height)/2}else{const e=31;u=t.slice(0,q.value).reduce(((e,t)=>e+t.width+20),e)-((null==(i=ie.value)?void 0:i.width)-(null==n?void 0:n.width))/2}P((()=>{oe.value=!0})),function(e,t){let l=0;const a="horizontal"===t?ae.value:se.value,s=1;function o(){"horizontal"===t?ae.value+=(e-a)/s:se.value+=(e-a)/s,++l<s&&Q(o)}o()}(u,l.direction)}))}))}function ce(e=N.map((e=>e.vnode))){O.value=[],(e=null==e?void 0:e.filter((e=>"string"!=typeof e.children)))&&e.length&&U(e),F(l.modelValue),setTimeout((()=>{re()}),500)}f((()=>N.map((e=>e.props))),(e=>{ce(N)}),{deep:!0,immediate:!0}),f((()=>l.modelValue),(e=>{F(e),re()})),v(ce),b(ce);const de={isBegin:()=>0===q.value,isEnd:()=>q.value===O.value.length-1,next:()=>{q.value+=1;const e=O.value[q.value].disabled;de.isEnd()&&e?de.prev():e&&q.value<O.value.length-1?de.next():de.updateValue(O.value[q.value])},prev:()=>{q.value-=1;const e=O.value[q.value].disabled;de.isBegin()&&e?de.next():e&&q.value>0?de.prev():de.updateValue(O.value[q.value])},updateValue:e=>{a(u,e.paneKey),a(n,e)},tabChange:(e,t)=>{a(i,e),e.disabled||q.value===t||(q.value=t,de.updateValue(e))},setTabItemRef:(e,t)=>{le.value[t]=e}},{tabChange:ve}=de,{touchState:he,touchMethods:pe,tabsContentID:me,tabsContentRef:fe}=Z(l,de,s,Y),be=m((()=>{let e=100*q.value;he.moving&&(e+=he.offset);let t={transform:"horizontal"===l.direction?`translate3d(-${e}%, 0, 0)`:`translate3d( 0,-${e}%, 0)`,transitionDuration:he.moving?void 0:`${l.animatedTime}ms`};return 0===l.animatedTime&&(t={}),t})),ye=m((()=>({background:l.background}))),ge=m((()=>({color:"smile"===l.type?l.customColor:"",background:"line"===l.type?l.customColor:""}))),_e=m((()=>{if(!l.titleGutter)return{};const e=H(l.titleGutter);return"vertical"===l.direction?{marginTop:e,marginBottom:e}:{marginLeft:e,marginRight:e}})),Te=m((()=>B(l,ee,{[l.direction]:!0})));return(e,t)=>{const l=R,a=E;return y(),g(l,{ref_key:"container",ref:p,style:w(e.customStyle),class:k(Te.value)},{default:_((()=>[T(a,{id:`hs-tabs__titles_${S(h)}`,"scroll-x":J.value,"scroll-y":te.value,"scroll-with-animation":oe.value,"scroll-left":ae.value,"scroll-top":se.value,"enable-flex":!0,class:k(["hs-tabs__titles",{[e.type]:e.type,scrollable:e.titleScroll,[e.size]:e.size}]),style:w(ye.value)},{default:_((()=>[T(l,{class:k(["hs-tabs__list",{"hs-tabs__titles-left":"left"===e.align}])},{default:_((()=>[e.$slots.titles?C(e.$slots,"titles",{key:0},void 0,!0):(y(),K($,{key:1},[(y(!0),K($,null,j(O.value,((t,a)=>(y(),g(l,{key:t.paneKey,class:k(["hs-tabs__titles-item uni",{"hs-tabs-active":t.paneKey===String(e.modelValue),disabled:t.disabled,"hs-tabs__titles-item-left":"left"===e.align}]),style:w(_e.value),onClick:e=>S(ve)(t,a)},{default:_((()=>["line"===e.type?(y(),g(l,{key:0,class:"hs-tabs__titles-item__line",style:w(ge.value)},null,8,["style"])):x("",!0),"smile"===e.type?(y(),g(l,{key:1,class:"hs-tabs__titles-item__smile",style:w(ge.value)},{default:_((()=>[T(V,{name:"joy-smile","custom-color":e.customColor},null,8,["custom-color"])])),_:1},8,["style"])):x("",!0),T(l,{class:k(["hs-tabs__titles-item__text",{ellipsis:e.ellipsis}])},{default:_((()=>[z(I(t.title),1)])),_:2},1032,["class"])])),_:2},1032,["style","class","onClick"])))),128)),ue.value&&e.titleScroll?(y(),g(l,{key:0,class:"hs-tabs__titles-placeholder"})):x("",!0)],64))])),_:3},8,["class"])])),_:3},8,["id","scroll-x","scroll-y","scroll-with-animation","scroll-left","scroll-top","class","style"]),T(l,{id:S(me),ref_key:"tabsContentRef",ref:fe,class:"hs-tabs__content",style:w(be.value),onTouchstart:S(pe).onTouchStart,onTouchmove:S(pe).onTouchMove,onTouchend:S(pe).onTouchEnd,onTouchcancel:S(pe).onTouchEnd},{default:_((()=>[C(e.$slots,"default",{},void 0,!0)])),_:3},8,["id","style","onTouchstart","onTouchmove","onTouchend","onTouchcancel"])])),_:3},8,["style","class"])}}}),[["__scopeId","data-v-8b751017"]]),ae={...l,title:a(""),paneKey:a(""),disabled:Boolean},se={[i]:()=>!0},oe=`${D}-tab-pane`,ie=p({name:oe,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),ne=N(p({...ie,props:ae,emits:se,setup(e){const t=e,{parent:l}=q(A),a=m((()=>{const e={display:0===(null==l?void 0:l.animatedTime.value)&&t.paneKey!==l.activeKey.value?"none":void 0};return O(t,e)})),s=m((()=>B(t,oe,{inactive:String(t.paneKey)!==(null==l?void 0:l.activeKey.value)&&(null==l?void 0:l.autoHeight.value)})));return(e,t)=>{const l=R;return y(),g(l,{style:w(a.value),class:k(s.value)},{default:_((()=>[C(e.$slots,"default",{},void 0,!0)])),_:3},8,["style","class"])}}}),[["__scopeId","data-v-56be0c6a"]]);export{ne as _,le as a};
