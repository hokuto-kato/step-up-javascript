import "../sass/app.sass"
import webFont from "./include/webFont"
import stopWatch from "./include/stopWatch"

document.addEventListener("DOMContentLoaded", function () {
	webFont()
	stopWatch({
		// color: "#000",
		// backgroundColor: "#fff",
	})
})