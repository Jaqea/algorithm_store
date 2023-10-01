/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let sum, left, dp;
  sum = nums.reduce((pre, cur) => pre + cur);

  if (target > sum || target < -sum) return 0;
  else if ((target + sum) % 2) return 0;

  left = (target + sum) / 2;

  dp = new Array(Math.abs(left + 1)).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = left; j >= nums[i]; j--) {
      if (j >= nums[i]) dp[j] += dp[j - nums[i]];
    }
  }

  return dp[left];
};
// @lc code=end
