/*
 * @lc app=leetcode.cn id=28 lang=c
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start

// next表减一
void getNext(int *next, char *needle)
{
  int i, j;
  i = 1;
  j = -1;
  next[0] = j;
  while (needle[i] != '\0')
  {
    // 这两步顺序很重要！
    while (j > -1 && needle[i] != needle[j + 1])
      j = next[j];
    if (needle[i] == needle[j + 1])
      j++;
    // 这两步顺序很重要！
    next[i] = j;
    i++;
  }
}
// next表不减一
// void getNext(int *next, char *needle)
// {
//   int i, j;
//   i = 1;
//   j = 0;
//   next[0] = j;
//   while (needle[i] != '\0')
//   {
//     while (j > 0 && needle[i] != needle[j])
//       j = next[j - 1];
//     if (needle[i] == needle[j])
//       j++;
//     next[i] = j;
//     i++;
//   }
// }

int strStr(char *haystack, char *needle)
{
  int *next, i, j, len;

  len = strlen(needle);
  next = (int *)malloc(sizeof(int) * len);
  getNext(next, needle);

  // next表不减一
  // i = 0;
  // j = 0;
  // while (haystack[j] != '\0')
  // {
  //   while (i > 0 && haystack[j] != needle[i])
  //     i = next[i - 1];
  //   if (haystack[j] == needle[i])
  //     i++;
  //   if (needle[i] == '\0')
  //     return j - len + 1;
  //   j++;
  // }
  // next表减一
  i = -1;
  j = 0;
  while (haystack[j] != '\0')
  {
    // 这两步顺序很重要！
    while (i > -1 && haystack[j] != needle[i + 1])
      i = next[i];
    if (haystack[j] == needle[i + 1])
      i++;
    // 这两步顺序很重要！
    if (needle[i + 1] == '\0')
      return j - len + 1;
    j++;
  }

  return -1;
}
// @lc code=end
