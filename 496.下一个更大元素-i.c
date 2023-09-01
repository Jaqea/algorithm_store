/*
 * @lc app=leetcode.cn id=496 lang=c
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *nextGreaterElement(int *nums1, int nums1Size, int *nums2, int nums2Size, int *returnSize)
{
  int i, top, *stack, *res, *hash;
  stack = (int *)malloc(sizeof(int) * nums2Size);
  res = (int *)malloc(sizeof(int) * nums1Size);
  hash = (int *)malloc(sizeof(int) * 10000);
  top = 0;
  stack[top++] = nums2[0];
  for (i = 0; i < nums1Size; i++)
    hash[nums1[i]] = i;

  for (i = 0; i < nums1Size; i++)
    res[i] = -1;

  for (i = 1; i < nums2Size; i++)
  {
    if (nums2[i] < stack[top - 1])
      stack[top++] = nums2[i];
    else if (nums2[i] == stack[top - 1])
      stack[top++] = nums2[i];
    else
    {
      while (top != 0 && nums2[i] > stack[top - 1])
      {
        if (hash[stack[top - 1]] >= 0)
          res[hash[stack[top - 1]]] = nums2[i];
        top--;
      }
      stack[top++] = nums2[i];
    }
  }
  *returnSize = nums1Size;
  return res;
}
// @lc code=end
