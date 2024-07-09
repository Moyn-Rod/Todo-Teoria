


let arr=[1,2,3,4,5,6,7,8,9,10,11]

let obj={
    length:3
}

for (const i of arr.keys()) {
    console.log(i)
}

for (const i of Array.prototype.keys.call(obj)) {
    console.log(typeof i)
}