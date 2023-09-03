/*
 * @lc app=leetcode.cn id=738 lang=c
 *
 * [738] 单调递增的数字
 */

// @lc code=start

int monotoneIncreasingDigits(int n)
{
  // 法一：暴力方法
  // int i, num, max, flag, res;
  // for (i = 0; i <= n; i++)
  // {
  //   num = i;
  //   max = num % 10;
  //   flag = 1;
  //   while (num)
  //   {
  //     if (max >= num % 10)
  //       max = num % 10;
  //     else
  //     {
  //       flag = 0;
  //       break;
  //     }
  //     num /= 10;
  //   }
  //   if (flag == 1)
  //     res = i;
  // }
  // return res;
  // 法二：贪心
  int nums[10], num, top, i, sum, flag;
  top = sum = 0;
  flag = -1;
  num = n;
  while (num)
  {
    nums[top++] = num % 10;
    num /= 10;
  }
  for (i = 1; i < top; i++)
  {
    if (nums[i] > nums[i - 1])
    {
      nums[i]--;
      flag = i - 1;
    }
  }
  for (i = 0; i <= flag; i++)
    nums[i] = 9;
  for (i = top - 1; i >= 0; i--)
  {
    if (nums[i] != 0)
    {
      sum *= 10;
      sum += nums[i];
    }
  }

  return sum;
}
// @lc code=end
