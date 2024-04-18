/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const res = [],
    preMap = new Map(),
    nextMap = new Map();
  let num = 1;

  preMap.set(0, 1);

  for (let i = 1; i < nums.length; i++) {
    num *= nums[i - 1];
    preMap.set(i, num);
  }

  num = 1;
  nextMap.set(nums.length - 1, 1);
  for (let i = nums.length - 2; i > -1; i--) {
    num *= nums[i + 1];
    nextMap.set(i, num);
  }

  for (let i = 0; i < nums.length; i++) res[i] = preMap.get(i) * nextMap.get(i);

  return res;
};
// @lc code=end
