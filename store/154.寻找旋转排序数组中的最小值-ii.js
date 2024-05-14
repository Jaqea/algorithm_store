/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let bound;
  for (bound = 0; bound < nums.length - 1; bound++) {
    if (nums[bound + 1] < nums[bound]) break;
  }

  if (bound === nums.length - 1) return nums[0];
  else return nums[0] > nums[bound + 1] ? nums[bound + 1] : nums[0];
};
// @lc code=end
