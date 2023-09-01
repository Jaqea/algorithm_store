/*
 * @lc app=leetcode.cn id=617 lang=c
 *
 * [617] 合并二叉树
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

struct TreeNode *merge(struct TreeNode *root1, struct TreeNode *root2)
{
  struct TreeNode *root = (struct TreeNode *)malloc(sizeof(struct TreeNode));
  root->left = NULL;
  root->right = NULL;
  if (root1 == NULL)
    return root2;
  if (root2 == NULL)
    return root1;
  root->val = root1->val + root2->val;
  root->left = merge(root1->left, root2->left);
  root->right = merge(root1->right, root2->right);
  return root;
}

struct TreeNode *mergeTrees(struct TreeNode *root1, struct TreeNode *root2)
{
  // 法一：递归
  // return merge(root1, root2);
  // 法二：迭代
  struct TreeNode **queue, *node1, *node2;
  queue = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 1000);
  int front, rear, i, size;
  front = rear = 0;
  if (root1 != NULL && root2 != NULL)
  {
    queue[rear++] = root1;
    queue[rear++] = root2;
    while (front != rear)
    {
      node1 = queue[front++];
      node2 = queue[front++];
      node1->val += node2->val;
      if (node1->left != NULL && node2->left != NULL)
      {
        queue[rear++] = node1->left;
        queue[rear++] = node2->left;
      }
      if (node1->right != NULL && node2->right != NULL)
      {
        queue[rear++] = node1->right;
        queue[rear++] = node2->right;
      }
      if (node1->left == NULL && node2->left != NULL)
        node1->left = node2->left;
      if (node1->right == NULL && node2->right != NULL)
        node1->right = node2->right;
    }
  }
  return root1;
}
// @lc code=end
