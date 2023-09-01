/*
 * @lc app=leetcode.cn id=26 lang=c
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start

int removeDuplicates(int *nums, int numsSize)
{
  int i, j, len;
  len = numsSize;
  for (i = 0; i < len; i++) // 关键之处
  {
    for (j = i + 1; j < numsSize; j++)
    {
      if (nums[j] == nums[i])
      {
        len--;
        continue;
      }
      nums[i + 1] = nums[j];
      i++;
    }
  }
  return len;
}
// @lc code=end
