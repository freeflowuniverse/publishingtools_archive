import{c as n,d as t,e as a,f as r,i as s,s as e,g as o,S as i,h as c,t as u,j as f,k as l,l as h,o as v,m as g,n as p,p as m,q as d,r as k,v as $,u as b,w as x,G as w,K as E,L as y,a as j,b as q,R as L,J as z,Q as A,A as B,B as C,x as G,y as H,z as I,C as J}from"./client.f04795c4.js";import{c as K}from"./_api.10f3610e.js";function N(n,t,a){var r=n.slice();return r[7]=t[a],r}function Q(n){var t,a,r,s,e,o=n[7]+"";return{c:function(){t=c("li"),a=c("a"),r=u(o),e=f(),this.h()},l:function(n){t=l(n,"LI",{});var s=h(t);a=l(s,"A",{href:!0});var i=h(a);r=v(i,o),i.forEach(g),e=p(s),s.forEach(g),this.h()},h:function(){m(a,"href",s=n[2]+"/tags/"+n[7])},m:function(n,s){d(n,t,s),k(t,a),k(a,r),k(t,e)},p:function(n,t){1&t&&o!==(o=n[7]+"")&&$(r,o),5&t&&s!==(s=n[2]+"/tags/"+n[7])&&m(a,"href",s)},d:function(n){n&&g(t)}}}function R(n){for(var t,a,r,s,e=n[0],o=[],i=0;i<e.length;i+=1)o[i]=Q(N(n,e,i));return{c:function(){t=c("h1"),a=u(n[1]),r=f(),s=c("ul");for(var e=0;e<o.length;e+=1)o[e].c();this.h()},l:function(e){t=l(e,"H1",{});var i=h(t);a=v(i,n[1]),i.forEach(g),r=p(e),s=l(e,"UL",{class:!0});for(var c=h(s),u=0;u<o.length;u+=1)o[u].l(c);c.forEach(g),this.h()},h:function(){m(s,"class","svelte-1uzksw3")},m:function(n,e){d(n,t,e),k(t,a),d(n,r,e),d(n,s,e);for(var i=0;i<o.length;i+=1)o[i].m(s,null)},p:function(n,t){var r=b(t,1)[0];if(2&r&&$(a,n[1]),5&r){var i;for(e=n[0],i=0;i<e.length;i+=1){var c=N(n,e,i);o[i]?o[i].p(c,r):(o[i]=Q(c),o[i].c(),o[i].m(s,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=e.length}},i:x,o:x,d:function(n){n&&g(t),n&&g(r),n&&g(s),w(o,n)}}}function S(n,t,a){var r,s=t.tags,e=void 0===s?[]:s,o=t.title,i=void 0===o?"":o,c=E(),u=(c.preloading,c.page);c.session;y(n,u,function(n){return a(4,r=n)});var f=t.username,l=void 0===f?r.params.theuser:f;return n.$set=function(n){"tags"in n&&a(0,e=n.tags),"title"in n&&a(1,i=n.title),"username"in n&&a(2,l=n.username)},[e,i,l,u]}var T=function(c){function u(n){var i;return t(this,u),i=a(this,r(u).call(this)),s(o(i),n,S,R,e,{tags:0,title:1,username:2}),i}return n(u,i),u}();function U(n){return{c:x,l:x,m:x,p:x,i:x,o:x,d:x}}function _(n){var t,a=new T({props:{tags:n[1]}});return{c:function(){G(a.$$.fragment)},l:function(n){H(a.$$.fragment,n)},m:function(n,r){I(a,n,r),t=!0},p:function(n,t){var r={};1&t&&(r.tags=n[1]),a.$set(r)},i:function(n){t||(B(a.$$.fragment,n),t=!0)},o:function(n){C(a.$$.fragment,n),t=!1},d:function(n){J(a,n)}}}function D(n){return{c:x,l:x,m:x,p:x,i:x,o:x,d:x}}function F(n){var t,a,r,s,e={ctx:n,current:null,token:null,pending:D,then:_,catch:U,value:1,blocks:[,,,]};return L(r=n[0],e),{c:function(){t=f(),a=z(),e.block.c(),this.h()},l:function(n){A('[data-svelte="svelte-7o39qi"]',document.head).forEach(g),t=p(n),a=z(),e.block.l(n),this.h()},h:function(){document.title="Tags"},m:function(n,r){d(n,t,r),d(n,a,r),e.block.m(n,e.anchor=r),e.mount=function(){return a.parentNode},e.anchor=a,s=!0},p:function(t,a){var s=b(a,1)[0];if(n=t,e.ctx=n,1&s&&r!==(r=n[0])&&L(r,e));else{var o=n.slice();o[1]=e.resolved,e.block.p(o,s)}},i:function(n){s||(B(e.block),s=!0)},o:function(n){for(var t=0;t<3;t+=1){var a=e.blocks[t];C(a)}s=!1},d:function(n){n&&g(t),n&&g(a),e.block.d(n),e.token=null,e=null}}}function M(n){return O.apply(this,arguments)}function O(){return(O=j(q.mark(function n(t){var a,r;return q.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.params,t.query,n.next=3,K(a.theuser);case 3:return r=n.sent,n.abrupt("return",{tags:r});case 5:case"end":return n.stop()}},n)}))).apply(this,arguments)}function P(n,t,a){var r=t.tags,s=void 0===r?[]:r;return n.$set=function(n){"tags"in n&&a(0,s=n.tags)},[s]}export default(function(c){function u(n){var i;return t(this,u),i=a(this,r(u).call(this)),s(o(i),n,P,F,e,{tags:0}),i}return n(u,i),u}());export{M as preload};