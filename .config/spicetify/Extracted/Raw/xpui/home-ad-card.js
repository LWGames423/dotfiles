"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[599,7968],{86904:(e,a,t)=>{t.d(a,{U:()=>l});var s=t(14056),r=t(70190),n=t(65325),i=t(13274);const l=({menu:e,onClick:a,"aria-label":t})=>(0,i.jsx)(n.b,{menu:e,children:(0,i.jsx)(r.e,{size:r.M.xs,label:s.Ru.get("more"),ariaLabel:t,onClick:a})})},17968:(e,a,t)=>{t.r(a),t.d(a,{CtaButton:()=>d,default:()=>c});var s=t(79474),r=t(98258),n=t(59841),i=t(61080),l=t(10072),o=t(13274);const d=({"aria-label":e,text:a,onClick:t,clickUrl:d,backgroundColor:c,className:m})=>{const u=(0,s.useMemo)((()=>{if(!c)return;const e=(0,r.mA)(c);return{...e,text:{...e.text,base:n.solidWhite200}}}),[c]);return(0,o.jsx)(l.N,{"aria-label":e||a,className:m,"data-testid":"ad-cta-button",to:d,onClick:e=>{e.stopPropagation(),t()},children:(0,o.jsx)(i.$,{UNSAFE_colorSet:u,colorSet:"invertedLight",size:"small",children:a})})},c=d},98412:(e,a,t)=>{t.r(a),t.d(a,{HomeAdCard:()=>Se,default:()=>Ve});var s=t(79474),r=t(97500),n=t.n(r),i=t(90923),l=t(30323),o=t(6514),d=t(41975),c=t(52058),m=t(14056),u=t(86904),y=t(10388),h=t(44366),v=t(18702),x=t(95999),f=t(20273),b=t(53603),k=t(13274);const g=(0,s.memo)((function({onDismissAdClick:e}){return(0,k.jsx)(x.pZ,{value:"home-ad",children:(0,k.jsx)(f.W,{children:(0,k.jsx)(x.pZ,{value:"dismiss",children:(0,k.jsx)(b.D,{role:"menuitem",leadingIcon:(0,k.jsx)(v.P,{size:"small"}),"aria-label":m.Ru.get("ad-formats.context-menu.not-interested"),onClick:e,children:m.Ru.get("ad-formats.context-menu.not-interested")})})})})}));var P=t(94710),j=t(3273),A=t(17968);const p="kvXKrQ08Ar7oAsMVJNOg",C="dBm03FPk9rHjecHq1Qnn",E=({className:e,homeAd:a,dismiss:t})=>{const s=(0,P.vh)(),r=(0,y.L)(),i=n()(p,e),{extractedHomeAdColor:[o]}=(0,l.bT)(),v=(0,h.w)(h.P),x=(0,j.A)((()=>{t();const e="collapsed";r.log(`event_${e}`,a),a.trackingEvents[e]?.urls.forEach(v),s.send((0,c.F)({ad_id:a.adId,advertiser:a.metadata.advertiser,creative_id:a.metadata.creative_id,event:"dislike_HPTO",format:(0,d.gh)(a.format),line_item_id:a.metadata.line_item_id}))})),f=(0,j.A)((()=>{const e="clicked";r.log(`event_${e}`,a),a.trackingEvents[e]?.urls.forEach(v)})),b=a.metadata.buttonText||m.Ru.get("ad-formats.learnMore");return(0,k.jsxs)("div",{className:i,children:[a.clickthroughUrl&&(0,k.jsx)(A.CtaButton,{className:C,"aria-label":`${b}, link`,text:b,clickUrl:a.clickthroughUrl,onClick:f,backgroundColor:o?.colorDark}),(0,k.jsx)(u.U,{"aria-label":"More options, button",menu:(0,k.jsx)(g,{onDismissAdClick:x})})]})};var N=t(98764),_=t(10072);const U="lscHwwYXzt0CrEPAQgu3",R=({className:e,description:a,label:t,homeAd:s})=>{const r=n()(U,e),{clickthroughUrl:i,metadata:{tagline:l}}=s,o=(0,h.w)(h.P),d=(0,y.L)(),c=(0,j.A)((()=>{if(!i)return;const e="clicked";d.log(`event_${e}`,s),s.trackingEvents[e]?.urls.forEach(o)}));return(0,k.jsxs)("div",{className:r,children:[t&&(0,k.jsx)(N.E,{variant:"bodyMedium",children:t}),l&&(0,k.jsx)(_.N,{to:i,onClick:c,"aria-label":`${l}, link`,children:(0,k.jsx)(N.E,{variant:"titleMedium",children:l})}),a&&(0,k.jsx)(N.E,{variant:"bodySmall",children:a})]})};var w=t(2394),M=t(48761),S=t(75783);const V="rLoSLtWsmOdhdiNz3r17",L=({className:e,homeAd:a})=>{const{metadata:{advertiser:t,logoImage:s},clickthroughUrl:r}=a,i=(0,h.w)(h.P),l=(0,y.L)(),o=(0,j.A)((()=>{if(!r)return;const e="clicked";l.log(`event_${e}`,a),a.trackingEvents[e]?.urls.forEach(i)}));return(0,k.jsx)(_.N,{"aria-label":`${t}, Advertisement, link`,className:n()(e,V),to:r,onClick:o,children:(0,k.jsx)(w.v,{id:"advertiser-info",isInteractive:!1,media:s,padding:"0",subtitle:(0,k.jsx)(M.j,{children:m.Ru.get("ad-formats.advertisement")}),title:(0,k.jsx)(S.d,{children:t})})})};var O=t(38074),T=t(29037),z=t(72423),B=t(83856);function F(e){for(const{imageFileId:a,url:t}of e.display){if(a){const e=(0,B.CC)(a).toURI();if(e)return e}if(t)return t}}const I="acMBKZuLlROUat0sL2a_",W=({className:e,icon:a,...t})=>(0,k.jsx)("div",{className:n()(I,e),...t,children:a});function $(e){const{imageUrlToExtractHomeAdColorFrom:[,a]}=(0,l.bT)();(0,s.useEffect)((()=>a(e)),[e,a]),(0,s.useEffect)((()=>()=>a(void 0)),[a])}const D="lNTmTLY8RhoIIjrz4eyI",H=({className:e,displayAssetUrl:a,homeAd:t})=>{const r=(0,h.w)(h.P),n=(0,y.L)(),i=(0,j.A)((()=>{const e="viewed";n.log(`event_${e}`,t),t.trackingEvents[e]?.urls.forEach(r)})),l=(0,j.A)((()=>{const e="clicked";n.log(`event_${e}`,t),t.trackingEvents[e]?.urls.forEach(r)}));return(0,s.useEffect)((()=>i()),[i]),(0,k.jsx)(_.N,{to:t.clickthroughUrl,className:e,onClick:l,children:(0,k.jsx)(z._,{className:D,testid:"home-ad-display-asset",loading:"lazy",src:a,children:(0,k.jsx)(W,{icon:(0,k.jsx)(O.b,{})})})})},q=({className:e,homeAd:a})=>{const t=(0,s.useMemo)((()=>F(a)),[a]);return $(t),t?(0,k.jsx)(H,{className:e,homeAd:a,displayAssetUrl:t}):(0,k.jsx)(W,{className:e,icon:(0,k.jsx)(T.c,{size:"large"}),"data-testid":"home-ad-display-asset-fallback"})};var X=t(28072),J=t(70964);const Y="JS7sJfGVY9xjxR3eWJVq",Z=(0,s.memo)((({homeVideoAd:e})=>{const a=(0,s.useMemo)((()=>F(e)),[e]);return a?(0,k.jsx)(H,{className:Y,displayAssetUrl:a,homeAd:e}):(0,k.jsx)(W,{className:Y,icon:(0,k.jsx)(O.b,{})})}));var G=t(18346);var Q=t(52856);var K=t(30232),ee=t(69632);const ae=s.useState;var te=t(8036);var se=t(61080),re=t(59088),ne=t(37862),ie=t(37463),le=t(54015),oe=t(87687);const de="oedSb2mjjyBaeN9twoSA",ce="FLXTIzOmNsF6knFRXaZS",me="GJ9evYudn2W7Lr5yMA5i",ue="EjfHeXS7GNvs18SAYXe2",ye=({betamaxPlayer:e,muted:a,paused:t,isContextPlayerVideoPlaying:s,isContextPlayerPlaybackPaused:r})=>{const n=(0,oe.K)();return(0,k.jsxs)("div",{className:de,children:[(0,k.jsx)("div",{className:me,children:a?(0,k.jsx)(se.$,{"aria-label":"Unmute, button",colorSet:"overMedia",iconOnly:re.X,onClick:()=>{e.setAudioDisabled(!1),!n.getState()?.item||s||r||n.pause()},size:"small"}):(0,k.jsx)(se.$,{"aria-label":"Mute, button",colorSet:"overMedia",iconOnly:ne.z,onClick:()=>e.setAudioDisabled(!0),size:"small"})}),(0,k.jsx)("div",{className:ue,children:t?(0,k.jsx)(se.$,{"aria-label":"Play, button",colorSet:"overMedia",iconOnly:ie.A,onClick:()=>{e.resume(),n.getState()?.item&&s&&!r&&n.pause()},size:"medium"}):(0,k.jsx)(se.$,{"aria-label":"Pause, button",className:ce,colorSet:"overMedia",iconOnly:le._,onClick:()=>e.pause(),size:"medium"})})]})};var he=t(74505),ve=t(78746),xe=t(91373);function fe(e,a,t){return new he.A({mediaExtensions:[new ve.h(e)],factories:[t]}).createBetamaxPlayer({videoElementConfig:{controls:!1,loop:!0},containerElement:a,networkConfiguration:{getAuthorizationHeader:async()=>{const{accessToken:e,tokenType:a}=await xe.l.get("sp://oauth/v2/token");return`${a} ${e}`}}})}async function be(e,{mediaUrl:a,playback_id:t,playWhenReady:s}){return await e.play({mediaUrl:a,isRoyaltyMedia:!1,metadata:{playback_id:t}},{playWhenReady:s})}const ke=({assetUrl:e,homeVideoAd:a,videoContainerElement:t,createVideoPlayer:r=fe,playVideoPlayer:n=be})=>{const{betamaxPlayer:i,setBetamaxPlayer:l}=function(){const[e,a]=ae((()=>Promise.resolve(void 0)));return{betamaxPlayer:e,setBetamaxPlayer:a}}(),o=(0,h.w)(h.P),d=(0,y.L)(),{isContextPlayerVideoPlaying:c,isContextPlayerPlaybackPaused:m}={isContextPlayerVideoPlaying:(0,K.o)(ee.A3),isContextPlayerPlaybackPaused:(0,K.o)((e=>e?.isPaused))},u=!c||m,{muted:v,paused:x,loading:f,errored:b=!0,observerFactory:g}=function(e,a,t,r){const[n,i]=(0,s.useState)(!0),[l,o]=(0,s.useState)(!r),[d,c]=(0,s.useState)(!0),[m,u]=(0,s.useState)(!1);return{muted:n,paused:l,loading:d,errored:m,observerFactory:(0,s.useCallback)((()=>{let s=0;const r=(e,s)=>{a.log(`event_${e}`,s),s.trackingEvents[e]?.urls.forEach(t)},n=(e,a)=>{const t=(e=>{switch(e){case"started":return 1;case"first_quartile":return 2;case"midpoint":return 3;case"third_quartile":return 4;case"ended":case"error":return 5;default:return null}})(e);t?t>s&&(s=t,r(e,a)):r(e,a)};return{onStarted(){n("viewed",e),n("started",e),o(!1)},onResumed(){o((a=>(a&&n("resumed",e),!1)))},onPaused(){o(!0),n("paused",e)},onVolumeChanged({volume:a}){const t=a<=0;i(t),n(t?"muted":"unmuted",e)},onPlaybackCreated({timeObservable:a}){a.addObserverForMediaPositions([.25,.5,.75],(a=>{a>=.25&&n("first_quartile",e),a>=.5&&n("midpoint",e),a>=.75&&n("third_quartile",e)}))},onPlaybackEnded({reason:a}){switch(a){case te.mT.FATAL_ERROR:case te.mT.NETWORK_ERROR:n("error",e);break;case te.mT.PLAYED_TO_END:n("ended",e)}},onReady(){c(!1)},onPlaybackError(){c(!1),u(!0)}}}),[t,e,a])}}(a,d,o,u),P=(0,s.useMemo)((()=>(0,J.U5)((0,J.sH)(a.adId))),[a.adId]),A=function({assetUrl:e,createVideoPlayer:a,playVideoPlayer:t,observerFactory:s,playback_id:r,playWhenReady:n,muted:i}){return(0,j.A)((async({videoContainerElement:l,"video-manifest-url":o})=>{try{return await t(a(o,l,s).setAudioDisabled(i),{mediaUrl:e,playback_id:r,playWhenReady:n})}catch(e){return}}))}({assetUrl:e,createVideoPlayer:r,playVideoPlayer:n,observerFactory:g,playback_id:P,playWhenReady:u,muted:v});return function({videoContainerElement:e,initializeBetamaxPlayer:a,setBetamaxPlayer:t}){const r=(0,G.g)(),n=(0,s.useRef)(),i=(0,s.useRef)();(0,s.useEffect)((()=>{const s=r.getValues();n.current=s;const l=s.then((t=>{if(s===n.current){const s=t["video-manifest-url"];if(s)return a({videoContainerElement:e,"video-manifest-url":s})}}));i.current=l,t(l),l.then((e=>{l===i.current&&t(e)}))}),[a,e,t,r])}({videoContainerElement:t,initializeBetamaxPlayer:A,setBetamaxPlayer:l}),function({betamaxPlayer:e,assetUrl:a,playVideoPlayer:t,playback_id:r,playWhenReady:n}){const i=(0,j.A)((async a=>{e instanceof Q.M&&await t(e,{mediaUrl:a,playback_id:r,playWhenReady:n})}));(0,s.useEffect)((()=>{i(a)}),[a,i])}({betamaxPlayer:i,assetUrl:e,playVideoPlayer:n,playback_id:P,playWhenReady:u}),((e,a,t=!1)=>{(0,s.useEffect)((()=>{e instanceof Q.M&&!t&&(a?e.pause():e.setAudioDisabled(!0))}),[t,a,e])})(i,c,m),function({betamaxPlayer:e}){(0,s.useEffect)((()=>e&&e instanceof Q.M?()=>{e.release()}:void 0),[e])}({betamaxPlayer:i}),f||i&&"then"in i?(0,k.jsx)(W,{className:Y,icon:(0,k.jsx)(X.a3,{"aria-label":"Loading"})}):b||!i?(0,k.jsx)(Z,{homeVideoAd:a}):(0,k.jsx)(ye,{betamaxPlayer:i,muted:v,paused:x,isContextPlayerVideoPlaying:c,isContextPlayerPlaybackPaused:m})},ge="WJllnHWGxXydlZGNRZiO",Pe="r0vbWTxR_IGYTZyvgFMh",je=({assetUrl:e,className:a,homeVideoAd:t})=>{const[r,i]=(0,s.useState)(null);return $((0,s.useMemo)((()=>t.metadata.logoImage||F(t)),[t])),(0,k.jsxs)("div",{className:n()(ge,a),ref:i,children:[(0,k.jsx)("div",{className:Pe}),r&&(0,k.jsx)(ke,{homeVideoAd:t,assetUrl:e,videoContainerElement:r})]})};var Ae=t(93604);const pe="gPtBODu_UjOYUZsXyVaw",Ce="_lLWlErI3PPEoJh7DpgQ",Ee="OMnQ68kGUatqLnLhldea",Ne="qwCxwlFGiJwd7y757EIC",_e="n2TcVzKfe8w5qBzk_mHR",Ue="iBi4L8rZvqCYwumUXiyQ",Re="BbCl59l9jseBESAVkMFS",we="_7BNL4Ovo2FE4OHUXD3b",Me=(0,o.H)((({homeAd:e,dismiss:a},t)=>{const r=(0,s.useMemo)((()=>{if(a=e,(0,d.pq)(a.format)===d.nM.VIDEO){const a=function(e){for(const{videoManifestId:a,url:t}of e.video){if(a){const e=Ae.DJ.create(a);if(e)return e}if(t)return t}}(e);if(a)return{homeAd:e,videoAssetUrl:a}}var a}),[e]);return(0,k.jsx)("div",{className:n()(pe,"contentSpacing",{[Ce]:(0,i.A)()}),ref:t,children:(0,k.jsx)("div",{className:Ee,children:(0,k.jsxs)("div",{className:Ne,children:[r?(0,k.jsx)(je,{className:_e,homeVideoAd:r.homeAd,assetUrl:r.videoAssetUrl}):(0,k.jsx)(q,{className:_e,homeAd:e}),(0,k.jsx)(L,{className:Ue,homeAd:e}),(0,k.jsx)(R,{className:Re,homeAd:e}),(0,k.jsx)(E,{className:we,dismiss:a,homeAd:e})]})})})})),Se=(0,o.H)((({homeAd:e},a)=>{const{dismissed:t,dismiss:s}=(0,l.bT)();return t?null:(0,k.jsx)(Me,{homeAd:e,dismiss:s,ref:a})})),Ve=Se},10388:(e,a,t)=>{t.d(a,{L:()=>r});var s=t(30323);const r=()=>{const{logger:e}=(0,s.bT)();return e}}}]);
//# sourceMappingURL=home-ad-card.js.map