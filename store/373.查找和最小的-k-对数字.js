/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的 K 对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  if (k === 1) return [nums1[0], nums2[0]];

  const res = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      res.push([nums1[i], nums2[j]]);
      res.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
    }
  }

  return res.slice(0, k);
};
// @lc code=end
