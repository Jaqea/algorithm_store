/*
 * @lc app=leetcode.cn id=1475 lang=javascript
 *
 * [1475] 商品折扣后的最终价格
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  if (prices.length === 1) return prices;

  let res = [],
    left,
    right;
  left = 0;
  right = left + 1;

  while (left < prices.length) {
    while (prices[right] > prices[left] && right < prices.length) right++;

    if (right === prices.length) res[left] = prices[left];
    else res[left] = prices[left] - prices[right];

    left++;
    right = left + 1;
  }

  return res;
};
// @lc code=end
