/*
 * @lc app=leetcode.cn id=42 lang=c
 *
 * [42] 接雨水
 */

// @lc code=start

int trap(int *height, int heightSize)
{
  // 法一：双指针
  // int leftHeight, rightHeight, i, l, r, h, sum = 0;
  // for (i = 0; i < heightSize; i++)
  // {
  //   if (i == 0 || i == heightSize - 1)
  //     continue;

  //   leftHeight = height[i];
  //   rightHeight = height[i];

  //   for (l = i - 1; l >= 0; l--)
  //     if (height[l] > leftHeight)
  //       leftHeight = height[l];
  //   for (r = i + 1; r < heightSize; r++)
  //     if (height[r] > rightHeight)
  //       rightHeight = height[r];

  //   h = leftHeight < rightHeight ? leftHeight - height[i] : rightHeight - height[i];
  //   if (h > 0)
  //     sum += h;
  // }

  // return sum;
  // 法二：动态规划
  // int i, *leftHight, *rightHeight, h, sum = 0;
  // leftHight = (int *)malloc(sizeof(int) * heightSize);
  // rightHeight = (int *)malloc(sizeof(int) * heightSize);
  // for (i = 0; i < heightSize; i++)
  // {
  //   leftHight[i] = 0;
  //   rightHeight[i] = 0;
  // }
  // leftHight[0] = height[0];
  // for (i = 1; i < heightSize; i++)
  //   leftHight[i] = leftHight[i - 1] > height[i] ? leftHight[i - 1] : height[i];
  // rightHeight[heightSize - 1] = height[heightSize - 1];
  // for (i = heightSize - 2; i >= 0; i--)
  //   rightHeight[i] = rightHeight[i + 1] > height[i] ? rightHeight[i + 1] : height[i];

  // for (i = 1; i < heightSize - 1; i++)
  // {
  //   h = leftHight[i] < rightHeight[i] ? leftHight[i] - height[i] : rightHeight[i] - height[i];
  //   sum += h;
  // }
  // return sum;

  // 法三：单调栈
  int i, top, *stack, maxLeft, maxRight, sum = 0, h, w;
  stack = (int *)malloc(sizeof(int) * heightSize);
  top = 0;
  stack[top++] = 0;
  for (i = 1; i < heightSize; i++)
  {
    while (top != 0 && height[stack[top - 1]] < height[i])
    {
      int mid = stack[--top];
      if (top != 0)
      {
        h = height[i] < height[stack[top - 1]] ? height[i] - height[mid] : height[stack[top - 1]] - height[mid];
        w = i - stack[top - 1] - 1;
        sum += h * w;
      }
    }
    stack[top++] = i;
  }

  return sum;
}
// @lc code=end
