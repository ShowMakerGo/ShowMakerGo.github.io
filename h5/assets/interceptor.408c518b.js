import{aL as e}from"./index-9a4aa426.js";function n(n,{args:a=[],done:c,canceled:o}){if(n){const s=n(null,...a);e(s)?s.then((e=>{e?c(e):o&&o()})).catch((()=>{})):s?c():o&&o()}else c()}export{n as f};
