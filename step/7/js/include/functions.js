export default function() {
	//無名関数
	const tesFunction = function() {
		console.log("test")
	}
	const testFunction2 = () => {
		console.log("test2")
	}

	//即時関数
	var testValue = "test";
	(function() {
		var testValue = "test1"
	})()
	// console.log(testValue)

	//letやconstはブロックスコープなのでこれだけでOK
	{
		let testValue3 = "test3"
	}
}
