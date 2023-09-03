/*
 * @lc app=leetcode.cn id=72 lang=c
 *
 * [72] 编辑距离
 */

// @lc code=start

int minNum(int a, int b)
{
  return a < b ? a : b;
}

int minDistance(char *word1, char *word2)
{
  int i, j, **dp;
  dp = (int **)malloc(sizeof(int *) * (strlen(word1) + 1));
  for (i = 0; i < strlen(word1) + 1; i++)
    dp[i] = (int *)malloc(sizeof(int) * (strlen(word2) + 1));

  for (i = 0; i < strlen(word1) + 1; i++)
    dp[i][0] = i;
  for (j = 0; j < strlen(word2) + 1; j++)
    dp[0][j] = j;

  for (i = 1; i < strlen(word1) + 1; i++)
  {
    for (j = 1; j < strlen(word2) + 1; j++)
    {
      if (word1[i - 1] == word2[j - 1])
        dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = minNum(dp[i - 1][j - 1], minNum(dp[i - 1][j], dp[i][j - 1])) + 1;
    }
  }
  return dp[strlen(word1)][strlen(word2)];
}
// @lc code=end
