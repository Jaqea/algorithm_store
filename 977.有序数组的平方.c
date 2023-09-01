/*
 * @lc app=leetcode.cn id=977 lang=c
 *
 * [977] 有序数组的平方
 */

// @lc code=start

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *sortedSquares(int *nums, int numsSize, int *returnSize)
{
  int i, j, k, *res;
  res = (int *)malloc(sizeof(int) * numsSize);
  *returnSize = numsSize;
  for (i = 0; i < numsSize; i++)
    nums[i] *= nums[i];
  i = 0;
  k = numsSize - 1;
  j = numsSize - 1;
  while (i <= j)
  {
    if (nums[i] > nums[j])
    {
      res[k--] = nums[i];
      i++;
    }
    else
    {
      res[k--] = nums[j];
      j--;
    }
  }
  return res;
}
// @lc code=end
