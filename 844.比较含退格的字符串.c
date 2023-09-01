/*
 * @lc app=leetcode.cn id=844 lang=c
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start

int *simply(char *s, int *arr)
{
  int i, j, k;
  for (k = 0; s[k] == '#'; k++)
    ;

  for (i = k; s[i] != '\0'; i++)
  {
    if (s[i] == '#')
    {
      j = i;
      while (j > k && (s[j] == '#' || arr[s[j] - 97] <= 0))
        j--;
      if (j == k && arr[s[j] - 97] == 0)
        continue;
      arr[s[j] - 97]--;
    }
    else
      arr[s[i] - 97]++;
  }
  return arr;
}

void simplied(char *s)
{
  int i, j, k;
  for (k = 0; s[k] == '#'; k++)
    ;
  i = 0;
  for (j = k; s[j] != '\0'; j++)
  {
    if (s[j] == '#')
    {
      if (i > 0)
        i--;
      continue;
    }
    s[i++] = s[j];
  }
  s[i] = '\0';
}

bool backspaceCompare(char *s, char *t)
{
  // pass 哈希表不能保证读入顺序，只能说明包含的字母，但字母的顺序不能看出，
  // 因此比较不了两个字符串是否相等，只能说明一个字符串里是否包含另一字符串
  // int i, j, k, arrs[26] = {0}, arrt[26] = {0};
  // simply(s, arrs);
  // simply(t, arrt);

  // for (i = 0; i < 26; i++)
  // {
  //   printf("%d,", arrs[i]);
  // }
  // printf("\n");
  // for (i = 0; i < 26; i++)
  // {
  //   printf("%d,", arrt[i]);
  // }

  // for (i = 0; i < 26; i++)
  // {
  //   if (arrs[i] != arrt[i])
  //     return false;
  // }

  // return true;

  int i, j;

  simplied(s);
  simplied(t);

  // for (i = 0; s[i] != '\0'; i++)
  // {
  //   printf("%c,", s[i]);
  // }
  // printf("\n");
  // for (i = 0; t[i] != '\0'; i++)
  // {
  //   printf("%c,", t[i]);
  // }

  if (strlen(s) != strlen(t))
    return false;
  else
    for (i = 0; s[i] != '\0' && t[i] != '\0'; i++)
      if (s[i] != t[i])
        return false;

  return true;
}
// @lc code=end
