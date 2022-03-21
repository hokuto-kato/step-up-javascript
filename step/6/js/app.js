import "../sass/app.sass"
import AreaSelector from "./include/areaSelector"
import hello from "./include/hello"

const jsonStr = JSON.stringify({
	name: "John",
	age: 30,
	interests: ["music", "skiing"],
})
// console.log(jsonStr)
const obj = JSON.parse(jsonStr)
// console.log(obj.name)
const rootElm = document.getElementById("areaSelector")
document.addEventListener("DOMContentLoaded", () => {
	new AreaSelector(rootElm)
	hello()
})
