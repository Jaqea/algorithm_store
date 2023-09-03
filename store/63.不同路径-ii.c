/*
 * @lc app=leetcode.cn id=63 lang=c
 *
 * [63] 不同路径 II
 */

// @lc code=start

int uniquePathsWithObstacles(int **obstacleGrid, int obstacleGridSize, int *obstacleGridColSize)
{
  int **dp, res, i, j;
  res = 0;
  dp = (int **)malloc(sizeof(int *) * obstacleGridSize);
  for (i = 0; i < obstacleGridSize; i++)
    dp[i] = (int *)malloc(sizeof(int) * (*obstacleGridColSize));

  for (i = 0; i < obstacleGridSize; i++)
    dp[i][0] = 1;
  for (i = 0; i < *obstacleGridColSize; i++)
    dp[0][i] = 1;
  for (i = 0; i < obstacleGridSize; i++)
  {
    if (obstacleGrid[i][0] == 1)
    {
      for (j = i; j < obstacleGridSize; j++)
        dp[j][0] = 0;
      break;
    }
  }
  for (i = 0; i < *obstacleGridColSize; i++)
  {
    if (obstacleGrid[0][i] == 1)
    {
      for (j = i; j < *obstacleGridColSize; j++)
        dp[0][j] = 0;
      break;
    }
  }

  for (i = 0; i < obstacleGridSize; i++)
    for (j = 0; j < *obstacleGridColSize; j++)
      if (obstacleGrid[i][j] == 1)
        dp[i][j] = 0;

  for (i = 1; i < obstacleGridSize; i++)
  {
    for (j = 1; j < *obstacleGridColSize; j++)
    {
      if (dp[i][j] == 0)
        continue;
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[obstacleGridSize - 1][*obstacleGridColSize - 1];
}
// @lc code=end
