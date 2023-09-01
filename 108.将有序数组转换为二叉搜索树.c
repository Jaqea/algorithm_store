/*
 * @lc app=leetcode.cn id=108 lang=c
 *
 * [108] 将有序数组转换为二叉搜索树
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

struct TreeNode *atoBST(int *nums, int low, int high)
{
  if (low > high)
    return NULL;
  // int mid = (low + high) / 2;
  int mid = low + (high - low) / 2;
  struct TreeNode *node = (struct TreeNode *)malloc(sizeof(struct TreeNode));
  node->val = nums[mid];
  node->left = atoBST(nums, low, mid - 1);
  node->right = atoBST(nums, mid + 1, high);
  return node;
}

struct TreeNode *sortedArrayToBST(int *nums, int numsSize)
{
  // 法一：递归
  // return atoBST(nums, 0, numsSize - 1);
  // 法二：迭代
  struct TreeNode **stack, *node, *root, *temp;
  int top1, top2, top3, low, high, mid, *left, *right;
  stack = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 1000);
  left = (int *)malloc(sizeof(int) * 1000);
  right = (int *)malloc(sizeof(int) * 1000);
  top1 = top2 = top3 = 0;
  root = (struct TreeNode *)malloc(sizeof(struct TreeNode));
  root->left = NULL;
  root->right = NULL;
  stack[top1++] = root;
  left[top2++] = 0;
  right[top3++] = numsSize - 1;
  while (top1 > 0)
  {
    node = stack[--top1];
    low = left[--top2];
    high = right[--top3];
    mid = (low + high) / 2;
    node->val = nums[mid];
    if (low <= mid - 1)
    {
      temp = (struct TreeNode *)malloc(sizeof(struct TreeNode));
      temp->val = nums[mid];
      temp->left = NULL;
      temp->right = NULL;
      node->left = temp;
      stack[top1++] = node->left;
      left[top2++] = low;
      right[top3++] = mid - 1;
    }
    if (high >= mid + 1)
    {
      temp = (struct TreeNode *)malloc(sizeof(struct TreeNode));
      temp->val = nums[mid];
      temp->left = NULL;
      temp->right = NULL;
      node->right = temp;
      stack[top1++] = node->right;
      left[top2++] = mid + 1;
      right[top3++] = high;
    }
  }
  return root;
}
// @lc code=end
