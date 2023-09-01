/*
 * @lc app=leetcode.cn id=110 lang=c
 *
 * [110] 平衡二叉树
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
int isBan(struct TreeNode *root)
{
  // 难点：左右子树需要分别判断是否是平衡二叉树，若不是才返回高度
  if (root == NULL)
    return 0;
  int leftHeight = isBan(root->left);
  if (leftHeight == -1)
    return -1;
  int rightHeight = isBan(root->right);
  if (rightHeight == -1)
    return -1;
  if (abs(leftHeight - rightHeight) > 1)
    return -1;
  else
    return 1 + (leftHeight > rightHeight ? leftHeight : rightHeight);
}
bool isBalanced(struct TreeNode *root)
{
  if (isBan(root) == -1)
    return false;
  return true;
}
// @lc code=end
