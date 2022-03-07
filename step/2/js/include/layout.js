const container = document.querySelector("[data-container]")
const setHeight = () => {
	const windowHeight = window.innerHeight
	container.style.height = `${windowHeight}px`
}

export default function () {
	setHeight()
	const observer = new ResizeObserver(() => {
		setHeight()
	})
	observer.observe(container)
}