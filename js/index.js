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
    fn()
    // 可以事先封装一个抛出异常的函数
    async function errorCaptured(asyncFn, ...args) {
        try {
            const res = await asyncFn(...args)
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
    fn1()
}