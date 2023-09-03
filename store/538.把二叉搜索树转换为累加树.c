/*
 * @lc app=leetcode.cn id=538 lang=c
 *
 * [538] 把二叉搜索树转换为累加树
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
// int total;
// struct TreeNode *convert(struct TreeNode *root)
// {
//   if (root == NULL)
//     return root;
//   convert(root->right);
//   root->val += total;
//   total = root->val;
//   convert(root->left);
//   return root;
// }

struct TreeNode *convertBST(struct TreeNode *root)
{
  // 法一：递归
  // total = 0;
  // return convert(root);
  // 法二：迭代
  struct TreeNode **stack, *node;
  int top, total;
  top = total = 0;
  stack = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 1000);
  if (root != NULL)
  {
    stack[top++] = root;
    while (top > 0)
    {
      node = stack[--top];
      if (node != NULL)
      {
        if (node->left != NULL)
          stack[top++] = node->left;
        stack[top++] = node;
        stack[top++] = NULL;
        if (node->right != NULL)
          stack[top++] = node->right;
      }
      else
      {
        node = stack[--top];
        node->val += total;
        total = node->val;
      }
    }
  }
  return root;
}
// @lc code=end
