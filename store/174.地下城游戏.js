/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  const m = dungeon.length,
    n = dungeon[0].length;
  const dp = new Array(m).fill().map(() => Array(n).fill(0));
  let i, j;

  dp[m - 1][n - 1] = Math.max(1, 1 - dungeon[m - 1][n - 1]);

  for (i = m - 2; i >= 0; i--) {
    dp[i][n - 1] = Math.max(1, dp[i + 1][n - 1] - dungeon[i][n - 1]);
  }

  for (j = n - 2; j >= 0; j--) {
    dp[m - 1][j] = Math.max(1, dp[m - 1][j + 1] - dungeon[m - 1][j]);
  }

  for (i = m - 2; i >= 0; i--) {
    for (j = n - 2; j >= 0; j--) {
      const min = Math.min(dp[i + 1][j], dp[i][j + 1]);
      dp[i][j] = Math.max(1, min - dungeon[i][j]);
    }
  }

  console.log(dp);

  return dp[0][0];
};
// @lc code=end
