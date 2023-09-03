/*
 * @lc app=leetcode.cn id=542 lang=c
 *
 * [542] 01 矩阵
 */

// @lc code=start

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int **updateMatrix(int **mat, int matSize, int *matColSize, int *returnSize, int **returnColumnSizes)
{
  int i, j, **queue, front, rear, **res, ni, nj, d, dirs[4][2] = {{0, -1}, {0, 1}, {-1, 0}, {1, 0}};
  front = 0;
  rear = 0;
  queue = (int **)malloc(sizeof(int *) * 10000);
  *returnSize = matSize;
  *returnColumnSizes = (int *)malloc(sizeof(int) * matSize);
  res = (int **)malloc(sizeof(int *) * matSize);
  for (i = 0; i < matSize; i++)
  {
    res[i] = (int *)malloc(sizeof(int) * (*matColSize));
    (*returnColumnSizes)[i] = *matColSize;
  }

  for (i = 0; i < matSize; i++)
  {
    for (j = 0; j < *matColSize; j++)
    {
      if (mat[i][j] == 0)
      {
        int *pos = (int *)malloc(sizeof(int) * 2);
        pos[0] = i;
        pos[1] = j;
        queue[rear++] = pos;
        res[i][j] = 0;
      }
      else
        res[i][j] = -1;
    }
  }

  while (front != rear)
  {
    int *pos = (int *)malloc(sizeof(int) * 2);
    pos = queue[front++];
    for (d = 0; d < 4; d++)
    {
      ni = pos[0] + dirs[d][0];
      nj = pos[1] + dirs[d][1];
      if (ni >= 0 && ni < matSize && nj >= 0 && nj < *matColSize && res[ni][nj] < 0)
      {
        res[ni][nj] = res[pos[0]][pos[1]] + 1;
        int *pos = (int *)malloc(sizeof(int) * 2);
        pos[0] = ni;
        pos[1] = nj;
        queue[rear++] = pos;
      }
    }
  }

  return res;
}
// @lc code=end
