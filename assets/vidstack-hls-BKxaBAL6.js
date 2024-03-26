import{aQ as w,i as g,aR as L,p as f,aS as p,x as y,e as S,aG as d,aO as k,aP as m,aH as c,aT as C,aI as E,aU as D,aV as I,r as _,F as R}from"./vidstack-D1JzjGR7-B4tvi1AI.js";import{VideoProvider as $}from"./vidstack-video-C7OtotjF.js";import{R as A}from"./vidstack-BhYx9Fjk-C_s7aido.js";import"./app-Cv87VliG.js";import"./vidstack-html-CWiFWt_n.js";const x=h=>R(h);class O{constructor(t,i){this.m=t,this.b=i,this.g=null,this.nd=null,this.od={},this.pd=new Set,this.yk=-1}get instance(){return this.g}setup(t){const{streamType:i}=this.b.$state,e=f(i).includes("live"),n=f(i).includes("ll-");this.g=new t({lowLatencyMode:n,backBufferLength:n?4:e?8:void 0,renderTextTracksNatively:!1,...this.od});const s=this.Sg.bind(this);for(const o of Object.values(t.Events))this.g.on(o,s);this.g.on(t.Events.ERROR,this.U.bind(this));for(const o of this.pd)o(this.g);this.b.player.dispatch("hls-instance",{detail:this.g}),this.g.attachMedia(this.m),this.g.on(t.Events.FRAG_LOADING,this.Bk.bind(this)),this.g.on(t.Events.AUDIO_TRACK_SWITCHED,this.Tg.bind(this)),this.g.on(t.Events.LEVEL_SWITCHED,this.Ug.bind(this)),this.g.on(t.Events.LEVEL_LOADED,this.Vg.bind(this)),this.g.on(t.Events.NON_NATIVE_TEXT_TRACKS_FOUND,this.Wg.bind(this)),this.g.on(t.Events.CUES_PARSED,this.Xg.bind(this)),this.b.qualities[p.Za]=this.Yg.bind(this),y(this.b.qualities,"change",this.fb.bind(this)),y(this.b.audioTracks,"change",this.Zg.bind(this)),this.nd=S(this._g.bind(this))}_g(){if(!this.b.$state.live())return;const t=new A(this.$g.bind(this));return t.Bb(),t.ra.bind(t)}$g(){var t;this.b.$state.liveSyncPosition.set(((t=this.g)==null?void 0:t.liveSyncPosition)??1/0)}Sg(t,i){var e;(e=this.b.player)==null||e.dispatch(new d(x(t),{detail:i}))}Wg(t,i){const e=new d(t,{detail:i});let n=-1;for(let s=0;s<i.tracks.length;s++){const o=i.tracks[s],r=o.subtitleTrack??o.closedCaptions,u=new k({id:`hls-${o.kind}${s}`,src:r==null?void 0:r.url,label:o.label,language:r==null?void 0:r.lang,kind:o.kind,default:o.default});u[m.M]=2,u[m.Ua]=()=>{u.mode==="showing"?(this.g.subtitleTrack=s,n=s):n===s&&(this.g.subtitleTrack=-1,n=-1)},this.b.textTracks.add(u,e)}}Xg(t,i){const e=this.b.textTracks.getById(`hls-${i.track}`);if(!e)return;const n=new d(t,{detail:i});for(const s of i.cues)s.positionAlign="auto",e.addCue(s,n)}Tg(t,i){const e=this.b.audioTracks[i.id];if(e){const n=new d(t,{detail:i});this.b.audioTracks[c.pa](e,!0,n)}}Ug(t,i){const e=this.b.qualities[i.level];if(e){const n=new d(t,{detail:i});this.b.qualities[c.pa](e,!0,n)}}Vg(t,i){var v;if(this.b.$state.canPlay())return;const{type:e,live:n,totalduration:s,targetduration:o}=i.details,r=new d(t,{detail:i});this.b.delegate.c("stream-type-change",n?e==="EVENT"&&Number.isFinite(s)&&o>=10?"live:dvr":"live":"on-demand",r),this.b.delegate.c("duration-change",s,r);const u=this.g.media;this.g.currentLevel===-1&&this.b.qualities[p.Ya](!0,r);for(const a of this.g.audioTracks){const l={id:a.id.toString(),label:a.name,language:a.lang||"",kind:"main"};this.b.audioTracks[c.oa](l,r)}for(const a of this.g.levels){const l={id:((v=a.id)==null?void 0:v.toString())??a.height+"p",width:a.width,height:a.height,codec:a.codecSet,bitrate:a.bitrate};this.b.qualities[c.oa](l,r)}u.dispatchEvent(new d("canplay",{trigger:r}))}U(t,i){var e;if(i.fatal)switch(i.type){case"networkError":this.Ck(i.error);break;case"mediaError":(e=this.g)==null||e.recoverMediaError();break;default:this.Ak(i.error);break}}Bk(){this.yk>=0&&this.zk()}Ck(t){var i;this.zk(),(i=this.g)==null||i.startLoad(),this.yk=window.setTimeout(()=>{this.yk=-1,this.Ak(t)},5e3)}zk(){clearTimeout(this.yk),this.yk=-1}Ak(t){var i;(i=this.g)==null||i.destroy(),this.g=null,this.b.delegate.c("error",{message:t.message,code:1,error:t})}Yg(){this.g&&(this.g.currentLevel=-1)}fb(){const{qualities:t}=this.b;!this.g||t.auto||(this.g[t.switch+"Level"]=t.selectedIndex,C&&(this.m.currentTime=this.m.currentTime))}Zg(){const{audioTracks:t}=this.b;this.g&&this.g.audioTrack!==t.selectedIndex&&(this.g.audioTrack=t.selectedIndex)}Dk(t){var i;g(t.src)&&(this.zk(),(i=this.g)==null||i.loadSource(t.src))}ah(){var t,i;this.zk(),this.b&&(this.b.qualities[p.Za]=void 0),(t=this.g)==null||t.destroy(),this.g=null,(i=this.nd)==null||i.call(this),this.nd=null}}class q{constructor(t,i,e){this.W=t,this.b=i,this.Ca=e,this.bh()}async bh(){const t={onLoadStart:this.Ea.bind(this),onLoaded:this.qd.bind(this),onLoadError:this.ch.bind(this)};let i=await V(this.W,t);if(E(i)&&!g(this.W)&&(i=await H(this.W,t)),!i)return null;if(!i.isSupported()){const e="[vidstack] `hls.js` is not supported in this environment";return this.b.player.dispatch(new d("hls-unsupported")),this.b.delegate.c("error",{message:e,code:4}),null}return i}Ea(){this.b.player.dispatch(new d("hls-lib-load-start"))}qd(t){this.b.player.dispatch(new d("hls-lib-loaded",{detail:t})),this.Ca(t)}ch(t){const i=D(t);this.b.player.dispatch(new d("hls-lib-load-error",{detail:i})),this.b.delegate.c("error",{message:i.message,code:4,error:i})}}async function H(h,t={}){var i,e,n,s,o;if(!E(h)){if((i=t.onLoadStart)==null||i.call(t),h.prototype&&h.prototype!==Function)return(e=t.onLoaded)==null||e.call(t,h),h;try{const r=(n=await h())==null?void 0:n.default;if(r&&r.isSupported)(s=t.onLoaded)==null||s.call(t,r);else throw Error("");return r}catch(r){(o=t.onLoadError)==null||o.call(t,r)}}}async function V(h,t={}){var i,e,n;if(g(h)){(i=t.onLoadStart)==null||i.call(t);try{if(await I(h),!_(window.Hls))throw Error("");const s=window.Hls;return(e=t.onLoaded)==null||e.call(t,s),s}catch(s){(n=t.onLoadError)==null||n.call(t,s)}}}const N="https://cdn.jsdelivr.net",b=class b extends ${constructor(){super(...arguments),this.$$PROVIDER_TYPE="HLS",this.Xe=null,this.d=new O(this.video,this.b),this.Gb=`${N}/npm/hls.js@^1.5.0/dist/hls.min.js`}get ctor(){return this.Xe}get instance(){return this.d.instance}get type(){return"hls"}get canLiveSync(){return!0}get config(){return this.d.od}set config(t){this.d.od=t}get library(){return this.Gb}set library(t){this.Gb=t}preconnect(){g(this.Gb)&&L(this.Gb)}setup(){super.setup(),new q(this.Gb,this.b,t=>{this.Xe=t,this.d.setup(t),this.b.delegate.c("provider-setup",this);const i=f(this.b.$state.source);i&&this.loadSource(i)})}async loadSource(t,i){if(!g(t.src)){this.Bn();return}this.a.preload=i||"",this.yn(t,"application/x-mpegurl"),this.d.Dk(t),this.V=t}onInstance(t){const i=this.d.instance;return i&&t(i),this.d.pd.add(t),()=>this.d.pd.delete(t)}destroy(){this.d.ah()}};b.supported=w();let T=b;export{T as HLSProvider};
