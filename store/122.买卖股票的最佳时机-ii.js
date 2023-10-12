/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 法一
  // const dPrices = prices.map((val, i) => {
  //   if (i + 1 < prices.length) return prices[i + 1] - val;
  // });
  // dPrices[dPrices.length - 1] = 0;
  // let sum = 0;
  // dPrices.forEach((val) => {
  //   if (val > 0) sum += val;
  // });
  // return sum;
  // 法二
  let dp = [-prices[0], 0];

  for (let i = 1; i < prices.length; i++) {
    dp[0] = Math.max(dp[0], dp[1] - prices[i]);
    dp[1] = Math.max(dp[1], dp[0] + prices[i]);
  }

  return dp[1];
};
// @lc code=end
