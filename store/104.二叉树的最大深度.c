/*
 * @lc app=leetcode.cn id=104 lang=c
 *
 * [104] 二叉树的最大深度
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
void back(struct TreeNode *node, int depth)
{
  // 1.前序
  // if (node == NULL)
  //   return depth;
  // int leftHeight = back(node->left, depth + 1);
  // int rightHeight = back(node->right, depth + 1);
  // return leftHeight > rightHeight ? leftHeight : rightHeight;
  result = result > depth ? result : depth;
  if (node->left == NULL && node->right == NULL)
    return;
  if (node->left != NULL)
  {
    depth++;
    back(node->left, depth);
    depth--;
  }
  if (node->right != NULL)
  {
    depth++;
    back(node->right, depth);
    depth--;
  }
  return;
  // 2.后序
  // if (node == NULL)
  //   return 0;
  // int leftHeight = back(node->left);
  // int rightHeight = back(node->right);
  // int depth = 1 + (leftHeight > rightHeight ? leftHeight : rightHeight);
  // return depth;
}

int maxDepth(struct TreeNode *root)
{
  // 法一：层次遍历
  // struct TreeNode **queue, *temp;
  // int front, rear, size, i, height;
  // queue = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 6000);
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
  //     }
  //   }
  // }
  // return height;
  // 法二：递归
  // return back(root, 0);
  // return back(root);
  result = 0;
  if (root != NULL)
    back(root, 1);
  return result;
}
// @lc code=end
