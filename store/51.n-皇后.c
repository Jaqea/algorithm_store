/*
 * @lc app=leetcode.cn id=51 lang=c
 *
 * [51] N 皇后
 */

// @lc code=start
char ***result;
char **item;
int top1;
int top2;

bool isVaild(int row, int col, char **matx, int n)
{
  int i, j;
  // row之后的还未遍历
  for (i = 0; i < row; i++)
    if (matx[i][col] == 'Q')
      return false;

  for (i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
  {
    if (matx[i][j] == 'Q')
      return false;
  }

  for (i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++)
  {
    if (matx[i][j] == 'Q')
      return false;
  }

  return true;
}

void back(int n, int row)
{
  if (row == n)
  {
    char **path = (char **)malloc(sizeof(char *) * top2);
    int i;
    for (i = 0; i < top2; i++)
    {
      path[i] = (char *)malloc(sizeof(char) * (n + 1));
      int j;
      for (j = 0; j < n; j++)
        path[i][j] = item[i][j];
      path[i][j] = '\0';
    }
    result[top1++] = path;

    return;
  }

  int col;
  for (col = 0; col < n; col++)
  {
    if (isVaild(row, col, item, n))
    {
      item[row][col] = 'Q';
      top2++;
      back(n, row + 1);
      item[row][col] = '.';
      top2--;
    }
  }
}

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
char ***solveNQueens(int n, int *returnSize, int **returnColumnSizes)
{
  // 难点
  // 1.N皇条件判断（根据当前行列，分别判断左上和右上）
  // 2.矩阵拷贝（双重循环）
  // 3.回溯思路（每行为一层，每层中分别取每列（深度为行数，循环遍历数目为列数）
  // ，然后判断取该位置处，矩阵中是否满足条件，若满足，继续深搜，
  // 反之回溯，top也要跟着变！）
  int i;
  result = (char ***)malloc(sizeof(char **) * 400);
  item = (char **)malloc(sizeof(char *) * n);
  top1 = top2 = 0;
  for (i = 0; i < n; i++)
  {
    item[i] = (char *)malloc(sizeof(char) * (n + 1));
    int j;
    for (j = 0; j < n; j++)
      item[i][j] = '.';
    item[i][j] = '\0';
  }

  back(n, 0);

  *returnSize = top1;
  *returnColumnSizes = (int *)malloc(sizeof(int) * top1);
  for (i = 0; i < *returnSize; i++)
    (*returnColumnSizes)[i] = n;
  return result;
}
// @lc code=end
