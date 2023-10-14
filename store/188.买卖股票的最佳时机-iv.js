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
  let dp = new Array(2 * k).fill(0);
  dp[0] = -prices[0];
  dp[1] = Math.max(dp[1], dp[0] + prices[1]);

  for (let i = 2; i < prices.length; i++) {
    if (i % 2) dp[i] = Math.max(dp[i], dp[i - 1] + prices[i]);
    else dp[i] = Math.max(dp[i], dp[i - 1] - prices[i]);
  }
  console.log(dp);
};
// @lc code=end
