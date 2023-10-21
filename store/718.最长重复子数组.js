/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let dp = new Array(nums1.length + 1).fill(0);

  for (let i = 1; i < nums1.length + 1; i++) {
    for (let j = nums2.length; j > 0; j--) {
      if (nums1[i - 1] === nums2[j - 1]) dp[j] = Math.max(dp[j - 1] + 1, dp[j]);
      else dp[j] = 0;
    }
  }

  console.log(dp);

  return Math.max(...dp);
};
// @lc code=end
