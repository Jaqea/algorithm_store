/*
 * @lc app=leetcode.cn id=90 lang=c
 *
 * [90] 子集 II
 */
// @lc code=start
int **result;
int *item;
int *length;
int *used;
int top1;
int top2;

void back(int *nums, int numsSize, int startIndex)
{
  int i, *path;
  path = (int *)malloc(sizeof(int) * top2);
  for (i = 0; i < top2; i++)
    path[i] = item[i];
  result[top1] = path;
  length[top1++] = top2;

  if (startIndex >= numsSize)
    return;

  for (i = startIndex; i < numsSize; i++)
  {
    if (i > 0 && nums[i] == nums[i - 1] && used[i - 1] == 0)
      continue;

    item[top2++] = nums[i];
    used[i] = 1;
    back(nums, numsSize, i + 1);
    used[i] = 0;
    top2--;
  }
}

void BubbleSort(int *arr, int size)
{
  int i, j, tmp;
  for (i = 0; i < size - 1; i++)
  {
    for (j = 0; j < size - i - 1; j++)
    {
      if (arr[j] > arr[j + 1])
      {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int **subsetsWithDup(int *nums, int numsSize, int *returnSize, int **returnColumnSizes)
{
  int i;
  result = (int **)malloc(sizeof(int *) * 2000);
  item = (int *)malloc(sizeof(int) * numsSize);
  length = (int *)malloc(sizeof(int) * 2000);
  used = (int *)malloc(sizeof(int) * numsSize);
  top1 = top2 = 0;
  // 需要先排序！！
  BubbleSort(nums, numsSize);
  back(nums, numsSize, 0);
  *returnSize = top1;
  *returnColumnSizes = (int *)malloc(sizeof(int) * (*returnSize));
  for (i = 0; i < *returnSize; i++)
    (*returnColumnSizes)[i] = length[i];
  return result;
}
// @lc code=end
