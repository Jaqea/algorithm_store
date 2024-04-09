/*
 * @lc app=leetcode.cn id=1248 lang=javascript
 *
 * [1248] 统计「优美子数组」
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let res = (left = 0),
    len = k,
    right = left + len - 1;

  while (len <= nums.length) {
    for (; right < nums.length; left++, right++) {
      let sum = 0;
      for (let i = left; i <= right; i++) if (nums[i] % 2) sum++;
      if (sum === k) res++;
    }

    len++;
    left = 0;
    right = left + len - 1;
  }

  return res;
};
// @lc code=end
