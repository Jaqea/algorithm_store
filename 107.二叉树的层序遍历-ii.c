/*
 * @lc app=leetcode.cn id=107 lang=c
 *
 * [107] 二叉树的层序遍历 II
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

int **result;
int *item;
int *length;
int top1;
int top2;

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int **levelOrderBottom(struct TreeNode *root, int *returnSize, int **returnColumnSizes)
{
  int i, front, rear, **resStrack, *lengthStack, top3;
  struct TreeNode **queue, *temp;
  queue = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 2000);
  result = (int **)malloc(sizeof(int *) * 2000);
  resStrack = (int **)malloc(sizeof(int *) * 2000);
  lengthStack = (int *)malloc(sizeof(int) * 2000);
  item = (int *)malloc(sizeof(int) * 500);
  length = (int *)malloc(sizeof(int) * 2000);
  top1 = top2 = top3 = 0;
  front = rear = 0;
  if (root != NULL)
  {
    queue[rear++] = root;
    while (front != rear)
    {
      int size = rear;
      for (i = front; i < size; i++)
      {
        temp = queue[front++];
        item[top2++] = temp->val;
        if (temp->left != NULL)
          queue[rear++] = temp->left;
        if (temp->right != NULL)
          queue[rear++] = temp->right;
      }
      int *path = (int *)malloc(sizeof(int) * top2);
      for (i = 0; i < top2; i++)
        path[i] = item[i];
      resStrack[top3] = path;
      lengthStack[top3++] = top2;
      top2 = 0;
    }

    while (top3 > 0)
    {
      result[top1] = resStrack[--top3];
      length[top1++] = lengthStack[top3];
    }
  }

  // reverse(result, 0, top1 - 1);
  *returnSize = top1;
  *returnColumnSizes = (int *)malloc(sizeof(int) * (*returnSize));
  for (i = 0; i < *returnSize; i++)
    (*returnColumnSizes)[i] = length[i];
  return result;
}
// @lc code=end
