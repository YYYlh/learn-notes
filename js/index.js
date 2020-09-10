3 >> 1 // * 相当于 parseInt(3/2)

~~1.9 // * 相当于 parseInt(1.9)

// * 自执行函数 （除了!之外，其他的运算符也可以，因为js中运算符的优先级最高会将紧紧相邻的js语句计算出结果）
!function(value) {
    console.log(value)
}(1)

// * 数组长度一定时可以将数组长度放到第一个分号内， 这样只用获取一次数组的长度
let a = [1,2,3]
for (let i = 0, len = a.length; i < len; i++) {
}

// * 将其他数据类型转为布尔
!!0 // false
!!'0' // true
!![] // true
!!{} // true