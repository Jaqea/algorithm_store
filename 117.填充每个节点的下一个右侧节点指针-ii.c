/*
 * @lc app=leetcode.cn id=117 lang=c
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     struct Node *left;
 *     struct Node *right;
 *     struct Node *next;
 * };
 */

struct Node *connect(struct Node *root)
{
  int front, rear, i, size;
  struct Node **queue, *temp;
  queue = (struct Node **)malloc(sizeof(struct Node *) * 6000);
  front = rear = 0;
  if (root != NULL)
  {
    queue[rear++] = root;
    while (front != rear)
    {
      size = rear;
      for (i = front; i < size; i++)
      {
        temp = queue[front++];
        if (i + 1 < size)
          temp->next = queue[front];
        else
          temp->next = NULL;
        if (temp->left != NULL)
          queue[rear++] = temp->left;
        if (temp->right != NULL)
          queue[rear++] = temp->right;
      }
    }
  }
  return root;
}
// @lc code=end
