/*
 * @lc app=leetcode.cn id=134 lang=c
 *
 * [134] 加油站
 */

// @lc code=start

int canCompleteCircuit(int *gas, int gasSize, int *cost, int costSize)
{
  // 法一：暴力解法
  // int rest, i, j;
  // for (i = 0; i < gasSize; i++)
  // {
  //   j = i;
  //   rest = gas[j] - cost[j];
  //   j = (j + 1) % gasSize;
  //   while (j != i && rest >= 0)
  //   {
  //     rest += gas[j] - cost[j];
  //     j = (j + 1) % gasSize;
  //   }
  //   if (rest >= 0 && j == i)
  //     return j;
  // }
  // return -1;
  // 法二：贪心
  int i, cursum, totalsum, start;
  cursum = totalsum = start = 0;
  for (i = 0; i < gasSize; i++)
  {
    cursum += gas[i] - cost[i];
    totalsum += gas[i] - cost[i];
    if (cursum < 0)
    {
      start = i + 1;
      cursum = 0;
    }
  }
  if (totalsum >= 0)
    return start;
  else
    return -1;
}
// @lc code=end
