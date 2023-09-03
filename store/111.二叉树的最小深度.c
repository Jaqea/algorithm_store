/*
 * @lc app=leetcode.cn id=111 lang=c
 *
 * [111] 二叉树的最小深度
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
int result;
int back(struct TreeNode *root)
{
  // 前序
  // if (root->left == NULL && root->right == NULL)
  // {
  //   result = result > depth ? depth : result;
  //   return;
  // }

  // if (root->left != NULL)
  // {
  //   depth++;
  //   back(root->left, depth);
  //   depth--;
  // }
  // if (root->right != NULL)
  // {
  //   depth++;
  //   back(root->right, depth);
  //   depth--;
  // }
  if (root == NULL)
    return 0;
  int leftHeight = back(root->left);
  int rightHeight = back(root->right);
  if (root->left != NULL && root->right == NULL)
    return leftHeight + 1;
  if (root->right != NULL && root->left == NULL)
    return rightHeight + 1;
  return 1 + (leftHeight > rightHeight ? rightHeight : leftHeight);
}

int minDepth(struct TreeNode *root)
{
  // 法一：迭代
  // struct TreeNode **queue, *temp;
  // int front, rear, size, i, height;
  // queue = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 10000);
  // front = rear = height = 0;

  // if (root != NULL)
  // {
  //   queue[rear++] = root;
  //   while (front != rear)
  //   {
  //     size = rear;
  //     height++;
  //     for (i = front; i < size; i++)
  //     {
  //       temp = queue[front++];
  //       if (temp->left != NULL)
  //         queue[rear++] = temp->left;
  //       if (temp->right != NULL)
  //         queue[rear++] = temp->right;
  //       if (temp->left == NULL && temp->right == NULL)
  //         return;
  //     }
  //   }
  // }

  // return height;
  // 法二：递归
  // result = INT_MAX;
  // if (root != NULL)
  //   back(root, 1);
  // else
  //   result = 0;
  // return result;
  return back(root);
}
// @lc code=end
