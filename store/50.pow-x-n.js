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
  if (x === 1) return 1;

  let res = 1;

  if (n > 0) {
    for (let i = 0; i < n; i++) {
      res *= x;
    }
  } else if (n === 0) {
    return 1;
  } else {
    for (let i = 0; i < -n; i++) {
      res *= 1 / x;
    }
  }

  return res;
};
// @lc code=end
