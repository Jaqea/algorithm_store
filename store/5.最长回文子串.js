/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // let dp = [],
  //   i,
  //   j,
  //   max,
  //   left,
  //   right;
  // max = 0;
  // dp = Array(s.length)
  //   .fill()
  //   .map(() => Array(s.length));
  // for (i = s.length - 1; i >= 0; i--) {
  //   for (j = 0; j < s.length; j++) {
  //     dp[i][j] = false;
  //   }
  // }
  // for (i = s.length - 1; i >= 0; i--) {
  //   for (j = 0; j < s.length; j++) {
  //     if (s[i] === s[j]) {
  //       if (j - i <= 1) dp[i][j] = true;
  //       else if (dp[i + 1][j - 1] === true) dp[i][j] = true;
  //     }
  //     if (dp[i][j] && j - i + 1 > max) {
  //       max = j - i + 1;
  //       left = i;
  //       right = j;
  //     }
  //   }
  // }
  // return s.slice(left, right + 1);

  let dp = new Array(s.length)
      .fill()
      .map(() => new Array(s.length).fill(false)),
    max = 0,
    left,
    right;

  for (let i = s.length - 1; i > -1; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) dp[i][j] = true;
        else if (dp[i + 1][j - 1]) dp[i][j] = true;
      }
      if (dp[i][j] && j - i + 1 > max) {
        max = j - i + 1;
        left = i;
        right = j;
      }
    }
  }

  return s.slice(left, right + 1);
};
// @lc code=end
