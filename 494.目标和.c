/*
 * @lc app=leetcode.cn id=494 lang=c
 *
 * [494] 目标和
 */

// @lc code=start
int findTargetSumWays(int *nums, int numsSize, int target)
{
  int i, j, bagSize, sum = 0, *dp;

  for (i = 0; i < numsSize; i++)
    sum += nums[i];

  if ((sum + target) % 2 == 1)
    return 0;
  if (sum < abs(target))
    return 0;

  bagSize = (target + sum) / 2;
  dp = (int *)malloc(sizeof(int) * (bagSize + 1));
  for (i = 0; i < bagSize + 1; i++)
    dp[i] = 0;
  dp[0] = 1;
  for (i = 0; i < numsSize; i++)
    for (j = bagSize; j >= nums[i]; j--)
      dp[j] += dp[j - nums[i]];

  return dp[bagSize];
}
// @lc code=end
