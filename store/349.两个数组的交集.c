/*
 * @lc app=leetcode.cn id=349 lang=c
 *
 * [349] 两个数组的交集
 */

// @lc code=start

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *intersection(int *nums1, int nums1Size, int *nums2, int nums2Size, int *returnSize)
{
  int i, len = 0, arr[1000] = {0}, *res;

  for (i = 0; i < nums1Size; i++)
  {
    if (arr[nums1[i]] < 1)
      arr[nums1[i]]++;
  }
  for (i = 0; i < nums2Size; i++)
    if (arr[nums2[i]] == 1)
      arr[nums2[i]]++;
  for (i = 0; i < 1000; i++)
    if (arr[i] >= 2)
      len++;
  *returnSize = len;
  res = (int *)malloc(sizeof(int) * len);
  len = 0;
  for (i = 0; i < 1000; i++)
    if (arr[i] >= 2)
      res[len++] = i;
  return res;
}
// @lc code=end
