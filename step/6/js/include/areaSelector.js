export default class {
	constructor(rootElm) {
		this.rootElm = rootElm
		this.prefecture = []
		this.cities = []
		this.prefCode = null
		this.prefElm = this.rootElm.querySelector(".prefectures")
		this.cityElm = this.rootElm.querySelector(".cities")
		this.init()
		this.handleEvent()
	}
	async init() {
		await this.updatePref()
		await this.updateCity()
	}
	async getPrefs() {
		const prefResponse = await fetch(require("~/data/prefectures.json"))
		return await prefResponse.json()
	}
	async getCities(prefCode) {
		const cityResponse = await fetch(require(`~/data/cities${prefCode}.json`))
		return await cityResponse.json()
	}
	async updatePref() {
		this.prefecture = await this.getPrefs()
		this.prefCode = this.prefecture[0].code
		this.createPrefOptionsHtml()
	}
	createPrefOptionsHtml(){
		this.prefElm.innerHTML = this.toOptionsHtml(this.prefecture)
	}
	createCityOptionsHtml(){
		this.cityElm.innerHTML = this.toOptionsHtml(this.cities)
	}
	toOptionsHtml(options){
		return options.map(option => `<option value="${option.code}">${option.name}</option>`).join("")
	}
	async updateCity() {
		this.cities = await this.getCities(this.prefCode)
		this.toOptionsHtml(this.cities)
		this.createCityOptionsHtml()
	}
	handleEvent() {
		this.prefElm.addEventListener("change", (e) => {
			this.prefCode = e.target.value
			this.updateCity()
		})
	}
}
