import{a as t,b as n,c as a,d as e,e as s,f as r,i as o,s as c,g as i,S as u,R as p,j as l,K as f,H as h,m,n as g,q as d,u as v,A as b,B as $,L as P,M as k,w as y,h as x,x as w,k as L,l as j,y as _,p as N,z as R,C as D}from"./client.1f05cdc2.js";import{a as q,b as C}from"./_api.5c3155da.js";import"./showdown.4a67e9dd.js";import{L as E}from"./ListPagination.7cbb2988.js";import{P as I}from"./PostList.ba6c02ba.js";function S(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var a,r=e(t);if(n){var o=e(this).constructor;a=Reflect.construct(r,arguments,o)}else a=r.apply(this,arguments);return s(this,a)}}function B(t){return{c:y,l:y,m:y,p:y,i:y,o:y,d:y}}function V(t){var n,a,e,s,r=new I({props:{posts:t[10],username:t[3]}}),o=new E({props:{articlesCount:t[2],articlesPerPage:t[1].posts_per_page,objectPath:"/blog/"+t[3]+"/posts",page:t[4]}});return{c:function(){n=x("div"),w(r.$$.fragment),a=l(),e=x("div"),w(o.$$.fragment),this.h()},l:function(t){n=L(t,"DIV",{class:!0});var s=j(n);_(r.$$.fragment,s),s.forEach(m),a=g(t),e=L(t,"DIV",{class:!0});var c=j(e);_(o.$$.fragment,c),c.forEach(m),this.h()},h:function(){N(n,"class","row"),N(e,"class","row")},m:function(t,c){d(t,n,c),R(r,n,null),d(t,a,c),d(t,e,c),R(o,e,null),s=!0},p:function(t,n){var a={};1&n&&(a.posts=t[10]),8&n&&(a.username=t[3]),r.$set(a);var e={};4&n&&(e.articlesCount=t[2]),2&n&&(e.articlesPerPage=t[1].posts_per_page),8&n&&(e.objectPath="/blog/"+t[3]+"/posts"),16&n&&(e.page=t[4]),o.$set(e)},i:function(t){s||(b(r.$$.fragment,t),b(o.$$.fragment,t),s=!0)},o:function(t){$(r.$$.fragment,t),$(o.$$.fragment,t),s=!1},d:function(t){t&&m(n),D(r),t&&m(a),t&&m(e),D(o)}}}function z(t){return{c:y,l:y,m:y,p:y,i:y,o:y,d:y}}function A(t){var n,a,e,s,r={ctx:t,current:null,token:null,pending:z,then:V,catch:B,value:10,blocks:[,,,]};return p(e=t[0],r),{c:function(){n=l(),a=f(),r.block.c(),this.h()},l:function(t){h('[data-svelte="svelte-10h7psl"]',document.head).forEach(m),n=g(t),a=f(),r.block.l(t),this.h()},h:function(){document.title="Blog"},m:function(t,e){d(t,n,e),d(t,a,e),r.block.m(t,r.anchor=e),r.mount=function(){return a.parentNode},r.anchor=a,s=!0},p:function(n,a){var s=v(a,1)[0];if(t=n,r.ctx=t,1&s&&e!==(e=t[0])&&p(e,r));else{var o=t.slice();o[10]=r.resolved,r.block.p(o,s)}},i:function(t){s||(b(r.block),s=!0)},o:function(t){for(var n=0;n<3;n+=1){var a=r.blocks[n];$(a)}s=!1},d:function(t){t&&m(n),t&&m(a),r.block.d(t),r.token=null,r=null}}}function H(t){return J.apply(this,arguments)}function J(){return(J=t(n.mark(function t(a){var e,s,r,o,c,i,u,p,l,f,h;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.host,e=a.path,s=a.params,r=a.query,console.log("params in posts index",JSON.stringify(s)),(o=parseInt(r.page))||this.redirect(302,"".concat(s.theuser,"/posts?page=1")),t.next=6,C(s.theuser);case 6:return c=t.sent,o>0&&o--,console.log(c.length),i=c.length,t.next=12,q(s.theuser);case 12:return u=t.sent,p=u.posts_per_page||5,l=o*p,f=o*p+p,h=c.slice(l,f),t.abrupt("return",{path:e,posts:h,totalPostsLength:i,metadata:u});case 18:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function K(t,n,a){var e,s=n.posts,r=void 0===s?[]:s,o=n.metadata,c=n.totalPostsLength,i=n.path,u=P(),p=(u.preloading,u.page);u.session;k(t,p,function(t){return a(7,e=t)}),console.log("in posts index",e.params);var l=n.username,f=void 0===l?e.params.theuser:l,h=n.pageNum,m=void 0===h?e.query.page:h;return t.$set=function(t){"posts"in t&&a(0,r=t.posts),"metadata"in t&&a(1,o=t.metadata),"totalPostsLength"in t&&a(2,c=t.totalPostsLength),"path"in t&&a(6,i=t.path),"username"in t&&a(3,f=t.username),"pageNum"in t&&a(4,m=t.pageNum)},[r,o,c,f,m,p,i]}export default(function(t){a(e,u);var n=S(e);function e(t){var a;return r(this,e),a=n.call(this),o(i(a),t,K,A,c,{posts:0,metadata:1,totalPostsLength:2,path:6,username:3,pageNum:4}),a}return e}());export{H as preload};
