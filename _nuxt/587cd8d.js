(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{208:function(t,e,n){var content=n(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("083745fe",content,!0,{sourceMap:!1})},224:function(t,e,n){"use strict";n(208)},225:function(t,e,n){(e=n(51)(!1)).push([t.i,".nuxt-content h2{font-weight:700;font-size:28px}.nuxt-content p{margin-bottom:20px}",""]),t.exports=e},235:function(t,e,n){"use strict";n.r(e);var r=n(32),c=(n(15),n(2)),l={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,article,l,o,f,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,c=t.params,e.next=3,n("articles",c.slug).fetch();case 3:return article=e.sent,e.next=6,n("articles").only(["title","slug"]).sortBy("date","asc").surround(c.slug).fetch();case 6:return l=e.sent,o=Object(r.a)(l,2),f=o[0],v=o[1],e.abrupt("return",{article:article,prev:f,next:v});case 11:case"end":return e.stop()}}),e)})))()}},o=n(13),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between"},[t.prev?n("NuxtLink",{staticClass:"text-primary font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.prev.slug}}}},[t._v("\n    "+t._s(t.prev.title)+"\n  ")]):n("span",[t._v(" ")]),t._v(" "),t.next?n("NuxtLink",{staticClass:"font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.next.slug}}}},[t._v("\n    "+t._s(t.next.title)+"\n  ")]):n("span",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports},239:function(t,e,n){"use strict";n.r(e);n(15);var r=n(2),c=n(215),l=n.n(c),o=(n(216),n(217),n(219),n(220),n(221),n(222),n(223),{props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}},mounted:function(){l.a.highlightAll()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("articles",r.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()}}),f=(n(224),n(13)),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("h1",{staticClass:"text-5xl mt-12"},[t._v(t._s(t.article.title))]),t._v(" "),n("p",[t._v(t._s(t.formatDate(t.article.date)))]),t._v(" "),n("nuxt-content",{staticClass:"my-16",attrs:{document:t.article}}),t._v(" "),n("prev-next",{attrs:{prev:t.prev,next:t.next}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PrevNext:n(235).default})}}]);