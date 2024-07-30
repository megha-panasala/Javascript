//arraytask-1
// marks = [80, 60, 78, 67, 56]
// let sum = 0;
// for (let val of marks) {
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks ${avg}`)

//arraytask2
//let items = [300, 600, 500, 340, 870]
// let i = 0;
// for (let val of items) {
//     console.log(`value at index ${i}=${val}`)
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`offer price=${items[i]}`)
//     i++;
// }

//arraytask2 with diffrent loop
// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items)

//array methods
let arr = ["megha", "shivani", "malvi", "atmiya", "Mca"];
let arr1 = ["krushi", 'vishva'];
//pop
let arr2 = arr.pop();
console.log(arr)
//push
let arr3 = arr.push("nidhi")
console.log(arr)
console.log(arr.concat(arr1))
//unshift
let arr4 = arr.unshift("mca")
console.log(arr)
//shift
let arr5 = arr.shift(arr)
console.log(arr)
//slice
let arr6 = arr.slice(3, 4)
console.log(arr)
//splice
let arr7 = arr.splice(2, 3, "hello")
console.log(arr)