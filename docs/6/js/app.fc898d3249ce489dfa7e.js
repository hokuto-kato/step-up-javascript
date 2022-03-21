/******/(()=>{// webpackBootstrap
/******/var t={
/***/581:
/***/(t,e,i)=>{var s={"./cities001.json":681,"./cities002.json":234,"./cities003.json":627};function r(t){var e=n(t);return i(e)}function n(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=n,t.exports=r,r.id=581}
/***/,
/***/681:
/***/(t,e,i)=>{"use strict";t.exports=i.p+"./data/cities001.40afd19034e3ac2ff067.json"}
/***/,
/***/234:
/***/(t,e,i)=>{"use strict";t.exports=i.p+"./data/cities002.35265f902cbca674b3f7.json"}
/***/,
/***/627:
/***/(t,e,i)=>{"use strict";t.exports=i.p+"./data/cities003.0dc68545654dde1dd361.json"}
/***/,
/***/346:
/***/(t,e,i)=>{"use strict";t.exports=i.p+"./data/hello.5d74442b6f828ec398eb.json"}
/***/,
/***/904:
/***/(t,e,i)=>{"use strict";t.exports=i.p+"./data/prefectures.f8d6aba93da4f1b098cb.json"}
/***/
/******/},e={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function i(s){
/******/ // Check if module is in cache
/******/var r=e[s];
/******/if(void 0!==r)
/******/return r.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var n=e[s]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return t[s](n,n.exports,i),n.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/global */
/******/
/******/i.g=function(){
/******/if("object"==typeof globalThis)return globalThis;
/******/try{
/******/return this||new Function("return this")();
/******/}catch(t){
/******/if("object"==typeof window)return window;
/******/}
/******/}(),
/******/i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)
/******/,
/******/
/******/ /* webpack/runtime/publicPath */
/******/(()=>{
/******/var t;
/******/i.g.importScripts&&(t=i.g.location+"")
/******/;var e=i.g.document;
/******/if(!t&&e&&(
/******/e.currentScript&&(
/******/t=e.currentScript.src
/******/),!t)){
/******/var s=e.getElementsByTagName("script");
/******/s.length&&(t=s[s.length-1].src
/******/)}
/******/
/******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/if(!t)throw new Error("Automatic publicPath is not supported in this browser");
/******/t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),
/******/i.p=t+"../"})
/******/(),
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(()=>{"use strict";// CONCATENATED MODULE: ./src/js/app.js
const t=JSON.stringify({name:"John",age:30,interests:["music","skiing"]}),e=(JSON.parse(t),document.getElementById("areaSelector"));// console.log(jsonStr)
document.addEventListener("DOMContentLoaded",(()=>{new class{constructor(t){this.rootElm=t,this.prefecture=[],this.cities=[],this.prefCode=null,this.prefElm=this.rootElm.querySelector(".prefectures"),this.cityElm=this.rootElm.querySelector(".cities"),this.init(),this.handleEvent()}async init(){await this.updatePref(),await this.updateCity()}async getPrefs(){const t=await fetch(i(904));return await t.json()}async getCities(t){const e=await fetch(i(581)("./cities".concat(t,".json")));return await e.json()}async updatePref(){this.prefecture=await this.getPrefs(),this.prefCode=this.prefecture[0].code,this.createPrefOptionsHtml()}createPrefOptionsHtml(){this.prefElm.innerHTML=this.toOptionsHtml(this.prefecture)}createCityOptionsHtml(){this.cityElm.innerHTML=this.toOptionsHtml(this.cities)}toOptionsHtml(t){return t.map((t=>'<option value="'.concat(t.code,'">').concat(t.name,"</option>"))).join("")}async updateCity(){this.cities=await this.getCities(this.prefCode),this.toOptionsHtml(this.cities),this.createCityOptionsHtml()}handleEvent(){this.prefElm.addEventListener("change",(t=>{this.prefCode=t.target.value,this.updateCity()}))}}(e),async function(){const t=await fetch(i(346)),e=await t.json();document.getElementById("message").innerHTML=e.message}()}))})()})
/******/();