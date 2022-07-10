/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */
if(elcreativeConfig.dataView.isPost=="true"){!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).mediumZoom=t()}(this,function(){function t(e){return"IMG"===e.tagName}function v(e){return e&&1===e.nodeType}function y(e){try{return Array.isArray(e)?e.filter(t):NodeList.prototype.isPrototypeOf(e)?[].slice.call(e).filter(t):v(e)?[e].filter(t):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(t):[]}catch(e){throw new TypeError("Zoom Image Error")}}function b(e,t){var o=_({bubbles:!1,cancelable:!1,detail:void 0},t);return"function"==typeof window.CustomEvent?new CustomEvent(e,o):((t=document.createEvent("CustomEvent")).initCustomEvent(e,o.bubbles,o.cancelable,o.detail),t)}var _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o,n=arguments[t];for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};return function(e,t){void 0===t&&(t={});var o,n=t.insertAt;"undefined"!=typeof document&&(o=document.head||document.getElementsByTagName("head")[0],(t=document.createElement("style")).type="text/css","top"===n&&o.firstChild?o.insertBefore(t,o.firstChild):o.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)))}(".image_zooming_overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity;z-index:1000}.image_zooming__opened .image_zooming_overlay{cursor:pointer;cursor:zoom-out;opacity:1}.zoom_image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.zoom_image__hidden{visibility:hidden}.zoom_image__opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform;z-index:1001}"),function e(t,o){function n(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var i=t.reduce(function(e,t){return[].concat(e,y(t))},[]);return i.filter(function(e){return-1===m.indexOf(e)}).forEach(function(e){m.push(e),e.classList.add("zoom_image")}),c.forEach(function(e){var t=e.type,o=e.listener,n=e.options;i.forEach(function(e){e.addEventListener(t,o,n)})}),z}function i(){function i(){var e,t,o={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0};u.container&&(u.container instanceof Object?(e=(o=_({},o,u.container)).width-o.left-o.right-2*u.margin,t=o.height-o.top-o.bottom-2*u.margin):(i=(v(u.container)?u.container:document.querySelector(u.container)).getBoundingClientRect(),o=_({},o,{width:i.width,height:i.height,left:i.left,top:i.top}))),e=e||o.width-2*u.margin,t=t||o.height-2*u.margin;var n=g.zoomedHd||g.original,i=".svg"!==(n.currentSrc||n.src).substr(-4).toLowerCase()&&n.naturalWidth||e,r=".svg"!==(n.currentSrc||n.src).substr(-4).toLowerCase()&&n.naturalHeight||t,d=(n=n.getBoundingClientRect()).width,a=n.height;o="scale("+(i=Math.min(Math.min(i,e)/d,Math.min(r,t)/a))+") translate3d("+((e-d)/2-n.left+u.margin+o.left)/i+"px, "+((t-a)/2-n.top+u.margin+o.top)/i+"px, 0)",g.zoomed.style.transform=o,g.zoomedHd&&(g.zoomedHd.style.transform=o)}var r=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).target;return new d(function(t){if(r&&-1===m.indexOf(r))t(z);else if(g.zoomed)t(z);else{if(r)g.original=r;else{if(!(0<m.length))return void t(z);g.original=m[0]}var e,o,n;g.original.dispatchEvent(b("image_zooming:open",{detail:{zoom:z}})),s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,l=!0,g.zoomed=function(e){var t=(i=e.getBoundingClientRect()).top,o=i.left,n=i.width,i=i.height;e=e.cloneNode();var r=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,d=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return e.removeAttribute("id"),e.style.position="absolute",e.style.top=t+r+"px",e.style.left=o+d+"px",e.style.width=n+"px",e.style.height=i+"px",e.style.transform="",e}(g.original),document.body.appendChild(h),u.template&&(e=v(u.template)?u.template:document.querySelector(u.template),g.template=document.createElement("div"),g.template.appendChild(e.content.cloneNode(!0)),document.body.appendChild(g.template)),document.body.appendChild(g.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("image_zooming__opened")}),g.original.classList.add("zoom_image__hidden"),g.zoomed.classList.add("zoom_image__opened"),g.zoomed.addEventListener("click",a),g.zoomed.addEventListener("transitionend",function e(){l=!1,g.zoomed.removeEventListener("transitionend",e),g.original.dispatchEvent(b("image_zooming:opened",{detail:{zoom:z}})),t(z)}),g.original.getAttribute("data-zoom-src")?(g.zoomedHd=g.zoomed.cloneNode(),g.zoomedHd.removeAttribute("srcset"),g.zoomedHd.removeAttribute("sizes"),g.zoomedHd.src=g.zoomed.getAttribute("data-zoom-src"),g.zoomedHd.onerror=function(){clearInterval(o),console.warn("Unable to reach the zoom image target "+g.zoomedHd.src),g.zoomedHd=null,i()},o=setInterval(function(){g.zoomedHd.complete&&(clearInterval(o),g.zoomedHd.classList.add("zoom_image__opened"),g.zoomedHd.addEventListener("click",a),document.body.appendChild(g.zoomedHd),i())},10)):g.original.hasAttribute("srcset")?(g.zoomedHd=g.zoomed.cloneNode(),g.zoomedHd.removeAttribute("sizes"),g.zoomedHd.removeAttribute("loading"),n=g.zoomedHd.addEventListener("load",function(){g.zoomedHd.removeEventListener("load",n),g.zoomedHd.classList.add("zoom_image__opened"),g.zoomedHd.addEventListener("click",a),document.body.appendChild(g.zoomedHd),i()})):i()}})}function r(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).target;return g.original?a():i({target:e})}var d=window.Promise||function(e){function t(){}e(t,t)},a=function(){return new d(function(t){!l&&g.original?(l=!0,document.body.classList.remove("image_zooming__opened"),g.zoomed.style.transform="",g.zoomedHd&&(g.zoomedHd.style.transform=""),g.template&&(g.template.style.transition="opacity 150ms",g.template.style.opacity=0),g.original.dispatchEvent(b("image_zooming:close",{detail:{zoom:z}})),g.zoomed.addEventListener("transitionend",function e(){g.original.classList.remove("zoom_image__hidden"),document.body.removeChild(g.zoomed),g.zoomedHd&&document.body.removeChild(g.zoomedHd),document.body.removeChild(h),g.zoomed.classList.remove("zoom_image__opened"),g.template&&document.body.removeChild(g.template),l=!1,g.zoomed.removeEventListener("transitionend",e),g.original.dispatchEvent(b("image_zooming:closed",{detail:{zoom:z}})),g.original=null,g.zoomed=null,g.zoomedHd=null,g.template=null,t(z)})):t(z)})},m=[],c=[],l=!1,s=0,u=1<arguments.length&&void 0!==o?o:{},g={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?u=t:!t&&"string"!=typeof t||n(t),u=_({margin:0,scrollOffset:30,container:null,template:null},u);var f,p,h=(f=u.background,(p=document.createElement("div")).className="image_zooming_overlay bg-colorBackground dark:bg-colorColorModeDarkBackground opacity-70",p.style.background=f,p);document.addEventListener("click",function(e){(e=e.target)===h?a():-1!==m.indexOf(e)&&r({target:e})}),document.addEventListener("keyup",function(e){"Escape"!==(e=e.key||e.keyCode)&&"Esc"!==e&&27!==e||a()}),document.addEventListener("scroll",function(){!l&&g.original&&Math.abs(s-(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0))>u.scrollOffset&&setTimeout(a,100)}),window.addEventListener("resize",a);var z={open:i,close:a,toggle:r,update:function(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return t.background&&(h.style.background=t.background),t.container&&t.container instanceof Object&&(t.container=_({},u.container,t.container)),t.template&&(e=v(t.template)?t.template:document.querySelector(t.template),t.template=e),u=_({},u,t),m.forEach(function(e){e.dispatchEvent(b("image_zooming:update",{detail:{zoom:z}}))}),z},clone:function(){return e(_({},u,0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}))},attach:n,detach:function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];g.zoomed&&a();var n=0<t.length?t.reduce(function(e,t){return[].concat(e,y(t))},[]):m;return n.forEach(function(e){e.classList.remove("zoom_image"),e.dispatchEvent(b("image_zooming:detach",{detail:{zoom:z}}))}),m=m.filter(function(e){return-1===n.indexOf(e)}),z},on:function(t,o){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return m.forEach(function(e){e.addEventListener("image_zooming:"+t,o,n)}),c.push({type:"image_zooming:"+t,listener:o,options:n}),z},off:function(t,o){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return m.forEach(function(e){e.removeEventListener("image_zooming:"+t,o,n)}),c=c.filter(function(e){return e.type!=="image_zooming:"+t||e.listener.toString()!==o.toString()}),z},getOptions:function(){return u},getImages:function(){return m},getZoomedImage:function(){return g.original}};return z}}),mediumZoom(document.querySelectorAll(".post_body img"))};