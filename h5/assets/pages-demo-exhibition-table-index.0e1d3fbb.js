import{D as a,Y as e,G as s,d as t,be as l,r,J as o,T as n,o as d,c,w as u,h as m,O as i,b as _,F as y,l as k,N as b,k as h,q as f,x as p,v as x,a as g,j as v,X as D,Q as S,i as T,a7 as j,R as J,_ as w,K as z,aI as I,t as L,g as O}from"./index-9a4aa426.js";import{u as $}from"./useTranslate.6f3ff1af.js";import{_ as C}from"./button.37ee0c5d.js";const F={...a,bordered:e,columns:s([]),data:s([]),summary:{type:Function,default:null},striped:Boolean},G={sorter:a=>a instanceof Object},H=t({props:{slots:Array,record:Object},setup:a=>()=>l("view",{},a.slots[0]?a.slots[0](a.record):a.slots[1](a.record))}),N=`${J}-table`,{translate:q}=$(N),A=t({name:N,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),B=w(t({...A,props:F,emits:G,setup(a,{emit:e}){const s=a,t=e,l=r({curData:s.data}),J=o((()=>S(s,N)));function w(a){return{"hs-table__main__head__tr--border":s.bordered,[`hs-table__main__head__tr--align${a.align?a.align:""}`]:!0}}function z(a){return s.columns.filter((e=>e.key===a))[0]}function I(a){const e=s.columns.filter((e=>e.key===a));return e[0].stylecolumn?e[0].stylecolumn:""}return n((()=>s.data),(a=>{l.curData=a.slice()})),(a,e)=>{const r=T,o=j;return d(),c(r,{class:i(J.value),style:b(a.customStyle)},{default:u((()=>[m(r,{class:i(["hs-table__main",{"hs-table__main--striped":a.striped}])},{default:u((()=>[m(r,{class:"hs-table__main__head"},{default:u((()=>[m(r,{class:"hs-table__main__head__tr"},{default:u((()=>[(d(!0),_(y,null,k(a.columns,(a=>(d(),c(r,{key:a.key,class:i(["hs-table__main__head__tr__th",w(a)]),style:b(a.stylehead),onClick:e=>function(a){a.sorter&&(t("sorter",a),l.curData="function"==typeof a.sorter?l.curData.sort(a.sorter):"default"===a.sorter?l.curData.sort():l.curData)}(a)},{default:u((()=>[h(f(a.title)+" ",1),a.sorter?(d(),c(p,{key:0,name:"down-arrow",size:"12px"})):x("",!0)])),_:2},1032,["class","style","onClick"])))),128))])),_:1})])),_:1}),m(r,{class:"hs-table__main__body"},{default:u((()=>[(d(!0),_(y,null,k(l.curData,(a=>(d(),c(r,{key:a,class:"hs-table__main__body__tr"},{default:u((()=>[(d(!0),_(y,null,k(s.columns.map((a=>[a.key,a.render])),(([e,s])=>(d(),c(r,{key:e,class:i(["hs-table__main__body__tr__td",w(z(e))]),style:b(I(e))},{default:u((()=>["function"==typeof a[e]||"function"==typeof s?(d(),c(g(H),{key:0,slots:[s,a[e]],record:a},null,8,["slots","record"])):(d(),c(r,{key:1},{default:u((()=>[h(f(a[e]),1)])),_:2},1024))])),_:2},1032,["class","style"])))),128))])),_:2},1024)))),128))])),_:1})])),_:1},8,["class"]),a.summary?(d(),c(r,{key:0,class:"hs-table__summary"},{default:u((()=>[m(o,{class:"hs-table__summary__text",nodes:a.summary().value},null,8,["nodes"])])),_:1})):x("",!0),l.curData.length?x("",!0):(d(),c(r,{key:1,class:"hs-table__nodata"},{default:u((()=>[v("div",{class:i(["hs-table__nodata",{"hs-table__nodata--border":a.bordered}])},[D(a.$slots,"nodata",{},void 0,!0),a.$slots.nodata?x("",!0):(d(),_("div",{key:0,class:"hs-table__nodata__text"},f(g(q)("noData")),1))],2)])),_:3}))])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-6650fae0"]]);const K=w(t({props:{},setup(){const a=r({bordered1:!1,striped:!0,columns1:[{title:"姓名",key:"name"},{title:"性别",key:"sex"},{title:"学历",key:"record"}],columns2:[{title:"姓名",key:"name",align:"center"},{title:"性别",key:"sex"},{title:"学历",key:"record"}],columns3:[{title:"姓名",key:"name"},{title:"性别",key:"sex"},{title:"学历",key:"record"},{title:"年龄",key:"age"},{title:"地址",key:"address"}],columns4:[{title:"姓名",key:"name",align:"center"},{title:"性别",key:"sex"},{title:"学历",key:"record"},{title:"操作",key:"render"}],columns6:[{title:"姓名",key:"name",align:"center",sorter:!0},{title:"性别",key:"sex"},{title:"学历",key:"record"},{title:"年龄",key:"age",sorter:(a,e)=>a.age-e.age}],data1:[{name:"Tom",sex:"男",record:"小学"},{name:"Lucy",sex:"女",record:"本科"},{name:"Jack",sex:"男",record:"高中"}],data2:[{name:"Tom",sex:"男",record:"小学",age:13,address:"北京"},{name:"Lucy",sex:"女",record:"本科",age:34,address:"上海"},{name:"Jack",sex:"男",record:"高中",age:4,address:"杭州"}],data3:[],data4:[{name:"Tom",sex:"男",record:"小学",render:()=>l(C,{size:"small",type:"primary"},(()=>"Hello"))},{name:"Lucy",sex:"女",record:"本科",render:()=>l(p,{size:"14px",name:"dongdong"})},{name:"Jack",sex:"男",record:"高中",render:()=>l(C,{type:"success",size:"small"},(()=>"编辑按钮"))}],data5:[],data6:[{name:"Tom",sex:"男",record:"小学",age:10},{name:"Lucy",sex:"女",record:"本科",age:30},{name:"Jack",sex:"男",record:"高中",age:4}],timer:null,summary:()=>({value:"这是总结栏",colspan:5})});return z((()=>{a.timer=setTimeout((()=>{a.data5=a.data2.slice()}),5e3)})),I((()=>{a.timer=null})),{...L(a),handleSorter:a=>{console.log(JSON.stringify(a))}}}}),[["render",function(a,e,s,t,l,r){const o=B,n=O("layout-default-uni");return d(),c(n,null,{default:u((()=>[v("div",{class:"demo"},[v("h2",{class:"title"}," 基础用法 "),m(o,{columns:a.columns1,data:a.data1},null,8,["columns","data"]),v("h2",{class:"title"}," 是否显示边框，文字对齐 "),m(o,{columns:a.columns2,data:a.data1,bordered:a.bordered1},null,8,["columns","data","bordered"]),v("h2",{class:"title"}," 显示总结栏 "),m(o,{columns:a.columns3,data:a.data2,summary:a.summary},null,8,["columns","data","summary"]),v("h2",{class:"title"}," 条纹、明暗交替 "),m(o,{columns:a.columns3,data:a.data2,striped:a.striped},null,8,["columns","data","striped"]),v("h2",{class:"title"}," 无数据默认展示，支持自定义 "),m(o,{columns:a.columns3,data:a.data3},null,8,["columns","data"]),v("br"),m(o,{columns:a.columns3,data:a.data3},{nodata:u((()=>[v("div",{class:"no-data"}," 这里是自定义展示 ")])),_:1},8,["columns","data"]),v("h2",{class:"title"}," 自定义单元格 "),m(o,{columns:a.columns4,data:a.data4},null,8,["columns","data"]),v("h2",{class:"title"}," 支持异步渲染(5s之后看效果) "),m(o,{columns:a.columns3,data:a.data5},null,8,["columns","data"]),v("h2",{class:"title"}," 支持排序 "),m(o,{columns:a.columns6,data:a.data6,onSorter:a.handleSorter},null,8,["columns","data","onSorter"])])])),_:1})}],["__scopeId","data-v-06c9416e"]]);export{K as default};
