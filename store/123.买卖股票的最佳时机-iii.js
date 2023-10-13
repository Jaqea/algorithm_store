/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = [-prices[0], 0, -prices[0], 0];

  for (let i = 1; i < prices.length; i++) {
    dp[0] = Math.max(dp[0], -prices[i]);
    dp[1] = Math.max(dp[1], dp[0] + prices[i]);
    dp[2] = Math.max(dp[2], dp[1] - prices[i]);
    dp[3] = Math.max(dp[3], dp[2] + prices[i]);
  }

  return dp[3];
};
// @lc code=end
