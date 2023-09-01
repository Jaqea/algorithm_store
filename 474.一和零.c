/*
 * @lc app=leetcode.cn id=474 lang=c
 *
 * [474] 一和零
 */

// @lc code=start

int findMaxForm(char **strs, int strsSize, int m, int n)
{
  int **dp, i, j, k, *zeroNum, *oneNum;
  dp = (int **)malloc(sizeof(int *) * (m + 1));
  zeroNum = (int *)malloc(sizeof(int) * strsSize);
  oneNum = (int *)malloc(sizeof(int) * strsSize);
  for (i = 0; i < m + 1; i++)
    dp[i] = (int *)malloc(sizeof(int) * (n + 1));

  for (i = 0; i < m + 1; i++)
    for (j = 0; j < n + 1; j++)
      dp[i][j] = 0;
  for (i = 0; i < strsSize; i++)
  {
    zeroNum[i] = 0;
    oneNum[i] = 0;
  }
  for (i = 0; i < strsSize; i++)
  {
    for (j = 0; j < strlen(strs[i]); j++)
    {
      if (strs[i][j] == '0')
        zeroNum[i]++;
      if (strs[i][j] == '1')
        oneNum[i]++;
    }
  }

  for (k = 0; k < strsSize; k++)
    for (i = m; i >= zeroNum[k]; i--)
      for (j = n; j >= oneNum[k]; j--)
        dp[i][j] = dp[i][j] > dp[i - zeroNum[k]][j - oneNum[k]] + 1 ? dp[i][j] : dp[i - zeroNum[k]][j - oneNum[k]] + 1;

  return dp[m][n];
}
// @lc code=end
