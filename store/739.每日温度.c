/*
 * @lc app=leetcode.cn id=739 lang=c
 *
 * [739] 每日温度
 */

// @lc code=start

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *dailyTemperatures(int *temperatures, int temperaturesSize, int *returnSize)
{
  int i, top, *stack, *res, temp;
  stack = (int *)malloc(sizeof(int) * temperaturesSize);
  res = (int *)malloc(sizeof(int) * temperaturesSize);

  top = 0;
  for (i = 0; i < temperaturesSize; i++)
    res[i] = 0;

  for (i = 0; i < temperaturesSize; i++)
  {
    if (top > 0 && temperatures[stack[top - 1]] < temperatures[i])
    {
      while (top > 0 && temperatures[stack[top - 1]] < temperatures[i])
      {
        res[stack[top - 1]] = i - stack[top - 1];
        top--;
      }
    }
    stack[top++] = i;
  }

  *returnSize = temperaturesSize;
  return res;
}
// @lc code=end
