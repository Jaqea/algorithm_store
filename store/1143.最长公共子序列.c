/*
 * @lc app=leetcode.cn id=1143 lang=c
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
int longestCommonSubsequence(char *text1, char *text2)
{
  int i, j, **dp, len1, len2, max;
  len1 = strlen(text1);
  len2 = strlen(text2);
  max = 0;
  dp = (int **)malloc(sizeof(int *) * (len1 + 1));
  for (i = 0; i <= len1; i++)
    dp[i] = (int *)malloc(sizeof(int) * (len2 + 1));

  for (i = 0; i <= len1; i++)
    for (j = 0; j <= len2; j++)
      dp[i][j] = 0;

  for (i = 1; i <= len1; i++)
    for (j = 1; j <= len2; j++)
      if (text1[i - 1] == text2[j - 1])
        dp[i][j] = dp[i - 1][j - 1] + 1;
      else
        dp[i][j] = dp[i - 1][j] > dp[i][j - 1] ? dp[i - 1][j] : dp[i][j - 1];

  for (i = 0; i <= len1; i++)
    for (j = 0; j <= len2; j++)
      max = max > dp[i][j] ? max : dp[i][j];

  return max;
}
// @lc code=end
