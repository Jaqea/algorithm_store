/*
 * @lc app=leetcode.cn id=131 lang=c
 *
 * [131] 分割回文串
 */

// @lc code=start
char ***result;
char **item;
int *length;
int top1;
int top2;

int isHuiWen(char *str)
{
  int i, j;
  i = 0;
  j = strlen(str) - 1;
  while (i <= j)
    if (str[i++] != str[j--])
      return 0;
  // printf("asd");
  return 1;
}

void back(char *str, int startIndex)
{

  if (startIndex >= strlen(str))
  {
    int i;
    char **path = (char **)malloc(sizeof(char *) * top2);
    for (i = 0; i < top2; i++)
      path[i] = item[i];
    result[top1] = path;
    length[top1++] = top2;
    return;
  }

  int i;
  for (i = startIndex; i < strlen(str); i++)
  {
    char *temp = (char *)malloc(sizeof(char) * (i - startIndex + 2));
    int j = startIndex, k = 0;
    while (j <= i)
      temp[k++] = str[j++];
    temp[k] = '\0';

    if (isHuiWen(temp))
      item[top2++] = temp;
    else
      continue;
    back(str, i + 1);
    top2--;
  }
  return;
}

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
char ***partition(char *s, int *returnSize, int **returnColumnSizes)
{
  int i;
  result = (char ***)malloc(sizeof(char **) * 40000);
  item = (char **)malloc(sizeof(char *) * strlen(s));
  length = (int *)malloc(sizeof(int) * 40000);
  top1 = top2 = 0;
  back(s, 0);
  printf("end");
  *returnSize = top1;
  *returnColumnSizes = (int *)malloc(sizeof(int) * (*returnSize));
  for (i = 0; i < (*returnSize); i++)
    (*returnColumnSizes)[i] = length[i];
  return result;
}
// @lc code=end
