// new 操作符实现原理

/* 
* 新创建一个对象 使其隐式原型(__proto__)指向构造函数的显示原型(prototype)
* 将构造函数中的this指向新创建的对象中
* 执行构造函数
*/

function A(name) {
    this.name = name
}

function New(...args) {
    // 拿到第一个参数(构造函数)
    const constructor = args[0]
    // 创建一个新的对象
    const obj = Object.create(constructor.prototype)
    // 将构造函数中的this改为obj 并执行
    constructor.call(obj, ...args.splice(1))
    return obj
}


let a = New(A, 'liuhao')

console.log(a.name);