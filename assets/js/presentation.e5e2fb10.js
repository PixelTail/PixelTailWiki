(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{413:function(e,t,i){"use strict";var n=i(5),a=Object(n.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticStyle:{background:"0 0",display:"block","shape-rendering":"auto"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"0",fill:"none",stroke:"currentColor","stroke-width":"2"}},[t("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"0s"}}),this._v(" "),t("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"0s"}})]),this._v(" "),t("circle",{attrs:{cx:"50",cy:"50",r:"0",fill:"none",stroke:"currentColor","stroke-width":"2"}},[t("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"-0.3333333333333333s"}}),this._v(" "),t("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"-0.3333333333333333s"}})]),this._v(" "),t("circle",{attrs:{cx:"50",cy:"50",r:"0",fill:"none",stroke:"currentColor","stroke-width":"2"}},[t("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"-0.6666666666666666s"}}),this._v(" "),t("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"-0.6666666666666666s"}})])])}),[],!1,null,null,null);t.a=a.exports},495:function(e,t,i){},615:function(e,t,i){"use strict";i(495)},639:function(e,t,i){"use strict";i.r(t);var n=i(160),a=i(158),s=i(71),r=i(161);i(12),i(14),i(26),i(39),i(37);var l=i(0),o=i(413),c=l.a.extend({name:"Presentation",components:{Loading:o.a},props:{id:{type:String,required:!0},code:{type:String,required:!0},theme:{type:String,default:"auto"}},data:function(){return{loading:!0}},mounted:function(){var e=this;this.$el.setAttribute("id",this.id);var t=document.querySelector("#".concat(this.id));if(t){t.setAttribute("theme",this.theme);var l=[i.e(34).then(i.bind(null,633))];l.push(i.e(34).then(i.bind(null,634))),Promise.all(l).then((function(i){var l,o=(l=i,Object(n.a)(l)||Object(a.a)(l)||Object(s.a)(l)||Object(r.a)()),c=o[0],d=o.slice(1),u=new c.default(t,{plugins:d.map((function(e){return e.default}))});u.initialize(Object.assign(Object.assign(Object.assign({backgroundTransition:"slide",hash:"Slide"===e.$frontmatter.layout,mouseWheel:"Slide"===e.$frontmatter.layout,transition:"slide",slideNumber:!0},{}),e.$frontmatter.reveal||{}),{embedded:"Slide"!==e.$frontmatter.layout})).then((function(){e.loading=!1})),u.configure({backgroundTransition:"slide"})}))}}}),d=(i(615),i(5)),u=Object(d.a)(c,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"md-presentation reveal reveal-viewport",class:{loading:e.loading}},[e.loading?i("Loading",{staticClass:"md-presentation-loading-icon"}):e._e(),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"slides"},[i("section",{attrs:{"data-markdown":"","data-separator":"^\\r?\\n---\\r?\\n$","data-separator-vertical":"^\\r?\\n--\\r?\\n$"}},[i("script",{attrs:{type:"text/template"}},[e._v("\n        "+e._s(e.code)+"\n      ")])])])],1)}),[],!1,null,null,null);t.default=u.exports}}]);