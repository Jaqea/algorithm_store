/*
 * @lc app=leetcode.cn id=1047 lang=c
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start

char *removeDuplicates(char *s)
{
  int i, top;
  char *stack = (char *)malloc(sizeof(char) * strlen(s));
  top = -1;
  for (i = 0; s[i] != '\0'; i++)
  {
    if (top > -1 && s[i] == stack[top])
      stack[top--];
    else
      stack[++top] = s[i];
  }
  for (i = 0; i < top + 1; i++)
    s[i] = stack[i];

  s[i] = '\0';
  return s;
}
// @lc code=end
