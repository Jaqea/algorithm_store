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

  const res = [],
    queue = [];

  for (let i = 0; i < nums1.length; i++) {
    queue.push([i, 0]);
  }

  while (k && queue.length) {
    const [x, y] = queue.shift();
    res.push([nums1[x], nums2[y]]);
    k--;

    if (y + 1 < nums2.length) {
      queue.push([x, y + 1]);
      queue.sort(
        (a, b) => nums1[a[0]] + nums2[a[1]] - (nums1[b[0]] + nums2[b[1]])
      );
    }
  }

  return res;
};
// @lc code=end
