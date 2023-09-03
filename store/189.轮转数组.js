/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let reverseNum = (nums, start, end) => {
  let temp;
  while (start < end) {
    temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
  return nums;
};
var rotate = function (nums, k) {
  if (k >= nums.length) k = k % nums.length;
  reverseNum(nums, nums.length - k, nums.length - 1);
  reverseNum(nums, 0, nums.length - k - 1);
  reverseNum(nums, 0, nums.length - 1);
};
// @lc code=end
