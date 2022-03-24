export default function() {
	try {
		unknownFunction()
	} catch (e) {
		console.log("error")
	}

	function displayName(name) {
		if (!name) {
			throw new Error("name is required")
		}
		console.log(`名前は${name}です`)
	}
	try {
		displayName()
	} catch (e) {
		console.log(`${e.message}`)
	}




	class InputError extends Error{}

	function share(input)
	{
		const value = Number(input)
		console.log(Number.isInteger(value))
		if (!Number.isInteger(value)) {
			throw new InputError("整数で入力してください")
		}
		if (value < 0) {
			throw new InputError("正の整数で入力してください")
		}
		if (value === 0) {
			throw new InputError("0で割れません")
		}
		return divide(100, value)
	}

	function divide(lhv,rhv){
		return lhv / rhv
	}

	try{
		const input = prompt("100円を分ける人数を入力してください")
		const result = share(input)
		alert(`${input}人で100円を${result}円に分けます。`)
	} catch (e) {
		if(e instanceof InputError){
			alert(`${e.message}`)
			location.reload()
		} else if(e instanceof Error){
			alert("不明なエラーが発生しました。")
		}
	}
}