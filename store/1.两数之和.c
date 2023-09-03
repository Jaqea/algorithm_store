/*
 * @lc app=leetcode.cn id=1 lang=c
 *
 * [1] 两数之和
 */

// @lc code=start

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *twoSum(int *nums, int numsSize, int target, int *returnSize)
{
  int i, j, *arr, *res, len = 0, flag;

  arr = (int *)malloc(sizeof(int) * numsSize);
  res = (int *)malloc(sizeof(int) * 2);

  for (i = 0; i < numsSize; i++)
  {
    flag = 0;
    for (j = 0; j < len; j++)
    {
      if (nums[arr[j]] == (target - nums[i]))
      {
        flag = 1;
        break;
      }
    }
    if (flag == 1)
      break;
    else
      arr[len++] = i;
  }

  res[0] = i;
  res[1] = j;
  *returnSize = 2;
  return res;
}
// @lc code=end
