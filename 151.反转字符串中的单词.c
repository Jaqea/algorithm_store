/*
 * @lc app=leetcode.cn id=151 lang=c
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start

void reverse(char *s, int start, int end)
{
  if (start >= end)
    return;
  int i, j;
  char temp;
  i = start;
  j = end;
  while (i < j)
  {
    temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++;
    j--;
  }
}

char *reverseWords(char *s)
{
  // int i, j, len;
  // len = strlen(s);

  // i = 0;
  // j = 0;
  // while (s[j] == ' ')
  //   j++;

  // while (s[j] != '\0')
  // {
  //   if (j > 1 && s[j] == ' ' && s[j - 1] == ' ')
  //     j++;
  //   else
  //   {
  //     s[i] = s[j++];
  //     i++;
  //   }
  // }
  // if (i > 1 && s[i - 1] == ' ')
  //   i--;
  // s[i] = '\0';

  // len = i;
  // reverse(s, 0, len - 1);
  // i = 0;
  // j = i;
  // while (s[i] != '\0')
  // {
  //   if (s[i] == ' ')
  //   {
  //     reverse(s, j, i - 1);
  //     j = i + 1;
  //   }
  //   i++;
  // }
  // reverse(s, j, i - 1);

  // return s;

  int i, j, len;
  len = strlen(s);
  // 去除首空格
  for (i = 0; s[i] == ' '; i++, len--)
    ;
  // 去除中间空格
  for (j = 0; i < strlen(s); i++)
  {
    /* code */
    if (i > 0 && s[i] == ' ' && s[i - 1] == ' ')
    {
      len--;
      continue;
    }

    s[j++] = s[i];
  }

  // 去除末尾空格
  if (s[j - 1] == ' ')
  {
    len--;
    s[j - 1] = '\0';
  }
  else
    s[j] = '\0';

  j = 0;
  reverse(s, j, len - 1);
  for (i = 0; s[i] != '\0'; i++)
  {
    if (s[i] == ' ')
    {
      reverse(s, j, i - 1);
      j = i + 1;
    }
  }
  reverse(s, j, i - 1);

  return s;
}
// @lc code=end
