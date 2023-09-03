/*
 * @lc app=leetcode.cn id=235 lang=c
 *
 * [235] 二叉搜索树的最近公共祖先
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
  if (root == NULL)
    return root;

  struct TreeNode *left = NULL;
  if (root->val > p->val && root->val > q->val)
    left = ancestor(root->left, p, q);
  if (left != NULL)
    return left;

  struct TreeNode *right = NULL;
  if (root->val < p->val && root->val < q->val)
    right = ancestor(root->right, p, q);
  if (right != NULL)
    return right;

  return root;
}

struct TreeNode *lowestCommonAncestor(struct TreeNode *root, struct TreeNode *p, struct TreeNode *q)
{
  // 法一：递归
  // return ancestor(root, p, q);
  // 法二：迭代
  struct TreeNode *node = NULL;
  if (root != NULL)
  {
    node = root;
    while (node != NULL)
    {
      if (node->val > p->val && node->val > q->val)
        node = node->left;
      else if (node->val < p->val && node->val < q->val)
        node = node->right;
      else
        break;
    }
  }
  return node;
}
// @lc code=end
