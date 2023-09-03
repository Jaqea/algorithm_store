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
const leftVal = (nums, target) => {
  let left, right, mid;
  left = 0;
  right = nums.length;
  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) right = mid;
    else if (nums[mid] > target) right = mid;
    else if (nums[mid] < target) left = mid + 1;
  }
  if (left === nums.length) return -1;
  return nums[left] === target ? left : -1;
};
const rightVal = (nums, target) => {
  // let left, right, mid;
  // left = 0;
  // right = nums.length - 1;
  // while (left <= right) {
  //   mid = left + Math.floor((right - left) / 2);
  //   if (nums[mid] === target) left = mid + 1;
  //   else if (nums[mid] > target) right = mid - 1;
  //   else if (nums[mid] < target) left = mid + 1;
  // }
  // if (left - 1 < 0) return -1;
  // return nums[left - 1] === target ? left - 1 : -1;

  let left, right, mid;
  left = 0;
  right = nums.length;
  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) left = mid + 1;
    else if (nums[mid] > target) right = mid;
    else if (nums[mid] < target) left = mid + 1;
  }
  if (left - 1 < 0) return -1;
  return nums[left - 1] === target ? left - 1 : -1;
};
var searchRange = function (nums, target) {
  return [leftVal(nums, target), rightVal(nums, target)];
};
// @lc code=end
