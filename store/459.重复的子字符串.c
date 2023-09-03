/*
 * @lc app=leetcode.cn id=459 lang=c
 *
 * [459] 重复的子字符串
 */

// @lc code=start
void getNext(int *next, char *s)
{
  int i, j;
  j = 0;
  next[0] = j;
  for (i = j + 1; i < strlen(s); i++)
  {
    while (j > 0 && s[i] != s[j])
      j = next[j - 1];
    if (s[i] == s[j])
      j++;
    next[i] = j;
  }
}

bool repeatedSubstringPattern(char *s)
{
  // 暴力解法
  // int i, j, start, end, len;
  // len = strlen(s);
  // if (len <= 1)
  //   return false;
  // end = -1;
  // i = 0;
  // j = i + 1;
  // while (s[j] != '\0')
  // {
  //   if (s[i] == s[j])
  //   {
  //     end = j - 1;
  //     break;
  //   }
  //   else
  //     j++;
  // }

  // if (end != -1)
  // {
  //   for (j = end; j < len / 2; j++)
  //   {
  //     start = j + 1;
  //     while (s[start] != '\0')
  //     {
  //       if (s[start] != s[i])
  //       {
  //         i = 0;
  //         break;
  //       }
  //       else
  //       {
  //         if (i == j)
  //           i = 0;
  //         else
  //           i++;
  //         start++;
  //         if (s[start] == '\0' && i == 0)
  //           return true;
  //       }
  //     }
  //   }
  // }

  // return false;

  // 移动匹配
  // int i, j, len, start;
  // char *s_n;
  // len = strlen(s);
  // s_n = (char *)malloc(sizeof(char) * 2 * len + 1);
  // for (i = 0; i < 2 * len; i++)
  // {
  //   if (i < len)
  //   {
  //     s_n[i] = s[i];
  //   }
  //   else
  //     s_n[i] = s[i - len];
  // }
  // s_n[i] = '\0';
  // // 暴力方法求一个字符串中是否包含另一字符串
  // for (i = 1; i < 2 * len - 1; i++)
  // {
  //   j = 0;
  //   start = i;
  //   while (s[j] != '\0' && start < 2 * len - 1)
  //   {
  //     if (s_n[start] != s[j])
  //       break;
  //     else
  //     {
  //       j++;
  //       start++;
  //       if (j == len)
  //         return true;
  //     }
  //   }
  // }

  // return false;

  // KMP判断
  // int *next, i, j, len;
  // len = strlen(s);
  // next = (int *)malloc(sizeof(int) * len);
  // getNext(next, s);

  // if (len % (len - next[len - 1]) || next[len - 1] == 0)
  //   return false;
  // else
  //   return true;
}
// @lc code=end
