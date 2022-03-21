export default function() {
	// async function displayMessage(){
	// 	const response = await fetch("./data/hello.json")
	// 	const data = await response.json()
	// 	const messageElm = document.getElementById("message")
	// 	messageElm.innerHTML = data.message
	// }
	// displayMessage()
	const prefElm = document.querySelector(".prefectures")
	const citiesElm = document.querySelector(".cities")

	async function getPrefs() {
		const prefResponse = await fetch(require("~/data/prefectures.json"))
		return await prefResponse.json()
	}
	async function getCities(prefCode) {
		const citiesResponse = await fetch(require(`~/data/cities${prefCode}.json`))
		return await citiesResponse.json()
	}
	async function updatePref() {
		const prefs = await getPrefs()
		createPrefsOptions(prefs)
	}
	async function updateCity() {
		const prefCode = prefElm.value
		const cities = await getCities(prefCode)
		createCitiesOptions(cities)
	}
	function createCitiesOptions(cities) {
		const optionStrs = cities.map(
			(city) => `<option value="${city.code}">${city.name}</option>`,
		)
		citiesElm.innerHTML = optionStrs.join("")
	}
	function createPrefsOptions(cities) {
		const optionStrs = cities.map(
			(pref) => `<option value="${pref.code}">${pref.name}</option>`,
		)
		prefElm.innerHTML = optionStrs.join("")
	}
	async function init() {
		await updatePref()
		await updateCity()
	}
	init()
	prefElm.addEventListener("change", updateCity)
}
