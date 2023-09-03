/*
 * @lc app=leetcode.cn id=455 lang=c
 *
 * [455] 分发饼干
 */

// @lc code=start

void sort(int *arr, int size)
{
  int i, j, temp;
  for (i = 0; i < size - 1; i++)
    for (j = 0; j < size - 1 - i; j++)
      if (arr[j] > arr[j + 1])
      {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
}

int findContentChildren(int *g, int gSize, int *s, int sSize)
{
  // int i, j, startIndex = 0, count = 0;
  sort(g, gSize);
  sort(s, sSize);
  // 小饼干先喂饱小胃口
  // for (i = 0; i < gSize; i++)
  // {
  //   for (j = startIndex; j < sSize; j++)
  //   {
  //     if (s[j] >= g[i])
  //     {
  //       count++;
  //       startIndex = j + 1;
  //       break;
  //     }
  //   }
  // }
  // 大饼干满足大胃口
  int i, index, count = 0;
  index = sSize - 1;
  for (i = gSize - 1; i >= 0; i--)
  {
    if (index >= 0 && s[index] >= g[i])
    {
      index--;
      count++;
    }
  }

  return count;
}
// @lc code=end
