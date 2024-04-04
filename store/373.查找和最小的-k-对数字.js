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
  let left = (right = 0);
  res.push([nums1[left], nums2[right]]);
  k--;

  while (k) {
    if (nums1[left + 1] + nums2[right] > nums1[left] + nums2[right + 1])
      right++;
    else left++;
    res.push([nums1[left], nums2[right]]);
    k--;
  }

  return res;
};
// @lc code=end
