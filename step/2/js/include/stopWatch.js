export default class { // 関数のデフォルト引数
	constructor(options = {}) {
		// 分割代入
		const { mainColor, bgColor } = options
		this.mainColor = mainColor || "#111"
		this.bgColor = bgColor || "#ffc20f"
		this.countNum = 0
		this.timer = null
		this.display = document.querySelector("[data-display]")
		this.content = document.querySelector("[data-content]")
		this.button = document.querySelector("[data-button]")
		this.history = document.querySelector("[data-history]")
		this.nowTime = document.querySelector("[data-history-now]")
		this.setColor()
		this.showNowTime()
		this.handleEvent()
	}

	getTime() {
		const now = new Date()
		const seconds = now.getSeconds()
		const minutes = now.getMinutes()
		const hours = now.getHours()
		return `${hours}:${minutes}:${seconds}`
	}

	setColor() {
		this.display.style.color = this.mainColor
		this.button.style.borderColor = this.mainColor
		this.button.style.color = this.mainColor
		this.button.style.boxShadow = `1px 1px 0 ${this.mainColor}`
		this.content.style.backgroundColor = this.bgColor
	}

	showNowTime() {
		this.nowTime.textContent = `${this.getTime()} now`
	}

	countUp() {
		this.timer = setInterval(() => {
			this.countNum++
			this.display.innerText = this.countNum
		}, 1000)
	}

	countStop() {
		clearInterval(this.timer)
		this.timer = null
	}

	init() {
		this.countNum = 0
		this.display.innerText = this.countNum
	}

	changeButtonText() {
		if (this.timer) {
			this.button.textContent = "start"
		} else {
			this.button.textContent = "stop"
		}
	}

	addHistory() {
		if (this.timer) {
			this.history.insertAdjacentHTML("afterbegin",
				`<p class="console__body">${this.getTime()} stop</p>`)
		} else {
			this.history.insertAdjacentHTML("afterbegin",
				`<p class="console__body">${this.getTime()} start</p>`)
		}
	}

	handleEvent() {
		this.button.addEventListener("click", () => {
			if (this.timer) {
				this.addHistory()
				this.changeButtonText()
				this.countStop()
			} else {
				this.init()
				this.addHistory()
				this.changeButtonText()
				this.countUp()
			}
		})
	}
}