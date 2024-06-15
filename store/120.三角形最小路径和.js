/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const dp = [];
  triangle.forEach((item) => {
    dp.push(new Array(item.length).fill(Number.MAX_SAFE_INTEGER));
  });

  dp[0][0] = triangle[0][0];
  for (let i = 1; i < triangle.length; i++) {
    dp[i][0] = dp[i - 1][0] + triangle[i][0];
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (j < dp[i - 1].length) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];
      } else {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      }
    }
  }

  return Math.min(...dp[dp.length - 1]);
};
// @lc code=end
