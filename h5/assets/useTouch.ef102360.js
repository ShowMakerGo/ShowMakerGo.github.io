import{y as e}from"./index-9a4aa426.js";const a=10;function l(){const l=e(0),t=e(0),u=e(0),v=e(0),o=e(0),i=e(0),s=e(0),c=e(0),n=e(""),r=()=>{o.value=0,i.value=0,s.value=0,c.value=0,n.value=""};return{move:e=>{const r=e.touches[0];var h,X;o.value=r.clientX-l.value,i.value=r.clientY-t.value,u.value=r.clientX,v.value=r.clientY,s.value=Math.abs(o.value),c.value=Math.abs(i.value),n.value||(n.value=(h=s.value,X=c.value,h>X&&h>a?"horizontal":X>h&&X>a?"vertical":""))},start:e=>{r(),l.value=e.touches[0].clientX,t.value=e.touches[0].clientY},reset:r,startX:l,startY:t,moveX:u,moveY:v,deltaX:o,deltaY:i,offsetX:s,offsetY:c,direction:n,isVertical:()=>"vertical"===n.value,isHorizontal:()=>"horizontal"===n.value}}export{l as u};
