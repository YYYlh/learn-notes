function isObject(value) {
    const type = typeof value
    return value != null && (type === 'object' || type === 'function')
}

console.log(isObject(Function))
console.log(isObject(12))
console.log(isObject(null))