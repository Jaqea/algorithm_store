/*
 * @lc app=leetcode.cn id=1005 lang=c
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start

int largestSumAfterKNegations(int *nums, int numsSize, int k)
{
  // 要按绝对值大小排序
  int i, j, sum, temp;
  sum = 0;
  for (i = 0; i < numsSize - 1; i++)
  {
    for (j = 0; j < numsSize - i - 1; j++)
    {
      if (nums[j + 1] < nums[j])
      {
        temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  for (i = 0; i < numsSize; i++)
  {
    if (nums[i] <= 0 && k > 0)
    {
      nums[i] = -nums[i];
      k--;
    }
  }
  for (i = 0; i < numsSize - 1; i++)
  {
    for (j = 0; j < numsSize - i - 1; j++)
    {
      if (nums[j + 1] < nums[j])
      {
        temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  while (k > 0)
  {
    nums[0] *= -1;
    k--;
    if (k == 0)
      break;
  }

  for (i = 0; i < numsSize; i++)
    sum += nums[i];

  return sum;
}
// @lc code=end
