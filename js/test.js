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
forobj(o, (key) => {
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


function forobj(obj, callback) {
    try {
        Object.keys(obj).forEach(callback)
    } catch (error) {
        console.error(new Error(error))
    }
}
