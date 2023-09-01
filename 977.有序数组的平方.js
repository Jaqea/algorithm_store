/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let i,
    j,
    res = [];
  i = 0;
  j = nums.length - 1;
  while (i <= j) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      res.unshift(nums[i] * nums[i]);
      i++;
    } else {
      res.unshift(nums[j] * nums[j]);
      j--;
    }
  }
  return res;
};
// @lc code=end
