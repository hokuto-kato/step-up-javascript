/******/(()=>{// webpackBootstrap
/******/"use strict";
//配列を変数に代入
const e=["apple","banana","orange"],o={red:"あか",green:"みどり",blue:"あお"},t=document.getElementById("arrayTest");//オブジェクトを変数に代入
//配列を追加するための変数
let l="";//配列の要素を文字列連結して、リストタグを生成
for(let o=0;o<e.length;o++)l+='<li class="fruit">'.concat(e[o],"</li>");//HTMLにリストタグを出力
t.innerHTML=l;//ForEachでHTMLCollectionを回す
const n=document.getElementsByClassName("fruit");Array.prototype.forEach.call(n,(e=>{console.log(e.textContent)}));document.querySelectorAll(".fruit").forEach((e=>{console.log(e.textContent)}));//forでHTMLCollectionを回す
for(let e=0;e<n.length;e++)console.log(n[e].textContent);//Objectの出力
console.log(o),console.log(o.red),console.log(o.red),//Objectに新しい値を代入
o.red="red",console.log(o.red)})
/******/();