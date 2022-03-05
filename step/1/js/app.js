import "../sass/app.sass"

const display = document.querySelector("[data-display]")
const start = document.querySelector("[data-start]")
const stop = document.querySelector("[data-stop]")
const history = document.querySelector("[data-history]")
let countNum = 0
let timer = null

const stopWatch = (options) => {
	options = options || {}
	const color = options.color || "lightblue"
	const backgroundColor = options.backgroundColor || "black"
	display.style.color = color
	display.style.backgroundColor = backgroundColor

	const getTime = () => {
		const now = new Date()
		const seconds = now.getSeconds()
		const minutes = now.getMinutes()
		const hours = now.getHours()
		return `${hours}時${minutes}分${seconds}秒`
	}
	const addHistory = (text) => {
		const p = document.createElement("p")
		p.textContent = `${getTime()} ${text}`
		history.append(p)
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

	start.addEventListener("click", () => {
		if (timer) return
		init()
		addHistory("開始")
		countUp()
	})
	stop.addEventListener("click", () => {
		if (!timer) return
		addHistory("終了")
		countStop()
	})
}

stopWatch({
	color: "#111",
	backgroundColor: "#FFD400"
})