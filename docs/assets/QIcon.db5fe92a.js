import{c as u,g as z,h as v}from"./index.8a0a2d0c.js";import{c as V,h as D,b}from"./render.c477fadf.js";function Q(e){return e.appContext.config.globalProperties.$router!==void 0}function P(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function L(e,r){return(e.aliasOf||e)===(r.aliasOf||r)}function H(e,r){for(const l in r){const n=r[l],c=e[l];if(typeof n=="string"){if(n!==c)return!1}else if(Array.isArray(c)===!1||c.length!==n.length||n.some((i,a)=>i!==c[a]))return!1}return!0}function _(e,r){return Array.isArray(r)===!0?e.length===r.length&&e.every((l,n)=>l===r[n]):e.length===1&&e[0]===r}function T(e,r){return Array.isArray(e)===!0?_(e,r):Array.isArray(r)===!0?_(r,e):e===r}function U(e,r){if(Object.keys(e).length!==Object.keys(r).length)return!1;for(const l in e)if(T(e[l],r[l])===!1)return!1;return!0}const ae={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function oe({fallbackTag:e,useDisableForRouterLinkProps:r=!0}={}){const l=z(),{props:n,proxy:c,emit:i}=l,a=Q(l),t=u(()=>n.disable!==!0&&n.href!==void 0),y=r===!0?u(()=>a===!0&&n.disable!==!0&&t.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):u(()=>a===!0&&t.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),g=u(()=>y.value===!0?E(n.to):null),s=u(()=>g.value!==null),h=u(()=>t.value===!0||s.value===!0),R=u(()=>n.type==="a"||h.value===!0?"a":n.tag||e||"div"),$=u(()=>t.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:g.value.href,target:n.target}:{}),x=u(()=>{if(s.value===!1)return-1;const{matched:o}=g.value,{length:f}=o,d=o[f-1];if(d===void 0)return-1;const m=c.$route.matched;if(m.length===0)return-1;const p=m.findIndex(L.bind(null,d));if(p>-1)return p;const O=P(o[f-2]);return f>1&&P(d)===O&&m[m.length-1].path!==O?m.findIndex(L.bind(null,o[f-2])):p}),k=u(()=>s.value===!0&&x.value!==-1&&H(c.$route.params,g.value.params)),A=u(()=>k.value===!0&&x.value===c.$route.matched.length-1&&U(c.$route.params,g.value.params)),F=u(()=>s.value===!0?A.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function E(o){try{return c.$router.resolve(o)}catch{}return null}function B(o,{returnRouterError:f,to:d=n.to,replace:m=n.replace}={}){if(n.disable===!0)return o.preventDefault(),Promise.resolve(!1);if(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey||o.button!==void 0&&o.button!==0||n.target==="_blank")return Promise.resolve(!1);o.preventDefault();const p=c.$router[m===!0?"replace":"push"](d);return f===!0?p:p.then(()=>{}).catch(()=>{})}function K(o){if(s.value===!0){const f=d=>B(o,d);i("click",o,f),o.defaultPrevented!==!0&&f()}else i("click",o)}return{hasRouterLink:s,hasHrefLink:t,hasLink:h,linkTag:R,resolvedLink:g,linkIsActive:k,linkIsExactActive:A,linkClass:F,linkAttrs:$,getLink:E,navigateToRouterLink:B,navigateOnClick:K}}const G={xs:18,sm:24,md:32,lg:38,xl:46},J={size:String};function N(e,r=G){return u(()=>e.size!==void 0?{fontSize:e.size in r?`${r[e.size]}px`:e.size}:null)}const w="0 0 24 24",C=e=>e,S=e=>`ionicons ${e}`,M={"mdi-":e=>`mdi ${e}`,"icon-":C,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":S,"ion-ios":S,"ion-logo":S,"iconfont ":C,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},I={o_:"-outlined",r_:"-round",s_:"-sharp"},q={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},W=new RegExp("^("+Object.keys(M).join("|")+")"),X=new RegExp("^("+Object.keys(I).join("|")+")"),j=new RegExp("^("+Object.keys(q).join("|")+")"),Y=/^[Mm]\s?[-+]?\.?\d/,Z=/^img:/,ee=/^svguse:/,te=/^ion-/,ne=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var ie=V({name:"QIcon",props:{...J,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:r}){const{proxy:{$q:l}}=z(),n=N(e),c=u(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),i=u(()=>{let a,t=e.name;if(t==="none"||!t)return{none:!0};if(l.iconMapFn!==null){const s=l.iconMapFn(t);if(s!==void 0)if(s.icon!==void 0){if(t=s.icon,t==="none"||!t)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(Y.test(t)===!0){const[s,h=w]=t.split("|");return{svg:!0,viewBox:h,nodes:s.split("&&").map(R=>{const[$,x,k]=R.split("@@");return v("path",{style:x,d:$,transform:k})})}}if(Z.test(t)===!0)return{img:!0,src:t.substring(4)};if(ee.test(t)===!0){const[s,h=w]=t.split("|");return{svguse:!0,src:s.substring(7),viewBox:h}}let y=" ";const g=t.match(W);if(g!==null)a=M[g[1]](t);else if(ne.test(t)===!0)a=t;else if(te.test(t)===!0)a=`ionicons ion-${l.platform.is.ios===!0?"ios":"md"}${t.substring(3)}`;else if(j.test(t)===!0){a="notranslate material-symbols";const s=t.match(j);s!==null&&(t=t.substring(6),a+=q[s[1]]),y=t}else{a="notranslate material-icons";const s=t.match(X);s!==null&&(t=t.substring(2),a+=I[s[1]]),y=t}return{cls:a,content:y}});return()=>{const a={class:c.value,style:n.value,"aria-hidden":"true",role:"presentation"};return i.value.none===!0?v(e.tag,a,D(r.default)):i.value.img===!0?v("span",a,b(r.default,[v("img",{src:i.value.src})])):i.value.svg===!0?v("span",a,b(r.default,[v("svg",{viewBox:i.value.viewBox||"0 0 24 24"},i.value.nodes)])):i.value.svguse===!0?v("span",a,b(r.default,[v("svg",{viewBox:i.value.viewBox},[v("use",{"xlink:href":i.value.src})])])):(i.value.cls!==void 0&&(a.class+=" "+i.value.cls),v(e.tag,a,b(r.default,[i.value.content])))}}});export{ie as Q,oe as a,G as b,J as c,N as d,ae as u,Q as v};
