(window.webpackJsonp=window.webpackJsonp||[]).push([[31,33],{268:function(t,n,e){"use strict";e.d(n,"d",(function(){return i})),e.d(n,"a",(function(){return s})),e.d(n,"j",(function(){return o})),e.d(n,"i",(function(){return u})),e.d(n,"f",(function(){return c})),e.d(n,"g",(function(){return l})),e.d(n,"h",(function(){return a})),e.d(n,"c",(function(){return h})),e.d(n,"b",(function(){return f})),e.d(n,"e",(function(){return p})),e.d(n,"k",(function(){return k}));e(12);const i=/#.*$/u,r=/\.(md|html)$/u,s=/\/$/u,o=/^[a-z]+:/iu,u=t=>decodeURI(t).replace(i,"").replace(r,""),c=t=>o.test(t),l=t=>t.startsWith("mailto:"),a=t=>t.startsWith("tel:"),h=t=>{if(c(t))return t;const n=i.exec(t),e=n?n[0]:"",r=u(t);return r.endsWith("/")?t:`${r}.html${e}`},f=t=>/(\.html|\/)$/u.test(t)?t:t+"/",p=(t,n)=>{const e=decodeURIComponent(t.hash),r=(t=>{const n=i.exec(t);return n?n[0]:""})(n);if(r&&e!==r)return!1;return u(t.path)===u(n)},k=(t,n,e)=>{if(c(t))return t;const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return`${n}${t}`;const r=n.split("/");e&&r[r.length-1]||r.pop();const s=t.replace(/^\//u,"").split("/");for(let t=0;t<s.length;t++){const n=s[t];".."===n?r.pop():"."!==n&&r.push(n)}return""!==r[0]&&r.unshift(""),r.join("/")}},273:function(t,n,e){"use strict";e.r(n);var i=e(0),r=e(268),s=i.a.extend({name:"NavLink",props:{item:{type:Object,required:!0}},computed:{link(){return Object(r.c)(this.item.link)},iconPrefix(){const{iconPrefix:t}=this.$themeConfig;return""===t?"":t||"icon-"},active(){return this.$site.locales&&Object.keys(this.$site.locales).some(t=>t===this.link)||"/"===this.link?this.$route.path===this.link:this.$route.path.startsWith(this.link)},isNonHttpURI(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}}),o=(e(291),e(1)),u=Object(o.a)(s,(function(){var t=this,n=t._self._c;t._self._setupProxy;return t.isInternal?n("RouterLink",{staticClass:"nav-link",class:{active:t.active},attrs:{to:t.link},nativeOn:{focusout:function(n){return t.focusoutAction.apply(null,arguments)}}},[t.item.icon?n("i",{class:`iconfont ${t.iconPrefix}${t.item.icon}`}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t.item.icon?n("i",{class:`iconfont ${t.iconPrefix}${t.item.icon}`}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);n.default=u.exports},277:function(t,n,e){},291:function(t,n,e){"use strict";e(277)}}]);