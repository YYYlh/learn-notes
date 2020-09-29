// async 实现原理 迭代器(语法糖)

function async(func) {
    if (typeof func !== 'function') throw new Error('参数应该是一个函数类型')
    const gen = func()

    function next(data) {
        const result = gen.next(data)
        if (result.done) return
        result.value.then(res => {
            next(res)
        })
    } 
    next()
}

function get() {
    return new Promise((reslove) => {
        reslove(12)
    })
}

function * getFunc() {
    const res= yield get()
    console.log(res)
}

async(getFunc)
