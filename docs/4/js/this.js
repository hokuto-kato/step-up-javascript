const obj1 = {
	name: "これはobj1です",
	test: function() {
		console.log(this)
		console.log(this === obj1)
	},
}
const obj2 = {
	name: "これはobj2です",
}

// obj1.test.call(obj2)

class MyClass {
	constructor() {
		this.name = "これはMyClassです"
	}

	test() {
		console.log(this)
		console.log(this === instance)
		console.log(instance)
	}
}

const instance = new MyClass()
// console.log(instance)
// instance.test()

// 何も関数に囲まれていない場合は、thisはグローバルオブジェクトになる
// console.log(this === window) // true
function globalTest() {
	console.log(this)
}

// globalTest()

const objArrow = {
	name: "これはobjArrowです",
	test: function() {
		console.log("testの中です")
		console.log(this)
		const arrow = () => {
			console.log("arrowの中です")
			console.log(this)
			console.log(this === objArrow)
		}
		const normal = function() {
			console.log("normalの中です")
			console.log(this)
			console.log(this === objArrow)
		}
		arrow()
		normal()
	},
}
// console.log(objArrow)
// console.log(objArrow.test())

const legacyObj = {
	name: "通常関数の場合",
	test: function() {
		const self = this
		console.log(self)
		console.log(this)
		document.addEventListener("click", function() {
			console.log(self)
			console.log(this)
			console.log(self.name)
		})
	},
}
// legacyObj.test()

const arrowObj = {
	name: "arrow関数の場合",
	test: function() {
		console.log(this)
		document.addEventListener("click", () => {
			console.log(this)
			console.log(this.name)
		})
	},
}

// arrowObj.test()

function MyClass2() {
	this.name = "これはClass2です"
	console.log(this)
}

MyClass2.prototype.test = function() {
	console.log(this === instance2)
	console.log("test")
}

const instance2 = new MyClass2
// instance2.test()

