/*
 * @lc app=leetcode.cn id=106 lang=c
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
struct TreeNode *create(int *inorder, int inorderSize, int *postorder, int postorderSize)
{
  if (postorderSize == 0)
    return NULL;
  int rootVal = postorder[postorderSize - 1];
  struct TreeNode *node = (struct TreeNode *)malloc(sizeof(struct TreeNode));
  node->val = rootVal;
  node->left = NULL;
  node->right = NULL;
  int splitIndex;
  for (splitIndex = 0; splitIndex < inorderSize; splitIndex++)
    if (inorder[splitIndex] == rootVal)
      break;

  if (postorderSize == 1)
    return node;

  int *leftTree, *rightTree, *left, *right, i;
  leftTree = (int *)malloc(sizeof(int) * (splitIndex));
  rightTree = (int *)malloc(sizeof(int) * (inorderSize - splitIndex - 1));
  left = (int *)malloc(sizeof(int) * (splitIndex));
  right = (int *)malloc(sizeof(int) * (postorderSize - splitIndex - 1));

  for (i = 0; i < splitIndex; i++)
    leftTree[i] = inorder[i];
  for (i = splitIndex + 1; i < inorderSize; i++)
    rightTree[i - splitIndex - 1] = inorder[i];
  for (i = 0; i < splitIndex; i++)
    left[i] = postorder[i];
  for (i = splitIndex; i < postorderSize - 1; i++)
    right[i - splitIndex] = postorder[i];

  node->left = create(leftTree, splitIndex, left, splitIndex);
  node->right = create(rightTree, inorderSize - splitIndex - 1, right, postorderSize - splitIndex - 1);

  return node;
}

struct TreeNode *buildTree(int *inorder, int inorderSize, int *postorder, int postorderSize)
{
  return create(inorder, inorderSize, postorder, postorderSize);
}
// @lc code=end
