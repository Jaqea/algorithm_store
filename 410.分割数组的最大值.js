/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const getSum = (nums, start, end) => {
  return nums.reduce((pre, next, index) => {
    if (start <= index <= end) return pre + next;
    return pre;
  });
};
const check = (nums, x, m) => {
  let sum = 0,
    ct = 1;
  nums.forEach((item) => {
    if (sum + item > x) {
      ct++;
      sum = item;
    } else sum += item;
  });
  return ct <= m;
};
var splitArray = function (nums, k) {
  let left, right, mid;
  left = Math.max(...nums);
  right = getSum(nums, 0, nums.length - 1);
  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    if (check(nums, mid, k)) right = mid;
    else left = mid + 1;
  }
  return left;
};
// @lc code=end
