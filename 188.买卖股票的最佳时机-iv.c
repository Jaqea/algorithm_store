/*
 * @lc app=leetcode.cn id=188 lang=c
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start

int maxProfit(int k, int *prices, int pricesSize)
{
  if (pricesSize == 0)
    return 0;
  int i, j, **dp;
  dp = (int **)malloc(sizeof(int *) * pricesSize);
  for (i = 0; i < pricesSize; i++)
    dp[i] = (int *)malloc(sizeof(int) * (2 * k + 1));

  for (i = 0; i < pricesSize; i++)
    for (j = 0; j < 2 * k + 1; j++)
      dp[i][j] = 0;
  for (j = 1; j < 2 * k; j += 2)
    dp[0][j] = -prices[0];

  for (i = 1; i < pricesSize; i++)
  {
    for (j = 0; j < 2 * k - 1; j += 2)
    {
      dp[i][j + 1] = dp[i - 1][j + 1] > dp[i - 1][j] - prices[i] ? dp[i - 1][j + 1] : dp[i - 1][j] - prices[i];
      dp[i][j + 2] = dp[i - 1][j + 2] > dp[i - 1][j + 1] + prices[i] ? dp[i - 1][j + 2] : dp[i - 1][j + 1] + prices[i];
    }
  }

  return dp[pricesSize - 1][2 * k];
}
// @lc code=end
