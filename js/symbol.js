let s1 = Symbol('foo')
let s2 = Symbol('bar')

let o = {
    [s1]: '我是foo',
    name: '刘浩'
}
o[s2] = '我是bar'

console.log(o[s1])

Object.keys(o) // 拿不到key
console.log('getOwnPropertySymbols', Object.getOwnPropertySymbols(o)) // 得到符号属性的数组
console.log('getOwnPropertyNames', Object.getOwnPropertyNames(o)) // 只能拿到普通属性
console.log('getOwnPropertyDescriptors', Object.getOwnPropertyDescriptors(o)) // 返回对象及其配置
console.log('ownKeys', Reflect.ownKeys(o)) // 拿到所有的属性

// Symbol.for 注册全局符号如果key存在则返回对应的实例
let s3 = Symbol.for('global')
let s4 = Symbol.for('global')
console.log('s3 === s4', s3 === s4) // true
console.log(Symbol.keyFor(s4)); // 得到描述符


class Emitter {
    constructor(max) {
        this.max = max
        this.asyncIndex = 0
    }
    async *[Symbol.asyncIterator]() {
        while(this.asyncIndex < this.max) {
            yield new Promise((reslove) => reslove(this.asyncIndex++))
        }
    }
}

const emitter = new Emitter(5)
async function iterator() {
    console.log('执行');
    for await (const i of emitter) {
        console.log(i);
    }
}

iterator()

let initial = ['bar']
let array = ['foo']
console.log(array[Symbol.isConcatSpreadable])
console.log(initial.concat(array))
array[Symbol.isConcatSpreadable] = true
console.log(initial.concat(array))

let arrayLikeObj = {0: 'baz', length: 1}
console.log(initial.concat(arrayLikeObj))
arrayLikeObj[Symbol.isConcatSpreadable] = true
console.log(initial.concat(arrayLikeObj))

let otherObj = new Set().add('xun')
otherObj[Symbol.isConcatSpreadable] = true
console.log(initial.concat(otherObj)) // 会被忽略


class Foo {
    constructor() {
        // 使用Object.prototype.toString时 会返回Symbol.toStringTag的值
        this[Symbol.toStringTag] = 'Foo'
    }
}

let foo = new Foo()
console.log(foo.toString());