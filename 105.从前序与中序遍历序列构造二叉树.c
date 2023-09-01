/*
 * @lc app=leetcode.cn id=105 lang=c
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

struct TreeNode *create(int *preorder, int preorderSize, int *inorder, int inorderSize)
{
  if (preorderSize == 0)
    return;

  struct TreeNode *node = (struct TreeNode *)malloc(sizeof(struct TreeNode));
  node->left = NULL;
  node->right = NULL;
  int val = preorder[0];
  node->val = val;

  if (preorderSize == 1)
    return node;

  int splitIndex;
  for (splitIndex = 0; splitIndex < inorderSize; splitIndex++)
    if (inorder[splitIndex] == val)
      break;

  int *leftIn, *rightIn, *leftPre, *rightPre, i;
  leftIn = (int *)malloc(sizeof(int) * (splitIndex));
  rightIn = (int *)malloc(sizeof(int) * (inorderSize - splitIndex - 1));
  leftPre = (int *)malloc(sizeof(int) * (splitIndex));
  rightPre = (int *)malloc(sizeof(int) * (preorderSize - splitIndex - 1));
  for (i = 0; i < splitIndex; i++)
    leftIn[i] = inorder[i];
  for (i = splitIndex + 1; i < inorderSize; i++)
    rightIn[i - splitIndex - 1] = inorder[i];
  for (i = 1; i < splitIndex + 1; i++)
    leftPre[i - 1] = preorder[i];
  for (i = splitIndex + 1; i < preorderSize; i++)
    rightPre[i - splitIndex - 1] = preorder[i];

  node->left = create(leftPre, splitIndex, leftIn, splitIndex);
  node->right = create(rightPre, preorderSize - splitIndex - 1, rightIn, inorderSize - splitIndex - 1);

  return node;
}

struct TreeNode *buildTree(int *preorder, int preorderSize, int *inorder, int inorderSize)
{
  return create(preorder, preorderSize, inorder, inorderSize);
}
// @lc code=end
