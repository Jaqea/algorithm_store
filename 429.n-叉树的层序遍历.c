/*
 * @lc app=leetcode.cn id=429 lang=c
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     int numChildren;
 *     struct Node** children;
 * };
 */

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int **levelOrder(struct Node *root, int *returnSize, int **returnColumnSizes)
{
  int **result, *item, top1, top2, *length, i, j, front, rear, size;
  struct Node **queue, *temp;
  result = (int **)malloc(sizeof(int *) * 10000);
  item = (int *)malloc(sizeof(int) * 4000);
  length = (int *)malloc(sizeof(int) * 10000);
  queue = (struct Node **)malloc(sizeof(struct Node *) * 10000);
  front = rear = top1 = 0;
  if (root != NULL)
  {
    queue[rear++] = root;
    while (front != rear)
    {
      size = rear;
      top2 = 0;
      for (i = front; i < size; i++)
      {
        temp = queue[front++];
        item[top2++] = temp->val;
        if (temp->numChildren > 0)
        {
          for (j = 0; j < temp->numChildren; j++)
            queue[rear++] = (temp->children)[j];
        }
      }
      int *path = (int *)malloc(sizeof(int) * top2);
      for (i = 0; i < top2; i++)
        path[i] = item[i];
      result[top1] = path;
      length[top1++] = top2;
    }
  }
  *returnSize = top1;
  *returnColumnSizes = (int *)malloc(sizeof(int) * (*returnSize));
  for (i = 0; i < *returnSize; i++)
    (*returnColumnSizes)[i] = length[i];
  return result;
}
// @lc code=end
