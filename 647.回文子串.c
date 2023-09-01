/*
 * @lc app=leetcode.cn id=647 lang=c
 *
 * [647] 回文子串
 */

// @lc code=start

int extend(char *s, int i, int j, int n)
{
  int res = 0;
  while (i >= 0 && j < n && s[i] == s[j])
  {
    res++;
    i--;
    j++;
  }
  return res;
}

int countSubstrings(char *s)
{
  // 法一：动态规划
  // int i, j, res = 0;
  // bool **dp;
  // dp = (bool **)malloc(sizeof(bool *) * strlen(s));
  // for (i = 0; i < strlen(s); i++)
  //   dp[i] = (bool *)malloc(sizeof(bool) * strlen(s));

  // for (i = 0; i < strlen(s); i++)
  //   for (j = 0; j < strlen(s); j++)
  //     dp[i][j] = false;

  // for (i = strlen(s) - 1; i >= 0; i--)
  // {
  //   for (j = i; j < strlen(s); j++)
  //   {
  //     if (s[i] == s[j])
  //     {
  //       if (j - i <= 1)
  //       {
  //         res++;
  //         dp[i][j] = true;
  //       }
  //       else if (dp[i + 1][j - 1])
  //       {
  //         res++;
  //         dp[i][j] = true;
  //       }
  //     }
  //   }
  // }

  // return res;

  // 法二：双指针
  int i, res = 0;
  for (i = 0; i < strlen(s); i++)
  {
    res += extend(s, i, i, strlen(s));
    res += extend(s, i, i + 1, strlen(s));
  }

  return res;
}
// @lc code=end
