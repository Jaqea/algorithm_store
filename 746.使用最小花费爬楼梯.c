/*
 * @lc app=leetcode.cn id=746 lang=c
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start

int minCostClimbingStairs(int *cost, int costSize)
{
  int dp[2000], i;
  dp[0] = 0;
  dp[1] = 0;
  for (i = 2; i <= costSize; i++)
    dp[i] = dp[i - 1] + cost[i - 1] > dp[i - 2] + cost[i - 2] ? dp[i - 2] + cost[i - 2] : dp[i - 1] + cost[i - 1];
  return dp[costSize];
}

// @lc code=end
