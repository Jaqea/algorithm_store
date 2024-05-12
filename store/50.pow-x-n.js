/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 1 || n === 0) return 1;

  function computePow(x, n) {
    if (n === 0) return 1;

    const y = computePow(x, Math.floor(n / 2));

    return n % 2 ? y * y * x : y * y;
  }

  return n > 0 ? computePow(x, n) : computePow(1 / x, -n);
};
// @lc code=end
