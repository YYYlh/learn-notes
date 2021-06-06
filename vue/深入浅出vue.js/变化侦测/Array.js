import { def } from './utils.js'

const arrayProto = Array.prototype

const arrayMethods = Object.create(arrayProto)

;['push', 'pop'].forEach(methods => {
    const original = arrayProto[methods]
    // 不应该用箭头函数，会导致this指向丢失
    def(arrayMethods, methods, function (...args) {
        const result = original.apply(this, args)
        // 拿到绑定的观察者实例
        const ob = this.__ob__
        ob.dep.notify()
        return result
    })
})
export default arrayMethods