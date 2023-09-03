/*
 * @lc app=leetcode.cn id=637 lang=c
 *
 * [637] 二叉树的层平均值
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
double *averageOfLevels(struct TreeNode *root, int *returnSize)
{
  double *result, sum;
  int top, front, rear, size, len, i;
  struct TreeNode **queue, *temp;
  result = (double *)malloc(sizeof(double) * 10000);
  queue = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 10000);
  front = rear = top = 0;
  if (root != NULL)
  {
    queue[rear++] = root;
    while (front != rear)
    {
      size = rear;
      len = size - front;
      sum = 0;
      for (i = front; i < size; i++)
      {
        temp = queue[front++];
        sum += temp->val;
        if (temp->left != NULL)
          queue[rear++] = temp->left;
        if (temp->right != NULL)
          queue[rear++] = temp->right;
      }
      result[top++] = sum / len;
    }
  }
  *returnSize = top;
  return result;
}
// @lc code=end
