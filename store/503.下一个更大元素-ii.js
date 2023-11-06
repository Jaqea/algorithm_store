/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let res = new Array(nums.length * 2).fill(-1),
    stack = [],
    top = 0;

  nums = [...nums, ...nums];

  stack[top++] = 0;
  for (let i = 1, len = nums.length; i < len; i++) {
    while (nums[i] > nums[stack[top - 1]] && top !== 0) {
      res[stack[top - 1]] = nums[i];
      top--;
    }
    stack[top++] = i;
  }

  return res.slice(0, nums.length / 2);
};
// @lc code=end
