import{D as t,a5 as e,G as o,E as s,Y as l,S as a,H as i,a1 as c,aj as r,d as n,y as d,r as u,J as m,T as h,K as g,b4 as p,bd as b,aI as f,o as k,c as _,w as v,O as x,N as C,X as w,h as y,x as H,v as L,k as U,q as $,C as I,b as N,F as A,l as M,a as T,aG as j,aJ as S,Q as W,i as V,R as E,P as B,_ as D,t as R,g as O,j as G,m as z}from"./index-9a4aa426.js";import{u as J}from"./useSelectorQuery.5ef6b069.js";const P={...t,direction:e("across"),list:o([]),standTime:s(1e3),complexAm:Boolean,height:s(40),text:e(""),closeMode:Boolean,leftIcon:l,customColor:e(""),background:e(""),delay:a(1),scrollable:l,speed:s(50),wrapable:Boolean,fieldName:String},Q={[i]:t=>t instanceof Object||c(t),[r]:t=>t instanceof Object||c(t),acrossEnd:t=>t instanceof Object},X=`${E}-noticebar`,Y=n({name:X,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),q=D(n({...Y,props:P,emits:Q,setup(t,{emit:e}){const o=t,s=e,l=B(),{getSelectorNodeInfo:a}=J(l),c=d(null),n=d(null),E=u({wrapWidth:0,firstRound:!0,duration:0,offsetWidth:0,showNoticebar:!0,animationClass:"",animate:!1,scrollList:[],distance:0,timer:null,keepAlive:!1,isCanScroll:null,showNotica:!0,id:Math.round(1e5*Math.random())}),D=m((()=>W(o,X))),R=m((()=>null!=E.isCanScroll&&(!E.isCanScroll&&!o.wrapable))),O=m((()=>({"hs-noticebar__page-wrap-content":!0,"hs-ellipsis":R.value,[`content${E.id}`]:!0,[E.animationClass]:!0}))),G=m((()=>{const t={};return o.customColor&&(t.color=o.customColor),o.background&&(t.background=o.background),"vertical"===o.direction&&(t.height=`${o.height}px`),t})),z=m((()=>({animationDelay:`${E.firstRound?o.delay:0}s`,animationDuration:`${E.duration}s`,transform:`translateX(${E.firstRound?0:`${E.wrapWidth}px`})`}))),P=m((()=>{let t={};return o.complexAm?t={transform:`translateY(${E.distance}px)`}:E.animate&&(t={transition:`all ${~~(o.height/o.speed/4)}s`,"margin-top":`-${o.height}px`}),t}));function Q(){!1!==E.showNoticebar&&setTimeout((()=>{if(!1===E.showNoticebar)return;let t=0,e=0;a(`.wrap${E.id}`).then((s=>{s.width>0&&(t=s.width),a(`.content${E.id}`).then((s=>{s.width>0&&(e=s.width),E.isCanScroll=null==o.scrollable?e>t:o.scrollable,E.isCanScroll?(E.wrapWidth=t,E.offsetWidth=e,E.duration=e/o.speed,E.animationClass="play"):E.animationClass=""}))}))}),100)}function Y(t){s("click",t)}function q(t){o.closeMode&&(E.showNoticebar=!o.closeMode),s("close",t)}function F(t){E.firstRound=!1,s("acrossEnd",t),setTimeout((()=>{E.duration=(E.offsetWidth+E.wrapWidth)/o.speed,E.animationClass="play-infinite"}),0)}function K(){E.animate=!0,setTimeout((()=>{E.scrollList.push(E.scrollList[0]),E.scrollList.shift(),E.animate=!1}),1e3*~~(o.height/o.speed/4))}function Z(t,e){setTimeout((()=>{E.distance-=o.height/100,e&&(E.scrollList.push(E.scrollList[0]),E.scrollList.shift(),E.distance=0)}),t*o.speed)}return h((()=>o.text),(()=>{Q()})),h((()=>o.list),(t=>{E.scrollList=[].concat(t)})),g((()=>{"vertical"===o.direction?(E.scrollList=[].concat(o.list),setTimeout((()=>{o.complexAm?E.timer=setInterval((()=>{for(let t=0;t<100;t++)Z(t,!(t<99))}),o.standTime+100*o.speed):(K(),E.timer=setInterval(K,1e3*~~(o.height/o.speed/4)+o.standTime))}),o.standTime)):Q()})),p((()=>{E.keepAlive&&(E.keepAlive=!1)})),b((()=>{E.keepAlive=!0,clearInterval(E.timer)})),f((()=>{clearInterval(E.timer)})),(t,e)=>{const l=V;return k(),_(l,{class:x(D.value),style:C(t.customStyle)},{default:v((()=>["across"===t.direction?(k(),_(l,{key:0,class:x(["hs-noticebar__page",{"hs-noticebar__page--withicon":t.closeMode,"hs-noticebar__page--close":t.closeMode,"hs-noticebar__page--wrapable":t.wrapable,"hs-hidden":!E.showNoticebar}]),style:C(G.value),onClick:Y},{default:v((()=>[t.leftIcon?(k(),_(l,{key:0,class:"hs-noticebar__page-lefticon"},{default:v((()=>[w(t.$slots,"leftIcon",{},(()=>[y(H,{name:"notice",size:"16px"})]),!0)])),_:3})):L("",!0),y(l,{ref_key:"wrap",ref:c,class:x(`hs-noticebar__page-wrap wrap${E.id}`)},{default:v((()=>[y(l,{ref_key:"content",ref:n,class:x(O.value),style:C(z.value),onAnimationend:F,onWebkitAnimationEnd:F},{default:v((()=>[w(t.$slots,"default",{},(()=>[U($(t.text),1)]),!0)])),_:3},8,["class","style","onAnimationend","onWebkitAnimationEnd"])])),_:3},8,["class"]),t.closeMode||t.$slots.rightIcon?(k(),_(l,{key:1,class:"hs-noticebar__page-righticon",onClick:I(q,["stop"])},{default:v((()=>[w(t.$slots,"rightIcon",{},(()=>[y(H,{name:"circle-close"})]),!0)])),_:3},8,["onClick"])):L("",!0)])),_:3},8,["class","style","onClick"])):L("",!0),E.scrollList.length>0&&"vertical"===t.direction&&E.showNoticebar?(k(),_(l,{key:1,class:"hs-noticebar__vertical",style:C(G.value)},{default:v((()=>[y(l,{class:"hs-noticebar__vertical-list",style:C(P.value)},{default:v((()=>[(k(!0),N(A,null,M(E.scrollList,((e,a)=>(k(),_(l,{key:a,class:"hs-noticebar__vertical-item",style:C({height:T(j)(t.height),lineHeight:T(j)(t.height)}),onClick:t=>function(t){s(i,t)}(e)},{default:v((()=>[U($(o.fieldName&&T(S)(e)?e[o.fieldName]:e),1)])),_:2},1032,["style","onClick"])))),128))])),_:1},8,["style"]),y(l,{class:"go",onClick:e[0]||(e[0]=t=>(o.closeMode&&(E.showNoticebar=!o.closeMode),void s(r,E.scrollList[0])))},{default:v((()=>[w(t.$slots,"rightIcon",{},(()=>[t.closeMode?(k(),_(H,{key:0,name:"circle-close","custom-color":t.customColor,size:"11px"},null,8,["custom-color"])):L("",!0)]),!0)])),_:3})])),_:3},8,["style"])):L("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-0c7cadd3"]]);const F=D({setup(){const t=d("#D9500B"),e=u({horseLamp1:["Hisugar-Uni-Ui 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。","爆款准点秒","买超值优惠","赢百万京豆"],horseLamp2:["Hisugar-Uni-Ui 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。","爆款准点秒","买超值优惠","赢百万京豆"],horseLamp3:["Hisugar-Uni-Ui 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。","爆款准点秒","买超值优惠","赢百万京豆"],text:"Hisugar-Uni-Ui 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。"}),o=d([{id:1,text:"Noticebar 公告栏"},{id:2,text:"Cascader 级联选择"},{id:3,text:"DatePicker 日期选择器"},{id:4,text:"CheckBox 复选按钮"}]);setTimeout((()=>{o.value=[{id:1,text:"公告栏"},{id:2,text:"级联选择"},{id:3,text:"日期选择器"},{id:4,text:"复选按钮"}]}),2e3);return{...R(e),hello:()=>{console.log("hello world")},go:t=>{console.log(t)},data1:o,color1:t}}},[["render",function(t,e,o,s,l,a){const i=q,c=z,r=O("layout-default-uni");return k(),_(r,null,{default:v((()=>[G("div",{class:"demo full"},[G("h2",{class:"title"}," 默认用法 "),y(i,{text:"Hisugar-Uni-Ui 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。"}),G("h2",{class:"title"}," 滚动播放 "),y(i,{text:"华为畅享9新品即将上市",scrollable:!0,background:"rgba(251, 248, 220, 1)","custom-color":s.color1},null,8,["custom-color"]),G("p"),y(i,{text:"Hisugar-Uni-Ui 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。",scrollable:!1,background:"rgba(251, 248, 220, 1)","custom-color":s.color1},null,8,["custom-color"]),G("h2",{class:"title"}," 通告栏模式--关闭模式 "),y(i,{"close-mode":!0,background:"rgba(251, 248, 220, 1)","custom-color":s.color1,onClick:s.hello},{default:v((()=>[U(" Hisugar-Uni-Ui 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。 ")])),_:1},8,["custom-color","onClick"]),G("p"),y(i,{"close-mode":!0,background:"rgba(251, 248, 220, 1)","custom-color":s.color1,onClick:s.hello},{default:v((()=>[U(" Hisugar-Uni-Ui 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。 ")])),_:1},8,["custom-color","onClick"]),G("h2",{class:"title"}," 通告栏模式--链接模式 "),y(i,{background:"rgba(251, 248, 220, 1)","custom-color":s.color1},{"left-icon":v((()=>[y(c,{src:"https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png",style:{width:"20px",height:"20px"}})])),default:v((()=>[G("a",{href:"https://www.jd.com"},"京东商城")])),_:1},8,["custom-color"]),G("h2",{class:"title"}," 多行展示 "),y(i,{text:"Hisugar-Uni-Ui 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。",wrapable:"",background:"rgba(251, 248, 220, 1)","custom-color":s.color1},null,8,["custom-color"]),G("h2",{class:"title"}," 纵向滚动 "),G("div",{class:"interstroll-list"},[y(i,{direction:"vertical",list:t.horseLamp1,speed:10,"stand-time":1e3,"close-mode":!0,background:"rgba(251, 248, 220, 1)","custom-color":s.color1,height:50,onClick:s.go},null,8,["list","custom-color","onClick"])]),G("h2",{class:"title"}," 纵向复杂滚动动画 "),G("div",{class:"interstroll-list"},[y(i,{direction:"vertical",list:t.horseLamp2,speed:10,"stand-time":2e3,"complex-am":!0,background:"rgba(251, 248, 220, 1)","custom-color":s.color1},null,8,["list","custom-color"])]),G("h2",{class:"title"}," 纵向自定义滚动内容 "),G("div",{class:"interstroll-list"},[y(i,{direction:"vertical",height:50,speed:10,"stand-time":1e3,list:s.data1,"field-name":"text",background:"rgba(251, 248, 220, 1)","custom-color":s.color1,onClose:s.go,onClick:s.go},null,8,["list","custom-color","onClose","onClick"])]),G("h2",{class:"title"}," 纵向自定义右侧图标 "),G("div",{class:"interstroll-list"},[y(i,{direction:"vertical",list:t.horseLamp1,speed:10,"stand-time":1e3,background:"rgba(251, 248, 220, 1)","custom-color":s.color1},{rightIcon:v((()=>[y(c,{src:"https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png",style:{width:"20px",height:"20px"}})])),_:1},8,["list","custom-color"])])])])),_:1})}],["__scopeId","data-v-30495f3f"]]);export{F as default};
