/*
 * @lc app=leetcode.cn id=968 lang=c
 *
 * [968] 监控二叉树
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
int res;

int back(struct TreeNode *root)
{
  // 状态：0 - 无覆盖 1 - 摄像头 2 - 有覆盖
  if (root == NULL)
    return 2;
  int left = back(root->left);
  int right = back(root->right);

  if (left == 2 && right == 2)
    return 0;

  if (left == 0 || right == 0)
  {
    res++;
    return 1;
  }

  if (left == 1 || right == 1)
    return 2;

  return -1;
}

int minCameraCover(struct TreeNode *root)
{
  res = 0;
  if (back(root) == 0)
    res++;
  return res;
}
// @lc code=end
