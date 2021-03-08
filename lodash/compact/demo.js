const _ = require('loadsh');


let arr = [1, 0, '', false, null, undefined];

// 去除原数组中的假值 返回一个新的数组
console.log(_.compact(arr));