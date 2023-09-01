/*
 * @lc app=leetcode.cn id=77 lang=c
 *
 * [77] 组合
 */

// @lc code=start

// int *path;
// int pathTop;
// int **ans;
// int ansTop;

int **result; // 存放符合条件结果的集合
int *item;    // 用来存放符合条件结果
int top1;     // result的长度
int top2;     // item的长度

// void backtracking(int n, int k, int startIndex)
// {
// int i;
// if (k == pathTop)
// {
//   int *item;
//   item = (int *)malloc(sizeof(int) * k);
//   for (i = 0; i < k; i++)
//     item[i] = path[i];
//   ans[ansTop++] = item;
//   return;
// }
// int j;
// for (j = startIndex; j <= n; j++)
// {
//   path[pathTop++] = j;
//   backtracking(n, k, j + 1);
//   pathTop--;
// }
// }

void backtracking(int n, int k, int startIndex)
{
  if (k == top2 + 1)
  {
    int *newItem = (int *)malloc(sizeof(int) * k);
    int i;
    for (i = 0; i < k; i++)
      newItem[i] = item[i];
    result[++top1] = newItem;
    return;
  }
  int i;
  // for (i = startIndex; i <= n - (k - (top2 + 1)) + 1; i++)
  for (i = startIndex; i <= n; i++)
  {
    if (n - i + 1 < k - (top2 + 1))
      break;

    item[++top2] = i;
    backtracking(n, k, i + 1);
    top2--;
  }
}

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int **combine(int n, int k, int *returnSize, int **returnColumnSizes)
{
  // int i;
  // path = (int *)malloc(sizeof(int) * k);
  // ans = (int **)malloc(sizeof(int *) * 10000);
  // ansTop = pathTop = 0;
  // backtracking(n, k, 1);
  // *returnSize = ansTop;
  // *returnColumnSizes = (int *)malloc(sizeof(int) * (*returnSize));
  // for (i = 0; i < *returnSize; i++)
  //   (*returnColumnSizes)[i] = k;

  // return ans;
  int i;
  result = (int **)malloc(sizeof(int *) * 10000);
  item = (int *)malloc(sizeof(int) * k);
  top1 = top2 = -1;
  backtracking(n, k, 1);
  *returnSize = top1 + 1;
  *returnColumnSizes = (int *)malloc(sizeof(int) * (*returnSize));
  for (i = 0; i < *returnSize; i++)
    (*returnColumnSizes)[i] = k;
  return result;
}
// @lc code=end
