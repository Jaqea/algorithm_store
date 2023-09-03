/*
 * @lc app=leetcode.cn id=870 lang=javascript
 *
 * [870] 优势洗牌
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
  let copyNum2 = [...nums2],
    left,
    right1,
    right2,
    res = [];
  copyNum2 = copyNum2.map((item, index) => [index, item]);
  copyNum2.sort((a, b) => a[1] - b[1]);
  nums1.sort((a, b) => a - b);
  left = 0;
  right1 = right2 = nums1.length - 1;
  while (right2 > -1) {
    if (nums1[right1] > copyNum2[right2][1]) {
      res[copyNum2[right2][0]] = nums1[right1];
      right1--;
    } else res[copyNum2[right2][0]] = nums1[left++];
    right2--;
  }
  return res;
};
// @lc code=end
