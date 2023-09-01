/*
 * @lc app=leetcode.cn id=718 lang=c
 *
 * [718] 最长重复子数组
 */

// @lc code=start

int findLength(int *nums1, int nums1Size, int *nums2, int nums2Size)
{
  int i, j, **dp, max = 0;
  dp = (int **)malloc(sizeof(int *) * nums1Size);
  for (i = 0; i < nums1Size; i++)
    dp[i] = (int *)malloc(sizeof(int) * nums2Size);

  for (i = 0; i < nums1Size; i++)
    for (j = 0; j < nums2Size; j++)
      dp[i][j] = 0;

  for (i = 0; i < nums1Size; i++)
    if (nums1[i] == nums2[0])
      dp[i][0] = 1;

  for (i = 0; i < nums2Size; i++)
    if (nums2[i] == nums1[0])
      dp[0][i] = 1;

  for (i = 0; i < nums1Size; i++)
  {
    for (j = 0; j < nums2Size; j++)
    {
      if (nums1[i] == nums2[j] && i > 0 && j > 0)
        dp[i][j] = dp[i - 1][j - 1] + 1;
      max = max > dp[i][j] ? max : dp[i][j];
    }
  }
  return max;
}
// @lc code=end
