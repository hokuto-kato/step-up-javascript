import "../sass/app.sass"
import json from "./include/json"

const jsonStr = JSON.stringify({
	name: 'John',
	age: 30,
	interests: ['music', 'skiing']
});
// console.log(jsonStr)
const obj = JSON.parse(jsonStr)
// console.log(obj.name)

document.addEventListener('DOMContentLoaded', () => {
	json()
})