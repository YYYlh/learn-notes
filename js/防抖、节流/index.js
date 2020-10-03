// 防抖
function debounce(fn, wait = 100) {
    if (typeof fn !== 'function') {
        throw new Error(`${fn} is not a function`)
    }
    let timer = null
    return (...args) => {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, wait)
    }
}
// 节流
function throttle(fn, wait = 2000) {
    if (typeof fn !== 'function') {
        throw new Error(`${fn} is not a function`)
    }
    let prev = +new Date
    return (...args) => {
        if (+new Date - wait > prev) {
            fn(...args)
            prev = +new Date
        }
    }
}
function fn1() {
    console.log(1)
}
let throttleFn = throttle(fn1)
setInterval(() => {
    throttleFn()
}, 10)