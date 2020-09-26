// promise
const FUFILLED = Symbol('fufilled') // 成功
const PENDING = Symbol('pending') //进行中
const REJECTED = Symbol('rejected') // 失败

const isFunc = (fn) => typeof fn === 'function'
class MyPromise {
    constructor(fn) {
        if (!isFunc(fn)) {
            throw new Error('参数应该是一个函数哦')
        }
        this.status = PENDING
        // 成功的值
        this.success = undefined
        // 失败的值
        this.error = undefined
        // 保存then方法中的函数
        this.onSuccessCallbacks = []
        this.onErrorCallbacks = []
        // 因为promise中的reslove和reject是在window中调用的所以需要更换this指向
        fn(this.reslove.bind(this), this.reject.bind(this))
    }
    // 成功
    reslove(val) {
        // 改为异步
        setTimeout(() => {
            if (this.status === PENDING) {
                this.status = FUFILLED
                this.success = val
                if (this.onSuccessCallbacks.length > 0) {
                    for (const callback of this.onSuccessCallbacks) {
                        callback(val)
                    }
                }
            }
        }) 
    }
    // 失败
    reject(val) {
        // 改为异步
        setTimeout(() => {
            if (this.status === PENDING) {
                this.status = REJECTED
                this.error = val
                if (this.onErrorCallbacks.length > 0) {
                    for (const callback of this.onErrorCallbacks) {
                        callback(val)
                    }
                }
            }
        })
    }
    then(onSuccess, onError) {
        if (!isFunc(onSuccess)) {
            throw new Error('第一个参数应该是一个函数哦')
        }
        if (onError && !isFunc(onError)) {
            throw new Error('第二个参数应该是一个函数哦')
        }
        return new MyPromise((reslove, reject) => {
            if (this.status === FUFILLED) {
                reslove(onSuccess(this.success))
            } else if (this.status === REJECTED) {
                if (!onError) {
                    throw new Error('第二个参数应该是一个函数哦')
                }
                reslove(onError(this.error))
            } else {
                this.onSuccessCallbacks.push(() => {
                    reslove(onSuccess(this.success))
                })
                this.onErrorCallbacks.push(() => {
                    if (!onError) {
                        throw new Error('第二个参数应该是一个函数哦')
                    }
                    reslove(onError(this.error))
                })
            }
        })
    }
    catch(callback) {
        return this.then(() => {}, callback)
    }
}

new MyPromise((reslove, reject) => {
    console.log(1)
    reslove()
    console.log(2) 
}).then(() => {
    console.log(3);
})
console.log(4);