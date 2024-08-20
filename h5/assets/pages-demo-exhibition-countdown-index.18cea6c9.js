import{_ as e,a as t}from"./index.aad27a30.js";import{_ as s}from"./button.37ee0c5d.js";/* empty css              */import{_ as a}from"./cell.b00ee112.js";/* empty css              */import{D as n,Z as i,a5 as l,Y as o,S as r,at as u,a1 as d,ab as m,a0 as c,d as p,r as f,J as T,ay as S,T as h,o as v,c as y,w as _,X as g,O as b,N as w,Q as D,a7 as j,i as C,R as x,aA as E,_ as H,y as N,K as k,t as O,B as M,g as R,j as P,h as $,k as A,q as I}from"./index-9a4aa426.js";import{r as V}from"./raf.db71c386.js";import{m as B}from"./date.f291431c.js";import{a as J}from"./env.43007fb8.js";import{i as q}from"./index.99f72493.js";import"./useProvide.92abce79.js";import"./useInject.f710a5e3.js";const F={...n,modelValue:i({}),startTime:{type:[Number,String],validator:e=>"invalid date"!==new Date(e).toString().toLowerCase()},endTime:{type:[Number,String],validator:e=>"invalid date"!==new Date(e).toString().toLowerCase()},millisecond:Boolean,format:l("HH:mm:ss"),autoStart:o,time:r(0),paused:Boolean},L={[u]:e=>e instanceof Object||d(e),[m]:e=>e instanceof Object||d(e),onEnd:()=>!0,onRestart:e=>c(e)||d(e)||void 0===e,onPaused:e=>c(e)||d(e)||void 0===e},X=`${x}-countdown`,z=p({name:X,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),G=H(p({...z,props:F,emits:L,setup(e,{expose:t,emit:s}){const a=e,n=s;t({start:function(){i.counting||a.autoStart||(i.counting=!0,i.handleEndTime=Date.now()+Number(i.restTime),d(),n("onRestart",i.restTime))},pause:c,reset:function(){a.autoStart||(c(),i.restTime=a.time)}});const i=f({restTime:0,timer:null,counting:!a.paused&&a.autoStart,handleEndTime:Date.now(),diffTime:0}),l=T((()=>D(a,X)));function o(e,t){const s=e,n={d:0,h:0,m:0,s:0,ms:0},i=1e3,l=6e4,o=36e5,r=24*o;return s>0&&(n.d=s>=i?Math.floor(s/r):0,n.h=Math.floor(s%r/o),n.m=Math.floor(s%o/l),n.s=Math.floor(s%l/i),n.ms=Math.floor(s%i)),"custom"===t?n:function(e){let{d:t,h:s,m:n,s:i,ms:l}=e,o=a.format;o.includes("DD")?o=o.replace("DD",E(t)):s+=24*Number(t);o.includes("HH")?o=o.replace("HH",E(s)):n+=60*Number(s);o.includes("mm")?o=o.replace("mm",E(n)):i+=60*Number(n);o.includes("ss")?o=o.replace("ss",E(i)):l+=1e3*Number(i);if(o.includes("S")){const e=E(l,3).toString();o.includes("SSS")?o=o.replace("SSS",e):o.includes("SS")?o=o.replace("SS",e.slice(0,2)):o.includes("S")&&(o=o.replace("S",e.slice(0,1)))}return o}({...n})}function r(){i.handleEndTime=a.endTime,i.diffTime=Date.now()-B(a.startTime),i.counting||(i.counting=!0),d()}function d(){function e(){const e=Date.now()-i.diffTime,t=Math.max(i.handleEndTime-e,0);i.restTime=t,t||(i.counting=!1,c(),n("onEnd")),t>0&&d()}i.timer=J?requestAnimationFrame((()=>{i.counting&&e()})):V((()=>{i.counting&&e()}))}function c(){J?cancelAnimationFrame(i.timer):clearTimeout(i.timer),i.counting=!1,n("onPaused",i.restTime)}const p=T((()=>o(i.restTime)));return S((()=>{a.autoStart?r():i.restTime=a.time})),h((()=>i.restTime),(e=>{const t=o(e,"custom");n(m,t),n(u,t)})),h((()=>a.paused),((e,t)=>{t?(i.counting||(i.counting=!0,i.handleEndTime=Date.now()+Number(i.restTime),d()),n("onRestart",i.restTime)):i.counting&&c()})),h((()=>a.endTime),(()=>{r()})),h((()=>a.startTime),(()=>{r()})),(e,t)=>{const s=j,a=C;return v(),y(a,{class:b(l.value),style:w(e.customStyle)},{default:_((()=>[e.$slots.default?g(e.$slots,"default",{key:0},void 0,!0):(v(),y(s,{key:1,class:"hs-countdown__content",nodes:p.value},null,8,["nodes"]))])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-ef532bb4"]]);const K=H({setup(){const e=N(),t=f({serverTime:Date.now()-2e4,end:Date.now()+6e4,starttime:Date.now(),asyncEnd:0,paused:!1,resetTime:{d:"1",h:"00",m:"00",s:"00"}});return k((()=>{})),setTimeout((()=>{t.asyncEnd=Date.now()+3e4}),3e3),{...O(t),toggle:()=>{t.paused=!t.paused},onend:()=>{M({title:"countdown: ended."})},onpaused:e=>{M({title:`paused: ${JSON.stringify(e)}`})},onrestart:e=>{M({title:`restart: ${JSON.stringify(e)}`})},Countdown:e,start:()=>{var t;null==(t=e.value)||t.start()},pause:()=>{var t;null==(t=e.value)||t.pause()},reset:()=>{var t;null==(t=e.value)||t.reset()},isH5:q}}},[["render",function(n,i,l,o,r,u){const d=G,m=a,c=s,p=e,f=t,T=R("layout-default-uni");return v(),y(T,null,{default:_((()=>[P("div",{class:"demo"},[P("h2",{class:"title"}," 基础用法 "),$(m,null,{default:_((()=>[$(d,{"end-time":n.end,onOnEnd:o.onend},null,8,["end-time","onOnEnd"])])),_:1}),P("h2",{class:"title"}," 自定义格式 "),$(m,null,{default:_((()=>[$(d,{"end-time":n.end,format:"DD 天 HH 时 mm 分 ss 秒"},null,8,["end-time"])])),_:1}),P("h2",{class:"title"}," 毫秒级渲染 "),$(m,null,{default:_((()=>[$(d,{"end-time":n.end,millisecond:"",format:"HH:mm:ss:SS"},null,8,["end-time"])])),_:1}),P("h2",{class:"title"}," 以服务端的时间为准 "),$(m,null,{default:_((()=>[$(d,{"start-time":n.serverTime,"end-time":n.end},null,8,["start-time","end-time"])])),_:1}),P("h2",{class:"title"}," 异步更新结束时间 "),$(m,null,{default:_((()=>[$(d,{"end-time":n.asyncEnd},null,8,["end-time"])])),_:1}),P("h2",{class:"title"}," 控制开始和暂停的倒计时 "),$(m,null,{default:_((()=>[$(d,{"end-time":n.end,paused:n.paused,onOnPaused:o.onpaused,onOnRestart:o.onrestart},null,8,["end-time","paused","onOnPaused","onOnRestart"]),P("div",{style:{position:"absolute",top:"9px",right:"10px"}},[$(c,{type:"primary",size:"small",onClick:o.toggle},{default:_((()=>[A(I(n.paused?"start":"stop"),1)])),_:1},8,["onClick"])])])),_:1}),P("h2",{class:"title"}," 自定义展示样式 "),$(m,null,{default:_((()=>[P("span",null,[$(d,{modelValue:n.resetTime,"onUpdate:modelValue":i[0]||(i[0]=e=>n.resetTime=e),"end-time":n.end},{default:_((()=>[P("div",{class:"countdown-part-box"},[P("div",{class:"part-item-symbol"},I(n.resetTime.d)+"天",1),P("div",{class:"part-item h"},I(n.resetTime.h),1),P("span",{class:"part-item-symbol"},":"),P("div",{class:"part-item m"},I(n.resetTime.m),1),P("span",{class:"part-item-symbol"},":"),P("div",{class:"part-item s"},I(n.resetTime.s),1)])])),_:1},8,["modelValue","end-time"])])])),_:1}),P("h2",{class:"title"}," 手动控制 "),$(m,null,{default:_((()=>[$(d,{ref:"Countdown",time:"20000","auto-start":!1,format:"ss:SS"},null,512)])),_:1}),$(f,{"column-num":3},{default:_((()=>[$(p,null,{default:_((()=>[$(c,{type:"primary",onClick:o.start},{default:_((()=>[A(" 开始 ")])),_:1},8,["onClick"])])),_:1}),$(p,null,{default:_((()=>[$(c,{type:"primary",onClick:o.pause},{default:_((()=>[A(" 暂停 ")])),_:1},8,["onClick"])])),_:1}),$(p,null,{default:_((()=>[$(c,{type:"primary",onClick:o.reset},{default:_((()=>[A(" 重置 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1})}],["__scopeId","data-v-f53b5771"]]);export{K as default};
