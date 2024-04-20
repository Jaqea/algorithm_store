/*
 * @lc app=leetcode.cn id=319 lang=javascript
 *
 * [319] 灯泡开关
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (Math.sqrt(i) === parseInt(Math.sqrt(i))) count++;
  }

  return count;
};
// @lc code=end
