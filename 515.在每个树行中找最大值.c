/*
 * @lc app=leetcode.cn id=515 lang=c
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *largestValues(struct TreeNode *root, int *returnSize)
{
  int *result, front, rear, top, max, size, i;
  struct TreeNode **queue, *temp;
  result = (int *)malloc(sizeof(int) * 10000);
  queue = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 10000);
  front = rear = top = 0;

  if (root != NULL)
  {
    queue[rear++] = root;
    while (front != rear)
    {
      size = rear;
      max = INT_MIN;
      for (i = front; i < size; i++)
      {
        temp = queue[front++];
        if (temp->val > max)
          max = temp->val;
        if (temp->left != NULL)
          queue[rear++] = temp->left;
        if (temp->right != NULL)
          queue[rear++] = temp->right;
      }
      result[top++] = max;
    }
  }

  *returnSize = top;
  return result;
}
// @lc code=end
