import{_ as e}from"./cell.b00ee112.js";/* empty css              */import{D as t,a5 as n,S as l,H as s,d as a,aT as i,y as o,r as d,J as c,K as u,o as r,c as p,w as m,h,O as x,k as f,q as g,v as _,C as y,N as b,i as v,R as w,P as $,_ as N,j as T,g as k}from"./index-9a4aa426.js";import{u as C}from"./useSelectorQuery.5ef6b069.js";import{u as H}from"./useRect.14507623.js";const j={...t,content:n(""),direction:n("end"),rows:l(1),expandText:n(""),collapseText:n(""),symbol:n("..."),lineHeight:l("20")},S={change:e=>e,[s]:()=>!0},I=`${w}-ellipsis`,M=a({name:I,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),z=N(a({...M,props:j,emits:S,setup(e,{emit:t}){const n=e,l=t,a=$(),{query:w}=C(a),N=i(),T=`root${N}`,k=`symbolContain${N}`,j=`rootContain${N}`,S=o(n.content);let M=0,z=0,U=0;const q=d({}),A=o("auto"),B=d({exceeded:!1,expanded:!1});let R=[14,10,7,8.4,10],V=.7921*R[0];const D=/^[\u4E00-\u9FA5]+$/,E=/^[0-9]+$/,F=/^[A-Z]+$/,G=/^[a-z]+$/,J=c((()=>({ell:!0,[I]:!0}))),K=c((()=>"end"===n.direction||"middle"===n.direction?`${n.symbol}${n.expandText}`:`${n.symbol}${n.expandText}${n.symbol}`));async function O(){var e,t;const l=await H(j,a);l&&l.height&&l.height>M&&("end"===n.direction?q.leading=null==(e=q.leading)?void 0:e.slice(0,q.leading.length-1):q.tailing=null==(t=q.tailing)?void 0:t.slice(1,q.tailing.length),P(),setTimeout((()=>{O()}),100))}function P(){S.value=`${q.leading||""}${q.leading?n.symbol:""}${n.expandText||""}${q.tailing?n.symbol:""}${q.tailing||""}`}function Q(e,t,l=""){const s=V,a="middle"===n.direction&&l?l:n.direction;B.exceeded=!0;let i=-1;const o=t;let d=0,c=0;"end"===a?(c=e,d=o):(c=o,d=e);const u=W(A.value)*Number(n.rows)-s,r="middle"===n.direction?u/2:u;for(;i<r;){const e=n.content[c];i=D.test(e)?Number(i+R[0]):F.test(e)?Number(i+R[1]):G.test(e)?Number(i+R[2]):E.test(e)?Number(i+R[3]):Number(i+R[4]),d=c,"end"===a?c++:c--}return"end"===a?n.content.slice(0,d):n.content.slice(d,o)}function W(e){if(!e)return 0;const t=e.match(/^\d*(\.\d*)?/);return t?Number(t[0]):0}function Z(e){1===e?(B.expanded=!0,l("change","expand")):(B.expanded=!1,l("change","collapse"))}function L(){l(s)}return u((()=>{setTimeout((()=>{!async function(){const e=await H(k,a);V=e.width?Math.ceil(e.width):Math.ceil(.7921*R[0])}(),async function(){w.select(T)&&w.select(`#${T}`).fields({computedStyle:["width","height","lineHeight","paddingTop","paddingBottom","fontSize"]},(e=>{z=W("normal"===e.lineHeight?n.lineHeight:e.lineHeight),M=Math.floor(z*(Number(n.rows)+.5)+W(e.paddingTop)+W(e.paddingBottom)),U=W(e.height),A.value=e.width;const t=W(e.fontSize);R=[t,.72*t,.53*t,.4*t,.75*t],async function(){if((await H(j,a)).height<=M)B.exceeded=!1;else{const e=Math.floor(n.content.length/(U/z-1));if("middle"===n.direction){const t=n.content.length;q.leading=Q(0,e*(Number(n.rows)+.5),"end"),q.tailing=Q(n.content.length-e*(Number(n.rows)+.5),t,"start")}else if("end"===n.direction){const t=e*(Number(n.rows)+.5);q.leading=Q(0,t)}else{const t=n.content.length-e*(Number(n.rows)+.5)-5;q.tailing=Q(t,n.content.length)}P(),setTimeout((()=>{O()}),100)}}()})).exec()}()}),100)})),(e,t)=>{const n=v;return r(),p(n,{class:x(e.customClass),style:b(e.customStyle)},{default:m((()=>[h(n,{id:T,class:x(J.value),onClick:L},{default:m((()=>[B.exceeded?_("",!0):(r(),p(n,{key:0,class:"hs-ellipsis__wordbreak"},{default:m((()=>[f(g(e.content),1)])),_:1})),B.exceeded&&!B.expanded?(r(),p(n,{key:1,class:"hs-ellipsis__wordbreak"},{default:m((()=>[f(g(q.leading)+g(q.leading&&e.symbol)+" ",1),e.expandText?(r(),p(n,{key:0,class:"hs-ellipsis__text",onClick:t[0]||(t[0]=y((e=>Z(1)),["stop"]))},{default:m((()=>[f(g(e.expandText),1)])),_:1})):_("",!0),f(g(q.tailing&&e.symbol)+g(q.tailing),1)])),_:1})):_("",!0),B.exceeded&&B.expanded?(r(),p(n,{key:2},{default:m((()=>[f(g(e.content)+" ",1),e.expandText?(r(),p(n,{key:0,class:"hs-ellipsis__text",onClick:t[1]||(t[1]=y((e=>Z(2)),["stop"]))},{default:m((()=>[f(g(e.collapseText),1)])),_:1})):_("",!0)])),_:1})):_("",!0)])),_:1},8,["class"]),h(n,{id:j,class:"hs-ellipsis__copy",style:b({width:A.value})},{default:m((()=>[h(n,null,{default:m((()=>[f(g(S.value),1)])),_:1})])),_:1},8,["style"]),h(n,{id:k,class:"hs-ellipsis__copy",style:{display:"inline"}},{default:m((()=>[f(g(K.value),1)])),_:1})])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-64ee08d2"]]),U=a({__name:"index",setup(t){const n=o("NutUI4.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。");return(t,l)=>{const s=z,a=e,i=k("layout-default-uni");return r(),p(i,null,{default:m((()=>[T("div",{class:"demo h-100vh!"},[T("h2",{class:"title"}," 头部省略 "),h(a,null,{default:m((()=>[h(s,{content:n.value,direction:"start",class:"elli"},null,8,["content"])])),_:1}),T("h2",{class:"title"}," 尾部省略 "),h(a,null,{default:m((()=>[h(s,{content:n.value,direction:"end",class:"elli"},null,8,["content"])])),_:1}),T("h2",{class:"title"}," 中间省略 "),h(a,null,{default:m((()=>[h(s,{content:n.value,direction:"middle",class:"elli"},null,8,["content"])])),_:1}),T("h2",{class:"title"}," 多行省略 "),h(a,null,{default:m((()=>[h(s,{content:n.value,direction:"start",rows:"3"},null,8,["content"])])),_:1}),T("h2",{class:"title"}," 展开收起 "),h(a,null,{default:m((()=>[h(s,{content:n.value,direction:"start","expand-text":"展开","collapse-text":"收起"},null,8,["content"])])),_:1}),h(a,null,{default:m((()=>[h(s,{content:n.value,direction:"middle","expand-text":"展开","collapse-text":"收起"},null,8,["content"])])),_:1}),h(a,null,{default:m((()=>[h(s,{content:n.value,direction:"end",rows:"3","expand-text":"展开","collapse-text":"收起"},null,8,["content"])])),_:1})])])),_:1})}}});export{U as default};
