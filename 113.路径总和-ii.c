/*
 * @lc app=leetcode.cn id=113 lang=c
 *
 * [113] 路径总和 II
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

// int **result;
// int *item;
// int *length;
// int top1;
// int top2;
// int sum;

void back(struct TreeNode *root, int targetSum)
{
  if (root->left == NULL && root->right == NULL && sum == targetSum)
  {
    int *path, i;
    path = (int *)malloc(sizeof(int) * top2);
    for (i = 0; i < top2; i++)
      path[i] = item[i];
    result[top1] = path;
    length[top1++] = top2;
    return;
  }
  if (root->left != NULL)
  {
    sum += root->left->val;
    item[top2++] = root->left->val;
    back(root->left, targetSum);
    sum -= root->left->val;
    top2--;
  }
  if (root->right != NULL)
  {
    sum += root->right->val;
    item[top2++] = root->right->val;
    back(root->right, targetSum);
    sum -= root->right->val;
    top2--;
  }
}

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int **pathSum(struct TreeNode *root, int targetSum, int *returnSize, int **returnColumnSizes)
{
  // 法一：递归
  // int i;
  // result = (int **)malloc(sizeof(int *) * 1000);
  // item = (int *)malloc(sizeof(int) * 1000);
  // length = (int *)malloc(sizeof(int) * 1000);
  // top1 = top2 = 0;
  // if (root != NULL)
  // {
  //   sum = root->val;
  //   item[top2++] = root->val;
  //   back(root, targetSum);
  // }
  // *returnSize = top1;
  // *returnColumnSizes = (int *)malloc(sizeof(int) * (*returnSize));
  // for (i = 0; i < *returnSize; i++)
  //   (*returnColumnSizes)[i] = length[i];
  // return result;
}
// @lc code=end
