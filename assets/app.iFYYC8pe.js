import{d as w,a4 as A,u as x,g as _,$ as C,j as b,y as E,o as p,c as d,I as L,n as S,m as k,k as m,e as h,F as T,P as V,h as y,a5 as D,Y as P,t as M,a6 as v,v as g,a7 as W,a8 as j,a9 as N,aa as O,ab as B,ac as F,ad as I,ae as q,af as z,ag as H,z as U,ah as Y,ai as G,aj as X}from"./chunks/framework.BNI6BTU5.js";import{t as R}from"./chunks/theme.dlmT25hO.js";const J={key:0,class:"fixed bottom-0 top-80px flex right-0 flex transition-all scrollbar-width-0 rounded-l-xl xl:w-375px w-0 xl:right-10"},K=["src"],Q=w({__name:"Layout",setup(t){const{Layout:e}=R,{route:n,go:r}=A(),{isDark:s}=x(),c=_(()=>n.path.startsWith("/components")),f=_(()=>`https://showmakergo.github.io/h5/#/pages/demo${n.path.replace("/components","").split(".")[0]}/index`);function u(){return"startViewTransition"in document&&window.matchMedia("(prefers-reduced-motion: no-preference)").matches}return C("toggle-appearance",async({clientX:o,clientY:a})=>{if(!u()){s.value=!s.value;return}const i=[`circle(0px at ${o}px ${a}px)`,`circle(${Math.hypot(Math.max(o,innerWidth-o),Math.max(a,innerHeight-a))}px at ${o}px ${a}px)`];await document.startViewTransition(async()=>{s.value=!s.value,await V()}).ready,document.documentElement.animate({clipPath:s.value?i.reverse():i},{duration:300,easing:"ease-in",pseudoElement:`::view-transition-${s.value?"old":"new"}(root)`})}),b(()=>{typeof window<"u"&&(E(s,o=>{var i;const a=document.querySelector("iframe");a&&((i=a.contentWindow)==null||i.postMessage({type:"theme",data:o?"dark":"light"},"*"))}),window.addEventListener("message",o=>{if(o.data.type==="route"){const a=o.data.data.split("/demo/").slice(1).join("/");if(!a)return;a!=="index"&&r(`/components/${a}.html`)}if(o.data.type==="theme"){const a=document.querySelector("html");o.data.data?a==null||a.classList.add("dark"):a==null||a.classList.remove("dark")}}))}),(o,a)=>(p(),d(T,null,[L(k(e),{id:"docs",class:S([{"xl:[&>.VPContent]:!pr-100":c.value}])},null,8,["class"]),c.value?(p(),d("div",J,[m("iframe",{class:"border-none rounded-xl transition-all scrollbar-width-0 block w-375px h-675px",src:f.value},null,8,K)])):h("",!0)],64))}}),Z={key:0,class:"pwa-toast",role:"alertdialog","aria-labelledby":"pwa-message"},ee={id:"pwa-message",class:"mb-3"},te=w({__name:"ReloadPrompt",setup(t){const e=y(!1),n=y(!1);let r;function s(){e.value=!0}function c(){n.value=!0}async function f(){e.value=!1,n.value=!1}return D(async()=>{const{registerSW:u}=await P(()=>import("./chunks/virtual_pwa-register.GiIjVnYr.js"),__vite__mapDeps([0,1]));r=u({immediate:!0,onOfflineReady:s,onNeedRefresh:c,onRegistered(){console.info("Service Worker registered")},onRegisterError(o){console.error("Service Worker registration error!",o)}})}),(u,o)=>e.value||n.value?(p(),d("div",Z,[m("div",ee,M(e.value?"App ready to work offline":"New content available, click the reload button to update."),1),n.value?(p(),d("button",{key:0,type:"button",class:"pwa-refresh",onClick:o[0]||(o[0]=a=>{var i;return(i=k(r))==null?void 0:i()})}," Reload ")):h("",!0),m("button",{type:"button",class:"pwa-cancel",onClick:f}," Close ")])):h("",!0)}}),ae={...R,Layout(){return v(Q,null,{"layout-bottom":()=>v(te)})}};function $(t){if(t.extends){const e=$(t.extends);return{...e,...t,async enhanceApp(n){e.enhanceApp&&await e.enhanceApp(n),t.enhanceApp&&await t.enhanceApp(n)}}}return t}const l=$(ae),ne=w({name:"VitePressApp",setup(){const{site:t}=x();return b(()=>{U(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),t.value.router.prefetchLinks&&Y(),G(),X(),l.setup&&l.setup(),()=>v(l.Layout)}});async function oe(){const t=re(),e=se();e.provide(j,t);const n=N(t.route);return e.provide(O,n),e.component("Content",B),e.component("ClientOnly",F),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),l.enhanceApp&&await l.enhanceApp({app:e,router:t,siteData:I}),{app:e,router:t,data:n}}function se(){return q(ne)}function re(){let t=g,e;return z(n=>{let r=H(n),s=null;return r&&(t&&(e=r),(t||e===r)&&(r=r.replace(/\.js$/,".lean.js")),s=P(()=>import(r),__vite__mapDeps([]))),g&&(t=!1),s},l.NotFound)}g&&oe().then(({app:t,router:e,data:n})=>{e.go().then(()=>{W(e.route,n.site),t.mount("#app")})});export{oe as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/virtual_pwa-register.GiIjVnYr.js","assets/chunks/framework.BNI6BTU5.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}