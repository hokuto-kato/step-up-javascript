/******/(()=>{// webpackBootstrap
/******/var t={
/***/581:
/***/(t,e,i)=>{var s={"./cities001.json":681,"./cities002.json":234,"./cities003.json":627};function r(t){var e=c(t);return i(e)}function c(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=c,t.exports=r,r.id=581}
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
/***/(t,e,i)=>{"use strict";t.exports=i.p+"./data/hello.fd533eaa3aa36bdd38a3.json"}
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
/******/var c=e[s]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return t[s](c,c.exports,i),c.exports;
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
// async_await()
// promise()
// faq()
new class{constructor(){this.prefSelector=document.querySelector("[data-prefectures]"),this.citySelector=document.querySelector("[data-cities]"),this.initAreaSelector(),this.handleEvent()}async initAreaSelector(){const[t,...e]=await Promise.all([this.getPrefs(),this.getCities("001"),this.getCities("002"),this.getCities("003")]);this.prefs=t,this.cities=e,this.cities["001"]=this.cities[0],this.cities["002"]=this.cities[1],this.cities["003"]=this.cities[2],await this.updatePref(),await this.updateCity()}async getPrefs(){const t=await fetch(i(904));return await t.json()}async getCities(t){const e=await fetch(i(581)("./cities".concat(t,".json")));return await e.json()}updatePref(){this.createPrefOptionsHtml(this.prefs)}updateCity(){const t=this.prefSelector.value;this.createCityOptionsHtml(this.cities[t])}createPrefOptionsHtml(t){const e=t.map((t=>'<option value="'.concat(t.code,'">').concat(t.name,"</option>")));this.prefSelector.innerHTML=e.join("")}createCityOptionsHtml(t){const e=t.map((t=>'<option value="'.concat(t.code,'">').concat(t.name,"</option>")));this.citySelector.innerHTML=e.join("")}handleEvent(){this.prefSelector.addEventListener("change",(()=>{this.updateCity()}))}}})()})
/******/();