export default class {
	constructor(name) {
		console.log("コンストラクタが呼ばれました")
		// プロパティ、インスタンス変数
		this.name = name
	}
	decorate(){
		console.log(`decorateが呼ばれました:${this.name}`)
		return `■■■■■■ ${this.name} ■■■■■■`
	}
}