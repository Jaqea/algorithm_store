/*
 * @lc app=leetcode.cn id=17 lang=c
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
char **allStr;
char *item;
char **result;
int top1;
int top2;
int top3;

void back(int k, int startIndex)
{
  if (!k)
    return;
  if (top2 == k)
  {
    int i;
    char *path = (char *)malloc(sizeof(char) * (k + 1));
    for (i = 0; i < k; i++)
      path[i] = item[i];
    path[i] = '\0';
    result[top3++] = path;
    return;
  }

  int i, j;
  for (i = startIndex; i < top1; i++)
  {
    for (j = 0; j < strlen(allStr[i]); j++)
    {
      item[top2++] = allStr[i][j];
      back(k, i + 1);
      top2--;
    }
  }
}

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char **letterCombinations(char *digits, int *returnSize)
{
  int i, start, len = strlen(digits);
  result = (char **)malloc(sizeof(char *) * 1000);
  allStr = (char **)malloc(sizeof(char *) * len);
  item = (char *)malloc(sizeof(char) * (len + 1));
  top1 = top2 = top3 = 0;
  for (i = 0; i < len; i++)
  {
    if (digits[i] == '8' || digits[i] == '9')
      start = 'a' + 3 * (digits[i] - '0' - 2) + 1;
    else
      start = 'a' + 3 * (digits[i] - '0' - 2);
    if (digits[i] == '7' || digits[i] == '9')
    {
      char *temp = (char *)malloc(sizeof(char) * 5);
      temp[0] = start;
      temp[1] = start + 1;
      temp[2] = start + 2;
      temp[3] = start + 3;
      temp[4] = '\0';
      allStr[top1++] = temp;
    }
    else
    {
      char *temp = (char *)malloc(sizeof(char) * 5);
      temp[0] = start;
      temp[1] = start + 1;
      temp[2] = start + 2;
      temp[3] = '\0';
      allStr[top1++] = temp;
    }
  }
  back(len, 0);
  *returnSize = top3;
  return result;
}
// @lc code=end
