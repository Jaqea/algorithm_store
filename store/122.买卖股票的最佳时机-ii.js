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
  const dPrices = prices.map((val, i) => {
    if (i + 1 < prices.length) return prices[i + 1] - val;
  });
  dPrices[dPrices.length - 1] = 0;
  let sum = 0;
  dPrices.forEach((val) => {
    if (val > 0) sum += val;
  });
  return sum;
};
// @lc code=end
