/*
 * @lc app=leetcode.cn id=669 lang=c
 *
 * [669] 修剪二叉搜索树
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
struct TreeNode *trim(struct TreeNode *root, int low, int high)
{
  if (root == NULL)
    return root;
  if (root->val < low)
  {
    return trim(root->right, low, high);
  }
  if (root->val > high)
    return trim(root->left, low, high);
  root->left = trim(root->left, low, high);
  root->right = trim(root->right, low, high);
  return root;
}

struct TreeNode *trimBST(struct TreeNode *root, int low, int high)
{
  // 法一：递归
  // return trim(root, low, high);
  // 法二：迭代
  struct TreeNode *left, *right, *cur;
  if (root != NULL)
  {
    while (root != NULL && (root->val < low || root->val > high))
    {
      if (root->val < low)
        root = root->right;
      else
        root = root->left;
    }
    cur = root;
    while (cur != NULL)
    {
      while (cur->left != NULL && cur->left->val < low)
        cur->left = cur->left->right;
      cur = cur->left;
    }
    cur = root;
    while (cur != NULL)
    {
      while (cur->right != NULL && cur->right->val > high)
        cur->right = cur->right->left;
      cur = cur->right;
    }
  }
  return root;
}
// @lc code=end
