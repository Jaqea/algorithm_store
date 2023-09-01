/*
 * @lc app=leetcode.cn id=491 lang=c
 *
 * [491] 递增子序列
 */

// @lc code=start
int **result;
int *item;
int *length;
int top1;
int top2;

void back(int *nums, int numsSize, int startIndex)
{
  if (top2 > 1)
  {
    int i, *path;
    path = (int *)malloc(sizeof(int) * top2);
    for (i = 0; i < top2; i++)
      path[i] = item[i];
    result[top1] = path;
    length[top1++] = top2;
  }

  if (startIndex >= numsSize)
    return;

  int i, *used;
  used = (int *)malloc(sizeof(int) * 201);
  for (i = startIndex; i < numsSize; i++)
  {
    if (used[nums[i] + 100] == 1)
      continue;
    if (top2 == 0)
    {
      item[top2++] = nums[i];
      used[nums[i] + 100] = 1;
      back(nums, numsSize, i + 1);
      top2--;
    }
    if (top2 > 0 && item[top2 - 1] <= nums[i])
    {
      item[top2++] = nums[i];
      used[nums[i] + 100] = 1;
      back(nums, numsSize, i + 1);
      top2--;
    }
  }
}

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int **findSubsequences(int *nums, int numsSize, int *returnSize, int **returnColumnSizes)
{
  int i;
  result = (int **)malloc(sizeof(int *) * 40000);
  length = (int *)malloc(sizeof(int) * 40000);
  item = (int *)malloc(sizeof(int) * numsSize);
  top1 = top2 = 0;
  back(nums, numsSize, 0);
  *returnSize = top1;
  *returnColumnSizes = (int *)malloc(sizeof(int) * (*returnSize));
  for (i = 0; i < *returnSize; i++)
    (*returnColumnSizes)[i] = length[i];
  return result;
}
// @lc code=end
