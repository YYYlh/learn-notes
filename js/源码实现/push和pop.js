Array.prototype.myPush = function(...args) {
    this.splice(this.length, 0, ...args)
    return this.length
}

Array.prototype.myPop = function() {
    return this.splice(this.length - 1, 1)[0]
}
let a = [1]
console.log(a.push(3))
console.log(a.myPush(3))
console.log(a)
console.log(a.myPop());