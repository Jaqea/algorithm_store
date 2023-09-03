/*
 * @lc app=leetcode.cn id=509 lang=c
 *
 * [509] 斐波那契数
 */

// @lc code=start

int fib(int n)
{
  // 递归
  // if (n == 1)
  //   return 1;
  // if (n == 0)
  //   return 0;
  // return fib(n - 1) + fib(n - 2);

  // 动态规划
  int dp[100], i;
  dp[0] = 0;
  dp[1] = 1;
  for (i = 2; i <= n; i++)
    dp[i] = dp[i - 1] + dp[i - 2];

  return dp[n]; // 只能是n 不能为i 因为dp在i处的值不一定存在
}
// @lc code=end
