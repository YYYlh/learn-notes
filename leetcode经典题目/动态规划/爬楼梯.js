// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。

var climbStairs = function(n) {
    if (n <= 2) return n
    let l1 = 1
    let l2 = 2
    for (let i = 3; i <= n; i++) {
        l1 = l2 + (l2 = l1 + l2 , 0)
    }
    return l2
};