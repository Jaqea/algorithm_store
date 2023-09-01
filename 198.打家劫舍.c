/*
 * @lc app=leetcode.cn id=198 lang=c
 *
 * [198] 打家劫舍
 */

// @lc code=start
int rob(int *nums, int numsSize)
{
  if (numsSize == 0)
    return 0;
  if (numsSize == 1)
    return nums[0];

  int i, j, *dp;
  dp = (int *)malloc(sizeof(int) * numsSize);
  dp[0] = nums[0];
  dp[1] = nums[0] > nums[1] ? nums[0] : nums[1];

  for (i = 2; i < numsSize; i++)
    dp[i] = dp[i - 2] + nums[i] > dp[i - 1] ? dp[i - 2] + nums[i] : dp[i - 1];

  return dp[numsSize - 1];
}
// @lc code=end
