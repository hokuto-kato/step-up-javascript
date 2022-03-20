// ブロックスコープ
if (true) {
	const blockVar1 = "blockVar1-true" // ブロックスコープ変数
	console.log(blockVar1)
} else {
	const blockVar1 = "blockVar1-false" // ブロックスコープ変数
	console.log(blockVar1)
}

// 意図的なブロックスコープ
{
	const blockVar2 = "blockVar2" // ブロックスコープ変数
	console.log(blockVar2)
}
// console.log(blockVar2) // ブロックスコープ外なので not defined

//関数スコープ
function funcScope() {
	const funcVar1 = "funcVar1" // 関数スコープ変数
	console.log(funcVar1)
}
funcScope()
// console.log(funcVar1) // 関数スコープ外なので not defined

//グローバルスコープ
var globalVar1 = "globalVar1" // 最上位のvarはグローバルスコープに変数を宣言する
globalVar2 = "globalVar2" // こちらもグローバスコープに変数を宣言している
function globalScope() {
	globalVar3 = "globalVar3-func" // 関数の中だけどvarやconstがついていないのでグローバルスコープ
}

console.log(globalVar1)
console.log(globalVar2)
// console.log(globalVar3) // まだ宣言していないので not defined
globalScope() // 関数の中でグローバル変数を宣言している
console.log(globalVar3) // ここでglobalVar3は使える
// console.log(window.globalVar3) // windowオブジェクトのプロパティとしても参照できる

// 変数の巻き上げ
console.log("❯ 変数の巻き上げ")

function funcHoisting() {
	var hoistedVar = "hoistedVar"
	console.log(hoistedVar)
	if (true) {
		var hoistedVar = "変更！"
		console.log(hoistedVar)
	}
	console.log(hoistedVar) // 巻き上げによって変数が上書きされている
}
funcHoisting()

console.log("❯ letを使って巻き上げをなくす")

function blockHoisting(){
	let blockHoistedVar = "blockHoistedVar"
	console.log(blockHoistedVar)
	if (true) {
		let blockHoistedVar = "変更！"
		console.log(blockHoistedVar)
	}
	console.log(blockHoistedVar) // 巻き上げが起こらない
	// let blockHoistedVar = "さらに変更！" // エラー：同じスコープ内で同名の変数は作れない
}
blockHoisting()