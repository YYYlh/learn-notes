// * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

function lengthOfLongestSubstring(s) {
    let a = new Set()
    let k = 0
    let result = 0
    for (let i = 0, len = s.length; i < len; i++) {
        if (i !== 0) {
            a.delete(s.charAt(i - 1))
        }
        while(k < len && !a.has(s.charAt(k))) {
            a.add(s.charAt(k))
            k++
        }
        result = Math.max(result, k - i)
    }
    return result
};
console.log(lengthOfLongestSubstring('abcabcbb'))