import{a as t,b as e,c as n,d as r,e as a,f as s,i as c,s as i,g as u,S as o,h as f,x as l,T as h,j as p,l as m,y as d,k as g,m as v,o as y,n as w,u as j,p as k,v as x,w as R}from"./client.c516951c.js";import{c as $}from"./_api.aac26c19.js";import{s as b}from"./showdown.ff5d008e.js";function H(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,s=r(t);if(e){var c=r(this).constructor;n=Reflect.construct(s,arguments,c)}else n=s.apply(this,arguments);return a(this,n)}}function E(t){var e,n,r,a,s=t[2].makeHtml(t[0].content)+"";return document.title=e=t[0].title,{c:function(){n=f("link"),r=l(),a=f("div"),this.h()},l:function(t){var e=h('[data-svelte="svelte-17jfwhl"]',document.head);n=p(e,"LINK",{rel:!0,href:!0}),e.forEach(m),r=d(t),a=p(t,"DIV",{class:!0}),g(a).forEach(m),this.h()},h:function(){v(n,"rel","stylesheet"),v(n,"href","//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.15.8/build/styles/default.min.css"),v(a,"class","content svelte-hmgdk5")},m:function(t,e){y(document.head,n),w(t,r,e),w(t,a,e),a.innerHTML=s},p:function(t,n){var r=j(n,1)[0];1&r&&e!==(e=t[0].title)&&(document.title=e),1&r&&s!==(s=t[2].makeHtml(t[0].content)+"")&&(a.innerHTML=s)},i:k,o:k,d:function(t){m(n),t&&m(r),t&&m(a)}}}function S(t){return D.apply(this,arguments)}function D(){return(D=t(e.mark(function t(n){var r,a,s,c,i,u;return e.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.params,n.query,a=r.theuser,s=r.slug,t.next=5,$(a);case 5:return c=t.sent,i=new Map,c.forEach(function(t){i.set(t.slug,JSON.stringify(t))}),u=i.get(s),t.abrupt("return",{thepage:JSON.parse(u)});case 10:case"end":return t.stop()}},t)}))).apply(this,arguments)}function L(t,e,n){var r,a=e.thepage,s=void 0===a?{}:a,c=x(),i=(c.preloading,c.page);c.session;R(t,i,function(t){return n(4,r=t)});var u=e.username,o=void 0===u?r.params.theuser:u,f={h1:"ui large header",h2:"ui medium header",ul:"ui list",li:"ui item"},l=(Object.keys(f).map(function(t){return{type:"output",regex:new RegExp("<".concat(t,"(.*)>"),"g"),replace:"<".concat(t,' class="').concat(f[t],'" $1>')}}),new b.Converter({metadata:!0}));return l.setFlavor("github"),t.$set=function(t){"thepage"in t&&n(0,s=t.thepage),"username"in t&&n(3,o=t.username)},t.$$.update=function(){1&t.$$.dirty&&l.makeHtml(s.content)},[s,i,l,o]}export default(function(t){n(r,o);var e=H(r);function r(t){var n;return s(this,r),n=e.call(this),c(u(n),t,L,E,i,{thepage:0,username:3}),n}return r}());export{S as preload};
