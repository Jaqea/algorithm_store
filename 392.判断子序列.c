/*
 * @lc app=leetcode.cn id=392 lang=c
 *
 * [392] 判断子序列
 */

// @lc code=start

bool isSubsequence(char *s, char *t)
{
  int i, j, **dp;
  dp = (int **)malloc(sizeof(int *) * (strlen(s) + 1));
  for (i = 0; i < strlen(s) + 1; i++)
    dp[i] = (int *)malloc(sizeof(int) * (strlen(t) + 1));

  for (i = 0; i < strlen(s) + 1; i++)
    for (j = 0; j < strlen(t) + 1; j++)
      dp[i][j] = 0;

  for (i = 1; i < strlen(s) + 1; i++)
    for (j = 1; j < strlen(t) + 1; j++)
      if (s[i - 1] == t[j - 1])
        dp[i][j] = dp[i - 1][j - 1] + 1;
      else
        dp[i][j] = dp[i][j - 1];

  if (dp[strlen(s)][strlen(t)] == strlen(s))
    return true;
  else
    return false;
}
// @lc code=end
