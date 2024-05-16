/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return true;
    else if (target > nums[mid]) {
      if (nums[mid] > nums[left]) left = mid + 1;
      else if (target === nums[right]) return true;
      else if (target > nums[right]) right = mid - 1;
      else left = mid + 1;
    } else if (target < nums[mid]) {
      if (nums[mid] < nums[left]) left = mid + 1;
      else if (target === nums[left]) return true;
      else if (target > nums[left]) right = mid - 1;
      else left = mid + 1;
    }
  }

  return false;
};
// @lc code=end
