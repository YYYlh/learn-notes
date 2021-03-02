/* 
* 编写一个算法来判断一个数 n 是不是快乐数。
* 「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，
* 那么这个数就是快乐数。
* 如果 n 是快乐数就返回 True ；不是，则返回 False 。
*/

// 示例
/* 
输入：19
输出：true
解释：
1² + 9² = 82
8² + ²² = 68
6² + 8² = 100
1² + 0² + 0² = 1
*/

// todo 使用快慢指针来跳出无限循环（快慢指针始终会相遇）

function isHappy(n: number): boolean {
    let slow: number = n
    let fast: number = n
    do {
        slow = squareSum(slow)
        fast = squareSum(fast)
        fast = squareSum(fast)
        if (fast === 1) return true
    } while (fast !== slow)
    return fast === 1
}

function squareSum(n: number): number {
    let squaresum: number = 0
    while(n !== 0) {
        squaresum += (n % 10) * (n % 10)
        n = ~~(n / 10)
    }
    return squaresum
}

console.log(isHappy(19))