/*
 * @lc app=leetcode.cn id=300 lang=c
 *
 * [300] 最长递增子序列
 */

// @lc code=start
int lengthOfLIS(int *nums, int numsSize)
{
  int i, j, *dp, max = 0;
  dp = (int *)malloc(sizeof(int) * numsSize);

  for (i = 0; i < numsSize; i++)
    dp[i] = 1;

  for (i = 1; i < numsSize; i++)
    for (j = 0; j < i; j++)
      if (nums[i] > nums[j])
        dp[i] = dp[i] > dp[j] + 1 ? dp[i] : dp[j] + 1;

  for (i = 0; i < numsSize; i++)
    max = max > dp[i] ? max : dp[i];

  return max;
}
// @lc code=end
