/*
 * @lc app=leetcode.cn id=292 lang=javascript
 *
 * [292] Nim 游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  if (n <= 3) return true;
  return n % 4;
};
// @lc code=end
