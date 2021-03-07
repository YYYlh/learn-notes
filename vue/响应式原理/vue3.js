/*
 * @Author: liuhao
 * @Date: 2021-03-07 21:11:22
 * @LastEditTime: 2021-03-07 21:30:00
 */


let obj = {
    name: '佐助',
    age: '20',
    wife: {
        name: '小樱',
        age: '19'
    }
}

let proxyObj = new Proxy(obj, {
    get(target, key) {
        return Reflect.get(target, key)
    },
    set(target, key, value) {
        return Reflect.set(target, key, value)
    },
})

console.log(proxyObj.name)

proxyObj.name = '鸣人'
proxyObj.gender = '男'
proxyObj.wife.name = '雏'
proxyObj.wife.gender = '女'

console.log(obj)