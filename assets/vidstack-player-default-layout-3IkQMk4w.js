const __vite__fileDeps=["assets/vidstack-CRlTZX3Z-PBDNdscv.js","assets/vidstack-DQ6dSZwe-BTtv5vWE.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var le=Object.getPrototypeOf;var re=Reflect.get;var nt=(e,t,a)=>re(le(e),a,t);import{M as ue,N as b,O as T,P as Ot,Q as x,R as Vt,S as de,U as P,V as W,W as v,X as Gt,Y as dt,Z as ct,$ as Lt,a0 as ce,a1 as pe,a2 as Bt,a3 as q,a4 as pt,a5 as me,a6 as Nt,_ as ve,a7 as fe,a8 as O,a9 as $e,aa as mt,ab as be,ac as ge,ad as ot,ae as he,af as Rt,ag as it,ah as ye,ai as xe,aj as Ce,ak as Se,al as ke,am as Ft}from"./app-DDhfM_IN.js";import{x as i,n as H,l as we,L as Wt,i as Te}from"./vidstack-rsZGrNIW-Cp0HsRb4.js";import{$ as n,L as De,I as Me,S as Kt}from"./vidstack-DDr92MCR-ROEDMcEh.js";const Qt=Gt();function r(){return dt(Qt)}const Pe={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};var Ae=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,vt=(e,t,a,s)=>{for(var o=s>1?void 0:s?Ie(t,a):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(o=(s?d(t,a,o):d(o))||o);return s&&o&&Ae(t,a,o),o};const Dt=class Dt extends ue{constructor(){super(...arguments),this.cn=b(()=>{const t=this.$props.when();return this.fn(t)}),this.$m=b(()=>{const t=this.$props.smallWhen();return this.fn(t)}),this.menuContainer=null}get isMatch(){return this.cn()}get isSmallLayout(){return this.$m()}onSetup(){this.a=T(),this.setAttributes({"data-match":this.cn,"data-sm":()=>this.$m()?"":null,"data-lg":()=>this.$m()?null:"","data-size":()=>this.$m()?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture});const t=this;Ot(Qt,{...this.$props,when:this.cn,smallWhen:this.$m,userPrefersAnnouncements:x(!0),userPrefersKeyboardAnimations:x(!0),get menuContainer(){return t.menuContainer}})}onAttach(t){Vt(t,this.$props.colorScheme)}fn(t){return t!=="never"&&(de(t)?t:b(()=>t(this.a.player.state))())}};Dt.props=Pe;let L=Dt;vt([ct],L.prototype,"menuContainer",2);vt([ct],L.prototype,"isMatch",1);vt([ct],L.prototype,"isSmallLayout",1);function Et(e,t){P(()=>{const{player:a}=T(),s=a.el;return s&&W(s,"data-layout",t()&&e),()=>s==null?void 0:s.removeAttribute("data-layout")})}function S(e,t){var a;return((a=e())==null?void 0:a[t])??t}function ft(){return n(()=>{const{translations:e,userPrefersAnnouncements:t}=r();return t()?i`<media-announcer .translations=${n(e)}></media-announcer>`:null})}function w(e,t=""){return i`<slot
    name=${`${e}-icon`}
    data-class=${`vds-icon vds-${e}-icon${t?` ${t}`:""}`}
  ></slot>`}function Q(e){return e.map(t=>w(t))}function u(e,t){return n(()=>S(e,t))}function $t({tooltip:e}){const{translations:t}=r(),{remotePlaybackState:a}=v(),s=n(()=>{const l=S(t,"AirPlay"),d=Lt(a());return`${l} ${d}`}),o=u(t,"AirPlay");return i`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${s}>
          ${w("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-airplay-tooltip-text">${o}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function _t({tooltip:e}){const{translations:t}=r(),{remotePlaybackState:a}=v(),s=n(()=>{const l=S(t,"Google Cast"),d=Lt(a());return`${l} ${d}`}),o=u(t,"Google Cast");return i`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${s}>
          ${w("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-google-cast-tooltip-text">${o}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Z({tooltip:e}){const{translations:t}=r(),a=u(t,"Play"),s=u(t,"Pause");return i`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${u(t,"Play")}
        >
          ${Q(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${a}</span>
        <span class="vds-pause-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Pt({tooltip:e,ref:t=fe}){const{translations:a}=r(),s=u(a,"Mute"),o=u(a,"Unmute");return i`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${u(a,"Mute")}
          ${H(t)}
        >
          ${Q(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${o}</span>
        <span class="vds-unmute-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function bt({tooltip:e}){const{translations:t}=r(),a=u(t,"Closed-Captions On"),s=u(t,"Closed-Captions Off");return i`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${u(t,"Captions")}
        >
          ${Q(["cc-on","cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-cc-on-tooltip-text">${s}</span>
        <span class="vds-cc-off-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Oe(){const{translations:e}=r(),t=u(e,"Enter PiP"),a=u(e,"Exit PiP");return i`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${u(e,"PiP")}
        >
          ${Q(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${t}</span>
        <span class="vds-pip-exit-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function zt({tooltip:e}){const{translations:t}=r(),a=u(t,"Enter Fullscreen"),s=u(t,"Exit Fullscreen");return i`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${u(t,"Fullscreen")}
        >
          ${Q(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${a}</span>
        <span class="vds-fs-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function At({backward:e,tooltip:t}){const{translations:a,seekStep:s}=r(),o=e?"Seek Backward":"Seek Forward",l=u(a,o);return i`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${n(()=>(e?-1:1)*s())}
          aria-label=${l}
        >
          ${w(e?"seek-backward":"seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${u(a,o)}
      </media-tooltip-content>
    </media-tooltip>
  `}function qt(){const{translations:e}=r(),{live:t}=v(),a=u(e,"Skip To Live"),s=u(e,"LIVE");return t()?i`
        <media-live-button class="vds-live-button" aria-label=${a}>
          <span class="vds-live-button-text">${s}</span>
        </media-live-button>
      `:null}function gt(){return n(()=>{const{download:e,translations:t}=r(),a=e();if(ce(a))return null;const{source:s,title:o}=v(),l=s(),d=pe({title:o(),src:l,download:a});return d?i`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${u(t,"Download")}
                href=${d.url+`?download=${d.name}`}
                download=${d.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${u(t,"Download")}
            </media-tooltip-content>
          </media-tooltip>
        `:null})}function ht(){const{translations:e}=r();return i`
    <media-captions
      class="vds-captions"
      .exampleText=${u(e,"Captions look like this")}
    ></media-captions>
  `}function M(){return i`<div class="vds-controls-spacer"></div>`}function Ut(e,t){return i`
    <media-menu-portal .container=${e} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function jt(e,t){let a=document.querySelector(`body > .${e}`);a||(a=document.createElement("div"),a.style.display="contents",a.classList.add(e),document.body.append(a));const{viewType:s}=v(),{colorScheme:o}=r();return P(()=>{if(!a)return;const l=t();W(a,"data-view-type",s()),W(a,"data-sm",l),W(a,"data-lg",!l),W(a,"data-size",l?"sm":"lg")}),Vt(a,o),a}function Ht({placement:e,tooltip:t,portal:a}){const{textTracks:s}=T(),{viewType:o,clipStartTime:l,clipEndTime:d}=v(),{translations:m,thumbnails:c,menuContainer:$,noModal:f,menuGroup:p,smallWhen:g}=r();if(b(()=>{var z;const V=l(),R=d()||1/0,_=x(null);Bt(s,"chapters",_.set);const F=(z=_())==null?void 0:z.cues.filter(Mt=>Mt.startTime<=R&&Mt.endTime>=V);return!(F!=null&&F.length)})())return null;const y=b(()=>f()?q(e):g()?null:q(e)),I=b(()=>!g()&&p()==="bottom"&&o()==="video"?26:0),N=x(!1);function st(){N.set(!0)}function C(){N.set(!1)}const k=i`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${n(y)}
      offset=${n(I)}
    >
      ${n(()=>N()?i`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${n(c)}
          >
            <template>
              <media-radio class="vds-chapter-radio vds-radio">
                <media-thumbnail class="vds-thumbnail"></media-thumbnail>
                <div class="vds-chapter-radio-content">
                  <span class="vds-chapter-radio-label" data-part="label"></span>
                  <span class="vds-chapter-radio-start-time" data-part="start-time"></span>
                  <span class="vds-chapter-radio-duration" data-part="duration"></span>
                </div>
              </media-radio>
            </template>
          </media-chapters-radio-group>
        `:null)}
    </media-menu-items>
  `;return i`
    <media-menu class="vds-chapters-menu vds-menu" @open=${st} @close=${C}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${u(m,"Chapters")}
          >
            ${w("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${pt(t)?n(t):t}
        >
          ${u(m,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${a?Ut($,k):k}
    </media-menu>
  `}function yt(e){const{style:t}=new Option;return t.color=e,t.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}let Ve=0;function D({label:e="",value:t="",children:a}){if(!e)return i`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${a}</div>
      </div>
    `;const s=`vds-menu-section-${++Ve}`;return i`
    <section class="vds-menu-section" role="group" aria-labelledby=${s}>
      <div class="vds-menu-section-title">
        <header id=${s}>${e}</header>
        ${t?i`<div class="vds-menu-section-value">${t}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${a}</div>
    </section>
  `}function E({label:e,children:t}){return i`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${e}</div>
      ${t}
    </div>
  `}function B({label:e,icon:t,hint:a}){return i`
    <media-menu-button class="vds-menu-item">
      ${w("menu-arrow-left","vds-menu-close-icon")}
      ${t?w(t,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${n(e)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${a?n(a):null} </span>
      ${w("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function Ge({value:e=null,options:t,hideLabel:a=!1,children:s=null,onChange:o=null}){function l(d){const{value:m,label:c}=d;return i`
      <media-radio class="vds-radio" value=${m}>
        ${w("menu-radio-check")}
        ${a?null:i`
              <span class="vds-radio-label" data-part="label">
                ${ot(c)?c:n(c)}
              </span>
            `}
        ${pt(s)?s(d):s}
      </media-radio>
    `}return i`
    <media-radio-group
      class="vds-radio-group"
      value=${ot(e)?e:e?n(e):""}
      @change=${o}
    >
      ${O(t)?t.map(l):n(()=>t().map(l))}
    </media-radio-group>
  `}function Le(e){return O(e)?e.map(t=>({label:t,value:t.toLowerCase()})):Object.keys(e).map(t=>({label:t,value:e[t]}))}function Y(){return i`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function X(){return i`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function J({label:e=null,value:t=null,upIcon:a="",downIcon:s="",children:o,isMin:l,isMax:d}){const m=e||t,c=[s?w(s,"down"):null,o,a?w(a,"up"):null];return i`
    <div
      class=${`vds-menu-item vds-menu-slider-item${m?" group":""}`}
      data-min=${n(()=>l()?"":null)}
      data-max=${n(()=>d()?"":null)}
    >
      ${m?i`
            <div class="vds-menu-slider-title">
              ${[e?i`<div>${e}</div>`:null,t?i`<div>${t}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${c}</div>
          `:c}
    </div>
  `}const xt={type:"color"},Be={type:"radio",values:{"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"}},Ne={type:"slider",min:0,max:400,step:25,upIcon:"menu-font-size-up",downIcon:"menu-font-size-down"},Ct={type:"slider",min:0,max:100,step:5,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},Re={type:"radio",values:["None","Drop Shadow","Raised","Depressed","Outline"]},St=Gt();function Fe(){return n(()=>{const{hasCaptions:e}=v(),{translations:t}=r();return e()?(Ot(St,{all:new Set}),i`
      <media-menu class="vds-font-menu vds-menu">
        ${B({label:()=>S(t,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[D({label:u(t,"Font"),children:[We(),Ke()]}),D({label:u(t,"Text"),children:[Qe(),_e(),Ee()]}),D({label:u(t,"Text Background"),children:[ze(),qe()]}),D({label:u(t,"Display Background"),children:[Ue(),je()]}),D({children:[He()]})]}
        </media-menu-items>
      </media-menu>
    `):null})}function We(){return A({group:"font",label:"Family",option:Be,defaultValue:"pro-sans",cssVarName:"font-family",getCssVarValue(e,t){var s;const a=e==="capitals"?"small-caps":"";return(s=t.el)==null||s.style.setProperty("--media-user-font-variant",a),Ze(e)}})}function Ke(){return A({group:"font",label:"Size",option:Ne,defaultValue:"100%",cssVarName:"font-size",getCssVarValue:tt})}function Qe(){return A({group:"text",label:"Color",option:xt,defaultValue:"#ffffff",cssVarName:"text-color",getCssVarValue(e){return`rgb(${yt(e)} / var(--media-user-text-opacity, 1))`}})}function Ee(){return A({group:"text",label:"Opacity",option:Ct,defaultValue:"100%",cssVarName:"text-opacity",getCssVarValue:tt})}function _e(){return A({group:"text",label:"Shadow",option:Re,defaultValue:"none",cssVarName:"text-shadow",getCssVarValue:Ye})}function ze(){return A({group:"text-bg",label:"Color",option:xt,defaultValue:"#000000",cssVarName:"text-bg",getCssVarValue(e){return`rgb(${yt(e)} / var(--media-user-text-bg-opacity, 1))`}})}function qe(){return A({group:"text-bg",label:"Opacity",option:Ct,defaultValue:"100%",cssVarName:"text-bg-opacity",getCssVarValue:tt})}function Ue(){return A({group:"display",label:"Color",option:xt,defaultValue:"#000000",cssVarName:"display-bg",getCssVarValue(e){return`rgb(${yt(e)} / var(--media-user-display-bg-opacity, 1))`}})}function je(){return A({group:"display",label:"Opacity",option:Ct,defaultValue:"0%",cssVarName:"display-bg-opacity",getCssVarValue:tt})}function He(){const{translations:e}=r(),t=()=>S(e,"Reset"),a=dt(St);function s(){a.all.forEach(o=>o())}return i`
    <button class="vds-menu-item" role="menuitem" @click=${s}>
      <span class="vds-menu-item-label">${n(t)}</span>
    </button>
  `}function A({group:e,label:t,option:a,defaultValue:s,cssVarName:o,getCssVarValue:l}){const{player:d}=T(),{translations:m}=r(),c=dt(St),$=`${e}-${t.toLowerCase()}`,f=x(s),p=()=>S(m,t),g=localStorage.getItem(`vds-player:${$}`);g&&h(g);function h(C){var k;f.set(C),localStorage.setItem(`vds-player:${$}`,C),(k=d.el)==null||k.style.setProperty(`--media-user-${o}`,(l==null?void 0:l(C,d))??C)}c.all.add(y),mt(()=>void c.all.delete(y));function y(){h(s),I()}function I(){d.dispatchEvent(new Event("vds-font-change"))}if(a.type==="color"){let C=function(k){h(k.target.value),I()};return E({label:n(p),children:i`
        <input
          class="vds-color-picker"
          type="color"
          .value=${n(f)}
          @input=${C}
        />
      `})}if(a.type==="slider"){let C=function(z){h(z.detail+"%"),I()};const{min:k,max:V,step:R,upIcon:_,downIcon:F}=a;return J({label:n(p),value:n(f),upIcon:_,downIcon:F,isMin:()=>f()===k+"%",isMax:()=>f()===V+"%",children:i`
        <media-slider
          class="vds-slider"
          min=${k}
          max=${V}
          step=${R}
          key-step=${R}
          .value=${n(()=>parseInt(f()))}
          aria-label=${n(p)}
          @value-change=${C}
          @drag-value-change=${C}
        >
          ${Y()}${X()}
        </media-slider>
      `})}const N=Le(a.values),st=()=>{var V;const C=f(),k=((V=N.find(R=>R.value===C))==null?void 0:V.label)||"";return S(m,ot(k)?k:k())};return i`
    <media-menu class=${`vds-${$}-menu vds-menu`}>
      ${B({label:p,hint:st})}
      <media-menu-items class="vds-menu-items">
        ${Ge({value:f,options:N,onChange({detail:C}){h(C),I()}})}
      </media-menu-items>
    </media-menu>
  `}function tt(e){return(parseInt(e)/100).toString()}function Ze(e){switch(e){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}function Ye(e){switch(e){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}function et({label:e,checked:t,defaultChecked:a=!1,storageKey:s,onChange:o}){const{translations:l}=r(),d=s?localStorage.getItem(s):null,m=x(!!(d??a)),c=x(!1),$=n(be(m)),f=u(l,e);s&&o(ge(m)),t&&P(()=>void m.set(t()));function p(y){(y==null?void 0:y.button)!==1&&(m.set(I=>!I),s&&localStorage.setItem(s,m()?"1":""),o(m(),y),c.set(!1))}function g(y){he(y)&&p()}function h(y){y.button===0&&c.set(!0)}return i`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${f}
      aria-checked=${$}
      data-active=${n(()=>c()?"":null)}
      @pointerup=${p}
      @pointerdown=${h}
      @keydown=${g}
    ></div>
  `}function Xe(){return n(()=>{const{translations:e}=r();return i`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${B({label:()=>S(e,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[D({children:[Je(),ta()]}),D({children:[Fe()]})]}
        </media-menu-items>
      </media-menu>
    `})}function Je(){const{userPrefersAnnouncements:e,translations:t}=r(),a="Announcements";return E({label:u(t,a),children:et({label:a,storageKey:"vds-player::announcements",onChange(s){e.set(s)}})})}function ta(){return n(()=>{const{translations:e,userPrefersKeyboardAnimations:t,noKeyboardAnimations:a}=r(),{viewType:s}=v();if(b(()=>s()!=="video"||a())())return null;const l="Keyboard Animations";return E({label:u(e,l),children:et({label:l,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(d){t.set(d)}})})})}function ea(){return n(()=>{const{noAudioGain:e,translations:t}=r(),{audioTracks:a,canSetAudioGain:s}=v();return b(()=>!(s()&&!e())&&a().length<=1)()?null:i`
      <media-menu class="vds-audio-menu vds-menu">
        ${B({label:()=>S(t,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[aa(),sa()]}
        </media-menu-items>
      </media-menu>
    `})}function aa(){return n(()=>{const{translations:e}=r(),{audioTracks:t}=v(),a=u(e,"Default");return b(()=>t().length<=1)()?null:D({children:i`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${B({label:()=>S(e,"Track")})}
          <media-menu-items class="vds-menu-items">
            <media-audio-radio-group
              class="vds-audio-track-radio-group vds-radio-group"
              empty-label=${a}
            >
              <template>
                <media-radio class="vds-audio-track-radio vds-radio">
                  <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                  <span class="vds-radio-label" data-part="label"></span>
                </media-radio>
              </template>
            </media-audio-radio-group>
          </media-menu-items>
        </media-menu>
      `})})}function sa(){return n(()=>{const{noAudioGain:e,translations:t}=r(),{canSetAudioGain:a}=v();if(b(()=>!a()||e())())return null;const{audioGain:o}=v();return D({label:u(t,"Boost"),value:n(()=>Math.round(((o()??1)-1)*100)+"%"),children:[J({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:na(),isMin:()=>((o()??1)-1)*100<=Zt(),isMax:()=>((o()??1)-1)*100===Yt()})]})})}function na(){const{translations:e}=r(),t=u(e,"Boost"),a=Zt,s=Yt,o=ia;return i`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${t}
      min=${n(a)}
      max=${n(s)}
      step=${n(o)}
      key-step=${n(o)}
    >
      ${Y()}${X()}
    </media-audio-gain-slider>
  `}function Zt(){const{audioGains:e}=r(),t=e();return O(t)?t[0]??0:t.min}function Yt(){const{audioGains:e}=r(),t=e();return O(t)?t[t.length-1]??300:t.max}function ia(){const{audioGains:e}=r(),t=e();return O(t)?t[1]-t[0]||25:t.step}function oa(){return n(()=>{const{translations:e}=r(),{hasCaptions:t}=v(),a=u(e,"Off");return t()?i`
      <media-menu class="vds-captions-menu vds-menu">
        ${B({label:()=>S(e,"Captions"),icon:"menu-captions"})}
        <media-menu-items class="vds-menu-items">
          <media-captions-radio-group
            class="vds-captions-radio-group vds-radio-group"
            off-label=${a}
          >
            <template>
              <media-radio class="vds-caption-radio vds-radio">
                <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                <span class="vds-radio-label" data-part="label"></span>
              </media-radio>
            </template>
          </media-captions-radio-group>
        </media-menu-items>
      </media-menu>
    `:null})}function la(){return n(()=>{const{translations:e}=r();return i`
      <media-menu class="vds-playback-menu vds-menu">
        ${B({label:()=>S(e,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[D({children:ra()}),ua(),ma()]}
        </media-menu-items>
      </media-menu>
    `})}function ra(){const{remote:e}=T(),{translations:t}=r(),a="Loop";return E({label:u(t,a),children:et({label:a,storageKey:"vds-player::user-loop",onChange(s,o){e.userPrefersLoopChange(s,o)}})})}function ua(){return n(()=>{const{translations:e}=r(),{canSetPlaybackRate:t,playbackRate:a}=v();return t()?D({label:u(e,"Speed"),value:n(()=>a()===1?S(e,"Normal"):a()+"x"),children:[J({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:ca(),isMin:()=>a()===Xt(),isMax:()=>a()===Jt()})]}):null})}function Xt(){const{playbackRates:e}=r(),t=e();return O(t)?t[0]??0:t.min}function Jt(){const{playbackRates:e}=r(),t=e();return O(t)?t[t.length-1]??2:t.max}function da(){const{playbackRates:e}=r(),t=e();return O(t)?t[1]-t[0]||.25:t.step}function ca(){const{translations:e}=r(),t=u(e,"Speed"),a=Xt,s=Jt,o=da;return i`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${t}
      min=${n(a)}
      max=${n(s)}
      step=${n(o)}
      key-step=${n(o)}
    >
      ${Y()}${X()}
    </media-speed-slider>
  `}function pa(){const{remote:e,qualities:t}=T(),{autoQuality:a,canSetQuality:s,qualities:o}=v(),{translations:l}=r(),d="Auto";return b(()=>!s()||o().length<=1)()?null:E({label:u(l,d),children:et({label:d,checked:a,onChange(c,$){c?e.requestAutoQuality($):e.changeQuality(t.selectedIndex,$)}})})}function ma(){return n(()=>{const{hideQualityBitrate:e,translations:t}=r(),{canSetQuality:a,qualities:s,quality:o}=v(),l=b(()=>!a()||s().length<=1),d=b(()=>$e(s()));return l()?null:D({label:u(t,"Quality"),value:n(()=>{var p,g;const m=(p=o())==null?void 0:p.height,c=e()?null:(g=o())==null?void 0:g.bitrate,$=c&&c>0?`${(c/1e6).toFixed(2)} Mbps`:null,f=S(t,"Auto");return m?`${m}p${$?` (${$})`:""}`:f}),children:[J({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:va(),isMin:()=>d()[0]===o(),isMax:()=>d().at(-1)===o()}),pa()]})})}function va(){const{translations:e}=r(),t=u(e,"Quality");return i`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${t}>
      ${Y()}${X()}
    </media-quality-slider>
  `}function te({placement:e,portal:t,tooltip:a}){return n(()=>{const{viewType:s}=v(),{translations:o,menuContainer:l,noModal:d,menuGroup:m,smallWhen:c}=r(),$=b(()=>d()?q(e):c()?null:q(e)),f=b(()=>!c()&&m()==="bottom"&&s()==="video"?26:0),p=x(!1);function g(){p.set(!0)}function h(){p.set(!1)}const y=i`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${n($)}
        offset=${n(f)}
      >
        ${n(()=>p()?[la(),Xe(),ea(),oa()]:null)}
      </media-menu-items>
    `;return i`
      <media-menu class="vds-settings-menu vds-menu" @open=${g} @close=${h}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${u(o,"Settings")}
            >
              ${w("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${pt(a)?n(a):a}
          >
            ${u(o,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${t?Ut(l,y):y}
      </media-menu>
    `})}function kt({orientation:e,tooltip:t}){return n(()=>{const{pointer:a,muted:s,canSetVolume:o}=v();if(a()==="coarse"&&!s())return null;if(!o())return Pt({tooltip:t});const l=x(void 0),d=me(l);return i`
      <div class="vds-volume" ?data-active=${n(d)} ${H(l.set)}>
        ${Pt({tooltip:t})}
        <div class="vds-volume-popup">${fa({orientation:e})}</div>
      </div>
    `})}function fa({orientation:e}={}){const{translations:t}=r(),a=u(t,"Volume");return i`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${a}
      orientation=${we(e)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function wt(){const e=x(void 0),t=x(0),{thumbnails:a,translations:s,sliderChaptersMinWidth:o,disableTimeSlider:l,seekStep:d,noScrubGesture:m}=r(),c=u(s,"Seek"),$=n(l),f=n(()=>t()<o()),p=n(a);return Nt(e,()=>{const g=e();g&&t.set(g.clientWidth)}),i`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${c}
      key-step=${n(d)}
      ?disabled=${$}
      ?no-swipe-gesture=${n(m)}
      ${H(e.set)}
    >
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${f}>
        <template>
          <div class="vds-slider-chapter">
            <div class="vds-slider-track"></div>
            <div class="vds-slider-track-fill vds-slider-track"></div>
            <div class="vds-slider-progress vds-slider-track"></div>
          </div>
        </template>
      </media-slider-chapters>
      <div class="vds-slider-thumb"></div>
      <media-slider-preview class="vds-slider-preview">
        <media-slider-thumbnail
          class="vds-slider-thumbnail vds-thumbnail"
          .src=${p}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function $a(){return i`
    <div class="vds-time-group">
      ${n(()=>{const{duration:e}=v();return e()?[i`<media-time class="vds-time" type="current"></media-time>`,i`<div class="vds-time-divider">/</div>`,i`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function ba(){return n(()=>{const{live:e,duration:t}=v();return e()?qt():t()?i`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function ee(){return n(()=>{const{live:e}=v();return e()?qt():$a()})}function ae(){return n(()=>{const{textTracks:e}=T(),{title:t,started:a}=v(),s=x(null);return Bt(e,"chapters",s.set),s()&&(a()||!t())?se():i`<media-title class="vds-chapter-title"></media-title>`})}function se(){return i`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}class ne extends De{async Pf(){const t=(await ve(()=>import("./vidstack-CRlTZX3Z-PBDNdscv.js"),__vite__mapDeps([0,1]))).icons,a={};for(const s of Object.keys(t))a[s]=Me({name:s,paths:t[s]});return a}}var G;let ga=(G=class extends L{},G.props={...nt(G,G,"props"),when:({viewType:t})=>t==="audio",smallWhen:({width:t})=>t<576},G);function ha(){return[ft(),ht(),i`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[At({backward:!0,tooltip:"top start"}),Z({tooltip:"top"}),At({tooltip:"top"}),ya(),wt(),ba(),kt({orientation:"vertical",tooltip:"top"}),bt({tooltip:"top"}),gt(),$t({tooltip:"top"}),xa()]}
        </media-controls-group>
      </media-controls>
    `]}function ya(){return n(()=>{let e=x(void 0),t=x(!1),a=T(),{title:s,started:o,currentTime:l,ended:d}=v(),{translations:m}=r(),c=xe(e),$=()=>o()||l()>0;const f=()=>{const h=d()?"Replay":$()?"Continue":"Play";return`${S(m,h)}: ${s()}`};P(()=>{var h;c()&&document.activeElement===document.body&&((h=a.player.el)==null||h.focus())});function p(){const h=e(),y=!!h&&!c()&&h.clientWidth<h.children[0].clientWidth;h&&Ce(h,"vds-marquee",y),t.set(y)}function g(){return i`
        <span class="vds-title-text">
          ${n(f)}${n(()=>$()?se():null)}
        </span>
      `}return Nt(e,p),s()?i`
          <span class="vds-title" title=${n(f)} ${H(e.set)}>
            ${[g(),n(()=>t()&&!c()?g():null)]}
          </span>
        `:M()})}function xa(){const e="top end";return[Ht({tooltip:"top",placement:e,portal:!0}),te({tooltip:"top end",placement:e,portal:!0})]}const U=class U extends Rt(Wt,ga){constructor(){super(...arguments),this.en=x(!1)}onSetup(){this.forwardKeepAlive=!1,this.a=T(),this.classList.add("vds-audio-layout"),this.menuContainer=jt("vds-audio-layout",()=>this.isSmallLayout);const{pointer:t}=this.a.$state;P(()=>{t()==="coarse"&&P(this.rn.bind(this))}),mt(()=>{var a;return(a=this.menuContainer)==null?void 0:a.remove()})}onConnect(){Et("audio",()=>this.isMatch),P(()=>{const t=this.menuContainer?[this,this.menuContainer]:[this];this.$props.customIcons()?new Kt(t).connect():new ne(t).connect()})}render(){return n(this.Zm.bind(this))}Zm(){return this.isMatch?ha():null}rn(){if(!this.en()){it(this,"pointerdown",this.sn.bind(this),{capture:!0});return}it(this,"pointerdown",t=>t.stopPropagation()),it(window,"pointerdown",this.tn.bind(this))}sn(t){const{target:a}=t;ye(a)&&a.closest(".vds-time-slider")&&(t.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),this.en.set(!0))}tn(){this.en.set(!1),this.removeAttribute("data-scrubbing")}};U.tagName="media-audio-layout",U.attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};let lt=U;const K=class K extends L{};K.props={...nt(K,K,"props"),when:({viewType:t})=>t==="video",smallWhen:({width:t,height:a})=>t<576||a<380};let rt=K;function ie(){return n(()=>{const e=T(),{noKeyboardAnimations:t,userPrefersKeyboardAnimations:a}=r();if(b(()=>t()||!a())())return null;const o=x(!1),{lastKeyboardAction:l}=e.$state;P(()=>{o.set(!!l());const p=setTimeout(()=>o.set(!1),500);return()=>{o.set(!1),window.clearTimeout(p)}});const d=b(()=>{var g;const p=(g=l())==null?void 0:g.action;return p&&o()?Se(p):null}),m=b(()=>`vds-kb-action${o()?"":" hidden"}`),c=b(Ca),$=b(()=>{const p=Sa();return p?ke(p):null});function f(){const p=$();return p?i`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${p}</div>
        </div>
      `:null}return i`
      <div class=${n(m)} data-action=${n(d)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${n(c)}</div>
        </div>
        ${n(()=>Te(l(),f()))}
      </div>
    `})}function Ca(){var s;const{$state:e}=T(),t=(s=e.lastKeyboardAction())==null?void 0:s.action,a=e.audioGain()??1;switch(t){case"toggleMuted":return e.muted()?"0%":It(e.volume(),a);case"volumeUp":case"volumeDown":return It(e.volume(),a);default:return""}}function It(e,t){return`${Math.round(e*t*100)}%`}function Sa(){var a;const{$state:e}=T();switch((a=e.lastKeyboardAction())==null?void 0:a.action){case"togglePaused":return e.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return e.muted()||e.volume()===0?"kb-mute-icon":e.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${e.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${e.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return e.hasCaptions()?`kb-cc-${e.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}function ka(){return[ft(),oe(),at(),ie(),ht(),i`<div class="vds-scrim"></div>`,i`
      <media-controls class="vds-controls">
        ${[Ta(),M(),i`<media-controls-group class="vds-controls-group"></media-controls-group>`,M(),i`
            <media-controls-group class="vds-controls-group">
              ${wt()}
            </media-controls-group>
          `,i`
            <media-controls-group class="vds-controls-group">
              ${[Z({tooltip:"top start"}),kt({orientation:"horizontal",tooltip:"top"}),ee(),ae(),bt({tooltip:"top"}),wa(),$t({tooltip:"top"}),_t({tooltip:"top"}),gt(),Oe(),zt({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function wa(){return n(()=>{const{menuGroup:e}=r();return e()==="bottom"?Tt():null})}function Ta(){return i`
    <media-controls-group class="vds-controls-group">
      ${n(()=>{const{menuGroup:e}=r();return e()==="top"?[M(),Tt()]:null})}
    </media-controls-group>
  `}function Da(){return[ft(),oe(),at(),ht(),ie(),i`<div class="vds-scrim"></div>`,i`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[$t({tooltip:"top start"}),_t({tooltip:"bottom start"}),M(),bt({tooltip:"bottom"}),gt(),Tt(),kt({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${M()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[M(),Z({tooltip:"top"}),M()]}
        </media-controls-group>

        ${M()}

        <media-controls-group class="vds-controls-group">
          ${[ee(),ae(),zt({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${wt()}
        </media-controls-group>
      </media-controls>
    `,Pa()]}function Ma(){return i`
    <div class="vds-load-container">
      ${[at(),Z({tooltip:"top"})]}
    </div>
  `}function Pa(){return n(()=>{const{duration:e}=v();return e()===0?null:i`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function at(){return i`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function Tt(){const{menuGroup:e,smallWhen:t}=r(),a=()=>e()==="top"||t()?"bottom":"top",s=b(()=>`${a()} ${e()==="top"?"end":"center"}`),o=b(()=>`${a()} end`);return[Ht({tooltip:s,placement:o,portal:!0}),te({tooltip:s,placement:o,portal:!0})]}function oe(){return n(()=>{const{noGestures:e}=r();return e()?null:i`
      <div class="vds-gestures">
        <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="pointerup"
          action="toggle:controls"
        ></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="dblpointerup"
          action="toggle:fullscreen"
        ></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
      </div>
    `})}const j=class j extends Rt(Wt,rt){onSetup(){this.forwardKeepAlive=!1,this.a=T(),this.classList.add("vds-video-layout"),this.menuContainer=jt("vds-video-layout",()=>this.isSmallLayout),mt(()=>{var t;return(t=this.menuContainer)==null?void 0:t.remove()})}onConnect(){Et("video",()=>this.isMatch),P(()=>{const t=this.menuContainer?[this,this.menuContainer]:[this];this.$props.customIcons()?new Kt(t).connect():new ne(t).connect()})}render(){return n(this.Zm.bind(this))}Zm(){const{load:t}=this.a.$props,{canLoad:a,streamType:s,nativeControls:o}=this.a.$state;return!o()&&this.isMatch?t()==="play"&&!a()?Ma():s()==="unknown"?at():this.isSmallLayout?Da():ka():null}};j.tagName="media-video-layout",j.attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};let ut=j;Ft(lt);Ft(ut);
