(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{425:function(e,t,n){"use strict";n.d(t,{f:function(){return s},F:function(){return o}});var r=n(9748),a=n(9008),i=(0,r.createContext)({setTheme:function(e){},themes:[]}),o=function(){return(0,r.useContext)(i)},c=["light","dark"],l="(prefers-color-scheme: dark)",s=function(e){var t=e.forcedTheme,n=e.disableTransitionOnChange,a=void 0!==n&&n,o=e.enableSystem,s=void 0===o||o,h=e.enableColorScheme,p=void 0===h||h,g=e.storageKey,v=void 0===g?"theme":g,y=e.themes,b=void 0===y?["light","dark"]:y,w=e.defaultTheme,x=void 0===w?s?"system":"light":w,O=e.attribute,_=void 0===O?"data-theme":O,j=e.value,k=e.children,Z=(0,r.useState)((function(){return d(v,x)})),E=Z[0],S=Z[1],N=(0,r.useState)((function(){return d(v)})),P=N[0],z=N[1],T=j?Object.values(j):b,C=(0,r.useCallback)((function(e){var n=m(e);z(n),"system"!==E||t||L(n,!1)}),[E,t]),A=(0,r.useRef)(C);A.current=C;var L=(0,r.useCallback)((function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=!0);var r=(null==j?void 0:j[e])||e,i=a&&n?f():null;if(t)try{localStorage.setItem(v,e)}catch(e){}if("system"===e&&s){var o=m();r=(null==j?void 0:j[o])||o}if(n){var c,l=document.documentElement;"class"===_?((c=l.classList).remove.apply(c,T),l.classList.add(r)):l.setAttribute(_,r),null==i||i()}}),[]);(0,r.useEffect)((function(){var e=function(){return A.current.apply(A,[].slice.call(arguments))},t=window.matchMedia(l);return t.addListener(e),e(t),function(){return t.removeListener(e)}}),[]);var I=(0,r.useCallback)((function(e){t?L(e,!0,!1):L(e),S(e)}),[t]);return(0,r.useEffect)((function(){var e=function(e){e.key===v&&I(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[I]),(0,r.useEffect)((function(){if(p){var e=t&&c.includes(t)?t:E&&c.includes(E)?E:"system"===E&&P||null;document.documentElement.style.setProperty("color-scheme",e)}}),[p,E,P,t]),r.default.createElement(i.Provider,{value:{theme:E,setTheme:I,forcedTheme:t,resolvedTheme:"system"===E?P:E,themes:s?[].concat(b,["system"]):b,systemTheme:s?P:void 0}},r.default.createElement(u,{forcedTheme:t,storageKey:v,attribute:_,value:j,enableSystem:s,defaultTheme:x,attrs:T}),k)},u=(0,r.memo)((function(e){var t=e.forcedTheme,n=e.storageKey,i=e.attribute,o=e.enableSystem,c=e.defaultTheme,s=e.value,u="class"===i?"var d=document.documentElement.classList;d.remove("+e.attrs.map((function(e){return"'"+e+"'"})).join(",")+");":"var d=document.documentElement;",d=function(e,t){e=(null==s?void 0:s[e])||e;var n=t?e:"'"+e+"'";return"class"===i?"d.add("+n+")":"d.setAttribute('"+i+"', "+n+")"},f="system"===c;return r.default.createElement(a.default,null,r.default.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+u+d(t)+"}()"}}:o?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+u+"var e=localStorage.getItem('"+n+"');"+(f?"":d(c)+";")+'if("system"===e||(!e&&'+f+')){var t="'+l+'",m=window.matchMedia(t);m.media!==t||m.matches?'+d("dark")+":"+d("light")+"}else if(e) "+(s?"var x="+JSON.stringify(s)+";":"")+d(s?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+u+'var e=localStorage.getItem("'+n+'");if(e){'+(s?"var x="+JSON.stringify(s)+";":"")+d(s?"x[e]":"e",!0)+"}else{"+d(c)+";}}catch(t){}}();"}}))}),(function(e,t){return e.forcedTheme===t.forcedTheme})),d=function(e,t){if("undefined"!=typeof window){var n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},f=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout((function(){document.head.removeChild(e)}),1)}},m=function(e){return e||(e=window.matchMedia(l)),e.matches?"dark":"light"}},1727:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(2809);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=n(5675),o=n(7320);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var l=function(e){var t=e.src;return"".concat(t)},s=function(e){var t=a({},e);return(0,o.tZ)(i.default,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({loader:l},t))}},1890:function(e,t,n){"use strict";var r=n(2809),a=n(219),i=n(1664),o=n(7320),c=["href"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.href,n=(0,a.Z)(e,c),r=t&&t.startsWith("/"),l=t&&t.startsWith("#");return r?(0,o.tZ)(i.default,{href:t,children:(0,o.tZ)("a",s({},n))}):l?(0,o.tZ)("a",s({href:t},n)):(0,o.tZ)("a",s({target:"_blank",rel:"noopener noreferrer",href:t},n))}},9648:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7320);function a(e){var t=e.children;return(0,r.tZ)("div",{className:"max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0",children:t})}},4067:function(e,t,n){var r=n(4155),a={title:"Next.js Starter Blog",author:"Tails Azimuth",headerTitle:"TailwindBlog",description:"A blog created with Next.js and Tailwind.css",language:"en-us",siteUrl:"https://tailwind-nextjs-starter-blog.vercel.app",siteRepo:"https://github.com/timlrx/tailwind-nextjs-starter-blog",siteLogo:"/static/images/logo.png",image:"/static/images/avatar.png",socialBanner:"/static/images/twitter-card.png",email:"address@yoursite.com",github:"https://github.com",twitter:"https://twitter.com/Twitter",facebook:"https://facebook.com",youtube:"https://youtube.com",linkedin:"https://www.linkedin.com",locale:"en-US",analytics:{plausibleDataDomain:"",simpleAnalytics:!1,googleAnalyticsId:""},newsletter:{provider:"buttondown"},comment:{provider:"giscus",giscusConfig:{repo:r.env.NEXT_PUBLIC_GISCUS_REPO,repositoryId:r.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,category:r.env.NEXT_PUBLIC_GISCUS_CATEGORY,categoryId:r.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,mapping:"pathname",reactions:"1",metadata:"0",theme:"light",darkTheme:"transparent_dark",themeURL:""},utterancesConfig:{repo:r.env.NEXT_PUBLIC_UTTERANCES_REPO,issueTerm:"",label:"",theme:"",darkTheme:""},disqusConfig:{shortname:r.env.NEXT_PUBLIC_DISQUS_SHORTNAME}}};e.exports=a},9917:function(e,t,n){"use strict";var r=n(3848),a=n(3115);t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,l=void 0!==a&&a,u=e.priority,d=void 0!==u&&u,h=e.loading,g=e.lazyBoundary,v=void 0===g?"200px":g,y=e.className,b=e.quality,w=e.width,x=e.height,k=e.objectFit,Z=e.objectPosition,E=e.onLoadingComplete,S=e.loader,N=void 0===S?j:S,P=e.placeholder,z=void 0===P?"empty":P,T=e.blurDataURL,C=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),A=n?"responsive":"intrinsic";"layout"in C&&(C.layout&&(A=C.layout),delete C.layout);var L="";if(function(e){return"object"===typeof e&&(p(e)||function(e){return void 0!==e.src}(e))}(t)){var I=p(t)?t.default:t;if(!I.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(I)));if(T=T||I.blurDataURL,L=I.src,(!A||"fill"!==A)&&(x=x||I.height,w=w||I.width,!I.height||!I.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(I)))}t="string"===typeof t?t:L;var B=_(w),M=_(x),D=_(b),R=!d&&("lazy"===h||"undefined"===typeof h);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,R=!1);m.has(t)&&(R=!1);0;var X,U,H,q=s.useIntersection({rootMargin:v,disabled:!R}),W=r(q,2),G=W[0],Y=W[1],F=!R||Y,V={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:k,objectPosition:Z},K="blur"===z?{filter:"blur(20px)",backgroundSize:k||"cover",backgroundImage:'url("'.concat(T,'")'),backgroundPosition:Z||"0% 0%"}:{};if("fill"===A)X={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof B&&"undefined"!==typeof M){var J=M/B,Q=isNaN(J)?"100%":"".concat(100*J,"%");"responsive"===A?(X={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},U={display:"block",boxSizing:"border-box",paddingTop:Q}):"intrinsic"===A?(X={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},U={boxSizing:"border-box",display:"block",maxWidth:"100%"},H='<svg width="'.concat(B,'" height="').concat(M,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===A&&(X={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:B,height:M})}else 0;var $={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};F&&($=O({src:t,unoptimized:l,layout:A,width:B,quality:D,sizes:n,loader:N}));var ee=t;return i.default.createElement("div",{style:X},U?i.default.createElement("div",{style:U},H?i.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(H))}):null):null,i.default.createElement("img",Object.assign({},C,$,{decoding:"async","data-nimg":A,className:y,ref:function(e){G(e),function(e,t,n,r,a){if(!e)return;var i=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),m.add(t),a){var n=e.naturalWidth,i=e.naturalHeight;a({naturalWidth:n,naturalHeight:i})}}))};e.complete?i():e.onload=i}(e,ee,0,z,E)},style:f({},V,K)})),i.default.createElement("noscript",null,i.default.createElement("img",Object.assign({},C,O({src:t,unoptimized:l,layout:A,width:B,quality:D,sizes:n,loader:N}),{decoding:"async","data-nimg":A,style:V,className:y,loading:h||"lazy"}))),d?i.default.createElement(o.default,null,i.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imagesrcset:$.srcSet,imagesizes:$.sizes})):null)};var i=d(n(9748)),o=d(n(639)),c=n(8997),l=n(5809),s=n(7426);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}var m=new Set;var h=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,a=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(a||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,a=e.quality,i=new URL("".concat(t).concat(k(n))),o=i.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),a&&o.set("q",a.toString());return i.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,a=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(a||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(k(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(k(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function p(e){return void 0!==e.default}var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom"}||l.imageConfigDefault,v=g.deviceSizes,y=g.imageSizes,b=g.loader,w=g.path,x=(g.domains,[].concat(a(v),a(y)));function O(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,o=e.quality,c=e.sizes,l=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var s=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,o=[];r=i.exec(n);r)o.push(parseInt(r[2]));if(o.length){var c=.01*Math.min.apply(Math,o);return{widths:x.filter((function(e){return e>=v[0]*c})),kind:"w"}}return{widths:x,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:v,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return x.find((function(t){return t>=e}))||x[x.length-1]})))),kind:"x"}}(i,r,c),u=s.widths,d=s.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(l({src:t,quality:o,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:l({src:t,quality:o,width:u[f]})}}function _(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){var t=h.get(b);if(t)return t(f({root:w},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(b))}function k(e){return"/"===e[0]?e.slice(1):e}v.sort((function(e,t){return e-t})),x.sort((function(e,t){return e-t}))},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var a,i=(a=n(9748))&&a.__esModule?a:{default:a},o=n(1063),c=n(4651),l=n(7426);var s={};function u(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,a=c.useRouter(),d=i.default.useMemo((function(){var t=o.resolveHref(a,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?o.resolveHref(a,e.as):c||i}}),[a,e.href,e.as]),f=d.href,m=d.as,h=e.children,p=e.replace,g=e.shallow,v=e.scroll,y=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,w=l.useIntersection({rootMargin:"200px"}),x=r(w,2),O=x[0],_=x[1],j=i.default.useCallback((function(e){O(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,O]);i.default.useEffect((function(){var e=_&&n&&o.isLocalURL(f),t="undefined"!==typeof y?y:a&&a.locale,r=s[f+"%"+m+(t?"%"+t:"")];e&&!r&&u(a,f,m,{locale:t})}),[m,f,_,y,n,a]);var k={ref:j,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[a?"replace":"push"](n,r,{shallow:i,locale:l,scroll:c}))}(e,a,f,m,p,g,v,y)},onMouseEnter:function(e){o.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,f,m,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var Z="undefined"!==typeof y?y:a&&a.locale,E=a&&a.isLocaleDomain&&o.getDomainLocale(m,Z,a&&a.locales,a&&a.domainLocales);k.href=E||o.addBasePath(o.addLocale(m,Z,a&&a.defaultLocale))}return i.default.cloneElement(t,k)};t.default=d},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,l=a.useRef(),s=a.useState(!1),u=r(s,2),d=u[0],f=u[1],m=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),c.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return a.useEffect((function(){if(!o&&!d){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),[m,d]};var a=n(9748),i=n(3447),o="undefined"!==typeof IntersectionObserver;var c=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},2989:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r,a,i,o=n(2809),c=(n(1507),n(3765),n(425)),l=n(9008),s=n(4298),u=n(4067),d=n.n(u),f=n(7320),m=function(){return(0,f.BX)(f.HY,{children:[(0,f.tZ)(s.default,{strategy:"lazyOnload",src:"https://www.googletagmanager.com/gtag/js?id=".concat(d().analytics.googleAnalyticsId)}),(0,f.tZ)(s.default,{strategy:"lazyOnload",id:"ga-script",children:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(d().analytics.googleAnalyticsId,"', {\n              page_path: window.location.pathname,\n            });\n        ")})]})},h=function(){return(0,f.BX)(f.HY,{children:[(0,f.tZ)(s.default,{strategy:"lazyOnload","data-domain":d().analytics.plausibleDataDomain,src:"https://plausible.io/js/plausible.js"}),(0,f.tZ)(s.default,{strategy:"lazyOnload",id:"plausible-script",children:"\n            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }\n        "})]})},p=function(){return(0,f.BX)(f.HY,{children:[(0,f.tZ)(s.default,{strategy:"lazyOnload",id:"sa-script",children:"\n            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};\n        "}),(0,f.tZ)(s.default,{strategy:"lazyOnload",src:"https://scripts.simpleanalyticscdn.com/latest.js"})]})},g=function(){return(0,f.BX)(f.HY,{children:[d().analytics.plausibleDataDomain&&(0,f.tZ)(h,{}),d().analytics.simpleAnalytics&&(0,f.tZ)(p,{}),d().analytics.googleAnalyticsId&&(0,f.tZ)(m,{})]})},v=[{href:"/blog",title:"Blog"},{href:"/tags",title:"Tags"},{href:"/projects",title:"Projects"},{href:"/about",title:"About"},{href:"/posts",title:"Old Posts"}],y=n(9748);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var w=function(e){return y.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"344.564 330.278 111.737 91.218",width:53.87,height:43.61},e),r||(r=y.createElement("defs",null,y.createElement("linearGradient",{id:"logo_svg__b",gradientUnits:"userSpaceOnUse",x1:420.97,y1:331.28,x2:420.97,y2:418.5},y.createElement("stop",{offset:"0%",stopColor:"#06b6d4"}),y.createElement("stop",{offset:"100%",stopColor:"#67e8f9"})),y.createElement("linearGradient",{id:"logo_svg__d",gradientUnits:"userSpaceOnUse",x1:377.89,y1:331.28,x2:377.89,y2:418.5},y.createElement("stop",{offset:"0%",stopColor:"#06b6d4"}),y.createElement("stop",{offset:"100%",stopColor:"#67e8f9"})),y.createElement("path",{d:"M453.3 331.28v28.57l-64.66 58.65v-30.08l64.66-57.14z",id:"logo_svg__a"}),y.createElement("path",{d:"M410.23 331.28v28.57l-64.67 58.65v-30.08l64.67-57.14z",id:"logo_svg__c"}))),a||(a=y.createElement("use",{xlinkHref:"#logo_svg__a",fill:"url(#logo_svg__b)"})),i||(i=y.createElement("use",{xlinkHref:"#logo_svg__c",fill:"url(#logo_svg__d)"})))},x=n(1890),O=n(9648),_=n(1664),j=n(1727);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={solutions:[{name:"Marketing",href:"#"},{name:"Analytics",href:"#"},{name:"Commerce",href:"#"},{name:"Insights",href:"#"}],support:[{name:"Pricing",href:"#"},{name:"Documentation",href:"#"},{name:"Guides",href:"#"},{name:"API Status",href:"#"}],company:[{name:"About",href:"#"},{name:"Blog",href:"#"},{name:"Jobs",href:"#"},{name:"Press",href:"#"},{name:"Partners",href:"#"}],legal:[{name:"Claim",href:"#"},{name:"Privacy",href:"#"},{name:"Terms",href:"#"}],social:[{name:"Facebook",href:"#",icon:function(e){return(0,f.tZ)("svg",Z(Z({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:(0,f.tZ)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})}))}},{name:"Instagram",href:"#",icon:function(e){return(0,f.tZ)("svg",Z(Z({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:(0,f.tZ)("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",clipRule:"evenodd"})}))}},{name:"Twitter",href:"#",icon:function(e){return(0,f.tZ)("svg",Z(Z({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:(0,f.tZ)("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})}))}},{name:"GitHub",href:"#",icon:function(e){return(0,f.tZ)("svg",Z(Z({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:(0,f.tZ)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}))}},{name:"Dribbble",href:"#",icon:function(e){return(0,f.tZ)("svg",Z(Z({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:(0,f.tZ)("path",{fillRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",clipRule:"evenodd"})}))}}]};function S(){return(0,f.BX)("footer",{className:"","aria-labelledby":"footer-heading",children:[(0,f.tZ)("h2",{id:"footer-heading",className:"sr-only",children:"Footer"}),(0,f.BX)("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8",children:[(0,f.BX)("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8",children:[(0,f.BX)("div",{className:"space-y-8 xl:col-span-1",children:[(0,f.tZ)(j.Z,{src:"https://tailwindui.com/img/logos/workflow-mark-gray-300.svg",width:40,height:40,className:"h-10",alt:"Company name"}),(0,f.tZ)("p",{className:"text-gray-500 text-base",children:"Making the world a better place through constructing elegant hierarchies."}),(0,f.tZ)("div",{className:"flex space-x-6",children:E.social.map((function(e){return(0,f.tZ)(_.default,{href:e.href,children:(0,f.BX)("a",{className:"text-gray-400 hover:text-gray-500",children:[(0,f.tZ)("span",{className:"sr-only",children:e.name}),(0,f.tZ)(e.icon,{className:"h-6 w-6","aria-hidden":"true"})]})},e.name)}))})]}),(0,f.BX)("div",{className:"mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2",children:[(0,f.BX)("div",{className:"md:grid md:grid-cols-2 md:gap-8",children:[(0,f.BX)("div",{children:[(0,f.tZ)("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase",children:"Solutions"}),(0,f.tZ)("ul",{className:"mt-4 space-y-4",children:E.solutions.map((function(e){return(0,f.tZ)("li",{children:(0,f.tZ)("a",{href:e.href,className:"text-base text-gray-500 hover:text-gray-900 dark:text-gray-300",children:e.name})},e.name)}))})]}),(0,f.BX)("div",{className:"mt-12 md:mt-0",children:[(0,f.tZ)("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase",children:"Support"}),(0,f.tZ)("ul",{className:"mt-4 space-y-4",children:E.support.map((function(e){return(0,f.tZ)("li",{children:(0,f.tZ)("a",{href:e.href,className:"text-base text-gray-500 hover:text-gray-900 dark:text-gray-300",children:e.name})},e.name)}))})]})]}),(0,f.BX)("div",{className:"md:grid md:grid-cols-2 md:gap-8",children:[(0,f.BX)("div",{children:[(0,f.tZ)("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase",children:"Company"}),(0,f.tZ)("ul",{className:"mt-4 space-y-4",children:E.company.map((function(e){return(0,f.tZ)("li",{children:(0,f.tZ)("a",{href:e.href,className:"text-base text-gray-500 hover:text-gray-900 dark:text-gray-300",children:e.name})},e.name)}))})]}),(0,f.BX)("div",{className:"mt-12 md:mt-0",children:[(0,f.tZ)("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase",children:"Legal"}),(0,f.tZ)("ul",{className:"mt-4 space-y-4",children:E.legal.map((function(e){return(0,f.tZ)("li",{children:(0,f.tZ)("a",{href:e.href,className:"text-base text-gray-500 hover:text-gray-900 dark:text-gray-300",children:e.name})},e.name)}))})]})]})]})]}),(0,f.tZ)("div",{className:"mt-12 border-t border-gray-200 pt-8",children:(0,f.tZ)("p",{className:"text-base text-gray-400 xl:text-center",children:"\xa9 2020 Workflow, Inc. All rights reserved."})})]})]})}var N=function(){var e=(0,y.useState)(!1),t=e[0],n=e[1],r=function(){n((function(e){return document.body.style.overflow=e?"auto":"hidden",!e}))};return(0,f.BX)("div",{className:"sm:hidden",children:[(0,f.tZ)("button",{type:"button",className:"w-8 h-8 ml-1 mr-1 rounded","aria-label":"Toggle Menu",onClick:r,children:(0,f.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:t?(0,f.tZ)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}):(0,f.tZ)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,f.BX)("div",{className:"fixed w-full h-full top-24 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 ".concat(t?"translate-x-0":"translate-x-full"),children:[(0,f.tZ)("button",{type:"button","aria-label":"toggle modal",className:"fixed w-full h-full cursor-auto focus:outline-none",onClick:r}),(0,f.tZ)("nav",{className:"fixed h-full mt-8",children:v.map((function(e){return(0,f.tZ)("div",{className:"px-12 py-4",children:(0,f.tZ)(x.Z,{href:e.href,className:"text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",onClick:r,children:e.title})},e.title)}))})]})]})},P=function(){var e=(0,y.useState)(!1),t=e[0],n=e[1],r=(0,c.F)(),a=r.theme,i=r.setTheme,o=r.resolvedTheme;return(0,y.useEffect)((function(){return n(!0)}),[]),(0,f.tZ)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4",onClick:function(){return i("dark"===a||"dark"===o?"light":"dark")},children:(0,f.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:!t||"dark"!==a&&"dark"!==o?(0,f.tZ)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}):(0,f.tZ)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})})})},z=function(e){var t=e.children;return(0,f.tZ)(O.Z,{children:(0,f.BX)("div",{className:"flex flex-col justify-between h-screen",children:[(0,f.BX)("header",{className:"flex items-center justify-between py-10",children:[(0,f.tZ)("div",{children:(0,f.tZ)(x.Z,{href:"/","aria-label":"Tailwind CSS Blog",children:(0,f.BX)("div",{className:"flex items-center justify-between",children:[(0,f.tZ)("div",{className:"mr-3",children:(0,f.tZ)(w,{})}),"string"===typeof d().headerTitle?(0,f.tZ)("div",{className:"hidden h-6 text-2xl font-semibold sm:block",children:d().headerTitle}):d().headerTitle]})})}),(0,f.BX)("div",{className:"flex items-center text-base leading-5",children:[(0,f.tZ)("div",{className:"hidden sm:block",children:v.map((function(e){return(0,f.tZ)(x.Z,{href:e.href,className:"p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100",children:e.title},e.title)}))}),(0,f.tZ)(P,{}),(0,f.tZ)(N,{})]})]}),(0,f.tZ)("main",{className:"mb-auto",children:t}),(0,f.tZ)(S,{})]})})};function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e){var t=e.Component,n=e.pageProps;return(0,f.BX)(c.f,{attribute:"class",children:[(0,f.tZ)(l.default,{children:(0,f.tZ)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})}),(0,f.tZ)(g,{}),(0,f.tZ)(z,{children:(0,f.tZ)(t,C({},n))})]})}},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2989)}])},3765:function(){},1507:function(){},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},9008:function(e,t,n){e.exports=n(639)},5675:function(e,t,n){e.exports=n(9917)},1664:function(e,t,n){e.exports=n(2167)},4298:function(e,t,n){e.exports=n(7926)},6584:function(e,t,n){"use strict";n.r(t),n.d(t,{Fragment:function(){return r.HY},jsx:function(){return i},jsxs:function(){return i},jsxDEV:function(){return i}});var r=n(6400),a=0;function i(e,t,n,i,o){var c,l,s={};for(l in t)"ref"==l?c=t[l]:s[l]=t[l];var u={type:e,props:s,key:n,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--a,__source:i,__self:o};if("function"==typeof e&&(c=e.defaultProps))for(l in c)void 0===s[l]&&(s[l]=c[l]);return r.YM.vnode&&r.YM.vnode(u),u}},4155:function(e){var t,n,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,l=[],s=!1,u=-1;function d(){s&&c&&(s=!1,c.length?l=c.concat(l):u=-1,l.length&&f())}function f(){if(!s){var e=o(d);s=!0;for(var t=l.length;t;){for(c=l,l=[];++u<t;)c&&c[u].run();u=-1,t=l.length}c=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||s||o(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},2809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},219:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},7320:function(e,t,n){"use strict";n.d(t,{HY:function(){return r.Fragment},tZ:function(){return r.jsx},BX:function(){return r.jsxs}});var r=n(6584)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[179],(function(){return t(1780),t(4651)}));var n=e.O();_N_E=n}]);