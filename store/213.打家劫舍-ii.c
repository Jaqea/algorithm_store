/*
 * @lc app=leetcode.cn id=213 lang=c
 *
 * [213] 打家劫舍 II
 */

// @lc code=start

int robRange(int *nums, int numsSize, int start, int end)
{
  if (start == end)
    return nums[start];
  int i, *dp;
  dp = (int *)malloc(sizeof(int) * numsSize);
  dp[start] = nums[start];
  dp[start + 1] = nums[start + 1] > nums[start] ? nums[start + 1] : nums[start];
  for (i = start + 2; i <= end; i++)
    dp[i] = dp[i - 1] > dp[i - 2] + nums[i] ? dp[i - 1] : dp[i - 2] + nums[i];

  return dp[end];
}

int rob(int *nums, int numsSize)
{
  if (numsSize == 0)
    return 0;
  if (numsSize == 1)
    return nums[0];
  int resStart, resEnd;
  resStart = robRange(nums, numsSize, 0, numsSize - 2);
  resEnd = robRange(nums, numsSize, 1, numsSize - 1);
  return resStart > resEnd ? resStart : resEnd;
}
// @lc code=end
