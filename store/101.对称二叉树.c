/*
 * @lc app=leetcode.cn id=101 lang=c
 *
 * [101] 对称二叉树
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
bool sym(struct TreeNode *left, struct TreeNode *right)
{
  // 未化简
  if (left == NULL && right != NULL)
    return false;
  else if (left != NULL && right == NULL)
    return false;
  else if (left == NULL && right == NULL)
    return true;
  else if (left->val != right->val)
    return false;
  bool in = sym(left->right, right->left);
  bool out = sym(left->left, right->right);
  return in && out;
}

bool isSymmetric(struct TreeNode *root)
{
  // 难点：不是比较节点大小，是比较子树
  // 法一：递归
  // if (root == NULL)
  //   return true;
  // return sym(root->left, root->right);

  // 法二：队列迭代
  // struct TreeNode **queue, *left, *right;
  // int front, rear;
  // queue = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 1000);
  // front = rear = 0;
  // if (root != NULL)
  // {
  //   queue[rear++] = root->left;
  //   queue[rear++] = root->right;
  //   while (front != rear)
  //   {
  //     left = queue[front++];
  //     right = queue[front++];
  //     // 指针后需要对其进行判空
  //     if (left == NULL && right == NULL)
  //       continue;

  //     if ((left == NULL && right != NULL) || (left != NULL && right == NULL) || (left->val != right->val))
  //       return false;

  //     queue[rear++] = left->right;
  //     queue[rear++] = right->left;
  //     queue[rear++] = left->left;
  //     queue[rear++] = right->right;
  //   }
  // }
  // return true;

  // 法三：栈迭代
  struct TreeNode **stack, *left, *right;
  int top;
  stack = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 1000);
  top = 0;
  if (root != NULL)
  {
    stack[top++] = root->left;
    stack[top++] = root->right;
    while (top > 0)
    {
      left = stack[--top];
      right = stack[--top];
      if (left == NULL && right == NULL)
        continue;
      if (left == NULL || right == NULL || (left->val != right->val))
        return false;
      stack[top++] = left->right;
      stack[top++] = right->left;
      stack[top++] = left->left;
      stack[top++] = right->right;
    }
  }
  return true;
}
// @lc code=end
