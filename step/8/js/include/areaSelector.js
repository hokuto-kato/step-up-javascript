export default class {
	constructor() {
		this.prefSelector = document.querySelector("[data-prefectures]")
		this.citySelector = document.querySelector("[data-cities]")
		this.initAreaSelector()
		this.handleEvent()
	}
	async initAreaSelector() {
		const [prefs, ...cities] = await Promise.all([
			this.getPrefs(), this.getCities("001"), this.getCities("002"), this.getCities("003"),
		])
		this.prefs = prefs
		this.cities = cities
		this.cities["001"] = this.cities[0]
		this.cities["002"] = this.cities[1]
		this.cities["003"] = this.cities[2]
		await this.updatePref()
		await this.updateCity()
	}
	async getPrefs() {
		const prefResponse = await fetch(require("~/data/prefectures.json"))
		return await prefResponse.json()
	}
	async getCities(cityCode) {
		const cityResponse = await fetch(require(`~/data/cities${cityCode}.json`))
		return await cityResponse.json()
	}
	updatePref(){
		this.createPrefOptionsHtml(this.prefs)
	}
	updateCity(){
		const pref = this.prefSelector.value
		this.createCityOptionsHtml(this.cities[pref])
	}
	createPrefOptionsHtml(prefs) {
		const prefsHtml = prefs.map(pref => {
			return `<option value="${pref.code}">${pref.name}</option>`
		})
		this.prefSelector.innerHTML = prefsHtml.join("")
	}
	createCityOptionsHtml(cities) {
		const citiesHtml = cities.map(city => {
			return `<option value="${city.code}">${city.name}</option>`
		})
		this.citySelector.innerHTML = citiesHtml.join("")
	}
	handleEvent(){
		this.prefSelector.addEventListener("change",  () => {
			this.updateCity()
		})
	}
}