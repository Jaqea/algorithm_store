/*
 * @lc app=leetcode.cn id=53 lang=c
 *
 * [53] 最大子数组和
 */

// @lc code=start
int maxSubArray(int *nums, int numsSize)
{
  // 暴力解法 ----------- 超时
  // int i, j, sum, max = nums[0];
  // for (i = 0; i < numsSize; i++)
  // {
  //   sum = 0;
  //   for (j = i; j < numsSize; j++)
  //   {
  //     sum += nums[j];
  //     if (sum > max)
  //       max = sum;
  //   }
  // }
  // return max;

  // 贪心算法
  // int i, j, max = nums[0], sum = 0;
  // for (i = 0; i < numsSize; i++)
  // {
  //   sum += nums[i];
  //   // 先判断 再选区间
  //   if (sum > max)
  //     max = sum;
  //   if (sum < 0)
  //   {
  //     sum = 0;
  //     continue;
  //   }
  // }
  // return max;

  // 动态规划
  if (numsSize == 0)
    return 0;
  int i, *dp, max = INT_MIN;
  dp = (int *)malloc(sizeof(int) * numsSize);
  dp[0] = nums[0];
  for (i = 1; i < numsSize; i++)
    dp[i] = dp[i - 1] + nums[i] > nums[i] ? dp[i - 1] + nums[i] : nums[i];
  for (i = 0; i < numsSize; i++)
    max = max > dp[i] ? max : dp[i];

  return max;
}
// @lc code=end
