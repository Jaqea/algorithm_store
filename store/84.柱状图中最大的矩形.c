/*
 * @lc app=leetcode.cn id=84 lang=c
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start

int largestRectangleArea(int *heights, int heightsSize)
{
  // 法一：双指针法
  // int i, left, right, max = 0, h, w;
  // for (i = 0; i < heightsSize; i++)
  // {
  //   left = i;
  //   right = i;
  //   for (; left >= 0; left--)
  //     if (heights[left] < heights[i])
  //       break;
  //   for (; right < heightsSize; right++)
  //     if (heights[right] < heights[i])
  //       break;
  //   w = right - left - 1;
  //   h = heights[i];
  //   max = max > w * h ? max : w * h;
  // }

  // return max;

  // 法二：单调栈
  int top, *stack, max = 0, i, mid, w, h, *newHeight;
  stack = (int *)malloc(sizeof(int) * (heightsSize + 2));
  newHeight = (int *)malloc(sizeof(int) * (heightsSize + 2));
  for (i = 1; i < heightsSize + 1; i++)
    newHeight[i] = heights[i - 1];
  newHeight[0] = 0;
  newHeight[heightsSize + 1] = 0;

  top = 0;
  stack[top++] = 0;
  for (i = 1; i < heightsSize + 2; i++)
  {
    while (top != 0 && newHeight[i] < newHeight[stack[top - 1]])
    {
      mid = stack[--top];
      w = i - stack[top - 1] - 1;
      h = newHeight[mid];
      max = max > w * h ? max : w * h;
    }
    stack[top++] = i;
  }

  return max;
}
// @lc code=end
