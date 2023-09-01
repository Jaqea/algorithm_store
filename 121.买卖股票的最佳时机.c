/*
 * @lc app=leetcode.cn id=121 lang=c
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start

int maxProfit(int *prices, int pricesSize)
{
  int **dp, i;
  dp = (int **)malloc(sizeof(int *) * pricesSize);
  for (i = 0; i < pricesSize; i++)
    dp[i] = (int *)malloc(sizeof(int) * 2);

  dp[0][0] = -prices[0];
  dp[0][1] = 0;

  for (i = 1; i < pricesSize; i++)
  {
    dp[i][0] = dp[i - 1][0] > -prices[i] ? dp[i - 1][0] : -prices[i];
    dp[i][1] = dp[i - 1][1] > prices[i] + dp[i - 1][0] ? dp[i - 1][1] : prices[i] + dp[i - 1][0];
  }

  return dp[pricesSize - 1][1];
}
// @lc code=end
