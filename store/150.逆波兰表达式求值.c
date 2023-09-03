/*
 * @lc app=leetcode.cn id=150 lang=c
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start

int evalRPN(char **tokens, int tokensSize)
{
  long long i, top, a, b, stack[30000];
  top = -1;
  for (i = 0; i < tokensSize; i++)
  {
    if (tokens[i][0] == '+' || (tokens[i][0] == '-' && !tokens[i][1]) || tokens[i][0] == '*' || tokens[i][0] == '/')
    {
      a = stack[top--];
      b = stack[top--];
      if (tokens[i][0] == '+')
        stack[++top] = b + a;
      if (tokens[i][0] == '-')
        stack[++top] = b - a;
      if (tokens[i][0] == '*')
        stack[++top] = b * a;
      if (tokens[i][0] == '/')
        stack[++top] = b / a;
    }
    else
      stack[++top] = atoi(tokens[i]);
  }
  return stack[top];
}
// @lc code=end
