/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let map = new Map(),
    res = new Array(nums1.length).fill(-1),
    stack = [],
    top = 0;
  for (let [index, item] of nums1.entries()) map.set(item, index);

  stack[top++] = nums2[0];
  for (let i = 1, len = nums2.length; i < len; i++) {
    while (nums2[i] > stack[top - 1] && top !== 0) {
      if (map.has(stack[top - 1])) res[map.get(stack[top - 1])] = nums2[i];
      top--;
    }
    stack[top++] = nums2[i];
  }

  return res;
};
// @lc code=end
