/*
 * @lc app=leetcode.cn id=559 lang=c
 *
 * [559] N 叉树的最大深度
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
int result;

void back(struct Node *root, int depth)
{
  result = result > depth ? result : depth;
  if (root == NULL)
    return;
  int i;
  for (i = 0; i < root->numChildren; i++)
  {
    if (root->children[i] != NULL)
    {
      depth++;
      back(root->children[i], depth);
      depth--;
    }
  }
  return;
}

int maxDepth(struct Node *root)
{
  // 法一：递归
  result = 0;
  if (root != NULL)
    back(root, 1);
  return result;
  // 法二：迭代
  // struct Node **queue, *temp;
  // int front, rear, i, j, size, depth;
  // queue = (struct Node **)malloc(sizeof(struct Node *) * 6000);
  // front = rear = size = depth = 0;
  // if (root != NULL)
  // {
  //   queue[rear++] = root;
  //   while (front != rear)
  //   {
  //     depth++;
  //     size = rear;
  //     for (i = front; i < size; i++)
  //     {
  //       temp = queue[front++];
  //       for (j = 0; j < temp->numChildren; j++)
  //         if (temp->children[j] != NULL)
  //           queue[rear++] = temp->children[j];
  //     }
  //   }
  // }
  // return depth;
}
// @lc code=end
