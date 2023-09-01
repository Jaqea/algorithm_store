/*
 * @lc app=leetcode.cn id=763 lang=c
 *
 * [763] 划分字母区间
 */

// @lc code=start

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *partitionLabels(char *s, int *returnSize)
{
  int i, max = -1, top = 0, count = 0, hash[26] = {0}, *res;
  res = (int *)malloc(sizeof(int) * strlen(s));
  for (i = 0; i < strlen(s); i++)
  {
    hash[s[i] - 'a'] = i;
  }
  for (i = 0; i < strlen(s); i++)
  {
    max = max > hash[s[i] - 'a'] ? max : hash[s[i] - 'a'];
    count++;
    if (max == i)
    {
      res[top++] = count;
      count = 0;
    }
  }
  *returnSize = top;
  return res;
}
// @lc code=end
