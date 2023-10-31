/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let dp = new Array(s.length).fill().map(() => Array(s.length).fill(0)),
    num = 0;

  for (let i = s.length - 1; i > -1; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) dp[i][j] = 1;
        else if (dp[i + 1][j - 1]) dp[i][j] = 1;
      }
      if (dp[i][j]) num++;
    }
  }

  return num;
};
// @lc code=end
