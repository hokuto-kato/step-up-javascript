const display = document.querySelector("[data-display]")
const start = document.querySelector("[data-start]")
const history = document.querySelector("[data-history]")
const nowTime = document.querySelector("[data-history-now]")
let countNum = 0
let timer = null
export default function (options) {
	// options = options || {}
	// const color = options.color || "lightblue"
	// const backgroundColor = options.backgroundColor || "black"
	// display.style.color = color
	// display.style.backgroundColor = backgroundColor

	const getTime = () => {
		const now = new Date()
		const seconds = now.getSeconds()
		const minutes = now.getMinutes()
		const hours = now.getHours()
		return `${hours}:${minutes}:${seconds}`
	}
	const showNowTime = () => {
		nowTime.textContent = `${getTime()} now`
	}
	const addHistory = () => {
		if (timer) {
			history.insertAdjacentHTML("afterbegin",
				`<p class="console__body">${getTime()} stop</p>`)
		}else{
			history.insertAdjacentHTML("afterbegin",
				`<p class="console__body">${getTime()} start</p>`)
		}
	}
	const countUp = () => {
		timer = setInterval(() => {
			countNum++
			display.innerText = countNum
		}, 1000)
	}
	const countStop = () => {
		clearInterval(timer)
		timer = null
	}
	const init = () => {
		countNum = 0
		display.innerText = countNum
	}
	const changeButtonText = () => {
		if (timer) {
			start.textContent = "start"
		} else {
			start.textContent = "stop"
		}
	}

	start.addEventListener("click", () => {
		if (timer) {
			addHistory()
			changeButtonText()
			countStop()
		} else {
			init()
			addHistory()
			changeButtonText()
			countUp()
		}
	})
	showNowTime()
}