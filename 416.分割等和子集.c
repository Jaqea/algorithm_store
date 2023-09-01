/*
 * @lc app=leetcode.cn id=416 lang=c
 *
 * [416] 分割等和子集
 */

// @lc code=start
bool canPartition(int *nums, int numsSize)
{
  int *dp, i, j, sum = 0;
  for (i = 0; i < numsSize; i++)
    sum += nums[i];
  if (sum % 2 != 0)
    return false;
  else
  {
    dp = (int *)malloc(sizeof(int) * (sum / 2 + 1));
    for (i = 0; i < sum / 2 + 1; i++)
      dp[i] = 0;

    for (i = 0; i < numsSize; i++)
    {
      for (j = sum / 2; j >= nums[i]; j--)
      {
        dp[j] = dp[j] > dp[j - nums[i]] + nums[i] ? dp[j] : dp[j - nums[i]] + nums[i];
      }
    }
    if (dp[sum / 2] == sum / 2)
      return true;
    else
      return false;
  }
}
// @lc code=end
