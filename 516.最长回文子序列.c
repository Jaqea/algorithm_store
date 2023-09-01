/*
 * @lc app=leetcode.cn id=516 lang=c
 *
 * [516] 最长回文子序列
 */

// @lc code=start

int longestPalindromeSubseq(char *s)
{
  int i, j, **dp;
  dp = (int **)malloc(sizeof(int *) * strlen(s));
  for (i = 0; i < strlen(s); i++)
    dp[i] = (int *)malloc(sizeof(int) * strlen(s));

  for (i = 0; i < strlen(s); i++)
    for (j = 0; j < strlen(s); j++)
      dp[i][j] = 0;

  for (i = 0; i < strlen(s); i++)
    dp[i][i] = 1;

  for (i = strlen(s) - 1; i >= 0; i--)
  {
    for (j = i + 1; j < strlen(s); j++)
    {
      if (s[i] == s[j])
        dp[i][j] = dp[i + 1][j - 1] + 2;
      else
        dp[i][j] = dp[i + 1][j] > dp[i][j - 1] ? dp[i + 1][j] : dp[i][j - 1];
    }
  }
  return dp[0][strlen(s) - 1];
}
// @lc code=end
