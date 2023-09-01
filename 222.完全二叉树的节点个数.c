/*
 * @lc app=leetcode.cn id=222 lang=c
 *
 * [222] 完全二叉树的节点个数
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

int back(struct TreeNode *root)
{
  if (root == NULL)
    return 0;
  return back(root->left) + back(root->right) + 1;
}

int countNodes(struct TreeNode *root)
{
  // 法一：递归
  // return back(root);
  // 法二：迭代
  // struct TreeNode **queue, *temp;
  // int front, rear, i, num, size;
  // queue = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 40000);
  // front = rear = num = 0;
  // if (root != NULL)
  // {
  //   queue[rear++] = root;
  //   while (front != rear)
  //   {
  //     size = rear;
  //     for (i = front; i < size; i++)
  //     {
  //       temp = queue[front++];
  //       num++;
  //       if (temp->left != NULL)
  //         queue[rear++] = temp->left;
  //       if (temp->right != NULL)
  //         queue[rear++] = temp->right;
  //     }
  //   }
  // }
  // return num;
  // 法三：完全二叉树性质
  if (root == NULL)
    return 0;
  struct TreeNode *left, *right;
  int leftHeight, rightHeight;
  left = root->left;
  right = root->right;
  leftHeight = rightHeight = 0;
  while (left != NULL)
  {
    leftHeight++;
    left = left->left;
  }
  while (right != NULL)
  {
    rightHeight++;
    right = right->right;
  }
  if (leftHeight == rightHeight)
    return pow(2, leftHeight + 1) - 1;
  return 1 + countNodes(root->left) + countNodes(root->right);
}
// @lc code=end
