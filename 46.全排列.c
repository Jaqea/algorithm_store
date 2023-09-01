/*
 * @lc app=leetcode.cn id=46 lang=c
 *
 * [46] 全排列
 */

// @lc code=start
int **result;
int *item;
int *used;
int top1;
int top2;

void back(int *nums, int numsSize)
{
  if (top2 >= numsSize)
  {
    int i, *path;
    path = (int *)malloc(sizeof(int) * top2);
    for (i = 0; i < top2; i++)
      path[i] = item[i];
    result[top1++] = path;
    return;
  }
  int i;
  for (i = 0; i < numsSize; i++)
  {
    if (used[i] == 1)
      continue;
    used[i] = 1;
    item[top2++] = nums[i];
    back(nums, numsSize);
    used[i] = 0;
    top2--;
  }
}
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int **permute(int *nums, int numsSize, int *returnSize, int **returnColumnSizes)
{
  int i;
  result = (int **)malloc(sizeof(int *) * 1000);
  item = (int *)malloc(sizeof(int) * numsSize);
  used = (int *)malloc(sizeof(int) * numsSize);
  top1 = top2 = 0;
  back(nums, numsSize);
  printf("asd");
  *returnSize = top1;
  *returnColumnSizes = (int *)malloc(sizeof(int) * (*returnSize));
  for (i = 0; i < *returnSize; i++)
    (*returnColumnSizes)[i] = numsSize;
  return result;
}
// @lc code=end
