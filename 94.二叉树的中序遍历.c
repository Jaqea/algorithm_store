/*
 * @lc app=leetcode.cn id=94 lang=c
 *
 * [94] 二叉树的中序遍历
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
// 递归
void traverse(struct TreeNode *node, int *nodes, int *len)
{
  if (node == NULL)
    return;
  traverse(node->left, nodes, len);
  nodes[(*len)++] = node->val;
  traverse(node->right, nodes, len);
}
// 迭代

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *inorderTraversal(struct TreeNode *root, int *returnSize)
{
  // 递归
  int *nodes, len = 0;
  nodes = (int *)malloc(sizeof(int) * 100);
  traverse(root, nodes, &len);
  *returnSize = len;
  return nodes;
  // 迭代
  // struct TreeNode **nodes, *node;
  // int *result, top1, top2;
  // nodes = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 100);
  // result = (int *)malloc(sizeof(int) * 100);
  // top1 = top2 = -1;
  // if (root)
  // {
  //   // node = root;
  //   // while (node || top2 > -1)
  //   // {
  //   //   if (node)
  //   //   {
  //   //     nodes[++top2] = node;
  //   //     node = node->left;
  //   //   }
  //   //   else
  //   //   {
  //   //     node = nodes[top2--];
  //   //     result[++top1] = node->val;
  //   //     // if (node->right)
  //   //     node = node->right;
  //   //   }
  //   // }
  //   nodes[++top2] = root;
  //   node = root;
  //   while (top2 > -1)
  //   {
  //     while (node && node->left)
  //     {
  //       node = node->left;
  //       nodes[++top2] = node;
  //     }
  //     node = nodes[top2--];
  //     result[++top1] = node->val;
  //     node = node->right; // 很关键！若是存在右孩子的时候赋值，则会导致上一步循环又再次遍历已经遍历过的左孩子
  //     if (node)
  //       nodes[++top2] = node;
  //   }
  // }
  // *returnSize = top1 + 1;
  // return result;
  // 通用
  // struct TreeNode **nodes, *node;
  // int *result, top1, top2;
  // nodes = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 100);
  // result = (int *)malloc(sizeof(int) * 100);
  // top1 = top2 = -1;
  // if (root)
  // {
  //   nodes[++top2] = root;
  //   while (top2 > -1)
  //   {
  //     node = nodes[top2--];
  //     if (node)
  //     {
  //       if (node->right)
  //         nodes[++top2] = node->right;
  //       nodes[++top2] = node;
  //       nodes[++top2] = NULL;
  //       if (node->left)
  //         nodes[++top2] = node->left;
  //     }
  //     else
  //     {
  //       node = nodes[top2--];
  //       result[++top1] = node->val;
  //     }
  //   }
  // }
  // *returnSize = top1 + 1;
  // return result;
}
// @lc code=end
