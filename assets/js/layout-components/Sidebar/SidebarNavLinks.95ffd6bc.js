(window.webpackJsonp=window.webpackJsonp||[]).push([[45,31,33,34,41,43],{268:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"j",(function(){return o})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return c})),n.d(e,"c",(function(){return f})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return d}));n(12);const i=/#.*$/u,s=/\.(md|html)$/u,r=/\/$/u,o=/^[a-z]+:/iu,a=t=>decodeURI(t).replace(i,"").replace(s,""),u=t=>o.test(t),l=t=>t.startsWith("mailto:"),c=t=>t.startsWith("tel:"),f=t=>{if(u(t))return t;const e=i.exec(t),n=e?e[0]:"",s=a(t);return s.endsWith("/")?t:`${s}.html${n}`},h=t=>/(\.html|\/)$/u.test(t)?t:t+"/",p=(t,e)=>{const n=decodeURIComponent(t.hash),s=(t=>{const e=i.exec(t);return e?e[0]:""})(e);if(s&&n!==s)return!1;return a(t.path)===a(e)},d=(t,e,n)=>{if(u(t))return t;const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return`${e}${t}`;const s=e.split("/");n&&s[s.length-1]||s.pop();const r=t.replace(/^\//u,"").split("/");for(let t=0;t<r.length;t++){const e=r[t];".."===e?s.pop():"."!==e&&s.push(e)}return""!==s[0]&&s.unshift(""),s.join("/")}},273:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(268),r=i.a.extend({name:"NavLink",props:{item:{type:Object,required:!0}},computed:{link(){return Object(s.c)(this.item.link)},iconPrefix(){const{iconPrefix:t}=this.$themeConfig;return""===t?"":t||"icon-"},active(){return this.$site.locales&&Object.keys(this.$site.locales).some(t=>t===this.link)||"/"===this.link?this.$route.path===this.link:this.$route.path.startsWith(this.link)},isNonHttpURI(){return Object(s.g)(this.link)||Object(s.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(s.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(s.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}}),o=(n(291),n(1)),a=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.isInternal?e("RouterLink",{staticClass:"nav-link",class:{active:t.active},attrs:{to:t.link},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t.item.icon?e("i",{class:`iconfont ${t.iconPrefix}${t.item.icon}`}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t.item.icon?e("i",{class:`iconfont ${t.iconPrefix}${t.item.icon}`}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.default=a.exports},274:function(t,e,n){},277:function(t,e,n){},279:function(t,e,n){"use strict";n.r(e);var i=n(0).a.extend({name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}}),s=(n(285),n(1)),r=Object(s.a)(i,(function(){var t=this._self._c;this._self._setupProxy;return t("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=r.exports},281:function(t,e,n){},285:function(t,e,n){"use strict";n(274)},286:function(t,e,n){},291:function(t,e,n){"use strict";n(277)},297:function(t,e,n){"use strict";n(281)},301:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i=(t,e="")=>{var n;const s=e+(t.prefix||""),r=Object.assign({},t);return s&&(void 0!==r.link&&(r.link=s+r.link),delete r.prefix),(null===(n=r.items)||void 0===n?void 0:n.length)?Object.assign(r,{type:"links",items:r.items.map(t=>i(t,s))}):r.type="link",r}},302:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(279),r=n(273),o=i.a.extend({name:"SidebarDropdownLink",components:{NavLink:r.default,DropdownTransition:s.default},props:{item:{type:Object,required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text},iconPrefix(){const{iconPrefix:t}=this.$themeConfig;return""===t?"":t||"icon-"}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},isLastItemOfArray:(t,e)=>!!Array.isArray(e)&&t===e[e.length-1]}}),a=(n(297),n(1)),u=Object(a.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"mobile-dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[e("span",{staticClass:"title"},[t.item.icon?e("i",{class:`iconfont ${t.iconPrefix}${t.item.icon}`}):t._e(),t._v("\n      "+t._s(t.item.text)+"\n    ")]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,i){return e("li",{key:n.link||i,staticClass:"dropdown-item"},["links"===n.type?e("h4",{staticClass:"dropdown-subtitle"},[n.link?e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.children)&&0===n.children.length&&t.setOpen(!1)}}}):e("span",[t._v(t._s(n.text))])],1):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(i){return e("li",{key:i.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:i},on:{focusout:function(e){t.isLastItemOfArray(i,n.items)&&t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0):e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=u.exports},305:function(t,e,n){},307:function(t,e,n){"use strict";n(286)},319:function(t,e,n){"use strict";n.r(e);var i=n(0).a.extend({name:"RepoLink",computed:{repoLink(){const{repo:t}=this.$themeConfig;return t?/^https?:/u.test(t)?t:"https://github.com/"+t:""},repoLabel(){if(!this.repoLink)return"";if(this.$themeConfig.repoLabel)return this.$themeConfig.repoLabel;const[t]=/^https?:\/\/[^/]+/u.exec(this.repoLink)||[""],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const i=e[n];if(new RegExp(i,"iu").test(t))return i}return"Source"}}}),s=(n(346),n(1)),r=Object(s.a)(i,(function(){var t=this._self._c;this._self._setupProxy;return this.repoLink&&!1!==this.$themeConfig.repoDisplay?t("a",{staticClass:"repo-link",attrs:{rel:"noopener noreferrer",href:this.repoLink,target:"_blank"}},[this._v("\n  "+this._s(this.repoLabel)+"\n  "),t("OutboundLink")],1):this._e()}),[],!1,null,null,null);e.default=r.exports},320:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(319),r=n(302),o=n(273),a=n(301),u=i.a.extend({name:"SidebarNavLinks",components:{RepoLink:s.default,SidebarDropdownLink:r.default,NavLink:o.default},computed:{navLinks(){return(this.$themeLocaleConfig.nav||this.$themeConfig.nav||[]).map(t=>Object(a.a)(t))}}}),l=(n(307),n(1)),c=Object(l.a)(u,(function(){var t=this._self._c;this._self._setupProxy;return t("nav",{staticClass:"sidebar-nav-links"},[this._l(this.navLinks,(function(e){return t("div",{key:e.link,staticClass:"nav-item"},["links"===e.type?t("SidebarDropdownLink",{attrs:{item:e}}):t("NavLink",{attrs:{item:e}})],1)})),this._v(" "),t("RepoLink")],2)}),[],!1,null,null,null);e.default=c.exports},346:function(t,e,n){"use strict";n(305)}}]);