/*
 * @lc app=leetcode.cn id=518 lang=c
 *
 * [518] 零钱兑换 II
 */

// @lc code=start

int change(int amount, int *coins, int coinsSize)
{
  int *dp, i, j;
  dp = (int *)malloc(sizeof(int) * (amount + 1));

  for (i = 0; i < amount + 1; i++)
    dp[i] = 0;
  dp[0] = 1;

  for (i = 0; i < coinsSize; i++)
    for (j = coins[i]; j < amount + 1; j++)
      dp[j] += dp[j - coins[i]];

  return dp[amount];
}
// @lc code=end
