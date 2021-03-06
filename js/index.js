console.log('-------------------------------------0------------------------------------------')
3 >> 1 // * 相当于 parseInt(3/2)
~~1.9 // * 相当于 parseInt(1.9)

console.log('-------------------------------------1------------------------------------------')

// * 自执行函数 （除了!之外，其他的运算符也可以，因为js中运算符的优先级最高会将紧紧相邻的js语句计算出结果）
!function(value) {
    console.log(value)
}(1)

console.log('-------------------------------------2------------------------------------------')

// * 数组长度一定时可以将数组长度放到第一个分号内， 这样只用获取一次数组的长度
let a = [1,2,3]
for (let i = 0, len = a.length; i < len; i++) {
}

console.log('-------------------------------------3------------------------------------------')

// * 将其他数据类型转为布尔
!!0 // false
!!'0' // true
!![] // true
!!{} // true

console.log('-------------------------------------4------------------------------------------')

let step = 0
function next() {
    step = (step + 1) % 3
    // * 相当于 
    // step++
    // if (step === 3) step = 0
}
next()
next()
next()
console.log(step)

console.log('-------------------------------------5------------------------------------------')

+new Date // * 获取当前时间的时间戳

console.log('-------------------------------------6------------------------------------------')

// * 布局抖动 -- 强制同步布局
// * 在进行dom操作时如果有获取和修改dom样式的操作，则应该将获取放在修改的前面，因为浏览器修改dom样式时会重新布局， 而且是异步操作，
// * 如果获取放在修改的下一步执行，获取时浏览器还没有完成布局（因为是异步），浏览器会重新布局一次，但这次的布局是同步的

console.log('-------------------------------------7------------------------------------------')

// * 利用行参可以设置默认值特性可以实现参数验证的功能(js)
const validA = () => {throw new Error('缺少参数a')}
function func1 (a = validA()) {
    console.log(a)
}
func1('1')
// func1()

console.log('-------------------------------------8------------------------------------------')

// * 使用 toLocaleString 方法可以将数字转化为金额的显示方式（千分符）
{
    let price = 1000000000
    console.log(price.toLocaleString()) // 100,000
    // * 正则
    let reg = /\B(?=(\d{3})+(?!\d))/g
    console.log(price.toString().replace(reg, ','))
}

console.log('-------------------------------------9------------------------------------------')

// * 使用逗号表达式来交换两个变量的值（不用借助其他变量）
// 逗号表达式： 逗号表达式是将两个及其以上的式子联接起来，从左往右逐个计算表达式，整个表达式的值为最后一个表达式的值
{
    let a = [1, 2]
    a[0] = a[1] + (a[1] = a[0], 0)
    console.log(a)
}

console.log('-------------------------------------10------------------------------------------')
// *   a ** b 相当于 Math.pow(a, b)
{
    console.log(2 ** -1)
}

