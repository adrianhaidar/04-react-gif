(this["webpackJsonp04-gif-expert"]=this["webpackJsonp04-gif-expert"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=(n(15),n(2)),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("handleSubmit llamado"),r.trim().length>1&&(t((function(e){return[r].concat(Object(s.a)(e))})),o(""))},children:[Object(u.jsx)("p",{children:r}),Object(u.jsx)("input",{type:"text",value:r,onChange:function(e){o(e.target.value)}})]})},d=n(10),j=function(e){var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t||"imagen"})]})},l=n(6),m=n.n(l),b=n(8),f=function(){var e=Object(b.a)(m.a.mark((function e(t){var n,a,c,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=hgDKm28QdpzAtF4zSKPcKDaWwHuB73AU"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeInDown",children:t}),r&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando"}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(u.jsx)(j,Object(d.a)({},e),e.id)}))})]})},h=function(e){var t=e.defaultCategories,n=void 0===t?[]:t,c=Object(a.useState)(n),r=Object(i.a)(c,2),s=r[0],d=r[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Gif Expert App"}),Object(u.jsx)(o,{setCategories:d}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:s.map((function(e){return Object(u.jsx)(p,{category:e},e)}))})]})};r.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ce72d6c5.chunk.js.map