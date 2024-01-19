/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  // let isP = Array(s.length)
  //     .fill()
  //     .map(() => Array(s.length)),
  //   i,
  //   j,
  //   dp = Array(s.length).fill(s.length);
  // dp[0] = 0;
  // for (i = 0; i < s.length; i++)
  //   for (j = 0; j < s.length; j++) isP[i][j] = false;
  // for (i = s.length - 1; i >= 0; i--) {
  //   for (j = i; j < s.length; j++) {
  //     if (s[i] === s[j] && (j - i <= 1 || isP[i + 1][j - 1])) isP[i][j] = true;
  //   }
  // }

  // for (i = 1; i < s.length; i++) {
  //   if (isP[0][i]) {
  //     dp[i] = 0;
  //     continue;
  //   }
  //   for (j = 0; j < i; j++) {
  //     if (isP[j + 1][i]) dp[i] = Math.min(dp[i], dp[j] + 1);
  //   }
  // }
  // return dp[s.length - 1];

  const dp = new Array(s.length).fill(Number.MAX_SAFE_INTEGER);
  const p = new Array(s.length).fill().map(() => Array(s.length).fill(false));

  for (let i = s.length - 1; i > -1; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j] && (j - i <= 1 || p[i + 1][j - 1])) p[i][j] = true;
    }
  }

  dp[0] = 0;
  for (let i = 1; i < s.length; i++) {
    if (p[0][i]) {
      dp[i] = 0;
      continue;
    }

    for (let j = 0; j < i; j++) {
      if (p[j + 1][i]) dp[i] = Math.min(dp[i], dp[j] + 1);
    }
  }

  return dp[s.length - 1];
};
// @lc code=end
