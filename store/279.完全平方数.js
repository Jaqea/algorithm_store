/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = 1; i * i <= n; i++) {
    let num = i * i;
    for (let j = num; j <= n; j++) {
      dp[j] = Math.min(dp[j], dp[j - num] + 1);
    }
  }

  return dp[n];
};
// @lc code=end
