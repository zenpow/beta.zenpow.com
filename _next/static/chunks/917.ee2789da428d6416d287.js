"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[917],{917:function(t,e,n){n.r(e);var a=n(9748),s=n(425),i=n(4067),c=n.n(i),o=n(7320);e.default=function(t){var e=t.mapping,n=(0,a.useState)(!0),i=n[0],r=n[1],m=(0,s.F)(),u=m.theme,d=m.resolvedTheme,g=""===c().comment.giscusConfig.themeURL?"dark"===u||"dark"===d?c().comment.giscusConfig.darkTheme:c().comment.giscusConfig.theme:c().comment.giscusConfig.themeURL,f="comments-container",p=(0,a.useCallback)((function(){r(!1);var t=document.createElement("script");t.src="https://giscus.app/client.js",t.setAttribute("data-repo",c().comment.giscusConfig.repo),t.setAttribute("data-repo-id",c().comment.giscusConfig.repositoryId),t.setAttribute("data-category",c().comment.giscusConfig.category),t.setAttribute("data-category-id",c().comment.giscusConfig.categoryId),t.setAttribute("data-mapping",e),t.setAttribute("data-reactions-enabled",c().comment.giscusConfig.reactions),t.setAttribute("data-emit-metadata",c().comment.giscusConfig.metadata),t.setAttribute("data-theme",g),t.setAttribute("crossorigin","anonymous"),t.async=!0;var n=document.getElementById(f);return n&&n.appendChild(t),function(){var t=document.getElementById(f);t&&(t.innerHTML="")}}),[g,e]);return(0,a.useEffect)((function(){document.querySelector("iframe.giscus-frame")&&p()}),[p]),(0,o.BX)("div",{className:"pt-6 pb-6 text-center text-gray-700 dark:text-gray-300",children:[i&&(0,o.tZ)("button",{onClick:p,children:"Load Comments"}),(0,o.tZ)("div",{className:"giscus",id:f})]})}}}]);