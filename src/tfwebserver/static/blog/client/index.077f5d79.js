import{S as t,i as a,s,e,c as o,a as r,d as n,b as i,f as c,g as m,n as g}from"./client.7f4ceab4.js";import{g as l,a as d}from"./_api.5f596b86.js";import"./showdown.20a62d9b.js";import"./Footer.56f977c4.js";function f(t){let a,s,l;return{c(){a=e("center"),s=e("img"),this.h()},l(t){a=o(t,"CENTER",{});var e=r(a);s=o(e,"IMG",{src:!0}),e.forEach(n),this.h()},h(){s.src!==(l="img/loader.gif")&&i(s,"src","img/loader.gif")},m(t,e){c(t,a,e),m(a,s)},p:g,i:g,o:g,d(t){t&&n(a)}}}async function h({host:t,path:a,params:s,query:e}){try{const t=await l();let a={};return s.theuser&&(a=await d(s.theuser)),{blogs:t,metadata:a}}catch(t){console.log(t)}}function u(t,a,s){let{blogs:e=[]}=a,{segment:o}=a,{metadata:r={}}=a;return t.$set=(t=>{"blogs"in t&&s(0,e=t.blogs),"segment"in t&&s(1,o=t.segment),"metadata"in t&&s(2,r=t.metadata)}),[e,o,r]}export default class extends t{constructor(t){super(),a(this,t,u,f,s,{blogs:0,segment:1,metadata:2})}}export{h as preload};
