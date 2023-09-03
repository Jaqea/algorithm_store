/*
 * @lc app=leetcode.cn id=115 lang=c
 *
 * [115] 不同的子序列
 */

// @lc code=start
int numDistinct(char *s, char *t)
{
  int i, j;
  unsigned int **dp;
  dp = (unsigned int **)malloc(sizeof(unsigned int *) * (strlen(s) + 1));
  for (i = 0; i < strlen(s) + 1; i++)
    dp[i] = (unsigned int *)malloc(sizeof(unsigned int) * (strlen(t) + 1));

  for (i = 0; i < strlen(s) + 1; i++)
    dp[i][0] = 1;
  for (j = 1; j < strlen(t) + 1; j++)
    dp[0][j] = 0;

  for (i = 1; i < strlen(s) + 1; i++)
  {
    for (j = 1; j < strlen(t) + 1; j++)
    {

      if (s[i - 1] == t[j - 1])
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      else
        dp[i][j] = dp[i - 1][j];
    }
  }

  return dp[strlen(s)][strlen(t)];
}
// @lc code=end
