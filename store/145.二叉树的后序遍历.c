/*
 * @lc app=leetcode.cn id=145 lang=c
 *
 * [145] 二叉树的后序遍历
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
  traverse(node->right, nodes, len);
  nodes[(*len)++] = node->val;
}

void reverse(int *arr, int start, int end)
{
  int i, j, temp;
  i = start;
  j = end;
  while (i < j)
  {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *postorderTraversal(struct TreeNode *root, int *returnSize)
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
  //     if (node->left)
  //       nodes[++top2] = node->left;
  //     if (node->right)
  //       nodes[++top2] = node->right;
  //   }
  // }
  // reverse(result, 0, top1);
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
  //       nodes[++top2] = node;
  //       nodes[++top2] = NULL;
  //       if (node->right)
  //         nodes[++top2] = node->right;
  //       if (node->left)
  //         nodes[++top2] = node->left;
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
