/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  let dp = new Array(2 * k + 1).fill(0);
  for (let i = 1; i < 2 * k + 1; i += 2) dp[i] = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    for (let j = 1; j < 2 * k + 1; j++) {
      if (j % 2) dp[j] = Math.max(dp[j], dp[j - 1] - prices[i]);
      else dp[j] = Math.max(dp[j], dp[j - 1] + prices[i]);
    }
  }

  return dp[2 * k];
};
// @lc code=end
