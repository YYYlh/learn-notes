let a = {
    getName(params) {
        console.log(params);
        console.log(this.name);
    }
}
let b = {
    name: 'liuhao'
}

// * call
// a.getName.call(b, '张三', '李四')
Function.prototype.myCall = function(context = window, ...args) {
    context.func = this
    context.func(...args)
    delete context.func
}
// a.getName.myCall(b, '张三', '李四')

// * apply
// a.getName.apply(b, [1, 2])
Function.prototype.myApply = function(context = window, args) {
    if (!Array.isArray(args)) {
        throw new Error('第二个参数应该是一个数组')
    }
    context.func = this
    context.func(...args)
    delete context.func
}
a.getName.myApply(b, [1, 2])

// * bind
// 没看懂 先放着