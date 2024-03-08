/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i, j;

  loop: for (i = nums.length - 1; i > -1; i--) {
    for (j = nums.length - 1; j > i; j--) {
      if (nums[j] > nums[i]) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        break loop;
      }
    }
  }

  const start = ++i;
  for (; i < nums.length - 1; i++) {
    for (j = start; j < nums.length + start - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  return nums;
};
// @lc code=end
