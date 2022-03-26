/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var r={
/***/346:
/***/(r,t,e)=>{r.exports=e.p+"./data/hello.fd533eaa3aa36bdd38a3.json";
/***/
/******/}},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function e(o){
/******/ // Check if module is in cache
/******/var i=t[o];
/******/if(void 0!==i)
/******/return i.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var n=t[o]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return r[o](n,n.exports,e),n.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/global */
/******/
/******/e.g=function(){
/******/if("object"==typeof globalThis)return globalThis;
/******/try{
/******/return this||new Function("return this")();
/******/}catch(r){
/******/if("object"==typeof window)return window;
/******/}
/******/}(),
/******/
/******/ /* webpack/runtime/publicPath */
/******/(()=>{
/******/var r;
/******/e.g.importScripts&&(r=e.g.location+"")
/******/;var t=e.g.document;
/******/if(!r&&t&&(
/******/t.currentScript&&(
/******/r=t.currentScript.src
/******/),!r)){
/******/var o=t.getElementsByTagName("script");
/******/o.length&&(r=o[o.length-1].src
/******/)}
/******/
/******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/if(!r)throw new Error("Automatic publicPath is not supported in this browser");
/******/r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),
/******/e.p=r+"../"})
/******/()})
/******/();