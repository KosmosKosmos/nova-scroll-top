!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){(function(){"use strict";function n(e){for(var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n={speed:500,minDuration:250,maxDuration:1500,cancelOnUserAction:!0,element:window,horizontal:!1,onComplete:void 0,passive:!0,offset:0},o=Object.keys(n),l=0;l<o.length;l++){var i=o[l];void 0!==t[i]&&(n[i]=t[i])}if(!n.cancelOnUserAction&&n.passive&&(n.passive=!1,t.passive&&console&&console.warn('animated-scroll-to:\n "passive" was set to "false" to prevent errors, as using "cancelOnUserAction: false" doesn\'t work with passive events.')),e instanceof HTMLElement)if(t.element&&t.element instanceof HTMLElement)e=n.horizontal?e.getBoundingClientRect().left+t.element.scrollLeft-t.element.getBoundingClientRect().left:e.getBoundingClientRect().top+t.element.scrollTop-t.element.getBoundingClientRect().top;else if(n.horizontal){var c=window.scrollX||document.documentElement.scrollLeft;e=c+e.getBoundingClientRect().left}else{var r=window.scrollY||document.documentElement.scrollTop;e=r+e.getBoundingClientRect().top}e+=n.offset,n.isWindow=n.element===window;var s=null,m=0,d=null;n.isWindow?n.horizontal?(s=window.scrollX||document.documentElement.scrollLeft,m=window.scrollY||document.documentElement.scrollTop,d=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)-window.innerWidth):(s=window.scrollY||document.documentElement.scrollTop,m=window.scrollX||document.documentElement.scrollLeft,d=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight):n.horizontal?(s=n.element.scrollLeft,d=n.element.scrollWidth-n.element.clientWidth):(s=n.element.scrollTop,d=n.element.scrollHeight-n.element.clientHeight),e>d&&(e=d);var u=e-s;if(0!==u){var a=Math.abs(Math.round(u/1e3*n.speed));a<n.minDuration?a=n.minDuration:a>n.maxDuration&&(a=n.maxDuration);var f=Date.now(),p=null,v=null,w={passive:n.passive};n.cancelOnUserAction?(v=function(){h(),cancelAnimationFrame(p),n.onComplete&&"function"==typeof n.onComplete&&n.onComplete(!0)},window.addEventListener("keydown",v,w),window.addEventListener("mousedown",v,w)):(v=function(e){e.preventDefault()},n.element.addEventListener("scroll",v,w)),n.element.addEventListener("wheel",v,w),n.element.addEventListener("touchstart",v,w);var h=function(){n.element.removeEventListener("wheel",v,w),n.element.removeEventListener("touchstart",v,w),n.cancelOnUserAction?(window.removeEventListener("keydown",v,w),window.removeEventListener("mousedown",v,w)):n.element.removeEventListener("scroll",v,w)},g=function(){var t=Date.now()-f,o=t/a-1,l=o*o*o+1,i=Math.round(s+u*l),c=function(e){n.isWindow?n.horizontal?n.element.scrollTo(e,m):n.element.scrollTo(m,e):n.horizontal?n.element.scrollLeft=e:n.element.scrollTop=e};t<a&&i!==e?(c(i),p=requestAnimationFrame(g)):(c(e),cancelAnimationFrame(p),h(),n.onComplete&&"function"==typeof n.onComplete&&n.onComplete(!1))};p=requestAnimationFrame(g)}else n.onComplete&&"function"==typeof n.onComplete&&n.onComplete(!1)}void 0!==e&&e.exports&&(e.exports=n,t=e.exports),t.default=n}).call(this)},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),l=n.n(o);Nova.booting(function(e,t){t.beforeEach(function(e,t,n){setTimeout(function(){e.path!=t.path&&l()(0)},100),n()})})}]);