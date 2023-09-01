/*
 * @lc app=leetcode.cn id=239 lang=c
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
void push(int *queue, int front, int rear, int x)
{
  // printf("%d,%d\n", queue[rear - 1], x);
  printf("%d", rear);
  if (rear > 0 && queue[rear - 1] > x)
  {
    queue[rear++] = x;
  }

  else
  {
    // printf("%d\n", x);
    while (rear > front && queue[rear - 1] < x)
      rear--;
    queue[rear++] = x;
  }
}
// 现在是2022/10/24 00:24，终于通过了，想杀人的心都有了
int *maxSlidingWindow(int *nums, int numsSize, int k, int *returnSize)
{
  int i, j, len, rear, front, queue[numsSize], *res;
  front = 0;
  len = 0;
  rear = 0;
  res = (int *)malloc(sizeof(int) * numsSize);
  queue[rear] = nums[0];
  rear++;

  for (i = 1; i < k; i++)
  {
    if (rear > 0 && queue[rear - 1] > nums[i])
    {
      queue[rear++] = nums[i];
    }
    else
    {
      while (rear > front && queue[rear - 1] < nums[i])
        rear--;
      queue[rear++] = nums[i];
    }
  }
  res[len++] = queue[front];

  for (i = k; i < numsSize; i++)
  {
    if (front != rear && queue[front] == nums[i - k])
      front++;
    if (rear > 0 && queue[rear - 1] > nums[i])
    {
      queue[rear++] = nums[i];
    }
    else
    {
      while (rear > front && queue[rear - 1] < nums[i])
        rear--;
      queue[rear++] = nums[i];
    }
    res[len++] = queue[front];
  }

  *returnSize = len;
  return res;
}
// @lc code=end