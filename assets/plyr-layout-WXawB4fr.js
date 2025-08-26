import{af as F,aQ as V,O as c,aa as q,aR as O,U as E,N as Q,aS as r,Q as v,ac as N,a1 as K,ag as j,_ as U,aT as P,ae as C,am as i}from"./app-CIf9klot.js";import{M as Z,a as H,b as z,d as J,c as W,e as X,f as Y,v as ee,g as te,h as ae,i as ne,k as se,j as le,l as re,m as oe,n as ie,o as ue,p as pe,q as de,s as ce,t as me,w as _e,u as ye}from"./vidstack-CdHBcYUs-Cq0Afwi4.js";import{L as $e,x as n,o as S}from"./vidstack-rsZGrNIW-Cp0HsRb4.js";import{$ as l,S as be,L as fe,I as ve}from"./vidstack-DDr92MCR-CD_zACs-.js";import{MediaPosterElement as ge}from"./vidstack-CyVF_YzU-Crj9jCnU.js";class we extends fe{async Pf(){const t=(await U(()=>import("./vidstack-DXxIKXmd-Dge3KT8k.js"),[])).icons,a={};for(const s of Object.keys(t))a[s]=ve({name:s,paths:t[s],viewBox:"0 0 18 18"});return a}}function g(e,t){var a;return((a=e())==null?void 0:a[t])??t}function he(){return xe()}function Me(){const e=c(),{load:t}=e.$props,{canLoad:a}=e.$state;return Q(()=>t()==="play"&&!a())()?[B(),x()]:[Te(),ke(),x(),Ee(),Qe(),Ne()]}function B(){const e=c(),{translations:t}=r(),{title:a}=e.$state,s=l(()=>`${g(t,"Play")}, ${a()}`);return n`
    <media-play-button
      class="plyr__control plyr__control--overlaid"
      aria-label=${s}
      data-plyr="play"
    >
      <slot name="play-icon"></slot>
    </button>
  `}function Te(){const{controls:e}=r();return l(()=>e().includes("play-large")?B():null)}function ke(){const{thumbnails:e,previewTime:t}=r();return n`
    <media-thumbnail
      .src=${l(e)}
      class="plyr__preview-scrubbing"
      time=${l(()=>t())}
    ></media-thumbnail>
  `}function x(){const e=c(),{poster:t}=e.$state,a=l(()=>`background-image: url("${t()}");`);return n`<div class="plyr__poster" style=${a}></div>`}function xe(){const e=new Set(["captions","pip","airplay","fullscreen"]),{controls:t}=r(),a=l(()=>t().filter(s=>!e.has(s)).map(L));return n`<div class="plyr__controls">${a}</div>`}function Ee(){const{controls:e}=r(),t=l(()=>e().map(L));return n`<div class="plyr__controls">${t}</div>`}function L(e){switch(e){case"airplay":return Pe();case"captions":return Ce();case"current-time":return qe();case"download":return Oe();case"duration":return R();case"fast-forward":return Ge();case"fullscreen":return Se();case"mute":case"volume":case"mute+volume":return Fe(e);case"pip":return Le();case"play":return Re();case"progress":return Ie();case"restart":return Ae();case"rewind":return De();case"settings":return Ke();default:return null}}function Pe(){const{translations:e}=r();return n`
    <media-airplay-button class="plyr__controls__item plyr__control" data-plyr="airplay">
      <slot name="airplay-icon"></slot>
      <span class="plyr__tooltip">${o(e,"AirPlay")}</span>
    </media-airplay-button>
  `}function Ce(){const{translations:e}=r(),t=o(e,"Disable captions"),a=o(e,"Enable captions");return n`
    <media-caption-button
      class="plyr__controls__item plyr__control"
      data-no-label
      data-plyr="captions"
    >
      <slot name="captions-on-icon" data-class="icon--pressed"></slot>
      <slot name="captions-off-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${t}</span>
      <span class="label--not-pressed plyr__tooltip">${a}</span>
    </media-caption-button>
  `}function Se(){const{translations:e}=r(),t=o(e,"Enter Fullscreen"),a=o(e,"Exit Fullscreen");return n`
    <media-fullscreen-button
      class="plyr__controls__item plyr__control"
      data-no-label
      data-plyr="fullscreen"
    >
      <slot name="enter-fullscreen-icon" data-class="icon--pressed"></slot>
      <slot name="exit-fullscreen-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-fullscreen-button>
  `}function Be(){const{translations:e}=r(),t=o(e,"Mute"),a=o(e,"Unmute");return n`
    <media-mute-button class="plyr__control" data-no-label data-plyr="mute">
      <slot name="muted-icon" data-class="icon--pressed"></slot>
      <slot name="volume-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-mute-button>
  `}function Le(){const{translations:e}=r(),t=o(e,"Enter PiP"),a=o(e,"Exit PiP");return n`
    <media-pip-button class="plyr__controls__item plyr__control" data-no-label data-plyr="pip">
      <slot name="pip-icon"></slot>
      <slot name="enter-pip-icon" data-class="icon--pressed"></slot>
      <slot name="exit-pip-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-pip-button>
  `}function Re(){const{translations:e}=r(),t=o(e,"Play"),a=o(e,"Pause");return n`
    <media-play-button class="plyr__controls__item plyr__control" data-no-label data-plyr="play">
      <slot name="pause-icon" data-class="icon--pressed"></slot>
      <slot name="play-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${a}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-play-button>
  `}function Ae(){const{translations:e}=r(),{remote:t}=c(),a=o(e,"Restart");function s(u){P(u)&&!C(u)||t.seek(0,u)}return n`
    <button
      type="button"
      class="plyr__control"
      data-plyr="restart"
      @pointerup=${s}
      @keydown=${s}
    >
      <slot name="restart-icon"></slot>
      <span class="plyr__tooltip">${a}</span>
    </button>
  `}function De(){const{translations:e,seekTime:t}=r(),a=l(()=>`${g(e,"Rewind")} ${t()}s`),s=l(()=>-1*t());return n`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${s}
      data-no-label
      data-plyr="rewind"
    >
      <slot name="rewind-icon"></slot>
      <span class="plyr__tooltip">${a}</span>
    </media-seek-button>
  `}function Ge(){const{translations:e,seekTime:t}=r(),a=l(()=>`${g(e,"Forward")} ${t()}s`),s=l(t);return n`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${s}
      data-no-label
      data-plyr="fast-forward"
    >
      <slot name="fast-forward-icon"></slot>
      <span class="plyr__tooltip">${a}</span>
    </media-seek-button>
  `}function Ie(){let e=c(),{duration:t,viewType:a}=e.$state,{translations:s,markers:u,thumbnails:m,seekTime:$,previewTime:_}=r(),d=o(s,"Seek"),y=v(null),b=l(()=>{const p=y();return p?n`<span class="plyr__progress__marker-label">${S(p.label)}<br /></span>`:null});function h(p){_.set(p.detail)}function A(){y.set(this)}function D(){y.set(null)}function G(){const p=m(),f=l(()=>a()==="audio");return p?n`
          <media-slider-preview class="plyr__slider__preview" ?no-clamp=${f}>
            <media-slider-thumbnail .src=${p} class="plyr__slider__preview__thumbnail">
              <span class="plyr__slider__preview__time-container">
                ${b}
                <media-slider-value class="plyr__slider__preview__time"></media-slider-value>
              </span>
            </media-slider-thumbnail>
          </media-slider-preview>
        `:n`
          <span class="plyr__tooltip">
            ${b}
            <media-slider-value></media-slider-value>
          </span>
        `}function I(){var f;const p=t();return Number.isFinite(p)?(f=u())==null?void 0:f.map(k=>n`
        <span
          class="plyr__progress__marker"
          @mouseenter=${A.bind(k)}
          @mouseleave=${D}
          style=${`left: ${k.time/p*100}%;`}
        ></span>
      `):null}return n`
    <div class="plyr__controls__item plyr__progress__container">
      <div class="plyr__progress">
        <media-time-slider
          class="plyr__slider"
          data-plyr="seek"
          pause-while-dragging
          key-step=${l($)}
          aria-label=${d}
          @media-seeking-request=${h}
        >
          <div class="plyr__slider__track"></div>
          <div class="plyr__slider__thumb"></div>
          <div class="plyr__slider__buffer"></div>
          ${l(G)}${l(I)}
        </media-time-slider>
      </div>
    </div>
  `}function Fe(e){return l(()=>{const t=e==="mute"||e==="mute+volume",a=e==="volume"||e==="mute+volume";return n`
      <div class="plyr__controls__item plyr__volume">
        ${[t?Be():null,a?Ve():null]}
      </div>
    `})}function Ve(){const{translations:e}=r(),t=o(e,"Volume");return n`
    <media-volume-slider class="plyr__slider" data-plyr="volume" aria-label=${t}>
      <div class="plyr__slider__track"></div>
      <div class="plyr__slider__thumb"></div>
    </media-volume-slider>
  `}function qe(){const e=c(),{translations:t,invertTime:a,toggleTime:s,displayDuration:u}=r(),m=v(N(a));function $(d){!s()||u()||P(d)&&!C(d)||m.set(y=>!y)}function _(){return l(()=>u()?R():null)}return l(()=>{const{streamType:d}=e.$state,y=o(t,"LIVE"),b=o(t,"Current time"),h=l(()=>!u()&&m());return d()==="live"||d()==="ll-live"?n`
          <media-live-button
            class="plyr__controls__item plyr__control plyr__live-button"
            data-plyr="live"
          >
            <span class="plyr__live-button__text">${y}</span>
          </media-live-button>
        `:n`
          <media-time
            type="current"
            class="plyr__controls__item plyr__time plyr__time--current"
            tabindex="0"
            role="timer"
            aria-label=${b}
            ?remainder=${h}
            @pointerup=${$}
            @keydown=${$}
          ></media-time>
          ${_()}
        `})}function R(){const{translations:e}=r(),t=o(e,"Duration");return n`
    <media-time
      type="duration"
      class="plyr__controls__item plyr__time plyr__time--duration"
      role="timer"
      tabindex="0"
      aria-label=${t}
    ></media-time>
  `}function Oe(){return l(()=>{const e=c(),{translations:t,download:a}=r(),{title:s,source:u}=e.$state,m=u(),$=a(),_=K({title:s(),src:m,download:$}),d=o(t,"Download");return _?n`
          <a
            class="plyr__controls__item plyr__control"
            href=${_.url+`?download=${_.name}`}
            download=${_.name}
            target="_blank"
          >
            <slot name="download-icon" />
            <span class="plyr__tooltip">${d}</span>
          </a>
        `:null})}function Qe(){return l(()=>{const{clickToPlay:e,clickToFullscreen:t}=r();return[e()?n`
            <media-gesture
              class="plyr__gesture"
              event="pointerup"
              action="toggle:paused"
            ></media-gesture>
          `:null,t()?n`
            <media-gesture
              class="plyr__gesture"
              event="dblpointerup"
              action="toggle:fullscreen"
            ></media-gesture>
          `:null]})}function Ne(){const e=c(),t=v(void 0),a=l(()=>{var s;return S((s=t())==null?void 0:s.text)});return E(()=>{const s=e.$state.textTrack();if(!s)return;function u(){t.set(s==null?void 0:s.activeCues[0])}return u(),j(s,"cue-change",u)}),n`
    <div class="plyr__captions" dir="auto">
      <span class="plyr__caption">${a}</span>
    </div>
  `}function Ke(){const{translations:e}=r(),t=o(e,"Settings");return n`
    <div class="plyr__controls__item plyr__menu">
      <media-menu>
        <media-menu-button class="plyr__control" data-plyr="settings">
          <slot name="settings-icon" />
          <span class="plyr__tooltip">${t}</span>
        </media-menu-button>
        <media-menu-items class="plyr__menu__container" placement="top end">
          <div><div>${[Ue(),Je(),Xe(),He()]}</div></div>
        </media-menu-items>
      </media-menu>
    </div>
  `}function w({label:e,children:t}){const a=v(!1);return n`
    <media-menu @open=${()=>a.set(!0)} @close=${()=>a.set(!1)}>
      ${je({label:e,open:a})}
      <media-menu-items>${t}</media-menu-items>
    </media-menu>
  `}function je({open:e,label:t}){const{translations:a}=r(),s=l(()=>`plyr__control plyr__control--${e()?"back":"forward"}`);function u(){const m=o(a,"Go back to previous menu");return l(()=>e()?n`<span class="plyr__sr-only">${m}</span>`:null)}return n`
    <media-menu-button class=${s} data-plyr="settings">
      <span class="plyr__menu__label" aria-hidden=${et(e)}>
        ${o(a,t)}
      </span>
      <span class="plyr__menu__value" data-part="hint"></span>
      ${u()}
    </media-menu-button>
  `}function Ue(){return w({label:"Audio",children:Ze()})}function Ze(){const{translations:e}=r();return n`
    <media-audio-radio-group empty-label=${o(e,"Default")}>
      <template>
        <media-radio class="plyr__control" data-plyr="audio">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-audio-radio-group>
  `}function He(){return w({label:"Speed",children:ze()})}function ze(){const{translations:e,speed:t}=r();return n`
    <media-speed-radio-group .rates=${t} normal-label=${o(e,"Normal")}>
      <template>
        <media-radio class="plyr__control" data-plyr="speed">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-speed-radio-group>
  `}function Je(){return w({label:"Captions",children:We()})}function We(){const{translations:e}=r();return n`
    <media-captions-radio-group off-label=${o(e,"Disabled")}>
      <template>
        <media-radio class="plyr__control" data-plyr="captions">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-captions-radio-group>
  `}function Xe(){return w({label:"Quality",children:Ye()})}function Ye(){const{translations:e}=r();return n`
    <media-quality-radio-group auto-label=${o(e,"Auto")}>
      <template>
        <media-radio class="plyr__control" data-plyr="quality">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-quality-radio-group>
  `}function et(e){return l(()=>e()?"true":"false")}function o(e,t){return l(()=>g(e,t))}const T=class T extends F($e,V){onSetup(){this.forwardKeepAlive=!1,this.a=c()}onConnect(){var t;(t=this.a.player.el)==null||t.setAttribute("data-layout","plyr"),q(()=>{var a;return(a=this.a.player.el)==null?void 0:a.removeAttribute("data-layout")}),O(this,this.a),E(()=>{this.$props.customIcons()?new be([this]).connect():new we([this]).connect()})}render(){return l(this.Zm.bind(this))}Zm(){const{viewType:t}=this.a.$state;return t()==="audio"?he():t()==="video"?Me():null}};T.tagName="media-plyr-layout";let M=T;i(M);i(ge);i(Z);i(H);i(z);i(J);i(W);i(X);i(Y);i(ee);i(te);i(ae);i(ne);i(se);i(le);i(re);i(oe);i(ie);i(ue);i(pe);i(de);i(ce);i(me);i(_e);i(ye);
