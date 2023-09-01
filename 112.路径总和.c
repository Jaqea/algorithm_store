/*
 * @lc app=leetcode.cn id=112 lang=c
 *
 * [112] 路径总和
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
int sum;
bool res;
void back(struct TreeNode *root, int targetSum)
{
  if (root->left == NULL && root->right == NULL && sum == targetSum)
    res = true;

  if (root->left != NULL)
  {
    sum += root->left->val;
    back(root->left, targetSum);
    sum -= root->left->val;
  }
  if (root->right != NULL)
  {
    sum += root->right->val;
    back(root->right, targetSum);
    sum -= root->right->val;
  }
}

bool hasPathSum(struct TreeNode *root, int targetSum)
{
  // 法一：递归
  // res = false;
  // if (root != NULL)
  // {
  //   sum = root->val;
  //   back(root, targetSum);
  // }
  // return res;
  // 法二：迭代
  struct TreeNode **stack1, *temp;
  int top1, top2, sum, *stack2;
  bool res = false;
  stack1 = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 100);
  stack2 = (int *)malloc(sizeof(int) * 100);
  top1 = top2 = sum = 0;
  if (root != NULL)
  {
    stack1[top1++] = root;
    stack2[top2++] = root->val;
    while (top1 > 0)
    {
      temp = stack1[--top1];
      sum = stack2[--top2];
      if (temp->left == NULL && temp->right == NULL && sum == targetSum)
      {
        res = true;
        return;
      }
      if (temp->left != NULL)
      {
        stack1[top1++] = temp->left;
        stack2[top2++] = sum + temp->left->val;
      }
      if (temp->right != NULL)
      {
        stack1[top1++] = temp->right;
        stack2[top2++] = sum + temp->right->val;
      }
    }
  }
  return res;
}
// @lc code=end
