/*
 * @lc app=leetcode.cn id=100 lang=c
 *
 * [100] 相同的树
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

bool isSameTree(struct TreeNode *p, struct TreeNode *q)
{
  struct TreeNode **queue, *left, *right;
  int front, rear;
  queue = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 1000);
  front = rear = 0;
  if ((p == NULL && q != NULL) || (p != NULL && q == NULL))
    return false;
  queue[rear++] = p;
  queue[rear++] = q;
  while (front != rear)
  {
    left = queue[front++];
    right = queue[front++];
    if (left == NULL && right == NULL)
      continue;

    if (left == NULL || right == NULL || (left->val != right->val))
      return false;

    queue[rear++] = left->left;
    queue[rear++] = right->left;
    queue[rear++] = left->right;
    queue[rear++] = right->right;
  }
  return true;
}
// @lc code=end
