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
  let i,
    j,
    left = 0,
    right = nums.length - 1;

  for (i = nums.length - 1; i > 0; i--) {
    for (j = i - 1; j > -1; j--) {
      if (nums[i] > nums[j]) {
        if (i - j < right - left) {
          right = i;
          left = j;
        }
      }
    }
  }

  if (right - left !== nums.length - 1) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;

    left++;
    console.log(nums, left);
    for (i = left; i < nums.length - 1; i++) {
      for (j = left; j < nums.length + left - i - 1; j++) {
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
