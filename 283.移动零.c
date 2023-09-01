/*
 * @lc app=leetcode.cn id=283 lang=c
 *
 * [283] 移动零
 */

// @lc code=start

void moveZeroes(int *nums, int numsSize)
{
  int i, j, index;

  i = 0;
  index = i;
  j = i;
  while (j < numsSize)
  {
    while (j < numsSize && nums[j] == 0)
    {
      j++;
      index++;
    }
    if (j < numsSize)
      nums[i++] = nums[j++];
  }
  for (i = numsSize - index; i < numsSize; i++)
    nums[i] = 0;
}
// @lc code=end
