(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{28045:function(t,e,i){"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],n=!0,r=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(i.push(a.value),!e||i.length!==e);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.default=function(t){var e=t.src,i=t.sizes,r=t.unoptimized,l=void 0!==r&&r,u=t.priority,d=void 0!==u&&u,h=t.loading,y=t.lazyBoundary,b=void 0===y?"200px":y,v=t.className,w=t.quality,A=t.width,S=t.height,j=t.objectFit,O=t.objectPosition,E=t.onLoadingComplete,_=t.loader,I=void 0===_?z:_,P=t.placeholder,D=void 0===P?"empty":P,L=t.blurDataURL,R=function(t,e){if(null==t)return{};var i,n,r=function(t,e){if(null==t)return{};var i,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}(t,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),q=i?"responsive":"intrinsic";"layout"in R&&(R.layout&&(q=R.layout),delete R.layout);var N="";if(function(t){return"object"===typeof t&&(p(t)||function(t){return void 0!==t.src}(t))}(e)){var C=p(e)?e.default:e;if(!C.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(C)));if(L=L||C.blurDataURL,N=C.src,(!q||"fill"!==q)&&(S=S||C.height,A=A||C.width,!C.height||!C.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(C)))}e="string"===typeof e?e:N;var W=x(A),B=x(S),M=x(w),U=!d&&("lazy"===h||"undefined"===typeof h);(e.startsWith("data:")||e.startsWith("blob:"))&&(l=!0,U=!1);g.has(e)&&(U=!1);0;var H,T=n(s.useIntersection({rootMargin:b,disabled:!U}),2),F=T[0],V=T[1],J=!U||V,G={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Q={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},K=!1,X={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:j,objectPosition:O},Y="blur"===D?{filter:"blur(20px)",backgroundSize:j||"cover",backgroundImage:'url("'.concat(L,'")'),backgroundPosition:O||"0% 0%"}:{};if("fill"===q)G.display="block",G.position="absolute",G.top=0,G.left=0,G.bottom=0,G.right=0;else if("undefined"!==typeof W&&"undefined"!==typeof B){var Z=B/W,$=isNaN(Z)?"100%":"".concat(100*Z,"%");"responsive"===q?(G.display="block",G.position="relative",K=!0,Q.paddingTop=$):"intrinsic"===q?(G.display="inline-block",G.position="relative",G.maxWidth="100%",K=!0,Q.maxWidth="100%",H='<svg width="'.concat(W,'" height="').concat(B,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===q&&(G.display="inline-block",G.position="relative",G.width=W,G.height=B)}else 0;var tt={src:m,srcSet:void 0,sizes:void 0};J&&(tt=k({src:e,unoptimized:l,layout:q,width:W,quality:M,sizes:i,loader:I}));var et=e;0;return o.default.createElement("span",{style:G},K?o.default.createElement("span",{style:Q},H?o.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(H))}):null):null,o.default.createElement("img",Object.assign({},R,tt,{decoding:"async","data-nimg":q,className:v,ref:function(t){F(t),function(t,e,i,n,r){if(!t)return;var o=function(){t.src!==m&&("decode"in t?t.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===n&&(t.style.filter="none",t.style.backgroundSize="none",t.style.backgroundImage="none"),g.add(e),r){var i=t.naturalWidth,o=t.naturalHeight;r({naturalWidth:i,naturalHeight:o})}}))};t.complete?o():t.onload=o}(t,et,0,D,E)},style:f({},X,Y)})),o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},R,k({src:e,unoptimized:l,layout:q,width:W,quality:M,sizes:i,loader:I}),{decoding:"async","data-nimg":q,style:X,className:v,loading:h||"lazy"}))),d?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+tt.src+tt.srcSet+tt.sizes,rel:"preload",as:"image",href:tt.srcSet?void 0:tt.src,imagesrcset:tt.srcSet,imagesizes:tt.sizes})):null)};var o=d(i(67294)),a=d(i(5443)),c=i(86978),l=i(5809),s=i(57190);function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function d(t){return t&&t.__esModule?t:{default:t}}function f(t){for(var e=arguments,i=function(i){var n=null!=e[i]?e[i]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){u(t,e,n[e])}))},n=1;n<arguments.length;n++)i(n);return t}var g=new Set,m=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var h=new Map([["default",function(t){var e=t.root,i=t.src,n=t.width,r=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(t){var e=t.root,i=t.src,n=t.width,r=t.quality,o=new URL("".concat(e).concat(j(i))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(t){var e=t.root,i=t.src,n=t.width,r=t.quality,o=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(e).concat(o).concat(j(i))}],["akamai",function(t){var e=t.root,i=t.src,n=t.width;return"".concat(e).concat(j(i),"?imwidth=").concat(n)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function p(t){return void 0!==t.default}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"}||l.imageConfigDefault,b=y.deviceSizes,v=y.imageSizes,w=y.loader,A=y.path,S=(y.domains,r(b).concat(r(v)));function k(t){var e=t.src,i=t.unoptimized,n=t.layout,o=t.width,a=t.quality,c=t.sizes,l=t.loader;if(i)return{src:e,srcSet:void 0,sizes:void 0};var s=function(t,e,i){if(i&&("fill"===e||"responsive"===e)){for(var n,o=/(^|\s)(1?\d?\d)vw/g,a=[];n=o.exec(i);n)a.push(parseInt(n[2]));if(a.length){var c,l=.01*(c=Math).min.apply(c,r(a));return{widths:S.filter((function(t){return t>=b[0]*l})),kind:"w"}}return{widths:S,kind:"w"}}return"number"!==typeof t||"fill"===e||"responsive"===e?{widths:b,kind:"w"}:{widths:r(new Set([t,2*t].map((function(t){return S.find((function(e){return e>=t}))||S[S.length-1]})))),kind:"x"}}(o,n,c),u=s.widths,d=s.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(t,i){return"".concat(l({src:e,quality:a,width:t})," ").concat("w"===d?t:i+1).concat(d)})).join(", "),src:l({src:e,quality:a,width:u[f]})}}function x(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function z(t){var e=h.get(w);if(e)return e(f({root:A},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(w))}function j(t){return"/"===t[0]?t.slice(1):t}b.sort((function(t,e){return t-e})),S.sort((function(t,e){return t-e}))},86978:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toBase64=function(t){return window.btoa(t)}},5809:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},25675:function(t,e,i){t.exports=i(28045)}}]);