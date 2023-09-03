/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let i,
    sum = 0,
    res = -Math.pow(2, 99);
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
    res = sum > res ? sum : res;
    if (sum < 0) sum = 0;
  }
  return res;
};
// @lc code=end
