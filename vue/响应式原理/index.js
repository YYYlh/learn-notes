const data = {
    name: 'liuhao',
    age: 18,
    firends: ['小明', '小红']
}

const oldArrayPortotype = Array.prototype
const newArrayPrototype = Object.create(oldArrayPortotype)

for (const methodName of ['push', 'pop', 'shift', 'unshift', 'splice']) {
    newArrayPrototype[methodName] = function() {
        console.log('视图更新了')
        oldArrayPortotype[methodName].call(this, ...arguments)
    }
}

observe(data)

function observe(target) {
    if (typeof target !== 'object' || target === null) {
        return target
    }
    if (Array.isArray(target)) {
        target.__proto__ = newArrayPrototype
    }
    for (const key in target) {
        defineReactive(target, key, target[key])
    }
}

function defineReactive(target, key, value) {
    observe(value)
    Object.defineProperty(target, key, {
        set(newValue) {
            observe(newValue)
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
// data.age = 10
data.firends[1] = '小张'
data.firends.push('小李')
console.log(data.firends[0])
console.log(data.firends[1])
console.log(data.firends[2])