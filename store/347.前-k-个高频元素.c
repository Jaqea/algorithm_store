/*
 * @lc app=leetcode.cn id=347 lang=c
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *topKFrequent(int *nums, int numsSize, int k, int *returnSize)
{
  int i, j, r, t, last, top, p, min, *temp, *res, *arr, len;
  temp = (int *)malloc(sizeof(int) * numsSize);
  res = (int *)malloc(sizeof(int) * (10000));
  arr = (int *)malloc(sizeof(int) * numsSize);
  for (i = 0; i < numsSize; i++)
    temp[i] = -1;

  i = 0;
  while (i < numsSize)
  {
    if (temp[i] == -1)
    {
      temp[i] = 0;
      for (j = i; j < numsSize; j++)
      {
        if (nums[j] == nums[i])
        {

          temp[i]++;
          if (i != j)
            temp[j] = 0;
        }
      }
    }
    i++;
  }

  j = 1;
  for (i = 0; i < numsSize; i++)
  {
    if (temp[i] > 0)
    {
      res[j] = temp[i];
      r = j + 1;
      while (j / 2 > 0 && res[j / 2] > res[j])
      {
        t = res[j / 2];
        res[j / 2] = res[j];
        res[j] = t;
        j /= 2;
      }
      j = r;
    }
  }

  while (j - 1 > k)
  {
    top = 1;
    res[top] = res[--j];
    if (2 * top + 1 < j)
      min = res[2 * top] > res[2 * top + 1] ? 2 * top + 1 : 2 * top;
    else
      min = 2 * top;
    while (res[top] > res[min] && min < j)
    {
      t = res[top];
      res[top] = res[min];
      res[min] = t;
      top = min;
      if (2 * top + 1 < j)
        min = res[2 * top] > res[2 * top + 1] ? 2 * top + 1 : 2 * top;
      else
        min = 2 * top;
    }
  }

  len = 0;
  for (i = 1; i < j; i++)
  {
    for (t = 0; t < numsSize; t++)
    {
      if (temp[t] > 0 && temp[t] == res[i])
      {
        arr[len++] = nums[t];
        temp[t] = 0;
      }
    }
  }

  *returnSize = k;

  return arr;
}
// @lc code=end
