/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let rNum, lNum, max;
  rNum = lNum = max = 0;
  for (let str of s) {
    if (str === "R") rNum++;
    else lNum++;
    if (lNum === rNum) {
      lNum = 0;
      rNum = 0;
      max++;
    }
  }
  return max;
};
// @lc code=end
