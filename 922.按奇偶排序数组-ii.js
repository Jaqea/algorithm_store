/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let i, j, temp;
  j = 1;
  for (i = 0; i < nums.length; i += 2) {
    if (nums[i] % 2 == 1) {
      while (j < nums.length && nums[j] % 2 != 0) j += 2;
      if (j < nums.length) {
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
};
// @lc code=end
