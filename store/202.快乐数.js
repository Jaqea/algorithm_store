/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let sum,
    map = new Map();
  while (sum !== 1) {
    sum = 0;
    while (n) {
      sum += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    if (map.has(sum)) return false;
    n = sum;
    map.set(sum, 1);
  }
  return true;
};
// @lc code=end
