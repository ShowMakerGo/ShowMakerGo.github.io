import{_ as t}from"./cell.b00ee112.js";/* empty css              */import{_ as e}from"./index.d7aa9c4c.js";import{y as s,r as o,_ as i,o as l,c as a,w as n,g as r,j as c,h as p}from"./index-9a4aa426.js";import"./transition.47a8b3f2.js";const d=i({setup(){const t=s(),e={state:o({msg:"toast",type:"text",show:!1,cover:!1,title:"",bottom:"",center:!0}),methods:{openToast:(t,s,o=!1,i,l,a=!0)=>{e.state.show=!0,e.state.msg=s,e.state.type=t,e.state.cover=o,e.state.title=i,e.state.bottom=l,e.state.center=a},onClosed:()=>console.log("closed")}};return{page:e,toastRef:t,refClick:(e,s)=>{var o;null==(o=t.value)||o.showToast[e](s,{title:`使用ref调用更加方便与灵活 + ${e}`,duration:2e3})}}}},[["render",function(s,o,i,d,g,m){const k=e,C=t,h=r("layout-default-uni");return l(),a(h,null,{default:n((()=>[c("div",{class:"demo h-100vh!"},[c("h2",{class:"title"}," 基础用法 "),p(k,{visible:d.page.state.show,"onUpdate:visible":o[0]||(o[0]=t=>d.page.state.show=t),msg:d.page.state.msg,type:d.page.state.type,cover:d.page.state.cover,title:d.page.state.title,bottom:d.page.state.bottom,center:d.page.state.center,onClosed:d.page.methods.onClosed},null,8,["visible","msg","type","cover","title","bottom","center","onClosed"]),p(C,{title:"Text 文字提示","is-link":"",onClick:o[1]||(o[1]=t=>d.page.methods.openToast("text","网络失败，请稍后再试~"))}),p(C,{title:"Title 标题文字","is-link":"",onClick:o[2]||(o[2]=t=>d.page.methods.openToast("text","网络失败，请稍后再试~",!1,"标题文字"))}),p(C,{title:"Text 自定义位置","is-link":"",onClick:o[3]||(o[3]=t=>d.page.methods.openToast("text","自定义位置",!1,"","20%",!1))}),p(C,{title:"Success 成功提示","is-link":"",onClick:o[4]||(o[4]=t=>d.page.methods.openToast("success","成功提示"))}),p(C,{title:"Error 失败提示","is-link":"",onClick:o[5]||(o[5]=t=>d.page.methods.openToast("fail","失败提示"))}),p(C,{title:"Warning 警告提示","is-link":"",onClick:o[6]||(o[6]=t=>d.page.methods.openToast("warn","警告提示"))}),p(C,{title:"Loading 加载提示","is-link":"",onClick:o[7]||(o[7]=t=>d.page.methods.openToast("loading","加载中"))}),p(C,{title:"Loading 带白色背景遮罩","is-link":"",onClick:o[8]||(o[8]=t=>d.page.methods.openToast("loading","加载中",!0))}),c("h2",{class:"title"}," ref调用 "),p(k,{ref:"toastRef",onClosed:d.page.methods.onClosed},null,8,["onClosed"]),p(C,{title:"Success 成功提示","is-link":"",onClick:o[9]||(o[9]=t=>d.refClick("success","成功提示"))}),p(C,{title:"Error 失败提示","is-link":"",onClick:o[10]||(o[10]=t=>d.refClick("fail","失败提示"))}),p(C,{title:"Warning 警告提示","is-link":"",onClick:o[11]||(o[11]=t=>d.refClick("warn","警告提示"))}),p(C,{title:"Loading 加载提示","is-link":"",onClick:o[12]||(o[12]=t=>d.refClick("loading","加载中"))})])])),_:1})}]]);export{d as default};
