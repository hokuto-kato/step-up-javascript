// console.log("3" == 3) // true
// console.log("3" === 3) // false
const test1 = {message:"hello"}
const test2 = {message:"hello"}
const test3 = test1
// console.log(test1 == test2) // false
// console.log(test1 === test2) // false
// console.log(test1 == test3) // true
// console.log(test1 === test3) // true

// オブジェクトを比較するならこのような関数を用いる必要がある
// function ObjCompare(obj1, obj2){
// 	const Obj1_keys = Object.keys(obj1);
// 	const Obj2_keys = Object.keys(obj2);
// 	if (Obj1_keys.length !== Obj2_keys.length){
// 		return false;
// 	}
// 	console.log(obj1, obj2)
// 	for (let k of Obj1_keys){
// 		console.log(k)
// 		if(obj1[k] !== obj2[k]){
// 			return false;
// 		}
// 	}
// 	return true;
// }
// const fruit1 = {
// 	name: 'Apple',
// 	price: '2',
// 	color: 'red'
// };
// const fruit2 = {
// 	price: '2',
// 	name: 'Apple',
// 	color: 'red'
// };
// console.log(ObjCompare(fruit1,fruit2))