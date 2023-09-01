/*
 * @lc app=leetcode.cn id=242 lang=c
 *
 * [242] 有效的字母异位词
 */

// @lc code=start

bool isAnagram(char *s, char *t)
{
  int i, arr[26];
  for (i = 0; i < 26; i++)
    arr[i] = 0;
  i = 0;
  while (s[i] != '\0')
  {
    arr[s[i] - 97]++;
    i++;
  }
  i = 0;
  while (t[i] != '\0')
  {
    arr[t[i] - 97]--;
    i++;
  }
  i = 0;
  for (i = 0; i < 26; i++)
  {
    if (arr[i] != 0)
      return false;
  }
  return true;
}
// @lc code=end
