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
  let flag = 0,
    i,
    j;

  loop: for (i = nums.length - 1; i > 0; i--) {
    for (j = i - 1; j > -1; j--) {
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        flag = 1;
        break loop;
      }
    }
  }

  if (flag) {
    j++;
    for (i = j; i < nums.length; i++) {
      for (j = i; j < nums.length - i - 1; j++) {
        if (nums[j] > nums[j + 1]) {
          const temp = nums[j];
          nums[j] = nums[j + 1];
          nums[j + 1] = temp;
        }
      }
    }
  } else nums.reverse();

  return nums;
};
// @lc code=end
