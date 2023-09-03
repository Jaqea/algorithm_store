/*
 * @lc app=leetcode.cn id=226 lang=c
 *
 * [226] 翻转二叉树
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

void reverse(struct TreeNode *root)
{
  // 法一：前序遍历，递归
  // if (root == NULL)
  //   return;

  // struct TreeNode *temp;
  // temp = root->left;
  // root->left = root->right;
  // root->right = temp;

  // if (root->left != NULL)
  //   reverse(root->left);
  // if (root->right != NULL)
  //   reverse(root->right);

  // 法二：前序遍历，迭代
  // if (root == NULL)
  //   return;
  // int top;
  // struct TreeNode **stack;
  // stack = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 100);
  // top = -1;
  // stack[++top] = root;
  // while (top > -1)
  // {
  //   struct TreeNode *temp, *head;
  //   head = stack[top--];
  //   temp = head->left;
  //   head->left = head->right;
  //   head->right = temp;
  //   if (head->right)
  //     stack[++top] = head->right;
  //   if (head->left)
  //     stack[++top] = head->left;
  // }

  // 法三：前序遍历，通用法
  // if (root == NULL)
  //   return;
  // int top;
  // struct TreeNode **stack;
  // stack = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 100);
  // top = -1;
  // stack[++top] = root;
  // while (top > -1)
  // {
  //   struct TreeNode *node = stack[top--];
  //   if (node != NULL)
  //   {
  //     if (node->right)
  //       stack[++top] = node->right;
  //     if (node->left)
  //       stack[++top] = node->left;
  //     stack[++top] = node;
  //     stack[++top] = NULL;
  //   }
  //   else
  //   {
  //     struct TreeNode *temp;
  //     node = stack[top--];
  //     temp = node->left;
  //     node->left = node->right;
  //     node->right = temp;
  //   }
  // }
}

struct TreeNode *invertTree(struct TreeNode *root)
{
  reverse(root);
  return root;
}
// @lc code=end
