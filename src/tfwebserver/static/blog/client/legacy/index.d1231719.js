import{c as t,d as n,e as r,f as e,i as a,s as c,g as o,S as u,h as s,A as i,x as f,j as l,k as h,B as v,l as p,y as g,m,n as d,o as y,C as k,u as b,p as $,D as R,v as x,w,a as D,b as E,O as j,t as L,T as S,L as q,M as A,I,J as N,K as P,N as T}from"./client.c516951c.js";import{b as z}from"./_api.aac26c19.js";function B(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var a,c=n(t);if(e){var o=n(this).constructor;a=Reflect.construct(c,arguments,o)}else a=c.apply(this,arguments);return r(this,a)}}function C(t,n,r){var e=t.slice();return e[7]=n[r],e}function H(t){var n,r,e,a,c,o=t[7]+"";return{c:function(){n=s("li"),r=s("a"),e=i(o),c=f(),this.h()},l:function(t){n=l(t,"LI",{});var a=h(n);r=l(a,"A",{href:!0});var u=h(r);e=v(u,o),u.forEach(p),c=g(a),a.forEach(p),this.h()},h:function(){m(r,"href",a=t[2]+"/tags/"+t[7])},m:function(t,a){d(t,n,a),y(n,r),y(r,e),y(n,c)},p:function(t,n){1&n&&o!==(o=t[7]+"")&&k(e,o),5&n&&a!==(a=t[2]+"/tags/"+t[7])&&m(r,"href",a)},d:function(t){t&&p(n)}}}function J(t){for(var n,r,e,a,c=t[0],o=[],u=0;u<c.length;u+=1)o[u]=H(C(t,c,u));return{c:function(){n=s("h1"),r=i(t[1]),e=f(),a=s("ul");for(var c=0;c<o.length;c+=1)o[c].c();this.h()},l:function(c){n=l(c,"H1",{});var u=h(n);r=v(u,t[1]),u.forEach(p),e=g(c),a=l(c,"UL",{class:!0});for(var s=h(a),i=0;i<o.length;i+=1)o[i].l(s);s.forEach(p),this.h()},h:function(){m(a,"class","svelte-1uzksw3")},m:function(t,c){d(t,n,c),y(n,r),d(t,e,c),d(t,a,c);for(var u=0;u<o.length;u+=1)o[u].m(a,null)},p:function(t,n){var e=b(n,1)[0];if(2&e&&k(r,t[1]),5&e){var u;for(c=t[0],u=0;u<c.length;u+=1){var s=C(t,c,u);o[u]?o[u].p(s,e):(o[u]=H(s),o[u].c(),o[u].m(a,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=c.length}},i:$,o:$,d:function(t){t&&p(n),t&&p(e),t&&p(a),R(o,t)}}}function K(t,n,r){var e,a=n.tags,c=void 0===a?[]:a,o=n.title,u=void 0===o?"":o,s=x(),i=(s.preloading,s.page);s.session;w(t,i,function(t){return r(4,e=t)});var f=n.username,l=void 0===f?e.params.theuser:f;return t.$set=function(t){"tags"in t&&r(0,c=t.tags),"title"in t&&r(1,u=t.title),"username"in t&&r(2,l=t.username)},[c,u,l,i]}var M=function(n){t(s,u);var r=B(s);function s(t){var n;return e(this,s),n=r.call(this),a(o(n),t,K,J,c,{tags:0,title:1,username:2}),n}return s}();function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var a,c=n(t);if(e){var o=n(this).constructor;a=Reflect.construct(c,arguments,o)}else a=c.apply(this,arguments);return r(this,a)}}function U(t){return{c:$,l:$,m:$,p:$,i:$,o:$,d:$}}function _(t){var n,r=new M({props:{tags:t[1]}});return{c:function(){I(r.$$.fragment)},l:function(t){N(r.$$.fragment,t)},m:function(t,e){P(r,t,e),n=!0},p:function(t,n){var e={};1&n&&(e.tags=t[1]),r.$set(e)},i:function(t){n||(q(r.$$.fragment,t),n=!0)},o:function(t){A(r.$$.fragment,t),n=!1},d:function(t){T(r,t)}}}function F(t){return{c:$,l:$,m:$,p:$,i:$,o:$,d:$}}function G(t){var n,r,e,a,c={ctx:t,current:null,token:null,pending:F,then:_,catch:U,value:1,blocks:[,,,]};return j(e=t[0],c),{c:function(){n=f(),r=L(),c.block.c(),this.h()},l:function(t){S('[data-svelte="svelte-7o39qi"]',document.head).forEach(p),n=g(t),r=L(),c.block.l(t),this.h()},h:function(){document.title="Tags"},m:function(t,e){d(t,n,e),d(t,r,e),c.block.m(t,c.anchor=e),c.mount=function(){return r.parentNode},c.anchor=r,a=!0},p:function(n,r){var a=b(r,1)[0];if(t=n,c.ctx=t,1&a&&e!==(e=t[0])&&j(e,c));else{var o=t.slice();o[1]=c.resolved,c.block.p(o,a)}},i:function(t){a||(q(c.block),a=!0)},o:function(t){for(var n=0;n<3;n+=1){var r=c.blocks[n];A(r)}a=!1},d:function(t){t&&p(n),t&&p(r),c.block.d(t),c.token=null,c=null}}}function Q(t){return V.apply(this,arguments)}function V(){return(V=D(E.mark(function t(n){var r,e;return E.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.params,n.query,t.next=3,z(r.theuser);case 3:return e=t.sent,t.abrupt("return",{tags:e});case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function W(t,n,r){var e=n.tags,a=void 0===e?[]:e;return t.$set=function(t){"tags"in t&&r(0,a=t.tags)},[a]}export default(function(n){t(s,u);var r=O(s);function s(t){var n;return e(this,s),n=r.call(this),a(o(n),t,W,G,c,{tags:0}),n}return s}());export{Q as preload};
