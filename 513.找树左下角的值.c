/*
 * @lc app=leetcode.cn id=513 lang=c
 *
 * [513] 找树左下角的值
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
int maxHeight;
void back(struct TreeNode *root, int depth)
{
  if (root == NULL)
    return;
  if (root->left == NULL && root->right == NULL)
  {
    if (depth > maxHeight) // 通过最大深度第一次增加判断该叶子节点是在最左边
    {
      maxHeight = depth;
      res = root->val;
    }
    return;
  }
  back(root->left, depth + 1);
  back(root->right, depth + 1);
}

int findBottomLeftValue(struct TreeNode *root)
{
  // 法一：递归
  maxHeight = 1;
  res = root->val;
  if (root != NULL)
    back(root, 1);
  return res;
}
// @lc code=end
