// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 示例:
// 输入: [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

function maxSubArray(nums) {
    for (let i = 1, len = nums.length; i < len; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1]
        }
    }
    return Math.max(...nums)
}
function maxSubArray1(nums) {
    let maxNum = -Infinity
    let sum = 0
    for (let i = 0, len = nums.length; i < len; i++) {
        sum += nums[i]
        if (sum < nums[i]) {
            sum = nums[i]
        }
        if (sum > maxNum) {
            maxNum = sum
        }
    }
    return maxNum
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray1([-2,1,-3,4,-1,2,1,-5,4]))