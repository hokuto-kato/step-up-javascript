export default function() {
	async function displayMessage() {
		const response = await fetch(require("~/data/hello.json"))
		const data = await response.json()
		const messageElm = document.getElementById("message")
		messageElm.innerHTML = data.message
		console.log("終了")
	}
	console.log("開始前")
	displayMessage()
	console.log("開始後")
}