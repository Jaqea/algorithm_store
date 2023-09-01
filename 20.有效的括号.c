/*
 * @lc app=leetcode.cn id=20 lang=c
 *
 * [20] 有效的括号
 */

// @lc code=start

bool isValid(char *s)
{
  int i, top;
  char *stack;
  stack = (char *)malloc(sizeof(char) * strlen(s));
  top = -1;
  // 法一
  // for (i = 0; s[i] != '\0'; i++)
  // {
  //   if (top > -1 && (s[i] == ')' && stack[top] == '(' || s[i] == ']' && stack[top] == '[' || s[i] == '}' && stack[top] == '{'))
  //     stack[top--];
  //   else
  //     stack[++top] = s[i];
  // }
  // if (top == -1)
  //   return true;
  // return false;
  // 法二
}
// @lc code=end
