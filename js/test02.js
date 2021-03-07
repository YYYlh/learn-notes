/*
 * @Author: liuhao
 * @Date: 2021-03-07 21:31:19
 * @LastEditTime: 2021-03-07 21:40:26
 */

let obj = {}

Reflect.defineProperty(obj, 'name', {
    value: '刘浩', // key对应的value
    writable: false, // 能否被修改
    enumerable: true
})

obj.name = '张三'
console.log(obj);
console.log(Object.keys(obj))