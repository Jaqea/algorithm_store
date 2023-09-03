/*
 * @lc app=leetcode.cn id=530 lang=c
 *
 * [530] 二叉搜索树的最小绝对差
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
// int *list;
// int top;
// struct TreeNode *pre;
// int min;

// void getMin(struct TreeNode *root)
// {
//   if (root == NULL)
//     return;
//   getMin(root->left);
//   // list[top++] = root->val;
//   if (pre != NULL)
//   {
//     min = min > root->val - pre->val ? root->val - pre->val : min;
//   }
//   pre = root;
//   getMin(root->right);
// }

int getMinimumDifference(struct TreeNode *root)
{
  // 法一：递归
  // list = (int *)malloc(sizeof(int) * 10000);
  // top = 0;
  // int min, i;
  // min = INT_MAX;
  // getMin(root);
  // for (i = 1; i < top; i++)
  // {
  //   min = min > list[i] - list[i - 1] ? list[i] - list[i - 1] : min;
  // }
  // return min;
  // ---------------------
  // min = INT_MAX;
  // pre = NULL;
  // getMin(root);
  // return min;
  // 法二：迭代
  struct TreeNode **stack, *node, *pre;
  int top, min;
  stack = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 10000);
  top = 0;
  pre = NULL;
  min = INT_MAX;
  if (root != NULL)
  {
    stack[top++] = root;
    while (top > 0)
    {
      node = stack[--top];
      if (node != NULL)
      {
        if (node->right != NULL)
          stack[top++] = node->right;
        stack[top++] = node;
        stack[top++] = NULL;
        if (node->left != NULL)
          stack[top++] = node->left;
      }
      else
      {
        node = stack[--top];
        if (pre != NULL)
          min = min > node->val - pre->val ? node->val - pre->val : min;
        pre = node;
      }
    }
  }
  return min;
}
// @lc code=end
