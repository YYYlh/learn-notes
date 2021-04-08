class Vehicle {
    constructor() {
        if (new.target) {
            throw new Error('我是抽象类，不能实例化')
        }
        if (!this.foo) {
            throw new Error('必须定义foo方法')
        }
    }
}

new Vehicle()