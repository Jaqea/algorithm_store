/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  let dp = new Array(s.length).fill().map(() => Array(s.length).fill(0));

  for (let i = 0, len = s.length; i < len; i++) {
    dp[i][i] = 1;
  }

  for (let len = s.length, i = len; i > -1; i--) {
    for (let j = i + 1; j < len; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
    }
  }

  return dp[0][s.length - 1];
};
// @lc code=end
