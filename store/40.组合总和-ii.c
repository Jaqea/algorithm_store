/*
 * @lc app=leetcode.cn id=40 lang=c
 *
 * [40] 组合总和 II
 */

// @lc code=start

int **result;
int *item;
int **length;
int *used;
int top1;
int top2;
int sum;

void back(int *candidates, int candidatesSize, int target, int startIndex, int *used)
{
  if (sum > target)
    return;
  if (sum == target)
  {
    int *path, i;
    path = (int *)malloc(sizeof(int) * top2);
    for (i = 0; i < top2; i++)
      path[i] = item[i];
    result[top1] = path;
    length[top1++] = top2;
    return;
  }
  int i;
  for (i = startIndex; i < candidatesSize; i++)
  {
    if (i > 0 && used[i - 1] == 0 && candidates[i - 1] == candidates[i])
      continue;
    used[i] = 1;
    sum += candidates[i];
    item[top2++] = candidates[i];
    back(candidates, candidatesSize, target, i + 1, used);
    used[i] = 0;
    sum -= candidates[i];
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
int **combinationSum2(int *candidates, int candidatesSize, int target, int *returnSize, int **returnColumnSizes)
{
  int i;
  result = (int **)malloc(sizeof(int *) * 100);
  length = (int **)malloc(sizeof(int *) * 100);
  used = (int *)malloc(sizeof(int) * candidatesSize);
  item = (int *)malloc(sizeof(int) * 30);
  top1 = top2 = sum = 0;
  for (i = 0; i < candidatesSize; i++)
    used[i] = 0;
  BubbleSort(candidates, candidatesSize);
  back(candidates, candidatesSize, target, 0, used);
  *returnSize = top1;
  *returnColumnSizes = (int *)malloc(sizeof(int) * (*returnSize));
  for (i = 0; i < *returnSize; i++)
    (*returnColumnSizes)[i] = length[i];
  return result;
}
// @lc code=end
