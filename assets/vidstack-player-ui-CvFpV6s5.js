import{M as l,an as wt,ao as Bt,aa as Ht,ap as d,Y as Lt,aq as Ct,af as e,ar as qt,as as Yt,at as Et,au as $t,O as u,U as c,Q as Pt,av as At,V as o,S as It,N as Mt,ah as yt,aw as Ft,ax as zt,ay as Ot,az as Vt,aA as Zt,ad as kt,aB as Dt,aC as Wt,aD as jt,aE as Jt,aF as Kt,aG as Qt,aH as Rt,aI as Ut,aJ as Xt,aK as Gt,aL as _t,aM as vt,aN as ts,aO as ss,aP as es,am as s}from"./app-p6TW303X.js";import{L as as,x as is}from"./vidstack-rsZGrNIW-Cp0HsRb4.js";import{r as St,M as ns,a as os,b as cs,c as rs,d as ls,e as hs,f as ms,g as ds,h as us,i as ps,j as xs,k as gs,l as fs,m as bs,n as Ns,o as Ts,p as Hs,q as Ls,s as Cs,t as ys,u as ks,v as vs,w as Ss}from"./vidstack-CdHBcYUs-CvPgnfRG.js";import{MediaPosterElement as ws}from"./vidstack-CyVF_YzU-VGTl8Gf9.js";class Bs extends l{onAttach(t){t.style.pointerEvents||wt(t,"pointer-events","auto")}}class qs extends l{constructor(){super(),new Bt}onConnect(t){Ht(d(()=>{if(!this.connectScope)return;this.xb();const i=Lt(Ct);Ht(()=>{const a=this.Bd();a&&i._e(a)})}))}xb(){const t=this.Bd(),i=Lt(Ct);t&&i.Ze(t)}Bd(){const t=this.el.firstElementChild;return(t==null?void 0:t.localName)==="button"||(t==null?void 0:t.getAttribute("role"))==="button"?t:this.el}}const j=class j extends e(HTMLElement,qt){};j.tagName="media-captions";let g=j;const J=class J extends e(HTMLElement,Yt){};J.tagName="media-gesture";let f=J;const K=class K extends e(HTMLElement,Et){};K.tagName="media-announcer";let b=K;const Q=class Q extends e(HTMLElement,$t){};Q.tagName="media-controls";let N=Q;const R=class R extends e(HTMLElement,Bs){};R.tagName="media-controls-group";let T=R;class Ys extends l{}const U=class U extends e(HTMLElement,Ys){onSetup(){this.a=u()}onConnect(){c(this.td.bind(this))}td(){const{title:t}=this.a.$state;this.textContent=t()}};U.tagName="media-title";let H=U;const X=class X extends l{};X.props={defaultText:""};let L=X;const G=class G extends e(HTMLElement,L){onSetup(){this.a=u(),this.bn=Pt("")}onConnect(){const t=this.a.textTracks;At(t,"chapters",this.bn.set),c(this.pn.bind(this))}pn(){const{defaultText:t}=this.$props;this.textContent=this.bn()||t()}};G.tagName="media-chapter-title";let C=G;const _=class _ extends l{onConnect(t){d(()=>{if(!this.connectScope)return;const i=t.querySelector("svg"),a=i.firstElementChild,n=a.nextElementSibling;c(this.Ha.bind(this,i,a,n))})}Ha(t,i,a){const{size:n,trackWidth:h,fillPercent:r}=this.$props;o(t,"width",n()),o(t,"height",n()),o(i,"stroke-width",h()),o(a,"stroke-width",h()),o(a,"stroke-dashoffset",100-r())}};_.props={size:96,trackWidth:8,fillPercent:50};let y=_;const tt=class tt extends e(as,y){render(){return is`
      <svg fill="none" viewBox="0 0 120 120" aria-hidden="true" data-part="root">
        <circle cx="60" cy="60" r="54" stroke="currentColor" data-part="track"></circle>
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          pathLength="100"
          stroke-dasharray="100"
          data-part="track-fill"
        ></circle>
      </svg>
    `}};tt.tagName="media-spinner";let k=tt;const st=class st extends l{};st.props={when:!1};let v=st;const et=class et extends e(HTMLElement,v){onSetup(){this.a=u()}onConnect(){c(this.qn.bind(this))}qn(){const t=this.firstElementChild,i=(t==null?void 0:t.localName)==="template",a=this.$props.when();if(!(It(a)?a:Mt(()=>a(this.a.player.state))())){i?(this.textContent="",this.appendChild(t)):yt(t)&&(t.style.display="none");return}i?this.append(t.content.cloneNode(!0)):yt(t)&&(t.style.display="")}};et.tagName="media-layout";let S=et;const at=class at extends e(HTMLElement,Ft){};at.tagName="media-google-cast-button";let w=at;const it=class it extends e(HTMLElement,zt){};it.tagName="media-toggle-button";let B=it;const nt=class nt extends e(HTMLElement,Ot){};nt.tagName="media-tooltip";let q=nt;const ot=class ot extends e(HTMLElement,qs){onConnect(){this.style.display="contents"}};ot.tagName="media-tooltip-trigger";let Y=ot;const ct=class ct extends e(HTMLElement,Vt){};ct.tagName="media-tooltip-content";let E=ct;const m=class m extends e(HTMLElement,Zt){};m.tagName="media-menu-portal",m.attrs={disabled:{converter(t){return kt(t)?t:t!==null}}};let $=m;const rt=class rt extends e(HTMLElement,Dt){onConnect(){St(this,(t,i)=>{const{cue:a,startTime:n,duration:h}=i,r=t.querySelector(".vds-thumbnail,media-thumbnail"),Nt=t.querySelector('[data-part="start-time"]'),Tt=t.querySelector('[data-part="duration"]');Nt&&(Nt.textContent=n),Tt&&(Tt.textContent=h),r&&(r.setAttribute("time",a.startTime+""),c(()=>{const x=this.$props.thumbnails();"src"in r?r.src=x:kt(x)&&r.setAttribute("src",x)}))})}};rt.tagName="media-chapters-radio-group";let P=rt;const lt=class lt extends e(HTMLElement,Wt){onConnect(){St(this)}};lt.tagName="media-audio-gain-radio-group";let A=lt;const ht=class ht extends e(HTMLElement,jt){};ht.tagName="media-radio";let I=ht;const mt=class mt extends e(HTMLElement,Jt){};mt.tagName="media-radio-group";let M=mt;const dt=class dt extends e(HTMLElement,Kt){};dt.tagName="media-slider";let F=dt;const Es=ss('<video muted playsinline preload="none" style="max-width: unset;"></video>'),ut=class ut extends e(HTMLElement,Qt){constructor(){super(...arguments),this.m=this.an()}onSetup(){this.a=u(),this.$state.video.set(this.m)}onConnect(){const{canLoad:t}=this.a.$state,{src:i,crossOrigin:a}=this.$state;this.m.parentNode!==this&&this.prepend(this.m),c(()=>{o(this.m,"crossorigin",a()),o(this.m,"preload",t()?"auto":"none"),o(this.m,"src",i())})}an(){return Rt(Es)}};ut.tagName="media-slider-video";let z=ut;const pt=class pt extends e(HTMLElement,Ut){};pt.tagName="media-audio-gain-slider";let O=pt;const xt=class xt extends e(HTMLElement,Xt){};xt.tagName="media-speed-slider";let V=xt;const gt=class gt extends e(HTMLElement,Gt){};gt.tagName="media-quality-slider";let Z=gt;const ft=class ft extends e(HTMLElement,_t){constructor(){super(...arguments),this.Ym=null}onConnect(){d(()=>{if(!this.connectScope)return;const t=this.querySelector("template");t&&(this.Ym=t,c(this.un.bind(this)))})}un(){if(!this.Ym)return;const t=vt(this.Ym,this.cues.length||1);this.setRefs(t)}};ft.tagName="media-slider-chapters";let D=ft;class $s extends l{}const bt=class bt extends e(HTMLElement,$s){constructor(){super(...arguments),this.Ym=null}onConnect(t){d(()=>{this.connectScope&&(this.Ym=t.querySelector("template"),this.Ym&&c(this.Zm.bind(this)))})}Zm(){if(!this.Ym)return;const{min:t,max:i,step:a}=ts(es),n=(i()-t())/a();vt(this.Ym,Math.floor(n)+1)}};bt.tagName="media-slider-steps";let W=bt;s(S);s(N);s(T);s(ws);s(b);s(q);s(Y);s(E);s(ns);s(os);s(cs);s(rs);s(ls);s(hs);s(ms);s(w);s(B);s(F);s(O);s(ds);s(us);s(V);s(Z);s(D);s(W);s(ps);s(xs);s(gs);s(z);s(fs);s(bs);s($);s(Ns);s(Ts);s(Hs);s(Ls);s(Cs);s(A);s(ys);s(P);s(M);s(I);s(f);s(ks);s(g);s(vs);s(Ss);s(H);s(C);s(k);
