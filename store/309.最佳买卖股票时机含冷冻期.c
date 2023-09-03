/*
 * @lc app=leetcode.cn id=309 lang=c
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start

int maxV(int a, int b)
{
  return a > b ? a : b;
}

int maxProfit(int *prices, int pricesSize)
{
  int i, j, **dp;
  dp = (int **)malloc(sizeof(int *) * pricesSize);
  for (i = 0; i < pricesSize; i++)
    dp[i] = (int *)malloc(sizeof(int) * 4);
  for (i = 0; i < pricesSize; i++)
    for (j = 0; j < 4; j++)
      dp[i][j] = 0;

  dp[0][0] = -prices[0];
  for (i = 1; i < pricesSize; i++)
  {
    dp[i][0] = maxV(maxV(dp[i - 1][0], dp[i - 1][3] - prices[i]), dp[i - 1][1] - prices[i]);
    dp[i][1] = maxV(dp[i - 1][1], dp[i - 1][3]);
    dp[i][2] = dp[i - 1][0] + prices[i];
    dp[i][3] = dp[i - 1][2];
  }

  return maxV(maxV(dp[pricesSize - 1][1], dp[pricesSize - 1][2]), dp[pricesSize - 1][3]);
}
// @lc code=end
