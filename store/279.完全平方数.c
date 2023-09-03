/*
 * @lc app=leetcode.cn id=279 lang=c
 *
 * [279] 完全平方数
 */

// @lc code=start

int numSquares(int n)
{
  int i, j, *dp;
  dp = (int *)malloc(sizeof(int) * (n + 1));
  for (i = 0; i < n + 1; i++)
    dp[i] = INT_MAX;

  dp[0] = 0;

  for (i = 1; i * i < n + 1; i++)
    for (j = i * i; j < n + 1; j++)
      dp[j] = dp[j] < dp[j - i * i] + 1 ? dp[j] : dp[j - i * i] + 1;

  return dp[n];
}
// @lc code=end
