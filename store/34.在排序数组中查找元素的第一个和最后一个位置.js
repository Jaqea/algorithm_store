/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const res = [-1, -1];
  let left = 0,
    right = nums.length - 1,
    mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      res[0] = left;
      res[1] = right;
      break;
    } else if (target > nums[mid]) left = mid + 1;
    else right = mid - 1;
  }

  // console.log(res);

  if (res[0] !== -1) {
    while (nums[left] !== target) res[0] = ++left;
    while (nums[right] !== target) res[1] = --right;
  }

  return res;
};
// @lc code=end
