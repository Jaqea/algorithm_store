/*
 * @lc app=leetcode.cn id=1049 lang=c
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start

int lastStoneWeightII(int *stones, int stonesSize)
{
  int dp[15001], i, j, sum = 0, size;
  for (i = 0; i < 15001; i++)
    dp[i] = 0;
  for (i = 0; i < stonesSize; i++)
    sum += stones[i];

  size = sum / 2;

  for (i = 0; i < stonesSize; i++)
    for (j = size; j >= stones[i]; j--)
      dp[j] = dp[j] > dp[j - stones[i]] + stones[i] ? dp[j] : dp[j - stones[i]] + stones[i];

  return sum - dp[size] - dp[size];
}
// @lc code=end
