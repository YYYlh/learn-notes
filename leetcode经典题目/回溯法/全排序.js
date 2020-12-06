// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
/* 输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
] */

var permute = function(nums) {
    let res = []
    let used = {}
    function dfs(path) {
        if (path.length === nums.length) {
            res.push(path.slice())
            return
        }
        for (const num of nums) {
            if (used[num]) {
                continue
            }
            used[num] = true
            path.push(num)
            dfs(path)
            path.pop()
            used[num] = false
        }
    }
    dfs([])
    return res
}
console.log(permute([1,2,3]))