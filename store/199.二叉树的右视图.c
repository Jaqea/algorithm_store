/*
 * @lc app=leetcode.cn id=199 lang=c
 *
 * [199] 二叉树的右视图
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
int *rightSideView(struct TreeNode *root, int *returnSize)
{
  int front, rear, *result, top, size, i;
  struct TreeNode **queue, *temp;
  queue = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 100);
  result = (int *)malloc(sizeof(int) * 100);
  front = rear = top = 0;
  if (root != NULL)
  {
    queue[rear++] = root;
    while (front != rear)
    {
      size = rear;
      for (i = front; i < size; i++)
      {
        temp = queue[front++];
        if (temp->left != NULL)
          queue[rear++] = temp->left;
        if (temp->right != NULL)
          queue[rear++] = temp->right;
      }
      result[top++] = temp->val;
    }
  }
  *returnSize = top;
  return result;
}
// @lc code=end
