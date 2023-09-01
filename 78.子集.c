/*
 * @lc app=leetcode.cn id=78 lang=c
 *
 * [78] 子集
 */

// @lc code=start
int **result;
int *item;
int *length;
int top1;
int top2;

void back(int *nums, int numSize, int startIndex)
{
  // 子集是收集所有节点，因此需要在开始就添加进去，
  // 而组合、分割都是求的叶子节点，所以放在终止条件中收集
  int i, *path;
  path = (int *)malloc(sizeof(int) * top2);
  for (i = 0; i < top2; i++)
    path[i] = item[i];
  result[top1] = path;
  length[top1++] = top2;

  if (startIndex >= numSize)
    return;

  for (i = startIndex; i < numSize; i++)
  {
    item[top2++] = nums[i];
    back(nums, numSize, i + 1);
    top2--;
  }
}

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int **subsets(int *nums, int numsSize, int *returnSize, int **returnColumnSizes)
{
  int i;
  result = (int **)malloc(sizeof(int *) * 2000);
  item = (int *)malloc(sizeof(int) * numsSize);
  length = (int *)malloc(sizeof(int) * 2000);
  top1 = top2 = 0;
  back(nums, numsSize, 0);
  *returnSize = top1;
  *returnColumnSizes = (int *)malloc(sizeof(int) * (*returnSize));
  for (i = 0; i < *returnSize; i++)
    (*returnColumnSizes)[i] = length[i];
  return result;
}
// @lc code=end
