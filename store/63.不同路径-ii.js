/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let dp = new Array(obstacleGrid.length)
    .fill("")
    .map(() => Array(obstacleGrid[0].length).fill(0));

  for (let i = 0; i < dp.length; i++) {
    if (obstacleGrid[i][0]) break;
    dp[i][0] = 1;
  }

  for (let j = 0; j < dp[0].length; j++) {
    if (obstacleGrid[0][j]) break;
    dp[0][j] = 1;
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (obstacleGrid[i][j]) dp[i][j] = 0;
      else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[dp.length - 1][dp[0].length - 1];
};
// @lc code=end
