/*
 * @lc app=leetcode.cn id=135 lang=c
 *
 * [135] 分发糖果
 */

// @lc code=start

int candy(int *ratings, int ratingsSize)
{
  int *nums, sum, i;
  nums = (int *)malloc(sizeof(int) * ratingsSize);
  sum = 0;
  for (i = 0; i < ratingsSize; i++)
    nums[i] = 1;

  for (i = 0; i < ratingsSize - 1; i++)
  {
    if (ratings[i + 1] > ratings[i])
      nums[i + 1] = nums[i] + 1;
  }

  for (i = ratingsSize - 1; i > 0; i--)
  {
    if (ratings[i - 1] > ratings[i])
      nums[i - 1] = nums[i] + 1 > nums[i - 1] ? nums[i] + 1 : nums[i - 1];
  }

  for (i = 0; i < ratingsSize; i++)
    sum += nums[i];

  return sum;
}
// @lc code=end
