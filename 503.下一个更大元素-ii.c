/*
 * @lc app=leetcode.cn id=503 lang=c
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *nextGreaterElements(int *nums, int numsSize, int *returnSize)
{
  int i, top, *res, *stack;
  stack = (int *)malloc(sizeof(int) * 2 * numsSize);
  res = (int *)malloc(sizeof(int) * numsSize);
  for (i = 0; i < numsSize; i++)
    res[i] = -1;
  top = 0;
  stack[top++] = 0;

  for (i = 1; i < 2 * numsSize; i++)
  {
    while (top != 0 && nums[stack[top - 1]] < nums[i % numsSize])
    {
      res[stack[top - 1]] = nums[i % numsSize];
      top--;
    }
    stack[top++] = i % numsSize;
  }
  *returnSize = numsSize;
  return res;
}
// @lc code=end
