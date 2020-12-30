let o = {
    a: 0,
    b: 1,
    c: 2
}

console.time()
for (const key in o) {
    console.log(key);
}
console.timeEnd()

console.time()
Object.keys(o).forEach(key => {
    console.log(key);
})
console.timeEnd()

let arr = new Array(100).fill(1)
console.time()
for (let i = 0; i < arr.length; i++) {
    // console.log(i);
}
console.timeEnd()
console.time()
for (let i = 0, len = arr.length; i < len; i++) {
    // console.log(i);
}
console.timeEnd()