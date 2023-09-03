/*
 * @lc app=leetcode.cn id=45 lang=c
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start

int jump(int *nums, int numsSize)
{
  int cover, nextCover, count, i;
  cover = nextCover = count = 0;
  for (i = 0; i <= cover; i++)
  {
    if (i + nums[i] > nextCover)
      nextCover = i + nums[i];
    if (i == cover && cover < numsSize - 1)
    {
      count++;
      cover = nextCover;
    }

    if (cover >= numsSize - 1)
      break;
  }
  return count;
}
// @lc code=end
