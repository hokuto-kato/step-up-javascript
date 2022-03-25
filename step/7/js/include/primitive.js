export default function() {
	//プリミティブ型
	//Number => numbr
	console.log(typeof 123)
	//String => string
	console.log(typeof "text")
	//Boolean => boolean
	console.log(typeof true)
	//Undefined => undefined
	console.log(typeof undefined)
	//Symbol => symbol
	console.log(typeof Symbol("hoge"))
	//Null => object
	console.log(typeof null)

	//オブジェクト型
	// new Date() => object
	console.log(typeof new Date())
	// custom object => object
	const obj = {}
	console.log(typeof obj)

	//不変（immutable）
	let testStr1 = "Hello"
	const testStr2 = testStr1
	console.log(testStr1, testStr2)
	testStr1 = testStr1.concat(" World")
	// 以下の2つは違う値を示している。作成されてから文字列自身の内容が変更されることはない。
	console.log(testStr1, testStr2) // Hello World Hello

	//	変更可能（mutable）
	const testDate1 = new Date()
	const testDate2 = testDate1

	console.log(testDate1, testDate2)
	testDate1.setYear(11223)
	console.log(testDate1, testDate2)

	const customObj1 = {message:"Hello"}
	const customObh2 = customObj1
	customObj1.message = "Hi"
	console.log(customObh2)
}
