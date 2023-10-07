/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length).fill(false);
  dp[0] = true;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < i; j++) {
      const str = s.slice(j, i + 1);
      console.log(str, wordDict.indexOf(str) !== -1, j, dp[j]);
      if (wordDict.indexOf(str) !== -1 && dp[j - 1]) dp[i] = true;
    }
  }

  console.log(dp);
};
// @lc code=end
