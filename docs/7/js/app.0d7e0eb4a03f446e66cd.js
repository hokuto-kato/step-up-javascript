/******/(()=>{// webpackBootstrap
/******/"use strict";// CONCATENATED MODULE: ./src/js/app.js
// functions()
// closure()
// exception()
!// CONCATENATED MODULE: ./src/js/include/primitive.js
/* harmony default export */function(){
//プリミティブ型
//Number => numbr
console.log("number"),//String => string
console.log("string"),//Boolean => boolean
console.log("boolean"),//Undefined => undefined
console.log("undefined"),//Symbol => symbol
console.log(typeof Symbol("hoge")),//Null => object
console.log("object"),//オブジェクト型
// new Date() => object
console.log(typeof new Date),console.log(typeof{});//不変（immutable）
let o="Hello";const e=o;console.log(o,e),o=o.concat(" World"),// 以下の2つは違う値を示している。作成されてから文字列自身の内容が変更されることはない。
console.log(o,e);// Hello World Hello
//	変更可能（mutable）
const l=new Date,n=l;console.log(l,n),l.setYear(11223),console.log(l,n);const s={message:"Hello"},c=s;s.message="Hi",console.log(c)}()})
/******/();