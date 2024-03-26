function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/vidstack-google-cast-BOGMJQyr.js","assets/vidstack-D1JzjGR7-B4tvi1AI.js","assets/app-Cv87VliG.js","assets/vidstack-BhYx9Fjk-C_s7aido.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as l}from"./app-Cv87VliG.js";import{a_ as d,aT as g,aB as p,a$ as u,p as m,aU as C,aG as f,aV as h}from"./vidstack-D1JzjGR7-B4tvi1AI.js";function w(){return"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"}function v(){var a;return!!((a=window.cast)!=null&&a.framework)}function E(){var a,e;return!!((e=(a=window.chrome)==null?void 0:a.cast)!=null&&e.isAvailable)}function i(){return s().getCastState()===cast.framework.CastState.CONNECTED}function s(){return window.cast.framework.CastContext.getInstance()}function c(){return s().getCurrentSession()}function y(){var a;return(a=c())==null?void 0:a.getSessionObj().media[0]}function O(a){var t;return((t=y())==null?void 0:t.media.contentId)===(a==null?void 0:a.src)}function _(){return{language:"en-US",autoJoinPolicy:chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,receiverApplicationId:chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,resumeSavedSession:!0,androidReceiverCompatible:!0}}function S(a){return`Google Cast Error Code: ${a}`}function b(a,e){return d(s(),a,e)}class I{constructor(){this.name="google-cast"}get cast(){return s()}mediaType(){return"video"}canPlay(e){return g&&!p&&u(e)}async prompt(e){var o;let t;try{const r=await this.Pl(e);this.aa||(this.aa=new cast.framework.RemotePlayer,new cast.framework.RemotePlayerController(this.aa)),t=e.player.createEvent("google-cast-prompt-open",{trigger:r}),e.player.dispatchEvent(t),this.pm(e,"connecting",t),await this.Rl(m(e.$props.googleCast)),e.$state.remotePlaybackInfo.set({deviceName:(o=c())==null?void 0:o.getCastDevice().friendlyName}),i()&&this.pm(e,"connected",t)}catch(r){const n=C(r);throw this.pm(e,i()?"connected":"disconnected",new f("google-cast-prompt-error",{detail:n})),n}finally{e.player.dispatch("google-cast-prompt-close",{trigger:t})}}async load(e){if(!this.aa)throw Error("[vidstack] google cast player was not initialized");return new(await l(()=>import("./vidstack-google-cast-BOGMJQyr.js"),__vite__mapDeps([0,1,2,3]))).GoogleCastProvider(this.aa,e)}async Pl(e){if(v())return;const t=e.player.createEvent("google-cast-load-start");e.player.dispatch(t),await h(w()),await customElements.whenDefined("google-cast-launcher");const o=e.player.createEvent("google-cast-loaded",{trigger:t});if(e.player.dispatch(o),!E())throw Error("Cast not available.");return o}async Rl(e){this.Tl(e);const t=await this.cast.requestSession();if(t)throw Error(S(t))}Tl(e){var t;(t=this.cast)==null||t.setOptions({..._(),...e})}pm(e,t,o){const r={type:"google-cast",state:t};e.delegate.c("remote-playback-change",r,o)}}const R=Object.freeze(Object.defineProperty({__proto__:null,GoogleCastLoader:I},Symbol.toStringTag,{value:"Module"}));export{c as a,y as b,S as c,s as g,O as h,b as l,R as v};
