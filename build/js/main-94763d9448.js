!function(){"use strict";function e(){var e=this.value;return"/"==window.location.pathname&&e.length?window.location.pathname="/en":void(window.location.pathname=window.location.pathname.replace(/(zh-cn|en)/g,e).replace("//","/"))}document.getElementById("lang-select").addEventListener("change",e),document.getElementById("mobile-lang-select").addEventListener("change",e)}(),function(){"use strict";function e(){var e=n.scrollTop;e>i?o.classList.add("fixed"):o.classList.remove("fixed")}var t=document.getElementById("header"),n=document.getElementById("container"),o=document.getElementById("article-toc"),c=document.getElementById("article-toc-top"),i=t.clientHeight;o&&(n.addEventListener("scroll",function(){window.requestAnimationFrame(e)}),e(),c.addEventListener("click",function(e){e.preventDefault(),n.scrollTop=0}))}(),function(){"use strict";var e=document.getElementsByTagName("body")[0],t=document.getElementById("mobile-nav-toggle"),n=(document.getElementById("container"),document.getElementById("mobile-nav-dimmer")),o="mobile-nav-on";t&&(t.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),e.classList.toggle(o)}),n.addEventListener("click",function(t){e.classList.contains(o)&&(t.preventDefault(),e.classList.remove(o))}))}();