const toString = (value) => Object.prototype.toString.call(value)

Array.prototype.mySort = function(fn) {
    if (!fn || typeof fn !== 'function') {
        fn = function(to, form) {
            return to > form
        }
    }
    for (let i = 1; i < this.length; i++) {
        let temp = this[i]
        let j = i - 1
        while(j >= 0 && fn(temp, this[j])) {
            this[j + 1] = this[j]
            j--
        } 
        this[j + 1] = temp
    }
    return this
}

console.log([2,1,3,5,6].mySort((a, b) => {
    console.log(a, b);
    return a < b
}));