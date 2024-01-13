/*
 * @lc app=leetcode.cn id=673 lang=javascript
 *
 * [673] 最长递增子序列的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1),
    count = new Array(nums.length).fill(1);
  let maxDp = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) count[i] = count[j];
        else if (dp[j] + 1 === dp[i]) count[i] += count[j];
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxDp = dp[i] > maxDp ? dp[i] : maxDp;
  }

  let res = 0;

  for (let i = 0; i < nums.length; i++) if (maxDp === dp[i]) res += count[i];

  return res;
};
// @lc code=end
