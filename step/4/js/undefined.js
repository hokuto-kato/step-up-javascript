let isUndefined
console.log(isUndefined) // 初期化されていない変数の値 undefined

const obj = {}
console.log(obj.unknownKey) // オブジェクトに指定されていないキーの呼び出し undefined

function test() {
}

console.log(test()) // 関数のreturnを書かなかった場合の戻り値 undefined

function test2(abc){
	console.log(abc)
}
test2() // 引数のある関数を呼び出すときに引数を与えなかった場合の値 undefined
