export default function() {
	function wait(sec) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(`${sec}秒経ちました`)
				// もしも失敗するときには以下のように失敗を知らせることができる
				//	reject(new Error("エラーです"))
			}, sec * 1000)
		})
	}
	// wait(3).then((msg) => {
	// 	//ここは3秒後にコールされます
	// 	console.log(msg) //=> 3秒経ちました
	// }).catch((err) => {
	// 	console.error(err)
	// })
	async function wait3sec(){
		const msg = await wait(3)
		// 3秒後に下記が実行される
		console.log(msg) // => 3秒経ちました
	}
	// wait3sec()

	//複数の非同期処理の完了後に何かをしたい場合
	async function waitMultiple(){
		const promises = [wait(3), wait(5)]
		const messages = await Promise.all(promises)
		console.log(messages) //=> [3秒経ちました, 5秒経ちました]
	}
	waitMultiple()
}