/*
 * @lc app=leetcode.cn id=541 lang=c
 *
 * [541] 反转字符串 II
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

char *reverseStr(char *s, int k)
{
  int start, end, i, remain, len = 0;
  while (s[len] != '\0')
    len++;

  i = 0;
  remain = len - i * (2 * k);
  start = 0;
  end = k - 1;

  while (i < len / (2 * k))
  {
    reverse(s, start, end);
    i++;
    remain = len - i * (2 * k);
    start = start + 2 * k;
    end = end + 2 * k;
  }

  if (remain < k)
    reverse(s, len - remain, len - 1);

  if (remain >= k && remain < 2 * k)
    reverse(s, len - remain, len - remain + k - 1);

  return s;
}
// @lc code=end
