import WebFont from "webfontloader"

const html = document.querySelector("html")
export default function () {
	WebFont.load({
		google: {
			families: ["JetBrains+Mono:100,200,300,400,500,600,700"]
		},
	})
	setTimeout(() => {
		html.classList.add("wf-inactive")
	}, 3000)
}
