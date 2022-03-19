import "../sass/app.sass"
import photoViewer from "./include/photoViewer"
const images = [
	"https://fakeimg.pl/250x100/81DAF5/",
	"https://fakeimg.pl/250x100/F781F3/",
	"https://fakeimg.pl/250x100/81F7D8/",
]
const viewerElm = document.getElementById("photoViewer")
new photoViewer(viewerElm,images).init()
