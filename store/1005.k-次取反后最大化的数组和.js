/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const absSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (Math.abs(arr[j]) < Math.abs(arr[j + 1])) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};
var largestSumAfterKNegations = function (nums, k) {
  absSort(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      nums[i] *= -1;
      k--;
    }
    if (!k) break;
  }
  if (k) for (let i = 0; i < k; i++) nums[nums.length - 1] *= -1;
  return nums.reduce((pre, cur) => pre + cur);
};
// @lc code=end
