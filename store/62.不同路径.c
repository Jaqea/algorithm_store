/*
 * @lc app=leetcode.cn id=62 lang=c
 *
 * [62] 不同路径
 */

// @lc code=start

int dfs(int i, int j, int m, int n)
{
  if (i > m || j > n)
    return 0;
  if (i == m && j == n)
    return 1;
  return dfs(i + 1, j, m, n) + dfs(i, j + 1, m, n);
}

int uniquePaths(int m, int n)
{
  // 法一：DFS
  // return dfs(1, 1, m, n);
  // 法二：动态规划
  int **dp, i, j;
  dp = (int **)malloc(sizeof(int *) * m);
  for (i = 0; i < m; i++)
    dp[i] = (int *)malloc(sizeof(int) * n);

  for (i = 0; i < m; i++)
    dp[i][0] = 1;
  for (j = 0; j < n; j++)
    dp[0][j] = 1;
  for (i = 1; i < m; i++)
    for (j = 1; j < n; j++)
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];

  return dp[m - 1][n - 1];
}
// @lc code=end
