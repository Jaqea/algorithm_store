/*
 * @lc app=leetcode.cn id=404 lang=c
 *
 * [404] 左叶子之和
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
int num;

void back(struct TreeNode *root, int i)
{
  if (i == 0 && root->left == NULL && root->right == NULL)
  {
    num += root->val;
    return;
  }
  if (root->left != NULL)
    back(root->left, 0);
  if (root->right != NULL)
    back(root->right, 1);
}

int sumOfLeftLeaves(struct TreeNode *root)
{
  // 法一：递归
  // num = 0;
  // if (root != NULL)
  //   back(root, 1);
  // return num;
  // if (root == NULL)
  //   return 0;
  // if (root->left == NULL && root->right == NULL)
  //   return 0;
  // int leftVal = sumOfLeftLeaves(root->left); // 左孩子的左子节点
  // if (root->left != NULL && root->left->left == NULL && root->left->right == NULL)
  //   leftVal = root->left->val; // 左孩子为叶子节点
  // int rightVal = sumOfLeftLeaves(root->right);
  // return leftVal + rightVal;
  // 法二：迭代
  struct TreeNode **stack, *temp;
  int top;
  stack = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 100);
  num = top = 0;
  if (root != NULL)
  {
    stack[top++] = root;
    while (top > 0)
    {
      temp = stack[--top];
      if (temp->left != NULL && temp->left->left == NULL && temp->left->right == NULL)
        num += temp->left->val;
      if (temp->left != NULL)
        stack[top++] = temp->left;
      if (temp->right != NULL)
        stack[top++] = temp->right;
    }
  }
  return num;
}
// @lc code=end