console.log('-------------------------------------12------------------------------------------')
// 使用 & 操作符判断奇偶 n & 1 等于1时n为奇数，等于0时n为偶数
{
    console.log(1 & 1)
    console.log(2 & 1)
}
console.log('-------------------------------------13------------------------------------------')
// 当使用 a || b时 如果 a = 0的话则会执行 || 后的语句，这时可以将||换成??
// ‘??’ 只有a为undifend或null时才会执行b
{
    let a = 0
    function b(type) {
        console.log(type, 'b执行了')
    }
    a || b('||')
    a ?? b('??')
}
console.log('-------------------------------------14------------------------------------------')
// 判断对象的数据类型
{
    const isType = type => target => Object.prototype.toString.call(target) === `[object ${type}]`
    const isArray = isType('Array')
    console.log(isArray([]))
}
console.log('-------------------------------------15------------------------------------------')
// 优雅处理async/await中的错误捕获问题
{
    function get(a, b, c) {
        console.log(a, b, c);
        return new Promise((reslove, reject) => {
            reject('error')
        })
    }
    // 传统处理错误捕获问题（如果有多个await就要写多个trycatch）
    async function fn() {
        try {
            const res = await get()
        } catch (error) {
            console.log(error)
        }
    }
    // fn()
    // 可以事先封装一个抛出异常的函数
    async function errorCaptured(asyncFn, ...args) {
        try {
            const res = await asyncFn(...args)
            console.log(1);
            return [res, null]
        } catch (error) {
            return [null, error]
        }
    }
    async function fn1() {
        let [res, error] = await errorCaptured(get, 1,2,3)
        console.log('res: ', res)
        console.log('error: ', error)   
    }
    // fn1()
}
console.log('-------------------------------------16------------------------------------------')
{
    let a = {
        n: 0,
        valueOf() {
            return ++this.n
        }
    }
    if (a == 1 && a == 2 && a == 3) {
        console.log('haha');
    }
}
console.log('-------------------------------------17------------------------------------------')
// 使用spread/rest(...)操作符删除对象中的属性
{
    /* function removeProperty(prop) {
        return function({[prop]: _, ...reset}) {
            return reset
        }
    } */
    const removeProperty = prop => ({[prop]: _, ...reset}) => reset
    let a = {b: 1, c: 2, d: 3}
    const removeB = removeProperty('b')
    console.log(removeB(a))
}
console.log('-------------------------------------18------------------------------------------')
// 判断两边的值是否相等（作用相当于 ===）
{
    console.log(Object.is('1', 1)); // false
    console.log(Object.is(NaN, NaN)); // true
    console.log(NaN === NaN); // false
}
console.log('-------------------------------------19------------------------------------------')
// 变量提升
{
    // var fn = function() {
    //     return '我是变量声明'
    // }

    // function fn() {
    //     return '我是函数声明'
    // }
    // 最终执行顺序
    // var fn
    // function fn() {
    //     // 
    // }
    // fn = function () {
    //     //
    // }

    // console.log(fn()); // 我是变量声明
}
console.log('-------------------------------------20------------------------------------------')
// 对象与map互转
{
    console.log(Object.fromEntries(new Map([['11',11]])))
    let o = {
        name: 'liuhao'
    }
    console.log(new Map(Object.entries(o)))
}
console.log('-------------------------------------21------------------------------------------')
// 数组的some方法(返回一个布尔值，如果数组中有一项或多项通过了回调函数的返回值则返回true反之返回flase)
{
    let arr = [1,3,4,5,6]
    console.log(arr.some(item => item > 5))
    console.log(arr.some(item => item > 7))
    // 如果数组中的项被删除或没有赋值则改数组项不会被调用
    let arr1 = new Array(4)
    arr1.some((item) => {
        console.log(item)
    })
}
console.log('-------------------------------------22------------------------------------------')
// 数组的reduce方法（回调函数里的第一个参数为上一次遍历回调函数的返回值，如果没有第二个参数有默认值则第一次遍历时就是默认值，否则是数组的第一项）
// 第二个参数是当前遍历的值
{
    const arr  = [
        {
            username:    'makai',
            displayname: '馆长',
            email:       'guanzhang@coffe1891.com'
        },
        {
            username:    'xiaoer',
            displayname: '小二',
            email:       'xiaoer@coffe1891.com'
        },
        {
            username:    'zhanggui',
            displayname: '掌柜',
            email:       null
        },
    ]
    let obj = arr.reduce((pevious, current) => {
        return {...pevious, [current.username]: current}
    }, {})
    console.log(obj);
}
console.log('-------------------------------------22------------------------------------------')
// bigint
{
    let num = 10n
    console.log(num)
    console.log(Number(10n / 3n))
}
console.log('-------------------------------------23------------------------------------------')
{
    let o = {
        fun() {
            console.log(this)
            !function() {
                console.log(this) // 全局
            }()
        }
    }
    o.fun()
}