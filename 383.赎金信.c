/*
 * @lc app=leetcode.cn id=383 lang=c
 *
 * [383] 赎金信
 */

// @lc code=start

bool canConstruct(char *ransomNote, char *magazine)
{
  int arr[26] = {0}, i = 0;
  while (ransomNote[i] != '\0')
  {
    arr[ransomNote[i] - 97]++;
    i++;
  }
  i = 0;
  while (magazine[i] != '\0')
  {
    if (arr[magazine[i] - 97] > 0)
      arr[magazine[i] - 97]--;
    i++;
  }
  for (i = 0; i < 26; i++)
  {
    if (arr[i] != 0)
      return false;
  }

  return true;
}
// @lc code=end
