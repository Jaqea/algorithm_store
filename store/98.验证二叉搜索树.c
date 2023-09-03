/*
 * @lc app=leetcode.cn id=98 lang=c
 *
 * [98] 验证二叉搜索树
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
// bool isBST;
// struct TreeNode *last;

// void isVaild(struct TreeNode *root)
// {
//   if (root == NULL)
//     return;

//   if (root->left != NULL)
//     isVaild(root->left);

//   if (last != NULL && root->val <= last->val)
//   {
//     isBST = false;
//     return;
//   }
//   last = root;

//   if (root->right != NULL)
//     isVaild(root->right);
// }

bool isValidBST(struct TreeNode *root)
{
  // 法一：递归
  // isBST = true;
  // if (root != NULL)
  // {
  //   last = NULL;
  //   isVaild(root);
  // }
  // return isBST;
  // 法二：迭代
  struct TreeNode **stack, *node, *last;
  bool isBST;
  int top;
  top = 0;
  isBST = true;
  stack = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 10000);
  last = NULL;
  if (root != NULL)
  {
    stack[top++] = root;
    while (top > 0)
    {
      node = stack[--top];
      if (node != NULL)
      {
        if (node->right)
          stack[top++] = node->right;
        stack[top++] = node;
        stack[top++] = NULL;
        if (node->left)
          stack[top++] = node->left;
      }
      else
      {
        node = stack[--top];
        if (last != NULL && last->val >= node->val)
          isBST = false;
        last = node;
      }
    }
  }
  return isBST;
}
// @lc code=end
