export default function() {
	function fetchHello() {
		// const promise = fetch(require("~/data/hello.json"))
		// const onFulfilled = (data) => {
		// 	console.log("通信成功しました")
		// }
		// const onRejected = (error) => {
		// 	console.log("通信に失敗しました")
		// }
		// return promise.then(onFulfilled, onRejected)
		return fetch(require("~/data/hello.json")).then((data) => {
			console.log("通信に成功しました")
		}, (error) => {
			console.log("通信に失敗しました")
		})
	}
	function displayMessagePromise() {
		return fetch(require("~/data/hello.json")).then((response) => {
			return response.json()
		}).then((data) => {
			const messageElm = document.getElementById("message")
			messageElm.innerHTML = data.message
			console.log("終了")
		}).catch((error)=>{
			console.log(`displayMessagePromiseでエラーが発生しました: ${error.message}`)
		})
	}
	async function displayMessage(){
		try{
			const response = await fetch(require("~/data/hello.json"))
			const data = await response.json()
			const messageElm = document.getElementById("message")
			messageElm.innerHTML = data.message
			console.log("終了")
		} catch (error){
			console.log(`displayMessageの処理中にエラーが発生しました: ${error.message}`)
		}
	}
	fetchHello()
	displayMessagePromise().then(() => {
		console.log("displayMessagePromiseが終わりました")
	})
	displayMessage().then(() => {
		console.log("displayMessageが終わりました")
	})
}