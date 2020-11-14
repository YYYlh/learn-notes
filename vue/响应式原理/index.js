const data = {
    name: 'liuhao',
    age: 18
}

observe(data)

function observe(target) {
    if (typeof target !== 'object' || target === null) {
        return target
    }
    for (const key in target) {
        defineReactive(target, key, target[key])
    }
}

function defineReactive(target, key, value) {
    Object.defineProperty(target, key, {
        set(newValue) {
            if (newValue !== value) {
                value = newValue
                console.log('视图更新了')
            }
        },
        get() {
            return value
        }
    })
}
data.age = 10
console.log(data.age);