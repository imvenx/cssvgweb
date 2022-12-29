import{c as S,h as j,a as te,b as oe}from"./render.c179bde0.js";import{c as f,h,r as y,i as K,o as E,a as H,n as Z,b as U,g as R,l as N,e as T,w as x,d as G,f as I,p as J,j as ne,k as Q,m as ie,_ as re,q as le,s as ae,t as se,u as ue,v as q,x as $,y as ce,z as de,A as fe,B as O}from"./index.41689d23.js";import{c as X,g as ve}from"./dom.10a9dbb5.js";import{_ as he}from"./dragon.98f04060.js";var me=S({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:s}){const o=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:o.value},j(s.default))}}),ge=S({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:s}){const o=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:o.value,role:"toolbar"},j(s.default))}});function pe(){const e=y(!K.value);return e.value===!1&&E(()=>{e.value=!0}),e}const ee=typeof ResizeObserver!="undefined",A=ee===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var M=S({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:s}){let o=null,t,i={width:-1,height:-1};function u(a){a===!0||e.debounce===0||e.debounce==="0"?d():o===null&&(o=setTimeout(d,e.debounce))}function d(){if(clearTimeout(o),o=null,t){const{offsetWidth:a,offsetHeight:r}=t;(a!==i.width||r!==i.height)&&(i={width:a,height:r},s("resize",i))}}const{proxy:m}=R();if(ee===!0){let a;const r=g=>{t=m.$el.parentNode,t?(a=new ResizeObserver(u),a.observe(t),d()):g!==!0&&U(()=>{r(!0)})};return E(()=>{r()}),H(()=>{clearTimeout(o),a!==void 0&&(a.disconnect!==void 0?a.disconnect():t&&a.unobserve(t))}),Z}else{let g=function(){clearTimeout(o),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",u,N.passive),r=void 0)},p=function(){g(),t&&t.contentDocument&&(r=t.contentDocument.defaultView,r.addEventListener("resize",u,N.passive),d())};const a=pe();let r;return E(()=>{U(()=>{t=m.$el,t&&p()})}),H(g),m.trigger=u,()=>{if(a.value===!0)return h("object",{style:A.style,tabindex:-1,type:"text/html",data:A.url,"aria-hidden":"true",onLoad:p})}}}}),be=S({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:s,emit:o}){const{proxy:{$q:t}}=R(),i=G(I,T);if(i===T)return console.error("QHeader needs to be child of QLayout"),T;const u=y(parseInt(e.heightHint,10)),d=y(!0),m=f(()=>e.reveal===!0||i.view.value.indexOf("H")>-1||t.platform.is.ios&&i.isContainer.value===!0),a=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return d.value===!0?u.value:0;const n=u.value-i.scroll.value.position;return n>0?n:0}),r=f(()=>e.modelValue!==!0||m.value===!0&&d.value!==!0),g=f(()=>e.modelValue===!0&&r.value===!0&&e.reveal===!0),p=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),_=f(()=>{const n=i.rows.value.top,b={};return n[0]==="l"&&i.left.space===!0&&(b[t.lang.rtl===!0?"right":"left"]=`${i.left.size}px`),n[2]==="r"&&i.right.space===!0&&(b[t.lang.rtl===!0?"left":"right"]=`${i.right.size}px`),b});function c(n,b){i.update("header",n,b)}function w(n,b){n.value!==b&&(n.value=b)}function k({height:n}){w(u,n),c("size",n)}function B(n){g.value===!0&&w(d,!0),o("focusin",n)}x(()=>e.modelValue,n=>{c("space",n),w(d,!0),i.animate()}),x(a,n=>{c("offset",n)}),x(()=>e.reveal,n=>{n===!1&&w(d,e.modelValue)}),x(d,n=>{i.animate(),o("reveal",n)}),x(i.scroll,n=>{e.reveal===!0&&w(d,n.direction==="up"||n.position<=e.revealOffset||n.position-n.inflectionPoint<100)});const L={};return i.instances.header=L,e.modelValue===!0&&c("size",u.value),c("space",e.modelValue),c("offset",a.value),H(()=>{i.instances.header===L&&(i.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const n=te(s.default,[]);return e.elevated===!0&&n.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(h(M,{debounce:0,onResize:k})),h("header",{class:p.value,style:_.value,onFocusin:B},n)}}}),we=S({name:"QPageContainer",setup(e,{slots:s}){const{proxy:{$q:o}}=R(),t=G(I,T);if(t===T)return console.error("QPageContainer needs to be child of QLayout"),T;J(ne,!0);const i=f(()=>{const u={};return t.header.space===!0&&(u.paddingTop=`${t.header.size}px`),t.right.space===!0&&(u[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(u.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(u[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),u});return()=>h("div",{class:"q-page-container",style:i.value},j(s.default))}});const ye=[null,document,document.body,document.scrollingElement,document.documentElement];function _e(e,s){let o=ve(s);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return ye.includes(o)?window:o}function ze(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function xe(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let P;function F(){if(P!==void 0)return P;const e=document.createElement("p"),s=document.createElement("div");X(e,{width:"100%",height:"200px"}),X(s,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),s.appendChild(e),document.body.appendChild(s);const o=e.offsetWidth;s.style.overflow="scroll";let t=e.offsetWidth;return o===t&&(t=s.clientWidth),s.remove(),P=o-t,P}const{passive:Y}=N,Se=["both","horizontal","vertical"];var Te=S({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Se.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:s}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,i,u;x(()=>e.scrollTarget,()=>{a(),m()});function d(){t!==null&&t();const p=Math.max(0,ze(i)),_=xe(i),c={top:p-o.position.top,left:_-o.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const w=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";o.position={top:p,left:_},o.directionChanged=o.direction!==w,o.delta=c,o.directionChanged===!0&&(o.direction=w,o.inflectionPoint=o.position),s("scroll",{...o})}function m(){i=_e(u,e.scrollTarget),i.addEventListener("scroll",r,Y),r(!0)}function a(){i!==void 0&&(i.removeEventListener("scroll",r,Y),i=void 0)}function r(p){if(p===!0||e.debounce===0||e.debounce==="0")d();else if(t===null){const[_,c]=e.debounce?[setTimeout(d,e.debounce),clearTimeout]:[requestAnimationFrame(d),cancelAnimationFrame];t=()=>{c(_),t=null}}}const{proxy:g}=R();return E(()=>{u=g.$el.parentNode,m()}),H(()=>{t!==null&&t(),a()}),Object.assign(g,{trigger:r,getPosition:()=>o}),Z}}),Le=S({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:s,emit:o}){const{proxy:{$q:t}}=R(),i=y(null),u=y(t.screen.height),d=y(e.container===!0?0:t.screen.width),m=y({position:0,direction:"down",inflectionPoint:0}),a=y(0),r=y(K.value===!0?0:F()),g=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=f(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),_=f(()=>r.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),c=f(()=>r.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function w(l){if(e.container===!0||document.qScrollPrevented!==!0){const v={position:l.position.top,direction:l.direction,directionChanged:l.directionChanged,inflectionPoint:l.inflectionPoint.top,delta:l.delta.top};m.value=v,e.onScroll!==void 0&&o("scroll",v)}}function k(l){const{height:v,width:z}=l;let C=!1;u.value!==v&&(C=!0,u.value=v,e.onScrollHeight!==void 0&&o("scroll-height",v),L()),d.value!==z&&(C=!0,d.value=z),C===!0&&e.onResize!==void 0&&o("resize",l)}function B({height:l}){a.value!==l&&(a.value=l,L())}function L(){if(e.container===!0){const l=u.value>a.value?F():0;r.value!==l&&(r.value=l)}}let n;const b={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:i,height:u,containerHeight:a,scrollbarWidth:r,totalWidth:f(()=>d.value+r.value),rows:f(()=>{const l=e.view.toLowerCase().split(" ");return{top:l[0].split(""),middle:l[1].split(""),bottom:l[2].split("")}}),header:Q({size:0,offset:0,space:!1}),right:Q({size:300,offset:0,space:!1}),footer:Q({size:0,offset:0,space:!1}),left:Q({size:300,offset:0,space:!1}),scroll:m,animate(){n!==void 0?clearTimeout(n):document.body.classList.add("q-body--layout-animate"),n=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),n=void 0},155)},update(l,v,z){b[l][v]=z}};if(J(I,b),F()>0){let z=function(){l=null,v.classList.remove("hide-scrollbar")},C=function(){if(l===null){if(v.scrollHeight>t.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(l);l=setTimeout(z,300)},W=function(D){l!==null&&D==="remove"&&(clearTimeout(l),z()),window[`${D}EventListener`]("resize",C)},l=null;const v=document.body;x(()=>e.container!==!0?"add":"remove",W),e.container!==!0&&W("add"),ie(()=>{W("remove")})}return()=>{const l=oe(s.default,[h(Te,{onScroll:w}),h(M,{onResize:k})]),v=h("div",{class:g.value,style:p.value,ref:e.container===!0?void 0:i,tabindex:-1},l);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:i},[h(M,{onResize:B}),h("div",{class:"absolute-full",style:_.value},[h("div",{class:"scroll",style:c.value},[v])])]):v}}});const V=e=>(de("data-v-66e122b0"),e=e(),fe(),e),Ce=V(()=>O("img",{decoding:"async",src:he,style:{width:"7em",margin:"-1em"}},null,-1)),qe=V(()=>O("a",{href:"https://github.com/imvenx/cssvg",target:"_blank",rel:"noopener noreferrer"},"Repo",-1)),$e=V(()=>O("a",{href:"https://discord.gg/F8Wzc5SPjq",target:"_blank",rel:"noopener noreferrer"},"Discord",-1)),Re=V(()=>O("a",{href:"https://www.youtube.com/channel/UCh30W9QnXS-XZwNuk-twnyg",target:"_blank",rel:"noopener noreferrer"},"Youtube",-1)),Qe=le({__name:"MainLayout",setup(e){return(s,o)=>{const t=ae("router-view");return se(),ue(Le,{view:"lHh Lpr lFf"},{default:q(()=>[$(be,{elevated:"",style:{"background-color":"brown"}},{default:q(()=>[$(ge,null,{default:q(()=>[Ce,$(me,null,{default:q(()=>[ce(" csSvg/inka ")]),_:1}),qe,$e,Re]),_:1})]),_:1}),$(we,null,{default:q(()=>[$(t)]),_:1})]),_:1})}}});var Ve=re(Qe,[["__scopeId","data-v-66e122b0"]]);export{Ve as default};
