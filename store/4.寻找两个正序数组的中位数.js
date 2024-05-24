/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const nums = [...nums1, ...nums2];
  nums.sort((a, b) => a - b);

  if (nums.length % 2) return nums[Math.floor(nums.length / 2)];
  else
    return (
      (nums[Math.floor(nums.length / 2)] +
        nums[Math.floor(nums.length / 2) - 1]) /
      2
    );
};
// @lc code=end
