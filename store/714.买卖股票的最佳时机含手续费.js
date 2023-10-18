/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let dp = [-prices[0], 0];
  for (let i = 0; i < prices.length; i++) {
    dp[0] = Math.max(dp[0], dp[1] - prices[i]);
    dp[1] = Math.max(dp[1], dp[0] + prices[i] - fee);
  }
  return dp[1];
};
// @lc code=end
