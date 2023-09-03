/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let map = new Map(),
    res = [];
  nums1.forEach((item) => {
    if (!map.has(item)) map.set(item, 1);
  });
  nums2.forEach((item) => {
    if (map.has(item)) map.set(item, map.get(item) + 1);
  });
  for (let [key, value] of map.entries()) if (value > 1) res.push(key);
  return res;
};
// @lc code=end
