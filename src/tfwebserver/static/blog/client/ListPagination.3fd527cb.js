import{S as a,i as e,s as l,e as s,a as t,c,b as r,d as n,f as h,h as i,j as o,k as f,t as g,g as p,l as u,y as m,n as d}from"./client.06e494b3.js";function v(a,e,l){const s=a.slice();return s[7]=e[l],s}function E(a){let e,l,g,p,u,d,E,L,$,k,A,N=a[4]>1&&P(a),x=a[3].slice(a[4]-5>=1?a[4]-5:0,a[4]+6),y=[];for(let e=0;e<x.length;e+=1)y[e]=I(v(a,x,e));let C=a[4]<a[3].length&&b(a),V=a[4]+1>a[3].length&&j(a);return{c(){e=s("nav"),l=s("ul"),g=s("li"),p=s("a"),u=s("i"),L=t(),N&&N.c(),$=t();for(let a=0;a<y.length;a+=1)y[a].c();k=t(),C&&C.c(),A=t(),V&&V.c(),this.h()},l(a){e=c(a,"NAV",{"aria-label":!0});var s=r(e);l=c(s,"UL",{class:!0});var t=r(l);g=c(t,"LI",{class:!0});var i=r(g);p=c(i,"A",{href:!0,class:!0});var o=r(p);u=c(o,"I",{class:!0}),r(u).forEach(n),o.forEach(n),i.forEach(n),L=h(t),N&&N.l(t),$=h(t);for(let a=0;a<y.length;a+=1)y[a].l(t);k=h(t),C&&C.l(t),A=h(t),V&&V.l(t),t.forEach(n),s.forEach(n),this.h()},h(){i(u,"class","fa fa-angle-left"),i(p,"href",d=a[2]+"?page=1"),i(p,"class","page-link"),i(g,"class",E="page-item "+(1===a[4]?"active":"")),i(l,"class","pagination pagination-template d-flex justify-content-center"),i(e,"aria-label","Page navigation example")},m(a,s){o(a,e,s),f(e,l),f(l,g),f(g,p),f(p,u),f(l,L),N&&N.m(l,null),f(l,$);for(let a=0;a<y.length;a+=1)y[a].m(l,null);f(l,k),C&&C.m(l,null),f(l,A),V&&V.m(l,null)},p(a,e){if(4&e&&d!==(d=a[2]+"?page=1")&&i(p,"href",d),16&e&&E!==(E="page-item "+(1===a[4]?"active":""))&&i(g,"class",E),a[4]>1?N?N.p(a,e):((N=P(a)).c(),N.m(l,$)):N&&(N.d(1),N=null),28&e){let s;for(x=a[3].slice(a[4]-5>=1?a[4]-5:0,a[4]+6),s=0;s<x.length;s+=1){const t=v(a,x,s);y[s]?y[s].p(t,e):(y[s]=I(t),y[s].c(),y[s].m(l,k))}for(;s<y.length;s+=1)y[s].d(1);y.length=x.length}a[4]<a[3].length?C?C.p(a,e):((C=b(a)).c(),C.m(l,A)):C&&(C.d(1),C=null),a[4]+1>a[3].length?V?V.p(a,e):((V=j(a)).c(),V.m(l,null)):V&&(V.d(1),V=null)},d(a){a&&n(e),N&&N.d(),m(y,a),C&&C.d(),V&&V.d()}}}function P(a){let e,l,t,h;return{c(){e=s("li"),l=s("a"),t=g("<"),this.h()},l(a){e=c(a,"LI",{class:!0});var s=r(e);l=c(s,"A",{href:!0,class:!0});var h=r(l);t=p(h,"<"),h.forEach(n),s.forEach(n),this.h()},h(){i(l,"href",h=a[2]+"?page="+a[4]),i(l,"class","page-link"),i(e,"class","page-item")},m(a,s){o(a,e,s),f(e,l),f(l,t)},p(a,e){20&e&&h!==(h=a[2]+"?page="+a[4])&&i(l,"href",h)},d(a){a&&n(e)}}}function I(a){let e,l,t,h,m,d=a[7]+"";return{c(){e=s("li"),l=s("a"),t=g(d),this.h()},l(a){e=c(a,"LI",{class:!0});var s=r(e);l=c(s,"A",{href:!0,class:!0});var h=r(l);t=p(h,d),h.forEach(n),s.forEach(n),this.h()},h(){i(l,"href",h=a[2]+"?page="+a[7]),i(l,"class","page-link"),i(e,"class",m="page-item "+(a[7]===a[4]?"active":""))},m(a,s){o(a,e,s),f(e,l),f(l,t)},p(a,s){24&s&&d!==(d=a[7]+"")&&u(t,d),28&s&&h!==(h=a[2]+"?page="+a[7])&&i(l,"href",h),24&s&&m!==(m="page-item "+(a[7]===a[4]?"active":""))&&i(e,"class",m)},d(a){a&&n(e)}}}function b(a){let e,l,t,h,g;return{c(){e=s("li"),l=s("a"),t=s("i"),this.h()},l(a){e=c(a,"LI",{class:!0});var s=r(e);l=c(s,"A",{href:!0,class:!0});var h=r(l);t=c(h,"I",{class:!0}),r(t).forEach(n),h.forEach(n),s.forEach(n),this.h()},h(){i(t,"class","fa fa-angle-right"),i(l,"href",h=a[2]+"?page="+a[3].length),i(l,"class","page-link"),i(e,"class",g="page-item "+(a[3].length===a[4]-1?"active":""))},m(a,s){o(a,e,s),f(e,l),f(l,t)},p(a,s){12&s&&h!==(h=a[2]+"?page="+a[3].length)&&i(l,"href",h),24&s&&g!==(g="page-item "+(a[3].length===a[4]-1?"active":""))&&i(e,"class",g)},d(a){a&&n(e)}}}function j(a){let e,l,t,h;return{c(){e=s("li"),l=s("a"),t=s("i"),this.h()},l(a){e=c(a,"LI",{class:!0});var s=r(e);l=c(s,"A",{href:!0,class:!0});var h=r(l);t=c(h,"I",{class:!0}),r(t).forEach(n),h.forEach(n),s.forEach(n),this.h()},h(){i(t,"class","fa fa-angle-right"),i(l,"href",h=a[2]+"?page="+a[4]),i(l,"class","page-link"),i(e,"class","page-item")},m(a,s){o(a,e,s),f(e,l),f(l,t)},p(a,e){20&e&&h!==(h=a[2]+"?page="+a[4])&&i(l,"href",h)},d(a){a&&n(e)}}}function L(a){let e,l=a[0]>=a[1]&&E(a);return{c(){e=s("div"),l&&l.c(),this.h()},l(a){e=c(a,"DIV",{class:!0});var s=r(e);l&&l.l(s),s.forEach(n),this.h()},h(){i(e,"class","row pagination-bar m-auto")},m(a,s){o(a,e,s),l&&l.m(e,null)},p(a,[s]){a[0]>=a[1]?l?l.p(a,s):((l=E(a)).c(),l.m(e,null)):l&&(l.d(1),l=null)},i:d,o:d,d(a){a&&n(e),l&&l.d()}}}function $(a,e,l){let s,t,{articlesCount:c}=e,{pageNum:r="0"}=e,{articlesPerPage:n}=e,{objectPath:h}=e,{posts:i=[]}=e;return a.$set=(a=>{"articlesCount"in a&&l(0,c=a.articlesCount),"pageNum"in a&&l(5,r=a.pageNum),"articlesPerPage"in a&&l(1,n=a.articlesPerPage),"objectPath"in a&&l(2,h=a.objectPath),"posts"in a&&l(6,i=a.posts)}),a.$$.update=(()=>{if(32&a.$$.dirty&&l(4,t=parseInt(r)),11&a.$$.dirty){l(3,s=[]);for(let a=1;a<=Math.ceil(c/n);++a)s.push(a);console.log()}}),[c,n,h,s,t,r,i]}class k extends a{constructor(a){super(),e(this,a,$,L,l,{articlesCount:0,pageNum:5,articlesPerPage:1,objectPath:2,posts:6})}}export{k as L};
