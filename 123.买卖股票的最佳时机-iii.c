/*
 * @lc app=leetcode.cn id=123 lang=c
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start

int maxProfit(int *prices, int pricesSize)
{
  int i, **dp;
  dp = (int **)malloc(sizeof(int *) * pricesSize);
  for (i = 0; i < pricesSize; i++)
    dp[i] = (int *)malloc(sizeof(int) * 5);
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  dp[0][2] = 0;
  dp[0][3] = -prices[0];
  dp[0][4] = 0;

  for (i = 1; i < pricesSize; i++)
  {
    dp[i][0] = dp[i - 1][0];
    dp[i][1] = dp[i - 1][1] > dp[i - 1][0] - prices[i] ? dp[i - 1][1] : dp[i - 1][0] - prices[i];
    dp[i][2] = dp[i - 1][2] > dp[i - 1][1] + prices[i] ? dp[i - 1][2] : dp[i - 1][1] + prices[i];
    dp[i][3] = dp[i - 1][3] > dp[i - 1][2] - prices[i] ? dp[i - 1][3] : dp[i - 1][2] - prices[i];
    dp[i][4] = dp[i - 1][4] > dp[i - 1][3] + prices[i] ? dp[i - 1][4] : dp[i - 1][3] + prices[i];
  }

  return dp[pricesSize - 1][4];
}
// @lc code=end
