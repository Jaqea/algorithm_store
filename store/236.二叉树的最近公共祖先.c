/*
 * @lc app=leetcode.cn id=236 lang=c
 *
 * [236] 二叉树的最近公共祖先
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

struct TreeNode *ancestor(struct TreeNode *root, struct TreeNode *p, struct TreeNode *q)
{
  if (root == p || root == q || root == NULL)
    return root;
  struct TreeNode *left = ancestor(root->left, p, q);
  struct TreeNode *right = ancestor(root->right, p, q);
  if (left == NULL && right != NULL)
    return right;
  else if (left != NULL && right == NULL)
    return left;
  else if (left != NULL && right != NULL)
    return root;
  else
    return NULL;
}

struct TreeNode *lowestCommonAncestor(struct TreeNode *root, struct TreeNode *p, struct TreeNode *q)
{
  return ancestor(root, p, q);
}
// @lc code=end
