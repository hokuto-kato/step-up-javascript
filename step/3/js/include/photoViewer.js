export default class {
	constructor(rootElm, images) {
		this.rootElm = rootElm
		this.images = images
		this.currentIndex = 0
		this.nextButtonElm = document.querySelector('.nextButton')
		this.prevButtonElm = document.querySelector('.prevButton')
		this.imagesElm = document.querySelector('.images')
	}

	init() {
		this.handleEvent()
		this.updatePhoto()
		this.renderImageUrls()
	}
	renderImageUrls(){
		// let imageUrls = ""
		// for (const image of this.images) {
		// 	imageUrls += `<li><img src="${image}" alt=""></li>`
		// }
		// this.imagesElm.innerHTML = imageUrls
		this.images.forEach((el) => {
			this.imagesElm.insertAdjacentHTML("afterbegin",`<li><img src="${el}" alt=""></li>`)
		})
	}

	updatePhoto(){
		const frameElm = this.rootElm.querySelector(".frame")
		const image = this.images[this.currentIndex]
		const imageIndex = this.currentIndex + 1
		frameElm.innerHTML = `
		<div>
			<p>${imageIndex}枚目</p>
			<img src="${image}" alt="" />
		</div>
		`
		this.startTimer()
	}
	startTimer(){
		if(this.timerKey){
			clearTimeout(this.timerKey)
		}
		this.timerKey = setTimeout(() => {
			this.next()
		}, 3000)
	}
	next(){
		this.currentIndex++
		if(this.currentIndex >= this.images.length){
			this.currentIndex = 0
		}
		this.updatePhoto()
	}
	prev(){
		this.currentIndex--
		if(this.currentIndex < 0){
			this.currentIndex = this.images.length - 1
		}
		this.updatePhoto()
	}
	handleEvent(){
		this.nextButtonElm.addEventListener('click', () => {
			this.next()
		})
		this.prevButtonElm.addEventListener('click', () => {
			this.prev()
		})
	}

}