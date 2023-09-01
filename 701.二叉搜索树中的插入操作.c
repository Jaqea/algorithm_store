/*
 * @lc app=leetcode.cn id=701 lang=c
 *
 * [701] 二叉搜索树中的插入操作
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
// struct TreeNode *pre;q
void insert(struct TreeNode *root, int val)
{
  // 法1
  // if (root == NULL)
  // {
  //   struct TreeNode *node = (struct TreeNode *)malloc(sizeof(struct TreeNode));
  //   node->val = val;
  //   node->left = NULL;
  //   node->right = NULL;
  //   return node;
  // }

  // if (root->val > val)
  //   root->left = insert(root->left, val);

  // if (root->val < val)
  //   root->right = insert(root->right, val);

  // return root;
  // 法2：
  // if (root == NULL)
  // {
  //   struct TreeNode *node = (struct TreeNode *)malloc(sizeof(struct TreeNode));
  //   node->val = val;
  //   node->left = NULL;
  //   node->right = NULL;
  //   if (pre->val > val)
  //     pre->left = node;
  //   else
  //     pre->right = node;
  //   return;
  // }
  // pre = root;
  // if (root->val > val)
  //   insert(root->left, val);
  // if (root->val < val)
  //   insert(root->right, val);
  // return;
}

struct TreeNode *insertIntoBST(struct TreeNode *root, int val)
{
  // 法一：递归
  // pre = NULL;
  // if (root != NULL)
  //   insert(root, val);
  // else
  // {
  //   root = (struct TreeNode *)malloc(sizeof(struct TreeNode));
  //   root->val = val;
  //   root->left = NULL;
  //   root->right = NULL;
  // }
  // return root;
  // 法二：迭代
  struct TreeNode *node, *pre;
  if (root != NULL)
  {
    node = root;
    while (node != NULL)
    {
      pre = node;
      if (node != NULL && node->val > val)
        node = node->left;
      else
        node = node->right;
    }
    struct TreeNode *newNode = (struct TreeNode *)malloc(sizeof(struct TreeNode));
    newNode->val = val;
    newNode->left = NULL;
    newNode->right = NULL;
    if (pre->val > val)
      pre->left = newNode;
    else
      pre->right = newNode;
  }
  else
  {
    root = (struct TreeNode *)malloc(sizeof(struct TreeNode));
    root->val = val;
    root->left = NULL;
    root->right = NULL;
  }
  return root;
}
// @lc code=end
