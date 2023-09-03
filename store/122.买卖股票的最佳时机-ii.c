/*
 * @lc app=leetcode.cn id=122 lang=c
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start

int maxProfit(int *prices, int pricesSize)
{
  // 法一：贪心
  // int res, i;
  // res = 0;
  // for (i = 0; i < pricesSize; i++)
  // {
  //   if (i > 0 && prices[i] - prices[i - 1] > 0)
  //     res += prices[i] - prices[i - 1];
  // }

  // return res;

  // 法二：动态规划
  int i, **dp;
  dp = (int **)malloc(sizeof(int *) * pricesSize);
  for (i = 0; i < pricesSize; i++)
    dp[i] = (int *)malloc(sizeof(int) * 2);
  dp[0][0] = -prices[0];
  dp[0][1] = 0;

  for (i = 1; i < pricesSize; i++)
  {
    dp[i][0] = dp[i - 1][0] > dp[i - 1][1] - prices[i] ? dp[i - 1][0] : dp[i - 1][1] - prices[i];
    dp[i][1] = dp[i - 1][1] > dp[i - 1][0] + prices[i] ? dp[i - 1][1] : dp[i - 1][0] + prices[i];
  }

  return dp[pricesSize - 1][1];
}
// @lc code=end
