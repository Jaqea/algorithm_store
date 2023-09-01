/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let map = new Map(),
    count = 0;
  nums1.forEach((item1) => {
    nums2.forEach((item2) => {
      const num = item1 + item2;
      if (map.has(num)) map.set(num, map.get(num) + 1);
      else map.set(num, 1);
    });
  });
  nums3.forEach((item3) => {
    nums4.forEach((item4) => {
      const num = -(item3 + item4);
      if (map.has(num)) count += map.get(num);
    });
  });
  return count;
};
// @lc code=end
