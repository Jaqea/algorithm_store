/*
 * @lc app=leetcode.cn id=55 lang=c
 *
 * [55] 跳跃游戏
 */

// @lc code=start

bool canJump(int *nums, int numsSize)
{
  int cover = 0, i;
  for (i = 0; i <= cover; i++)
  {
    if (i + nums[i] > cover)
      cover = i + nums[i];
    if (cover >= numsSize - 1)
      return true;
  }
  return false;
}
// @lc code=end
