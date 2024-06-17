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
  const dp = new Array(dungeon.length)
    .fill()
    .map(() => Array(dungeon[0].length).fill(0));
  const add = new Array(dungeon.length)
    .fill()
    .map(() => Array(dungeon[0].length).fill(0));
  let i, j;

  if (dungeon[0][0] < 0) {
    dp[0][0] = -dungeon[0][0];
  } else {
    add[0][0] = dungeon[0][0];
  }

  for (i = 1; i < dungeon.length; i++) {
    if (dungeon[i][0] < 0) {
      const temp = dungeon[i][0] + add[i - 1][0];

      if (temp > 0) {
        add[i][0] = temp;
        dp[i][0] = dp[i - 1][0];
      } else {
        dp[i][0] = dp[i - 1][0] - temp;
      }
    } else {
      add[i][0] = add[i - 1][0] + dungeon[i][0];
      dp[i][0] = dp[i - 1][0];
    }
  }

  for (j = 1; j < dungeon[0].length; j++) {
    if (dungeon[0][j] < 0) {
      const temp = dungeon[0][j] + add[0][j - 1];
      if (temp > 0) {
        add[0][j] = temp;
        dp[0][j] = dp[0][j - 1];
      } else {
        dp[0][j] = dp[0][j - 1] - temp;
      }
    } else {
      add[0][j] = add[0][j - 1] + dungeon[0][j];
      dp[0][j] = dp[0][j - 1];
    }
  }

  for (i = 1; i < dungeon.length; i++) {
    for (j = 1; j < dungeon[0].length; j++) {
      if (dungeon[i][j] < 0) {
        if (dp[i - 1][j] > dp[i][j - 1]) {
          const temp = add[i][j - 1] + dungeon[i][j];
          if (temp < 0) {
            dp[i][j] = dp[i][j - 1] - temp;
          } else {
            add[i][j] = temp;
            dp[i][j] = dp[i][j - 1];
          }
        } else {
          const temp = add[i - 1][j] + dungeon[i][j];
          if (temp < 0) {
            dp[i][j] = dp[i - 1][j] - temp;
          } else {
            add[i][j] = temp;
            dp[i][j] = dp[i - 1][j];
          }
        }
      } else {
        if (dp[i - 1][j] > dp[i][j - 1]) {
          add[i][j] = add[i][j - 1] + dungeon[i][j];
          dp[i][j] = dp[i][j - 1];
        } else {
          add[i][j] = add[i - 1][j] + dungeon[i][j];
          dp[i][j] = dp[i - 1][j];
        }
      }
    }
  }

  console.log(add);
  console.log(dp);

  return dp[i - 1][j - 1] + 1;
};
// @lc code=end
