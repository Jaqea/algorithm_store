/*
 * @lc app=leetcode.cn id=674 lang=c
 *
 * [674] 最长连续递增序列
 */

// @lc code=start

int findLengthOfLCIS(int *nums, int numsSize)
{
  int i, *dp, max = 0;
  dp = (int *)malloc(sizeof(int) * numsSize);
  for (i = 0; i < numsSize; i++)
    dp[i] = 1;

  for (i = 1; i < numsSize; i++)
    if (nums[i] > nums[i - 1])
      dp[i] = dp[i - 1] + 1;

  for (i = 0; i < numsSize; i++)
    max = max > dp[i] ? max : dp[i];

  return max;
}
// @lc code=end
