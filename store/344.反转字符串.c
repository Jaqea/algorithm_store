/*
 * @lc app=leetcode.cn id=344 lang=c
 *
 * [344] 反转字符串
 */

// @lc code=start

void reverseString(char *s, int sSize)
{
  int i, j;
  // char temp;
  i = 0;
  j = sSize - 1;
  while (i < j)
  {
    s[i] ^= s[j];
    s[j] ^= s[i];
    s[i] ^= s[j];
    // temp = s[i];
    // s[i] = s[j];
    // s[j] = temp;
    i++;
    j--;
  }
}
// @lc code=end
