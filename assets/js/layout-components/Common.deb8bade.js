(window.webpackJsonp=window.webpackJsonp||[]).push([[27,36,37,41],{274:function(t,e,n){},279:function(t,e,n){"use strict";n.r(e);var i=n(0).a.extend({name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}}),r=(n(285),n(1)),o=Object(r.a)(i,(function(){var t=this._self._c;this._self._setupProxy;return t("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=o.exports},281:function(t,e,n){},282:function(t,e,n){},285:function(t,e,n){"use strict";n(274)},286:function(t,e,n){},287:function(t,e,n){},290:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n(316),o=n(304),s=n(268);const a=(t,e)=>"group"===e.type&&e.children.some(e=>"group"===e.type?a(t,e):"page"===e.type&&Object(s.e)(t,e.path));var l=i.a.extend({name:"SidebarLinks",components:{SidebarGroup:r.default,SidebarLink:o.default},props:{items:{type:Array,required:!0},depth:{type:Number,required:!0}},data:()=>({openGroupIndex:0}),watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=((t,e)=>{for(let n=0;n<e.length;n++)if(a(t,e[n]))return n;return-1})(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(s.e)(this.$route,t.regularPath)}}}),c=n(1),u=Object(c.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(n,i){return e("li",{key:i},["group"===n.type?e("SidebarGroup",{attrs:{item:n,open:i===t.openGroupIndex,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):e("SidebarLink",{attrs:{item:n}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=u.exports},294:function(t,e,n){},295:function(t,e,n){},297:function(t,e,n){"use strict";n(281)},298:function(t,e,n){"use strict";n(282)},302:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n(279),o=n(273),s=i.a.extend({name:"SidebarDropdownLink",components:{NavLink:o.default,DropdownTransition:r.default},props:{item:{type:Object,required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text},iconPrefix(){const{iconPrefix:t}=this.$themeConfig;return""===t?"":t||"icon-"}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},isLastItemOfArray:(t,e)=>!!Array.isArray(e)&&t===e[e.length-1]}}),a=(n(297),n(1)),l=Object(a.a)(s,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"mobile-dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[e("span",{staticClass:"title"},[t.item.icon?e("i",{class:`iconfont ${t.iconPrefix}${t.item.icon}`}):t._e(),t._v("\n      "+t._s(t.item.text)+"\n    ")]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,i){return e("li",{key:n.link||i,staticClass:"dropdown-item"},["links"===n.type?e("h4",{staticClass:"dropdown-subtitle"},[n.link?e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.children)&&0===n.children.length&&t.setOpen(!1)}}}):e("span",[t._v(t._s(n.text))])],1):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(i){return e("li",{key:i.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:i},on:{focusout:function(e){t.isLastItemOfArray(i,n.items)&&t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0):e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=l.exports},304:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n(268),o=n(284);const s=(t,e)=>e?t("i",{class:["iconfont",e]}):null,a=(t,{icon:e="",text:n,link:i,level:r,active:o})=>t("RouterLink",{props:{to:i,activeClass:"",exactActiveClass:""},class:{active:o,"sidebar-link":!0,[r?"heading"+r:""]:r&&2!==r}},[s(t,e),n]),l=(t,{children:e,path:n,route:i,maxDepth:o,depth:s=1})=>!e||s>o?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const c=Object(r.e)(i,`${n}#${e.slug}`);return t("li",{class:"sidebar-sub-header"},[a(t,{text:e.title,link:`${n}#${e.slug}`,level:e.level,active:c}),l(t,{children:e.children||!1,path:n,route:i,maxDepth:o,depth:s+1})])}));var c=i.a.extend({name:"SidebarLink",functional:!0,props:{item:{type:Object,required:!0}},render(t,{parent:{$page:e,$route:n,$themeConfig:i,$themeLocaleConfig:s},props:c}){const{item:u}=c;if("error"===u.type)return null;if("external"===u.type)return((t,{path:e,title:n=e})=>t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")]))(t,u);const p=Object(r.e)(n,u.path),d="header"===u.type?p||(u.children||[]).some(t=>Object(r.e)(n,`${u.basePath}#${t.slug}`)):p,h=e.frontmatter.sidebarDepth,f=s.sidebarDepth,b=i.sidebarDepth,m="number"==typeof h?h:"number"==typeof f?f:"number"==typeof b?b:2;if("header"===u.type)return[a(t,{text:u.title||u.path,link:u.path,level:u.level,active:d}),l(t,{children:u.children||!1,path:u.basePath,route:n,maxDepth:m})];const g=s.displayAllHeaders||i.displayAllHeaders,v=a(t,{icon:!1!==i.sidebarIcon&&u.frontmatter.icon?`${""===i.iconPrefix?"":i.iconPrefix||"icon-"}${u.frontmatter.icon}`:"",text:u.title||u.path,link:u.path,active:d});if((d||g)&&u.headers&&!r.d.test(u.path)){const e=Object(o.b)(u.headers);return[v,l(t,{children:e,path:u.path,route:n,maxDepth:m})]}return v}}),u=(n(298),n(1)),p=Object(u.a)(c,void 0,void 0,!1,null,null,null);e.default=p.exports},307:function(t,e,n){"use strict";n(286)},308:function(t,e,n){"use strict";n(287)},309:function(t,e,n){},316:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n(279),o=n(268),s=i.a.extend({name:"SidebarGroup",components:{DropdownTransition:r.default},props:{item:{type:Object,required:!0},open:{type:Boolean},depth:{type:Number,required:!0}},beforeCreate(){this.$options.components.SidebarLinks=n(290).default},methods:{getIcon(t){const{iconPrefix:e}=this.$themeConfig;return!1!==this.$themeConfig.sidebarIcon&&t?`${""===e?"":e||"icon-"}${t}`:""},isActive:o.e}}),a=(n(308),n(1)),l=Object(a.a)(s,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.item.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},on:{click:function(e){return t.$emit("toggle")}}},[t.item.icon?e("i",{class:"iconfont "+t.getIcon(t.item.icon)}):t._e(),t._v(" "),e("span",{staticClass:"title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{clickable:t.item.collapsable,open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[t.item.icon?e("i",{class:"iconfont "+t.getIcon(t.item.icon)}):t._e(),t._v(" "),e("span",{staticClass:"title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.item.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{depth:t.depth+1,items:t.item.children}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=l.exports},320:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n(319),o=n(302),s=n(273),a=n(301),l=i.a.extend({name:"SidebarNavLinks",components:{RepoLink:r.default,SidebarDropdownLink:o.default,NavLink:s.default},computed:{navLinks(){return(this.$themeLocaleConfig.nav||this.$themeConfig.nav||[]).map(t=>Object(a.a)(t))}}}),c=(n(307),n(1)),u=Object(c.a)(l,(function(){var t=this._self._c;this._self._setupProxy;return t("nav",{staticClass:"sidebar-nav-links"},[this._l(this.navLinks,(function(e){return t("div",{key:e.link,staticClass:"nav-item"},["links"===e.type?t("SidebarDropdownLink",{attrs:{item:e}}):t("NavLink",{attrs:{item:e}})],1)})),this._v(" "),t("RepoLink")],2)}),[],!1,null,null,null);e.default=u.exports},325:function(t,e,n){"use strict";n(294)},326:function(t,e,n){"use strict";n(295)},330:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(343);const r=n(345).a.extend({data:()=>({globalEncryptPassword:""}),computed:{isGlobalEncrypted(){if("global"===this.encryptOptions.status&&this.encryptOptions.global){const{global:t}=this.encryptOptions;return!("string"==typeof t?[t]:t).some(t=>Object(i.compareSync)(this.globalEncryptPassword,t))}return!1}},mounted(){const t=localStorage.getItem("globalPassword");t&&(this.globalEncryptPassword=t)},methods:{checkGlobalPassword(t){const{global:e}=this.encryptOptions;("string"==typeof e?[e]:e).some(e=>Object(i.compareSync)(t,e))&&(this.globalEncryptPassword=t,localStorage.setItem("globalPassword",t))}}})},339:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n(358),o=i.a.extend({name:"PageFooter",components:{MediaLinks:r.default},computed:{footerConfig(){return this.$themeLocaleConfig.footer||this.$themeConfig.footer||{}},enable(){const{copyrightText:t,footer:e,medialink:n}=this.$page.frontmatter;return!1!==e&&Boolean(t||e||n||this.footerConfig.display)},footerContent(){const{footer:t}=this.$page.frontmatter;return!1!==t&&("string"==typeof t?t:this.footerConfig.content||"")},copyright(){return!1!==this.$frontmatter.copyrightText&&(this.$frontmatter.copyrightText||!1!==this.footerConfig.copyright&&(this.footerConfig.copyright||(this.$themeConfig.author?`Copyright © ${(new Date).getFullYear()} ${this.$themeConfig.author}`:"")))}}}),s=(n(325),n(1)),a=Object(s.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.enable?e("footer",{staticClass:"footer-wrapper"},[t.$frontmatter.home&&t.$frontmatter.blog?t._e():e("MediaLinks"),t._v(" "),t.footerContent?e("div",{staticClass:"footer",domProps:{innerHTML:t._s(t.footerContent)}}):t._e(),t._v(" "),t.copyright?e("div",{staticClass:"copyright",domProps:{innerHTML:t._s(t.copyright)}}):t._e()],1):t._e()}),[],!1,null,null,null);e.default=a.exports},341:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n(271),o=n(320),s=n(290),a=i.a.extend({name:"Sidebar",components:{BlogInfo:r.a,BloggerInfo:r.a,SidebarLinks:s.default,SidebarNavLinks:o.default},props:{items:{type:Array,required:!0}},computed:{blogConfig(){return this.$themeConfig.blog||{}},sidebarDisplay(){return this.blogConfig.sidebarDisplay||"none"}}}),l=(n(326),n(1)),c=Object(l.a)(a,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("aside",{staticClass:"sidebar"},["none"!==t.sidebarDisplay?[e("BloggerInfo",{class:{mobile:"mobile"===t.sidebarDisplay}}),t._v(" "),e("hr")]:t._e(),t._v(" "),t._t("top"),t._v(" "),e("SidebarNavLinks"),t._v(" "),t._t("center"),t._v(" "),e("SidebarLinks",{attrs:{depth:0,items:t.items}}),t._v(" "),t._t("bottom"),t._v(" "),t.$frontmatter.blog&&!1!==t.$themeConfig.blog?e("BlogInfo"):t._e()],2)}),[],!1,null,null,null);e.default=c.exports},348:function(t,e){var n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,s=parseInt,a="object"==typeof global&&global&&global.Object===Object&&global,l="object"==typeof self&&self&&self.Object===Object&&self,c=a||l||Function("return this")(),u=Object.prototype.toString,p=Math.max,d=Math.min,h=function(){return c.Date.now()};function f(t,e,n){var i,r,o,s,a,l,c=0,u=!1,f=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var n=i,o=r;return i=r=void 0,c=e,s=t.apply(o,n)}function y(t){return c=t,a=setTimeout(x,e),u?v(t):s}function _(t){var n=t-l;return void 0===l||n>=e||n<0||f&&t-c>=o}function x(){var t=h();if(_(t))return k(t);a=setTimeout(x,function(t){var n=e-(t-l);return f?d(n,o-(t-c)):n}(t))}function k(t){return a=void 0,g&&i?v(t):(i=r=void 0,s)}function $(){var t=h(),n=_(t);if(i=arguments,r=this,l=t,n){if(void 0===a)return y(l);if(f)return a=setTimeout(x,e),v(l)}return void 0===a&&(a=setTimeout(x,e)),s}return e=m(e)||0,b(n)&&(u=!!n.leading,o=(f="maxWait"in n)?p(m(n.maxWait)||0,e):o,g="trailing"in n?!!n.trailing:g),$.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=l=r=a=void 0},$.flush=function(){return void 0===a?s:k(h())},$}function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==u.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var a=r.test(t);return a||o.test(t)?s(t.slice(2),a?2:8):i.test(t)?NaN:+t}t.exports=function(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),f(t,e,{leading:i,maxWait:e,trailing:r})}},349:function(t,e,n){"use strict";n(309)},367:function(t,e,n){"use strict";n.r(e);var i=n(284),r=n(330),o=n(412),s=n(339),a=n(340),l=n(341),c=n(348),u=n.n(c),p=r.a.extend({name:"Common",components:{Navbar:o.default,PageFooter:s.default,Password:a.default,Sidebar:l.default},props:{navbar:{type:Boolean,default:!0},sidebar:{type:Boolean,default:!0}},data:()=>({isSidebarOpen:!1,hideNavbar:!1,touchStart:{clientX:0,clientY:0}}),computed:{enableNavbar(){if(!1===this.navbar)return!1;const{frontmatter:t}=this.$page;return!1!==t.navbar&&!1!==this.$themeConfig.navbar&&Boolean(this.$title||this.$themeConfig.logo||this.$themeConfig.repo||this.$themeConfig.nav||this.$themeLocaleConfig.nav)},enableSidebar(){return!1!==this.sidebar&&(!this.$frontmatter.home&&!1!==this.$frontmatter.sidebar&&0!==this.sidebarItems.length)},sidebarItems(){return!1===this.sidebar?[]:Object(i.a)(this.$page,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"has-navbar":this.enableNavbar,"has-sidebar":this.enableSidebar,"has-anchor":this.enableAnchor,"hide-navbar":this.hideNavbar,"sidebar-open":this.isSidebarOpen},t]},headers(){return this.getHeader(this.sidebarItems)},enableAnchor(){return this.$frontmatter.anchorDisplay||!1!==this.$themeConfig.anchorDisplay&&!1!==this.$frontmatter.anchorDisplay}},mounted(){let t=0;this.$router.afterEach(()=>{this.isSidebarOpen=!1}),window.addEventListener("scroll",u()(()=>{const e=this.getScrollTop();t<e&&e>58?this.isSidebarOpen||(this.hideNavbar=!0):this.hideNavbar=!1,t=e},300))},methods:{getScrollTop:()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={clientX:t.changedTouches[0].clientX,clientY:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.clientX,n=t.changedTouches[0].clientY-this.touchStart.clientY;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.clientX<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))},getHeader(t){for(let e=0;e<t.length;e++){const n=t[e];if("group"===n.type){const t=this.getHeader(n.children);if(0!==t.length)return t}else if("page"===n.type&&n.headers&&n.path===this.$route.path)return n.headers}return[]}}}),d=(n(349),n(1)),h=Object(d.a)(p,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.isGlobalEncrypted?e("Password",{on:{"password-verify":t.checkGlobalPassword}}):[t.enableNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"start",fn:function(){return[t._t("navbar-start")]},proxy:!0},{key:"center",fn:function(){return[t._t("navbar-center")]},proxy:!0},{key:"end",fn:function(){return[t._t("navbar-end")]},proxy:!0}],null,!0)}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"center",fn:function(){return[t._t("sidebar-center")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t._t("default",null,{sidebarItems:t.sidebarItems,headers:t.headers}),t._v(" "),e("PageFooter",{key:t.$route.path})]],2)}),[],!1,null,null,null);e.default=h.exports},379:function(t,e){},380:function(t,e){},382:function(t,e){},383:function(t,e){}}]);