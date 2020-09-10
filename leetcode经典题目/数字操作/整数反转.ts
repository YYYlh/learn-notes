/*
* 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转 
*/

// ! 注意: 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

// x = 123
function reverse(x: number): number {
    let result = 0

    while(x !== 0) {
        result = x % 10 + result * 10
        x = ~~(x / 10)
    }
    if (result < -2147483648 || result > 2147483647) return 0
    return result
}

console.log(reverse(2147483647))