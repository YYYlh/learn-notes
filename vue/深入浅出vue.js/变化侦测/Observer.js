import arrayMethods from './Array.js'
import Dep from './Dep.js'
import { def } from './utils.js'

export default class Observer {
    constructor(value) {
        this.value = value
        this.dep = new Dep()
        // 给每一个被检测的数据绑定对应的观察者实例
        def(value, '__ob__', this)
        if (Array.isArray(value)) {
            value.__proto__ = arrayMethods
        } else {
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
    let chidOb = observer(val)

    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get() {
            if (chidOb) {
                chidOb.dep.depend()
            }
            return val
        },
        set(newVal) {
            if (newVal === val) {
                return
            }
            val = newVal
            // 数据发生改变，通知依赖更新
            if (chidOb) {
                chidOb.dep.notify()
            }
        }
    })
}


function observer(value) {
    if (typeof value !== 'object') {
        return
    }
    let ob
    if (value.__ob__ && value.__ob__ instanceof Observer) {
        ob = value.__ob__
    } else {
        ob = new Observer(value)
    }

    return ob
}