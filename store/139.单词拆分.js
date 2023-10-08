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
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i < s.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      const str = s.slice(j, i);
      if (wordDict.indexOf(str) !== -1 && dp[j]) dp[i] = true;
    }
  }

  return dp[s.length];
};
// @lc code=end
