/*
 * @lc app=leetcode.cn id=654 lang=c
 *
 * [654] 最大二叉树
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

struct TreeNode *back(int *nums, int start, int end)
{
  int index, max = -1, i;
  for (i = start; i <= end; i++)
  {
    if (max < nums[i])
    {
      max = nums[i];
      index = i;
    }
  }

  struct TreeNode *node = (struct TreeNode *)malloc(sizeof(struct TreeNode));
  node->left = NULL;
  node->right = NULL;
  node->val = max;

  if (start == end)
    return node;

  if (index - 1 >= start)
    node->left = back(nums, start, index - 1);

  if (index + 1 <= end)
    node->right = back(nums, index + 1, end);

  return node;
}

struct TreeNode *constructMaximumBinaryTree(int *nums, int numsSize)
{
  return back(nums, 0, numsSize - 1);
}
// @lc code=end
