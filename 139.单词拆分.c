/*
 * @lc app=leetcode.cn id=139 lang=c
 *
 * [139] 单词拆分
 */

// @lc code=start

bool wordBreak(char *s, char **wordDict, int wordDictSize)
{
  int i, j, k, *dp;
  dp = (int *)malloc(sizeof(int) * (strlen(s) + 1));
  dp[0] = 1;

  for (i = 1; i < strlen(s) + 1; i++)
  {
    for (j = 0; j <= i; j++)
    {
      char *str = (char *)malloc(sizeof(char) * (i - j + 1));
      for (k = j; k < i; k++)
        str[k - j] = s[k];
      str[k - j] = '\0';
      for (k = 0; k < wordDictSize; k++)
      {
        if (strcmp(wordDict[k], str) == 0 && dp[j] == 1)
        {
          dp[i] = 1;
          break;
        }
      }
    }
  }

  if (dp[strlen(s)] == 1)
    return true;
  else
    return false;
}
// @lc code=end
