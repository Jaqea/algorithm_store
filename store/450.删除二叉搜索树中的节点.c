/*
 * @lc app=leetcode.cn id=450 lang=c
 *
 * [450] 删除二叉搜索树中的节点
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

struct TreeNode *delete(struct TreeNode *root, int key)
{
  // 法1
  // if (root == NULL)
  //   return root;
  // if (root->val == key)
  // {
  //   if (root->left == NULL)
  //   {
  //     struct TreeNode *node = root->right;
  //     free(root);
  //     return node;
  //   }

  //   else if (root->right == NULL)
  //   {
  //     struct TreeNode *node = root->left;
  //     free(root);
  //     return node;
  //   }
  //   else
  //   {
  //     struct TreeNode *node = root->right;
  //     while (node->left != NULL)
  //       node = node->left;
  //     node->left = root->left;
  //     node = root->right;
  //     free(root);
  //     return node;
  //   }
  // }
  // if (root->val > key)
  //   root->left = delete (root->left, key);
  // if (root->val < key)
  //   root->right = delete (root->right, key);
  // return root;
  // 法2
  if (root == NULL)
    return root;
  if (root->val == key)
  {
    if (root->right == NULL)
    {
      struct TreeNode *node = root->left;
      free(root);
      return node;
    }
    else
    {
      struct TreeNode *node = root->right;
      while (node->left != NULL)
        node = node->left;
      root->val = node->val;
      node->val = key;
    }
  }
  root->left = delete (root->left, key);
  root->right = delete (root->right, key);
  return root;
}

struct TreeNode *deleteNode(struct TreeNode *root, int key)
{
  // 法一：递归
  // return delete (root, key);
  // 法二：迭代
  // struct TreeNode *node, *pre;
  // if (root != NULL)
  // {
  //   node = root;
  //   while (node != NULL)
  //   {
  //     if (node->val == key)
  //       break;
  //     pre = node;
  //     if (node->val > key)
  //       node = node->left;
  //     else
  //       node = node->right;
  //   }
  //   if (node->right == NULL)
  //   {
  //     if (node->left != NULL && pre->val > node->left->val)
  //       pre->left = node->left;
  //     else
  //       pre->right = node->left;
  //     free(node);
  //   }
  //   if (node->left == NULL)
  //   {
  //   }
  // }
  // return root;
}
// @lc code=end
