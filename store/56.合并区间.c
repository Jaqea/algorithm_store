/*
 * @lc app=leetcode.cn id=56 lang=c
 *
 * [56] 合并区间
 */

// @lc code=start
void QuickSort(int **arr, int low, int high)
{
  if (low < high)
  {
    int i = low;
    int j = high;
    int k[2];
    k[0] = arr[low][0];
    k[1] = arr[low][1];
    while (i < j)
    {
      while (i < j && arr[j][0] >= k[0]) // 从右向左找第一个小于k的数
      {
        j--;
      }

      if (i < j)
      {
        arr[i][0] = arr[j][0];
        arr[i][1] = arr[j][1];
        i++;
      }

      while (i < j && arr[i][0] < k[0]) // 从左向右找第一个大于等于k的数
      {
        i++;
      }

      if (i < j)
      {
        arr[j][0] = arr[i][0];
        arr[j][1] = arr[i][1];
        j--;
      }
    }

    arr[i][0] = k[0];
    arr[i][1] = k[1];

    // 递归调用
    QuickSort(arr, low, i - 1);  // 排序k左边
    QuickSort(arr, i + 1, high); // 排序k右边
  }
}

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int **merge(int **intervals, int intervalsSize, int *intervalsColSize, int *returnSize, int **returnColumnSizes)
{
  int i, **res, top = 0;
  res = (int **)malloc(sizeof(int *) * intervalsSize);

  if (intervalsSize > 0)
  {
    QuickSort(intervals, 0, intervalsSize - 1);
    res[top++] = intervals[0];
    for (i = 1; i < intervalsSize; i++)
    {
      if (intervals[i][0] <= res[top - 1][1])
        res[top - 1][1] = intervals[i][1] > res[top - 1][1] ? intervals[i][1] : res[top - 1][1];
      else
        res[top++] = intervals[i];
    }
  }
  *returnSize = top;
  *returnColumnSizes = (int *)malloc(sizeof(int) * (*returnSize));
  for (i = 0; i < *returnSize; i++)
    (*returnColumnSizes)[i] = *intervalsColSize;

  return res;
}
// @lc code=end
