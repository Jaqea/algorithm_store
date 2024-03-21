/*
 * @lc app=leetcode.cn id=1614 lang=javascript
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  s = s.split("+");

  const dps = new Array(s.length).fill(0);

  for (let str of s) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        dps[i]++;
      }
    }
  }

  return Math.max(...dps);
};
// @lc code=end
