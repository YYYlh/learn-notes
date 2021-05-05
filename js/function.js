let o = []
Object.defineProperty(o, 'push', {
    enumerable: false,
    writable: true,
    configurable: true,
    value: function a (...args) {
        console.log(111);
        return Array.prototype.push.apply(this, args)
    }
})
o.push(1)
 