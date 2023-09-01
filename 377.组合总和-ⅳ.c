/*
 * @lc app=leetcode.cn id=377 lang=c
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start

int combinationSum4(int *nums, int numsSize, int target)
{
  int *dp, i, j;
  dp = (int *)malloc(sizeof(int) * (target + 1));

  for (i = 0; i < target + 1; i++)
    dp[i] = 0;
  dp[0] = 1;

  for (j = 0; j < target + 1; j++)
    for (i = 0; i < numsSize; i++)
      if (j - nums[i] >= 0 && dp[j] < INT_MAX - dp[j - nums[i]])
        dp[j] += dp[j - nums[i]];

  return dp[target];
}
// @lc code=end
