function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/vidstack-DqoEU8C6-D51x94Q6.js","assets/vidstack-D1JzjGR7-OHkRhbd9.js","assets/app-BDNIfxmB.js","assets/vidstack-D8vpzjIs-BTtv5vWE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{H as V,M as $,u as b,e as a,s as o,c as h,a as C,d as g}from"./vidstack-D1JzjGR7-OHkRhbd9.js";import{_ as y}from"./app-BDNIfxmB.js";const d=class d extends V(HTMLElement,$){constructor(){super(...arguments),this.A=null,this.Vj=null}onSetup(){this.a=b(),this.setAttribute("keep-alive","")}onDestroy(){var t,e;(t=this.Vj)==null||t.remove(),this.Vj=null,(e=this.A)==null||e.remove(),this.A=null}onConnect(){a(()=>{var l,v,f;const t=this.$state.loader(),e=(t==null?void 0:t.name)==="youtube",i=(t==null?void 0:t.name)==="vimeo",n=e||i,r=(t==null?void 0:t.name)==="google-cast",s=t?r?this.Sm():n?this.ek():t.mediaType()==="audio"?this.fk():this.Yj():null;if(this.A!==s){const L=((l=this.A)==null?void 0:l.parentElement)??this;(v=this.A)==null||v.remove(),this.A=s,s&&L.prepend(s),n&&s&&a(()=>{var A;const{$iosControls:j}=this.a,{controls:E}=this.a.$state,p=E()||j();p?((A=this.Vj)==null||A.remove(),this.Vj=null):(this.Vj=this.querySelector(".vds-blocker")??document.createElement("div"),this.Vj.classList.add("vds-blocker"),s.after(this.Vj)),o(s,"data-no-controls",!p)})}e?s==null||s.classList.add("vds-youtube"):i&&(s==null||s.classList.add("vds-vimeo")),n||((f=this.Vj)==null||f.remove(),this.Vj=null),this.load(s)})}fk(){const t=this.A instanceof HTMLAudioElement?this.A:document.createElement("audio");o(t,"preload","none"),o(t,"aria-hidden","true");const{controls:e,crossOrigin:i}=this.a.$state;return a(()=>{o(t,"controls",e()),o(t,"crossorigin",i())}),t}Yj(){const t=this.A instanceof HTMLVideoElement?this.A:document.createElement("video"),{controls:e,crossOrigin:i,poster:n}=this.a.$state,{$iosControls:r}=this.a,s=h(()=>e()||r()?"true":null),l=h(()=>n()&&(e()||r())?n():null);return a(()=>{o(t,"controls",s()),o(t,"crossorigin",i()),o(t,"poster",l())}),t}ek(){const t=this.A instanceof HTMLIFrameElement?this.A:document.createElement("iframe"),{controls:e}=this.a.$state,{$iosControls:i}=this.a,n=h(()=>e()||i());return a(()=>o(t,"tabindex",n()?null:-1)),t}Sm(){var e;if((e=this.A)!=null&&e.classList.contains("vds-google-cast"))return this.A;const t=document.createElement("div");return t.classList.add("vds-google-cast"),y(()=>import("./vidstack-DqoEU8C6-D51x94Q6.js"),__vite__mapDeps([0,1,2,3])).then(({insertContent:i})=>{i(t,this.a.$state)}),t}};d.tagName="media-provider";let m=d;const c=class c extends V(HTMLElement,C){};c.tagName="media-player",c.attrs={autoPlay:"autoplay",crossOrigin:"crossorigin",playsInline:"playsinline",preferNativeHLS:"prefer-native-hls",minLiveDVRWindow:"min-live-dvr-window"};let u=c;g(u);g(m);
