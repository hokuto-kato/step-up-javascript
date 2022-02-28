import "../sass/app.sass"
const element = document.getElementById("innerTest")
const buttonElement = document.getElementById("testButton")

element.innerHTML = "<strong>Javascriptで書きました</strong>"
buttonElement.addEventListener("click", () => {
	const numberElement = document.getElementById("number")
	const val = numberElement.value
	const num = parseInt(val)
	if(num % 2 === 0){
		alert("偶数です")
	} else {
		alert("偶数ではありません")
	}
})
