/*
 * @lc app=leetcode.cn id=216 lang=c
 *
 * [216] 组合总和 III
 */

// @lc code=start
int **result;
int *item;
int top1;
int top2;

void back(int n, int k, int sum, int startIndex)
{
  if (sum > n)
    return;
  if (top2 == k)
  {
    int i;
    if (sum == n)
    {
      int *path = (int *)malloc(sizeof(int) * k);
      for (i = 0; i < k; i++)
        path[i] = item[i];
      result[top1++] = path;
    }
    return;
  }
  int i;
  for (i = startIndex; i <= 9 - (k - top2) + 1; i++)
  {
    item[top2++] = i;
    sum += i;
    back(n, k, sum, i + 1);
    sum -= i;
    top2--;
  }
}

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int **combinationSum3(int k, int n, int *returnSize, int **returnColumnSizes)
{
  int i;
  result = (int **)malloc(sizeof(int *) * 100);
  item = (int *)malloc(sizeof(int) * k);
  top1 = top2 = 0;
  back(n, k, 0, 1);
  *returnSize = top1;
  *returnColumnSizes = (int *)malloc(sizeof(int) * top1);
  for (i = 0; i < top1; i++)
    (*returnColumnSizes)[i] = k;

  return result;
}
// @lc code=end
