import "../sass/app.sass"

//配列を変数に代入
const fruits = ["apple", "banana", "orange"]
//オブジェクトを変数に代入
const colorsObj = {
	red: "あか",
	green: "みどり",
	blue: "あお"
}
//HTML追加用の要素
const arrayElement = document.getElementById("arrayTest")
//配列を追加するための変数
let fruitsStrings = ""

//配列の要素を文字列連結して、リストタグを生成
for (let i = 0; i < fruits.length; i++) {
	fruitsStrings += `<li class="fruit">${fruits[i]}</li>`
}

//HTMLにリストタグを出力
arrayElement.innerHTML = fruitsStrings

//ForEachでHTMLCollectionを回す
const fruitElements = document.getElementsByClassName("fruit")
Array.prototype.forEach.call(fruitElements, e => {
		console.log(e.textContent)
})

//NodeListをforEachで回す
const fruitElementsNode = document.querySelectorAll(".fruit")
fruitElementsNode.forEach((e)=>{
	console.log(e.textContent)
})

//forでHTMLCollectionを回す
for (let i = 0; i < fruitElements.length; i++){
	console.log(fruitElements[i].textContent)
}

//Objectの出力
console.log(colorsObj)
console.log(colorsObj["red"])
console.log(colorsObj.red)

//Objectに新しい値を代入
colorsObj.red = "red"
console.log(colorsObj.red)