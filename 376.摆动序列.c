/*
 * @lc app=leetcode.cn id=376 lang=c
 *
 * [376] 摆动序列
 */

// @lc code=start

int wiggleMaxLength(int *nums, int numsSize)
{
  int pre, cur, res, i;
  pre = cur = 0;
  res = 1;
  for (i = 0; i < numsSize - 1; i++)
  {
    cur = nums[i + 1] - nums[i];
    if (pre >= 0 && cur < 0 || pre <= 0 && cur > 0)
    {
      res++;
      pre = cur;
    }
  }
  return res;
}
// @lc code=end
