/*
 * @lc app=leetcode.cn id=27 lang=c
 *
 * [27] 移除元素
 */

// @lc code=start

int removeElement(int *nums, int numsSize, int val)
{
  int i, j, len;
  i = 0;
  len = numsSize;
  for (j = i; j < numsSize; j++)
  {
    /* code */
    if (val != nums[j])
    {
      /* code */
      nums[i++] = nums[j];
    }
    else
      len--;
  }
  return len;
}
// @lc code=end
