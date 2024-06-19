(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var i=a.getElementsByTagName("script");if(i.length)for(var s=i.length-1;s>-1&&(!t||!/^http(s?):/.test(t));)t=i[s--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();class t{static initializeHtml(){this.createPageElements(),this.createImagePlayer(),this.createImagePlayerButtons(),this.createImageCarouselContainer(),this.createImageSlideshow(),this.createImageBubbleFrame(),this.createPreviousArrow(),this.createImageFrame(),this.createNextArrow(),this.createImages()}static createPageElements(){const e=document.createElement("header"),t=document.createElement("main"),a=document.createElement("footer");e.classList.add("header"),t.classList.add("main"),a.classList.add("footer"),e.setAttribute("id","header"),t.setAttribute("id","main"),a.setAttribute("id","footer");const i=document.querySelector("body");i.appendChild(e),i.appendChild(t),i.appendChild(a)}static createImagePlayer(){const e=document.createElement("div");e.classList.add("image-player"),e.setAttribute("id","image-player"),document.getElementById("header").appendChild(e)}static createImagePlayerButtons(){const e=document.createElement("span");e.classList.add("material-symbols-outlined"),e.classList.add("icon","play-icon"),e.textContent="play_arrow";const t=document.createElement("button");t.classList.add("button"),t.setAttribute("id","play-button"),t.appendChild(e);const a=document.createElement("span");a.classList.add("material-symbols-outlined"),a.classList.add("icon","pause-icon"),a.textContent="pause";const i=document.createElement("button");i.classList.add("button"),i.setAttribute("id","pause-button"),i.appendChild(a);const s=document.getElementById("image-player");s.appendChild(t),s.appendChild(i)}static createImageCarouselContainer(){const e=document.createElement("div");e.classList.add("image-carousel"),e.setAttribute("id","image-carousel"),document.getElementById("main").appendChild(e)}static createImageSlideshow(){const e=document.createElement("div");e.classList.add("image-slideshow"),e.setAttribute("id","image-slideshow"),document.getElementById("image-carousel").appendChild(e)}static createImageFrame(){const e=document.createElement("div");e.classList.add("image-frame"),e.setAttribute("id","image-frame"),document.getElementById("image-slideshow").appendChild(e)}static createImages(){const e=document.createElement("div");e.classList.add("images"),e.setAttribute("id","images"),document.getElementById("image-frame").appendChild(e)}static createImage(e,t){const a=document.createElement("img");a.classList.add("image"),a.setAttribute("data-image",`${t}`),a.src=e,document.getElementById("images").appendChild(a)}static createNextArrow(){const e=document.createElement("span");e.classList.add("material-symbols-outlined"),e.classList.add("arrow","next-arrow"),e.textContent="keyboard_arrow_right";const t=document.createElement("button");t.classList.add("advance-image"),t.setAttribute("id","next-image"),t.appendChild(e),document.getElementById("image-slideshow").appendChild(t)}static createPreviousArrow(){const e=document.createElement("span");e.classList.add("material-symbols-outlined"),e.classList.add("arrow","previous-arrow"),e.textContent="keyboard_arrow_right";const t=document.createElement("button");t.classList.add("advance-image"),t.setAttribute("id","previous-image"),t.appendChild(e),document.getElementById("image-slideshow").appendChild(t)}static createImageBubbleFrame(){const e=document.createElement("div");e.classList.add("image-bubbles"),e.setAttribute("id","image-bubbles"),document.getElementById("image-carousel").appendChild(e)}static createImageBubble(e){const t=document.createElement("div");t.classList.add("image-bubble"),t.setAttribute("data-bubble",`${e}`),document.getElementById("image-bubbles").appendChild(t)}}const a=e.p+"tifa.jpg",i=e.p+"cloud-and-tifa-1.jpeg",s=e.p+"cloud-and-tifa-2.jpg",d=e.p+"cloud-and-tifa-3.jpg",c=e.p+"cloud-and-tifa-4.jpg",l=e.p+"cloud-and-tifa-5.jpg",o=e.p+"cloud-and-tifa-6.jpg",n=e.p+"cloud-and-tifa-7.jpg",r=e.p+"cloud-and-tifa-8.jpg",m=e.p+"cloud-and-tifa-9.jpg",u=e.p+"cloud-and-tifa-10.jpg",g=e.p+"cloud-and-tifa-11.jpg",p=[];p.push(a),p.push(i),p.push(s),p.push(d),p.push(c),p.push(l),p.push(o),p.push(n),p.push(r),p.push(m),p.push(u),p.push(g);class b{constructor(){this.timer=null,this.isAutoSlideActive=!1}static initArrowButtons(){const e=document.getElementById("next-image"),t=document.getElementById("previous-image");e.addEventListener("click",b.goToNextImage),t.addEventListener("click",b.goToPreviousImage)}static initBubbleButtons(){document.querySelectorAll("[data-bubble]").forEach((e=>e.addEventListener("click",b.switchImageBubble)))}static initPlayerButtons(){const e=document.getElementById("play-button"),t=document.getElementById("pause-button");e.onclick=()=>{console.log("start"),b.startAutoSlide()},t.onclick=()=>{console.log("stop"),b.stopAutoSlide()},t.disabled=!0}static goToNextImage(){const e=Array.from(document.querySelectorAll("[data-bubble]")),t=Array.from(document.querySelectorAll("[data-image]")),a=t.findIndex((e=>e.classList.contains("active")));if(-1!==a){t[a].classList.remove("active"),e[a].classList.remove("active");let i=a+1;i===t.length&&(i=0),t[i].classList.add("active"),e[i].classList.add("active"),b.resetAutoSlide()}}static goToPreviousImage(){const e=Array.from(document.querySelectorAll("[data-bubble]")),t=Array.from(document.querySelectorAll("[data-image]")),a=t.findIndex((e=>e.classList.contains("active")));if(-1!==a){t[a].classList.remove("active"),e[a].classList.remove("active");let i=a-1;-1===i&&(i=t.length-1),t[i].classList.add("active"),e[i].classList.add("active"),b.resetAutoSlide()}}static switchImageBubble(e){const t=e.target.getAttribute("data-bubble"),a=Array.from(document.querySelectorAll("[data-bubble]")),i=Array.from(document.querySelectorAll("[data-image]")),s=i.findIndex((e=>e.classList.contains("active")));-1!==s&&(i[s].classList.remove("active"),a[s].classList.remove("active"),i[t].classList.add("active"),a[t].classList.add("active"),b.resetAutoSlide())}static startAutoSlide(){this.isAutoSlideActive||(this.isAutoSlideActive=!0,this.timer=setInterval((()=>{b.goToNextImage()}),1e4));const e=document.getElementById("play-button"),t=document.getElementById("pause-button");e.disabled=!0,t.disabled=!1}static stopAutoSlide(){this.isAutoSlideActive=!1,clearInterval(this.timer);const e=document.getElementById("play-button"),t=document.getElementById("pause-button");e.disabled=!1,t.disabled=!0}static resetAutoSlide(){this.isAutoSlideActive&&(b.stopAutoSlide(),b.startAutoSlide())}}class h{static initialize(){t.initializeHtml(),h.loadImages(),h.loadFirstImage(),b.initArrowButtons(),h.loadImageBubbles(),h.loadFirstBubble(),b.initBubbleButtons(),b.initPlayerButtons()}static loadImages(){p.forEach(((e,a)=>{t.createImage(e,a)}))}static loadFirstImage(){document.querySelector('[data-image="0"]').classList.add("active")}static loadImageBubbles(){for(let e=0;e<p.length;e++)t.createImageBubble(e)}static loadFirstBubble(){document.querySelector('[data-bubble="0"]').classList.add("active")}}h.initialize()})();
//# sourceMappingURL=app.9d032060bd9f7cf9a3d8.js.map