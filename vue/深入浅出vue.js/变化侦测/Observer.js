import Dep from './Dep.js'
export default class Observer {
    constructor(value) {
        this.value = value
        if (!Array.isArray(value)) {
            this.walk(value)
        }
    }

    walk(obj) {
        const keys = Object.keys(obj)
        for(let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i], obj[keys[i]])
        }
    }
}

function defineReactive(data, key, val) {

    if (typeof val === 'object') {
        new Observer(val)
    }

    let dep = new Dep()
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get() {
            // 在使用该数据时数据添加到依赖中
            dep.depend()
            return val
        },
        set(newVal) {
            if (newVal === val) {
                return
            }
            val = newVal
            // 数据发生改变，通知依赖更新
            dep.notify()
        }
    })
}