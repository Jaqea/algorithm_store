/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1,
    mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[right]) right = mid;
    else if (nums[mid] < nums[left]) left = mid;
    else {
      if (nums[right] < nums[left]) left = mid + 1;
      else right = mid - 1;
    }
  }

  return nums[left];
};
// @lc code=end
