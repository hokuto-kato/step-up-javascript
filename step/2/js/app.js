import "../sass/app.sass"
import webFont from "./include/webFont"
import stopWatch from "./include/stopWatch"
import layout from "./include/layout"
import textDecorator from "./include/textDecorator"

document.addEventListener("DOMContentLoaded", function () {
	// const td = new textDecorator("hoge")
	// console.log(td.name)
	// console.log(td.decorate())
	webFont()
	new stopWatch({
		mainColor: "#111",
		bgColor: "#ffc20f",
	})
	layout()
})