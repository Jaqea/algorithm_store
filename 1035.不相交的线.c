/*
 * @lc app=leetcode.cn id=1035 lang=c
 *
 * [1035] 不相交的线
 */

// @lc code=start

int maxUncrossedLines(int *nums1, int nums1Size, int *nums2, int nums2Size)
{
  int i, j, **dp, max = 0;
  dp = (int **)malloc(sizeof(int *) * (nums1Size + 1));
  for (i = 0; i <= nums1Size; i++)
    dp[i] = (int *)malloc(sizeof(int) * (nums2Size + 1));

  for (i = 0; i <= nums1Size; i++)
    for (j = 0; j <= nums2Size; j++)
      dp[i][j] = 0;

  for (i = 1; i <= nums1Size; i++)
    for (j = 1; j <= nums2Size; j++)
      if (nums1[i - 1] == nums2[j - 1])
        dp[i][j] = dp[i - 1][j - 1] + 1;
      else
        dp[i][j] = dp[i - 1][j] > dp[i][j - 1] ? dp[i - 1][j] : dp[i][j - 1];

  for (i = 0; i <= nums1Size; i++)
    for (j = 0; j <= nums2Size; j++)
      max = max > dp[i][j] ? max : dp[i][j];

  return max;
}
// @lc code=end
