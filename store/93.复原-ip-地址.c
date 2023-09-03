/*
 * @lc app=leetcode.cn id=93 lang=c
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
char **result;
int segment[4];
int top1;

bool vertify(char *s, int start, int end)
{

  if (start > end)
    return false;
  if (s[start] == '0' && start < end)
    return false;

  int i, index = 0;
  char *temp = (char *)malloc(sizeof(char) * (end - start + 2));
  for (i = start; i <= end; i++)
    temp[index++] = s[i];
  temp[index] = '\0';

  if (atol(temp) > 255 || atol < 0)
    return false;

  return true;
}

void back(char *s, int startIndex, int pointNum)
{
  if (pointNum == 3)
  {
    if (vertify(s, startIndex, strlen(s) - 1))
    {
      int i, j = 0, k = 0;
      char *path = (char *)malloc(sizeof(char) * (strlen(s) + 4));
      for (i = 0; i < strlen(s); i++)
      {
        if (i == segment[k])
        {
          path[j] = '.';
          j++;
          k++;
        }
        path[j] = s[i];
        j++;
      }
      path[j] = '\0';
      result[top1++] = path;
    }
    return;
  }

  int i;
  for (i = startIndex; i < strlen(s); i++)
  {
    if (vertify(s, startIndex, i))
    {
      segment[pointNum++] = i + 1;
      back(s, i + 1, pointNum);
      pointNum--;
    }
    else
      break;
  }
}

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char **restoreIpAddresses(char *s, int *returnSize)
{
  int len = strlen(s);
  result = (char **)malloc(sizeof(char *) * 100);
  top1 = 0;
  back(s, 0, 0);
  *returnSize = top1;
  return result;
  // 难点
  // 1. 递归结束条件：'.' 的数量
  // 2. 处理满足条件的子串：不用新建立数组一个个放进去，只需记录需要添加'.'的位置即可，最后返回时统一在原串上对应处添加'.'，
  // 且最后一段需要在返回处再判断是否满足条件
  // 3. 条件判断：根据题意，传入子串判断是否满足
}
// @lc code=end
