/*
 * @lc app=leetcode.cn id=337 lang=c
 *
 * [337] 打家劫舍 III
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
int *robRange(struct TreeNode *root)
{
  if (root == NULL)
  {
    int *dpn = (int *)malloc(sizeof(int) * 2);
    dpn[0] = 0;
    dpn[1] = 0;
    return dpn;
  }

  int *leftVal = robRange(root->left);
  int *rightVal = robRange(root->right);

  int val1 = root->val + leftVal[0] + rightVal[0];
  int maxl = leftVal[0] > leftVal[1] ? leftVal[0] : leftVal[1];
  int maxr = rightVal[0] > rightVal[1] ? rightVal[0] : rightVal[1];
  int val2 = maxl + maxr;
  int *dp = (int *)malloc(sizeof(int) * 2);
  dp[1] = val1;
  dp[0] = val2;

  return dp;
}

int rob(struct TreeNode *root)
{
  int *dp = robRange(root);
  return dp[0] > dp[1] ? dp[0] : dp[1];
}
// @lc code=end
