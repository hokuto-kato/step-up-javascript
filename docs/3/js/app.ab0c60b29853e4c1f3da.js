/******/(()=>{// webpackBootstrap
/******/"use strict";// CONCATENATED MODULE: ./src/js/include/photoViewer.js
/* harmony default export */const t=document.getElementById("photoViewer");new class{constructor(t,e){this.rootElm=t,this.images=e,this.currentIndex=0,this.nextButtonElm=document.querySelector(".nextButton"),this.prevButtonElm=document.querySelector(".prevButton"),this.imagesElm=document.querySelector(".images")}init(){this.handleEvent(),this.updatePhoto(),this.renderImageUrls()}renderImageUrls(){
// let imageUrls = ""
// for (const image of this.images) {
// 	imageUrls += `<li><img src="${image}" alt=""></li>`
// }
// this.imagesElm.innerHTML = imageUrls
this.images.forEach((t=>{this.imagesElm.insertAdjacentHTML("afterbegin",'<li><img src="'.concat(t,'" alt=""></li>'))}))}updatePhoto(){const t=this.rootElm.querySelector(".frame"),e=this.images[this.currentIndex],i=this.currentIndex+1;t.innerHTML="\n\t\t<div>\n\t\t\t<p>".concat(i,'枚目</p>\n\t\t\t<img src="').concat(e,'" alt="" />\n\t\t</div>\n\t\t'),this.startTimer()}startTimer(){this.timerKey&&clearTimeout(this.timerKey),this.timerKey=setTimeout((()=>{this.next()}),3e3)}next(){this.currentIndex++,this.currentIndex>=this.images.length&&(this.currentIndex=0),this.updatePhoto()}prev(){this.currentIndex--,this.currentIndex<0&&(this.currentIndex=this.images.length-1),this.updatePhoto()}handleEvent(){this.nextButtonElm.addEventListener("click",(()=>{this.next()})),this.prevButtonElm.addEventListener("click",(()=>{this.prev()}))}}(t,["https://fakeimg.pl/250x100/81DAF5/","https://fakeimg.pl/250x100/F781F3/","https://fakeimg.pl/250x100/81F7D8/"]).init()})
/******/();