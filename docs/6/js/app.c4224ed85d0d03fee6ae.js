/******/(()=>{// webpackBootstrap
/******/var t={
/***/581:
/***/(t,n,e)=>{var o={"./cities001.json":681,"./cities002.json":234,"./cities003.json":627};function c(t){var n=r(t);return e(n)}function r(t){if(!e.o(o,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return o[t]}c.keys=function(){return Object.keys(o)},c.resolve=r,t.exports=c,c.id=581}
/***/,
/***/681:
/***/(t,n,e)=>{"use strict";t.exports=e.p+"./data/cities001.40afd19034e3ac2ff067.json"}
/***/,
/***/234:
/***/(t,n,e)=>{"use strict";t.exports=e.p+"./data/cities002.35265f902cbca674b3f7.json"}
/***/,
/***/627:
/***/(t,n,e)=>{"use strict";t.exports=e.p+"./data/cities003.0dc68545654dde1dd361.json"}
/***/,
/***/904:
/***/(t,n,e)=>{"use strict";t.exports=e.p+"./data/prefectures.f8d6aba93da4f1b098cb.json"}
/***/
/******/},n={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function e(o){
/******/ // Check if module is in cache
/******/var c=n[o];
/******/if(void 0!==c)
/******/return c.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var r=n[o]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return t[o](r,r.exports,e),r.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/global */
/******/
/******/e.g=function(){
/******/if("object"==typeof globalThis)return globalThis;
/******/try{
/******/return this||new Function("return this")();
/******/}catch(t){
/******/if("object"==typeof window)return window;
/******/}
/******/}(),
/******/e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n)
/******/,
/******/
/******/ /* webpack/runtime/publicPath */
/******/(()=>{
/******/var t;
/******/e.g.importScripts&&(t=e.g.location+"")
/******/;var n=e.g.document;
/******/if(!t&&n&&(
/******/n.currentScript&&(
/******/t=n.currentScript.src
/******/),!t)){
/******/var o=n.getElementsByTagName("script");
/******/o.length&&(t=o[o.length-1].src
/******/)}
/******/
/******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/if(!t)throw new Error("Automatic publicPath is not supported in this browser");
/******/t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),
/******/e.p=t+"../"})
/******/(),
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(()=>{"use strict";// CONCATENATED MODULE: ./src/js/include/json.js
/* harmony default export */function t(){
// async function displayMessage(){
// 	const response = await fetch("./data/hello.json")
// 	const data = await response.json()
// 	const messageElm = document.getElementById("message")
// 	messageElm.innerHTML = data.message
// }
// displayMessage()
const t=document.querySelector(".prefectures"),n=document.querySelector(".cities");async function o(){!function(n){const e=n.map((t=>'<option value="'.concat(t.code,'">').concat(t.name,"</option>")));t.innerHTML=e.join("")}(await async function(){const t=await fetch(e(904));return await t.json()}())}async function c(){const o=t.value,c=await async function(t){const n=await fetch(e(581)("./cities".concat(t,".json")));return await n.json()}(o);!function(t){const e=t.map((t=>'<option value="'.concat(t.code,'">').concat(t.name,"</option>")));n.innerHTML=e.join("")}(c)}!async function(){await o(),await c()}(),t.addEventListener("change",c)}// CONCATENATED MODULE: ./src/js/app.js
const n=JSON.stringify({name:"John",age:30,interests:["music","skiing"]});// console.log(jsonStr)
JSON.parse(n);// console.log(obj.name)
document.addEventListener("DOMContentLoaded",(()=>{t()}))})()})
/******/();