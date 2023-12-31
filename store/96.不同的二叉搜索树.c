/*
 * @lc app=leetcode.cn id=96 lang=c
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start

int numTrees(int n)
{
  int i, j, *dp;
  dp = (int *)malloc(sizeof(int) * (n + 1));
  dp[0] = 1;
  for (i = 1; i < n + 1; i++)
  {
    dp[i] = 0;
    for (j = 1; j <= i; j++)
    {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  return dp[n];
}
// @lc code=end
