/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const dp = new Array(grid.length)
    .fill()
    .map(() => Array(grid[0].length).fill(0));
  dp[0][0] = grid[0][0];
  let i, j;

  for (i = 1; i < dp.length; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (j = 1; j < dp[0].length; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  for (i = 1; i < dp.length; i++) {
    for (j = 1; j < dp[0].length; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[i - 1][j - 1];
};
// @lc code=end
