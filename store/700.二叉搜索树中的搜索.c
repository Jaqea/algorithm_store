/*
 * @lc app=leetcode.cn id=700 lang=c
 *
 * [700] 二叉搜索树中的搜索
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
struct TreeNode *search(struct TreeNode *root, int val)
{
  if (root->val == val || root == NULL)
    return root;

  if (val > root->val)
    return search(root->right, val);
  else
    return search(root->left, val);
}

struct TreeNode *searchBST(struct TreeNode *root, int val)
{
  // 法一：递归
  // return search(root, val);
  // 法二：迭代
  struct TreeNode *p = root;
  while (p != NULL)
  {
    if (val > p->val)
      p = p->right;
    else if (val < p->val)
      p = p->left;
    else
      break;
  }
  return p;
}
// @lc code=end
