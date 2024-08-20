import{_ as t}from"./popup.ce3c8dc4.js";/* empty css              */import{_ as e}from"./picker.5c96f98f.js";/* empty css              */import{_ as o}from"./cell.b00ee112.js";/* empty css              */import{_ as s}from"./index.12cfc53b.js";import{_ as i}from"./index.2d9977f4.js";import{N as a}from"./popover.bb387837.js";import{_ as n}from"./button.37ee0c5d.js";/* empty css              */import{r as l,y as r,t as c,_ as m,o as p,c as u,w as d,g as h,j as v,h as b,k as f}from"./index-9a4aa426.js";import"./transition.47a8b3f2.js";import"./overlay.65ef5d67.js";import"./useTouch.ef102360.js";import"./useTranslate.6f3ff1af.js";import"./useRect.14507623.js";import"./useSelectorQuery.5ef6b069.js";const _=m({setup(){const t=l({showIcon:!1,placement:!1,darkTheme:!1,lightTheme:!1,Customized:!1,disableAction:!1,topLocation:!1,rightLocation:!1,leftLocation:!1,customPositon:!1,showPicker:!1,customTarget:!1,customColor:!1}),e=r("top"),o=r([{text:"top",value:"top"},{text:"top-start",value:"top-start"},{text:"top-end",value:"top-end"},{text:"right",value:"right"},{text:"right-start",value:"right-start"},{text:"right-end",value:"right-end"},{text:"bottom",value:"bottom"},{text:"bottom-start",value:"bottom-start"},{text:"bottom-end",value:"bottom-end"},{text:"left",value:"left"},{text:"left-start",value:"left-start"},{text:"left-end",value:"left-end"}]),s=l([{name:"option1"},{name:"option2"},{name:"option3"}]),i=l([{name:"option1"},{name:"option2"}]),a=l([{name:"option1",icon:"my2"},{name:"option2",icon:"cart2"},{name:"option3",icon:"location"}]),n=l([{name:"option1",disabled:!0},{name:"option2",disabled:!0},{name:"option3"}]),m=l([{name:"service",desc:"option1"},{name:"notice",desc:"option2"},{name:"location",desc:"option3"},{name:"category",desc:"option4"},{name:"scan-2",desc:"option5"},{name:"message",desc:"option6"}]);return{iconItemList:s,itemList:a,...c(t),itemListDisabled:n,selfContent:m,chooseItem:(t,e)=>{console.log(t,e)},curPostion:e,positionList:i,columns:o,change:({selectedValue:o})=>{e.value=o[0],t.showPicker&&(t.customPositon=!0)},handlePicker:()=>{t.showPicker=!0,setTimeout((()=>{t.customPositon=!0}),1e3)},clickCustomHandle:()=>{t.customTarget=!t.customTarget},closePicker:()=>{t.customPositon=!1,t.showPicker=!1}}}},[["render",function(l,r,c,m,_,g){const k=n,C=a,x=i,y=s,P=o,j=e,L=t,T=h("layout-default-uni");return p(),u(T,null,{default:d((()=>[v("div",{class:"demo h-100vh!"},[v("h2",{class:"title"}," 基础用法 "),b(y,{type:"flex"},{default:d((()=>[b(x,{span:8},{default:d((()=>[b(C,{visible:l.lightTheme,"onUpdate:visible":r[0]||(r[0]=t=>l.lightTheme=t),list:m.iconItemList,location:"bottom-start",onChoose:m.chooseItem},{reference:d((()=>[b(k,{type:"primary",shape:"square"},{default:d((()=>[f(" 明朗风格 ")])),_:1})])),_:1},8,["visible","list","onChoose"])])),_:1}),b(x,{span:8},{default:d((()=>[b(C,{visible:l.darkTheme,"onUpdate:visible":r[1]||(r[1]=t=>l.darkTheme=t),theme:"dark",list:m.iconItemList},{reference:d((()=>[b(k,{type:"primary",shape:"square"},{default:d((()=>[f(" 暗黑风格 ")])),_:1})])),_:1},8,["visible","list"])])),_:1})])),_:1}),v("h2",{class:"title"}," 选项配置 "),b(y,{type:"flex"},{default:d((()=>[b(x,{span:8},{default:d((()=>[b(C,{visible:l.showIcon,"onUpdate:visible":r[2]||(r[2]=t=>l.showIcon=t),theme:"dark",list:m.itemList,"custom-class":"popover-demo-custom"},{reference:d((()=>[b(k,{type:"primary",shape:"square"},{default:d((()=>[f(" 展示图标 ")])),_:1})])),_:1},8,["visible","list"])])),_:1}),b(x,{span:8},{default:d((()=>[b(C,{visible:l.disableAction,"onUpdate:visible":r[3]||(r[3]=t=>l.disableAction=t),list:m.itemListDisabled,location:"right-start","custom-class":"popover-demo-custom"},{reference:d((()=>[b(k,{type:"primary",shape:"square"},{default:d((()=>[f(" 禁用选项 ")])),_:1})])),_:1},8,["visible","list"])])),_:1})])),_:1}),v("h2",{class:"title"}," 自定义内容 "),b(C,{visible:l.Customized,"onUpdate:visible":r[4]||(r[4]=t=>l.Customized=t),location:"right","custom-class":"customClass"},{reference:d((()=>[b(k,{type:"primary",shape:"square"},{default:d((()=>[f(" 自定义内容 ")])),_:1})])),content:d((()=>[v("div",{class:"p-10px"},[v("div",null," Custom Content Custom Content "),v("div",null," Custom Content Custom Content ")])])),_:1},8,["visible"]),v("h2",{class:"title"}," 位置自定义 "),b(P,{title:"点击查看更多方向",onClick:m.handlePicker},null,8,["onClick"]),b(L,{visible:l.showPicker,"onUpdate:visible":r[5]||(r[5]=t=>l.showPicker=t),"destroy-on-close":!1,position:"bottom","custom-class":"popover-demo-custom"},{default:d((()=>[b(j,{columns:m.columns,onChange:m.change,onConfirm:m.closePicker,onClose:m.closePicker},{top:d((()=>[v("div",{class:"brick-box"},[v("div",{id:"picker-target",class:"brick"})])])),_:1},8,["columns","onChange","onConfirm","onClose"])])),_:1},8,["visible"]),b(C,{visible:l.customPositon,"onUpdate:visible":r[6]||(r[6]=t=>l.customPositon=t),"target-id":"picker-target",location:m.curPostion,theme:"dark",list:m.positionList},null,8,["visible","location","list"]),v("h2",{class:"title"}," 自定义颜色 "),b(C,{visible:l.customColor,"onUpdate:visible":r[7]||(r[7]=t=>l.customColor=t),list:m.iconItemList,location:"right-start","bg-color":"#f00",theme:"dark","custom-class":"popover-demo-custom"},{reference:d((()=>[b(k,{type:"primary",shape:"square"},{default:d((()=>[f(" 自定义颜色 ")])),_:1})])),_:1},8,["visible","list"])])])),_:1})}],["__scopeId","data-v-adc6887b"]]);export{_ as default};
