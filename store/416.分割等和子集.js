/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  // 法一
  // let sum, dp;
  // sum = nums.reduce((pre, next) => pre + next);
  // if (sum % 2) return false;
  // else sum /= 2;
  // dp = new Array(nums.length).fill(0).map(() => Array(sum + 1).fill(0));

  // for (let j = 1; j <= sum; j++) {
  //   if (nums[0] <= j) dp[0][j] = nums[0];
  // }

  // for (let i = 1; i < nums.length; i++) {
  //   for (let j = 0; j <= sum; j++) {
  //     if (j < nums[i]) dp[i][j] = dp[i - 1][j];
  //     else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - nums[i]] + nums[i]);
  //   }
  // }
  // return dp[nums.length - 1][sum] === sum;

  // 法二
  let sum, dp;
  sum = nums.reduce((pre, cur) => pre + cur);
  if (sum % 2) return false;
  else sum /= 2;
  dp = new Array(sum + 1).fill(0);
  // dp[0] = 0

  for (let i = 0; i < nums.length; i++) {
    for (let j = sum; j > -1; j--) {
      if (j >= nums[i]) dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }

  return dp[sum] === sum;
};
// @lc code=end
