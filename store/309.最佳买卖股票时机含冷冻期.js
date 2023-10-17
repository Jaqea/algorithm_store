/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = new Array(2).fill().map(() => Array(4).fill(0));
  dp[0][0] = -prices[0];
  dp[0][2] = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    dp[1][0] = Math.max(dp[0][0], dp[0][1] - prices[i], dp[0][3] - prices[i]);
    dp[1][1] = Math.max(dp[0][1], dp[0][3]);
    dp[1][2] = Math.max(dp[0][2], dp[0][0] + prices[i]);
    dp[1][3] = Math.max(dp[0][3], dp[0][2]);
    dp[0] = [...dp[1]];
  }

  return dp[1][2] < 0 ? 0 : dp[1][2];
};
// @lc code=end
