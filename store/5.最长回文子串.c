/*
 * @lc app=leetcode.cn id=5 lang=c
 *
 * [5] 最长回文子串
 */

// @lc code=start

int getMax(char *s, int mid)
{
  int i, j, flag = 0;
  if (strlen(s) % 2 == 0)
  {
    i = mid;
    j = i + 1;
  }
  else
    i = j = mid;

  while (i >= 0 && j <= strlen(s) && s[i] == s[j])
  {
    i--;
    j++;
    flag++;
  }

  if (flag)
    return j - i - 1;
  else
    return j - i;
}

char *longestPalindrome(char *s)
{
  // 中心检索
  int i, len, max = 0, mid, j, left, right;
  for (i = 0; i < strlen(s); i++)
  {
    len = getMax(s, i);
    if (max < len)
    {
      max = len;
      mid = i;
    }
  }

  if (strlen(s) % 2)
  {
    left = mid - max / 2;
    right = mid + max / 2;
  }
  else
  {
    left = mid;
    right = mid + max / 2;
  }

  printf("%d,%d\n", mid, max);
  // printf("%d,%d", mid - max / 2, mid + max / 2);
  char *res;
  res = (char *)malloc(sizeof(char) * (max + 1));
  for (i = left, j = 0; i <= right; i++)
    res[j++] = s[i];

  res[j] = '\0';
  return res;
}
// @lc code=end
