export default function() {
	function concatWorld(str){
		// str = str.concat("World")  // str1が"HelloWorld"になりそうに思うかもしれない
	}
	const str1 = "Hello"
	concatWorld(str1)
	// console.log(str1) // => "Hello" 変更はされない

	function concatWorld2(custom){
		custom.message = custom.message.concat("World")
	}
	const custom1 = {message:"Hello"}
	concatWorld2(custom1)
	console.log(custom1)
}
