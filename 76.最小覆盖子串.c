/*
 * @lc app=leetcode.cn id=76 lang=c
 *
 * [76] 最小覆盖子串
 */

// @lc code=start

char *minWindow(char *s, char *t)
{
  char *str;
  int i, j, len, mini, k, minj;
  int appear[128] = {0};
  int appeared[128] = {0};
  k = 0;
  mini = 0;
  minj = 100000000;
  len = 0;
  i = 0;
  j = 0;
  while (t[k] != '\0')
  {
    appear[t[k]]++;
    k++;
    len++;
  }
  while (s[i] != '\0')
  {
    if (strlen(s) < strlen(t))
      break;
    else
    {
      while (s[j] != '\0')
      {
        appeared[s[j]]++;
        if (appeared[s[j]] > 0)
        {
          if (appeared[s[j]] <= appear[s[j]])
            len--;
          if (len == 0)
            break;
        }
        j++;
      }
      if (s[j] == '\0')
        break;
      while (i <= j && appeared[s[i]] > appear[s[i]])
      {
        appeared[s[i]]--;
        i++;
      }
      if (minj - mini > j - i)
      {
        mini = i;
        minj = j;
      }
      appeared[s[i]]--;
      i++;
      j++;
      len = 1;
    }
  }

  if (minj >= j)
    return "";
  k = 0;
  str = (char *)malloc(sizeof(char) * (minj - mini + 2));
  while (mini <= minj)
    str[k++] = s[mini++];
  str[k] = '\0';
  return str;
}
// @lc code=end
