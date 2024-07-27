/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let i, flag;

  for (i = 0; i < strs[0].length; i++) {
    flag = 1;
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        flag = 0;
        break;
      }
    }

    if (!flag) {
      break;
    }
  }

  return strs[0].slice(0, i);
};
// @lc code=end
