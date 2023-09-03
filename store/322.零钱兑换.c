/*
 * @lc app=leetcode.cn id=322 lang=c
 *
 * [322] 零钱兑换
 */

// @lc code=start

int coinChange(int *coins, int coinsSize, int amount)
{
  int i, j, *dp;
  dp = (int *)malloc(sizeof(int) * (amount + 1));

  for (i = 0; i < amount + 1; i++)
    dp[i] = INT_MAX;
  dp[0] = 0;

  for (i = 0; i < coinsSize; i++)
    for (j = coins[i]; j < amount + 1; j++)
      dp[j] = dp[j] < dp[j - coins[i]] + 1 ? dp[j] : dp[j - coins[i]] + 1;

  if (dp[amount] != INT_MAX)
    return dp[amount];
  return -1;
}
// @lc code=end
