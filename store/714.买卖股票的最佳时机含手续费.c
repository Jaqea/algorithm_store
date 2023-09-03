/*
 * @lc app=leetcode.cn id=714 lang=c
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start

int maxV(int a, int b)
{
  return a > b ? a : b;
}

int maxProfit(int *prices, int pricesSize, int fee)
{
  // 法一：贪心
  // int i, minPrice = INT_MAX, res = 0;
  // for (i = 0; i < pricesSize; i++)
  // {
  //   minPrice = prices[i] > minPrice ? minPrice : prices[i];
  //   if (minPrice >= prices[i] - fee || minPrice > prices[i])
  //     continue;
  //   else
  //   {
  //     res += prices[i] - fee - minPrice;
  //     minPrice = prices[i] - fee;
  //     minPrice = INT_MAX;
  //   }
  // }
  // return res;
  // 法二：动态规划
  int i, **dp;
  dp = (int **)malloc(sizeof(int *) * pricesSize);
  for (i = 0; i < pricesSize; i++)
  {
    dp[i] = (int *)malloc(sizeof(int) * 2);
    dp[i][0] = 0;
    dp[i][1] = 0;
  }
  dp[0][0] = -prices[0];

  for (i = 1; i < pricesSize; i++)
  {
    dp[i][0] = maxV(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    dp[i][1] = maxV(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee);
  }

  return dp[pricesSize - 1][1];
}
// @lc code=end
