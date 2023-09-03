/*
 * @lc app=leetcode.cn id=202 lang=c
 *
 * [202] 快乐数
 */

// @lc code=start

bool isHappy(int n)
{
  int *arr, m, i, sum;
  arr = (int *)malloc(sizeof(int) * 1000);
  m = n;

  for (i = 0; i < 1000; i++)
    arr[i] = 0;

  while (m != 1)
  {
    sum = 0;
    while (m / 10 != 0 || (m % 10 != 0 && m / 10 == 0))
    {
      sum += (m % 10) * (m % 10);
      m = m / 10;
    }
    arr[sum] += 1;
    for (i = 0; i < 1000; i++)
      if (arr[i] > 1)
        return false;
    m = sum;
  }

  return true;
}
// @lc code=end
