/*
 * @lc app=leetcode.cn id=144 lang=c
 *
 * [144] 二叉树的前序遍历
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

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
// 递归
void traverse(struct TreeNode *node, int *nodes, int *len)
{
  if (node == NULL)
    return;
  nodes[(*len)++] = node->val;
  traverse(node->left, nodes, len);
  traverse(node->right, nodes, len);
}

int *preorderTraversal(struct TreeNode *root, int *returnSize)
{
  // 递归
  int *nodes, len = 0;
  nodes = (int *)malloc(sizeof(int) * 100);
  traverse(root, nodes, &len);
  *returnSize = len;
  return nodes;

  // 迭代
  // int *result, top1, top2;
  // struct TreeNode **nodes, *node;
  // nodes = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 100);
  // result = (int *)malloc(sizeof(int) * 100);
  // top1 = top2 = -1;
  // if (root)
  // {
  //   nodes[++top2] = root;
  //   while (top2 > -1)
  //   {
  //     node = nodes[top2--];
  //     result[++top1] = node->val;
  //     if (node->right)
  //       nodes[++top2] = node->right;
  //     if (node->left)
  //       nodes[++top2] = node->left;
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
  //     node = nodes[top2];
  //     if (node)
  //     {
  //       nodes[top2--];
  //       if (node->right)
  //         nodes[++top2] = node->right;
  //       if (node->left)
  //         nodes[++top2] = node->left;
  //       nodes[++top2] = node;
  //       nodes[++top2] = NULL;
  //     }
  //     else
  //     {
  //       nodes[top2--];
  //       node = nodes[top2--];
  //       result[++top1] = node->val;
  //     }
  //   }
  // }
  // *returnSize = top1 + 1;
  // return result;
}
// @lc code=end
