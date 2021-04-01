let str = 'hello world'

console.log(str.substring(3, 7)) // 从3开始到7结束（不包括7）
console.log(str.slice(3, 7)) // 从3开始到7结束（不包括7）
console.log(str.substr(3, 7))// 从3开始截取7个字符

console.log(str.substring(3, -4)) // substring会将所有负参数转化为0 并且以小的当做开始位置 --> substring(0, 3)
console.log(str.slice(3, -4)) // 参数为负数时转换为字符长度加上负参数 --> slice(3, (11 - 4))
console.log(str.substr(3, -4)) // 第一个参数会转化为字符串长度加负参数，第二个负参数会转化为0

// 第二个参数不穿 默认为提取到字符串末尾