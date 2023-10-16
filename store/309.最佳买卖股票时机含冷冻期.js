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
  let dp = [-prices[0], 0, 0, 0];

  for (let i = 1; i < prices.length; i++) {
    dp[0] = Math.max(dp[0], dp[1] - prices[i], dp[3] - prices[i]);
    dp[1] = Math.max(dp[1], dp[3]);
    dp[2] = Math.max(dp[2], dp[0] + prices[i]);
    dp[3] = Math.max(dp[3], dp[2]);
  }

  console.log(dp);
};
// @lc code=end
