/*
 * @lc app=leetcode.cn id=501 lang=c
 *
 * [501] 二叉搜索树中的众数
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

struct TreeNode *pre;
int *res;
int top;
int max;
int count;

void find(struct TreeNode *root)
{
  if (root == NULL)
    return;
  find(root->left);
  if (pre == NULL)
    pre = root;
  if (pre != NULL && pre->val == root->val)
    count++;
  else
    count = 1;
  pre = root;
  if (max == count)
  {
    res[top++] = root->val;
  }
  if (max < count)
  {
    max = count;
    while (top > 0)
      top--;
    res[top++] = root->val;
  }
  find(root->right);
}

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *findMode(struct TreeNode *root, int *returnSize)
{
  // 法一：递归
  // res = (int *)malloc(sizeof(int) * 5000);
  // top = max = count = 0;
  // pre = NULL;
  // find(root);
  // *returnSize = top;
  // return res;
  // 法二：迭代
  struct TreeNode **stack, *node;
  int tops;
  stack = (int **)malloc(sizeof(int *) * 5000);
  res = (int *)malloc(sizeof(int) * 5000);
  top = tops = max = count = 0;
  pre = NULL;
  if (root != NULL)
  {
    stack[tops++] = root;
    while (tops > 0)
    {
      node = stack[--tops];
      if (node != NULL)
      {
        if (node->right)
          stack[tops++] = node->right;
        stack[tops++] = node;
        stack[tops++] = NULL;
        if (node->left)
          stack[tops++] = node->left;
      }
      else
      {
        node = stack[--tops];
        if (pre == NULL)
          pre = node;
        if (pre != NULL && pre->val == node->val)
          count++;
        else
          count = 1;
        pre = node;
        if (max == count)
          res[top++] = node->val;
        if (count > max)
        {
          max = count;
          while (top > 0)
            top--;
          res[top++] = node->val;
        }
      }
    }
  }
  *returnSize = top;
  return res;
}
// @lc code=end
