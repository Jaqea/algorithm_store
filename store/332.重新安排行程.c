/*
 * @lc app=leetcode.cn id=332 lang=c
 *
 * [332] 重新安排行程
 */

// @lc code=start
char **result;
int *used;
int top1;
int end;

int cmp(char **str1, char **str2)
{
  int res = strcmp(str1[0], str2[0]);
  if (res == 0)
    return strcmp(str1[1], str2[1]);
  return res;
}

void sort(char ***tickets, int ticketsSize)
{
  if (ticketsSize <= 1)
    return;
  int i, j;
  char **temp;
  for (i = 0; i < ticketsSize - 1; i++)
  {
    for (j = 0; j < ticketsSize - i - 1; j++)
    {
      if (cmp(tickets[j + 1], tickets[j]) < 0)
      {
        temp = tickets[j];
        tickets[j] = tickets[j + 1];
        tickets[j + 1] = temp;
      }
    }
  }
}

void back(char ***tickets, int ticketsSize, char *str, int nums)
{
  if (nums == ticketsSize + 1)
  {
    end = 1;
    return;
  }

  int i;
  for (i = 0; i < ticketsSize; i++)
  {
    if (end == 1)
      return;
    if (used[i] == 1)
      continue;
    if (strcmp(str, tickets[i][0]) == 0)
    {
      result[top1++] = tickets[i][1];
      used[i] = 1;
      back(tickets, ticketsSize, tickets[i][1], nums + 1);
      used[i] = 0;
      top1--;
    }
  }
}

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char **findItinerary(char ***tickets, int ticketsSize, int *ticketsColSize, int *returnSize)
{
  // 难点
  // 1.排序更靠前（事先排好序，且找到第一条路径后就结束）
  // 2.回溯的写法（从头开始，深度优先遍历，used数组记录）
  // 3.避免死循环的方法（使用used数组记录取过的边）
  result = (char **)malloc(sizeof(char *) * 1000);
  used = (int *)malloc(sizeof(int) * ticketsSize);
  top1 = end = 0;
  result[top1++] = "JFK";
  sort(tickets, ticketsSize);
  back(tickets, ticketsSize, "JFK", 1);
  *returnSize = ticketsSize + 1;
  return result;
}
// @lc code=end
