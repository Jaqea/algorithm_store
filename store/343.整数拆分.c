/*
 * @lc app=leetcode.cn id=343 lang=c
 *
 * [343] 整数拆分
 */

// @lc code=start

int integerBreak(int n)
{
  int *dp, i, j, max = 0;
  dp = (int *)malloc(sizeof(int) * (n + 1));
  dp[2] = 1;
  for (i = 3; i < n + 1; i++)
  {
    for (j = 1; j <= i / 2; j++)
    {
      max = max > j * (i - j) ? max : j * (i - j);
      max = max > dp[i - j] * j ? max : dp[i - j] * j;
    }
    dp[i] = max;
  }
  return dp[n];
}
// @lc code=end
