export default function() {
	function createClosure() {
		const value = "closureValue"
		function myClosure() {
			//クロージャは関数を定義した場所から「自身と一緒、もしくは祖先のスコープの変数や関数」を束縛して、その参照を維持します。
			console.log(value)
		}
		return myClosure()
	}
	// createClosure()
	function createCounterObject() {
		return {
			value: 0,
			up: function() {
				//値を一つ増やす関数
				this.value++
			},
			down: function() {
				//値を一つ減らす関数
				this.value--
			},
		}
	}
	const counterObj = createCounterObject()
	counterObj.up()
	counterObj.up()
	counterObj.value = 10
	counterObj.down()
// console.log(counterObj.value)

	function createCounter() {
//	この値は外からいじることができません
		let value = 0
		return {
			up: function() {
				value++
			},
			down: function() {
				value--
			},
			getValue: function() {
				return value
			},
		}
	}
	const counter = createCounter()
	counter.up()
	counter.up()
	counter.down()
	counter.value = 10 // valueは公開されていないのでこの操作では想定のvalueを変更できません
// console.log(counter.getValue())
}

