(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{294:function(t,o,e){},325:function(t,o,e){"use strict";e(294)},339:function(t,o,e){"use strict";e.r(o);var r=e(0),n=e(358),i=r.a.extend({name:"PageFooter",components:{MediaLinks:n.default},computed:{footerConfig(){return this.$themeLocaleConfig.footer||this.$themeConfig.footer||{}},enable(){const{copyrightText:t,footer:o,medialink:e}=this.$page.frontmatter;return!1!==o&&Boolean(t||o||e||this.footerConfig.display)},footerContent(){const{footer:t}=this.$page.frontmatter;return!1!==t&&("string"==typeof t?t:this.footerConfig.content||"")},copyright(){return!1!==this.$frontmatter.copyrightText&&(this.$frontmatter.copyrightText||!1!==this.footerConfig.copyright&&(this.footerConfig.copyright||(this.$themeConfig.author?`Copyright © ${(new Date).getFullYear()} ${this.$themeConfig.author}`:"")))}}}),s=(e(325),e(1)),f=Object(s.a)(i,(function(){var t=this,o=t._self._c;t._self._setupProxy;return t.enable?o("footer",{staticClass:"footer-wrapper"},[t.$frontmatter.home&&t.$frontmatter.blog?t._e():o("MediaLinks"),t._v(" "),t.footerContent?o("div",{staticClass:"footer",domProps:{innerHTML:t._s(t.footerContent)}}):t._e(),t._v(" "),t.copyright?o("div",{staticClass:"copyright",domProps:{innerHTML:t._s(t.copyright)}}):t._e()],1):t._e()}),[],!1,null,null,null);o.default=f.exports}}]);