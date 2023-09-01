/*
 * @lc app=leetcode.cn id=39 lang=c
 *
 * [39] 组合总和
 */

// @lc code=start
int **result;
int *item;
int *len;
int top1;
int top2;
int sum;

void back(int *candidates, int candidatesSize, int target, int startIndex)
{
  if (sum > target)
    return;

  if (sum == target)
  {
    int i;
    int *path = (int *)malloc(sizeof(int) * top2);
    for (i = 0; i < top2; i++)
      path[i] = item[i];
    result[top1] = path;
    len[top1++] = top2;
    return;
  }

  int i;
  for (i = startIndex; i < candidatesSize && (sum + candidates[i]) <= target; i++)
  {
    sum += candidates[i];
    item[top2++] = candidates[i];
    back(candidates, candidatesSize, target, i);
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
int **
combinationSum(int *candidates, int candidatesSize, int target, int *returnSize, int **returnColumnSizes)
{
  int i;
  result = (int **)malloc(sizeof(int *) * 200);
  len = (int *)malloc(sizeof(int) * 200);
  item = (int *)malloc(sizeof(int) * 20);
  top1 = top2 = sum = 0;
  BubbleSort(candidates, candidatesSize);
  back(candidates, candidatesSize, target, 0);
  *returnSize = top1;
  *returnColumnSizes = (int *)malloc(sizeof(int) * top1);
  for (i = 0; i < top1; i++)
    (*returnColumnSizes)[i] = len[i];

  return result;
}
// @lc code=end
