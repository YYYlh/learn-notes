// class Vehicle {
//     constructor() {
//         if (new.target) {
//             throw new Error('我是抽象类，不能实例化')
//         }
//         if (!this.foo) {
//             throw new Error('必须定义foo方法')
//         }
//     }
// }

// new Vehicle()

// 多继承

class A {
    a() {
        console.log('我是a');
    }
}

const B = (superClass) => class extends superClass {
    b() {
        console.log('我是b');
    }
}

const C = (superClass) => class extends superClass {
    c() {
        console.log('我是c');
    }
}

function mix(BaseClass, ...Mixins) {
    return Mixins.reduce((acc, cur) => cur(acc), BaseClass)
}
console.log(mix(A, B, C));
class D extends mix(A, B, C) {

}

const d = new D()

d.a()
d.b()
d.c()

console.log(Object.getPrototypeOf(d).constructor === D)