/*
 * @lc app=leetcode.cn id=102 lang=c
 *
 * [102] 二叉树的层序遍历
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
int top1;

void levelTrack(struct TreeNode *root, int depth, int length[])
{
  if (root == NULL)
    return;

  if (top1 == depth)
  {
    int *path = (int *)malloc(sizeof(int) * 500);
    result[top1++] = path;
  }
  result[depth][length[depth]++] = root->val;

  if (root->left != NULL)
    levelTrack(root->left, depth + 1, length);
  if (root->right != NULL)
    levelTrack(root->right, depth + 1, length);
}

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int **levelOrder(struct TreeNode *root, int *returnSize, int **returnColumnSizes)
{
  // 法一：队列
  // int front, rear, i, **result, *item, *length, top1, top2;
  // struct TreeNode **queue, *temp;
  // result = (int **)malloc(sizeof(int *) * 2000);
  // length = (int *)malloc(sizeof(int) * 2000);
  // item = (int *)malloc(sizeof(int) * 1000);
  // queue = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 2000);
  // front = rear = top1 = top2 = 0;
  // if (root != NULL)
  //   queue[rear++] = root;
  // while (front != rear)
  // {
  //   int size = rear;
  //   for (i = front; i < size; i++)
  //   {
  //     temp = queue[front++];
  //     item[top2++] = temp->val;
  //     if (temp->left != NULL)
  //       queue[rear++] = temp->left;
  //     if (temp->right != NULL)
  //       queue[rear++] = temp->right;
  //   }
  //   int *path = (int *)malloc(sizeof(int) * top2);
  //   for (i = 0; i < top2; i++)
  //     path[i] = item[i];
  //   result[top1] = path;
  //   length[top1++] = top2;
  //   top2 = 0;
  // }
  // *returnSize = top1;
  // *returnColumnSizes = (int *)malloc(sizeof(int) * (*returnSize));
  // for (i = 0; i < *returnSize; i++)
  //   (*returnColumnSizes)[i] = length[i];
  // return result;
  // 法二：递归

  // 法二：递归
  int i;
  int length[2000] = {0};
  result = (int **)malloc(sizeof(int *) * 2000);
  top1 = 0;
  levelTrack(root, 0, length);
  *returnSize = top1;
  *returnColumnSizes = (int *)malloc(sizeof(int) * (*returnSize));
  for (i = 0; i < *returnSize; i++)
    (*returnColumnSizes)[i] = length[i];
  return result;
}
// @lc code=end
