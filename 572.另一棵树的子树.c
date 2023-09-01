/*
 * @lc app=leetcode.cn id=572 lang=c
 *
 * [572] 另一棵树的子树
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

bool isSame(struct TreeNode *p, struct TreeNode *q)
{
  // 递归只需判断不满足的条件，满足的条件直接递归就行，因为不满足会跳出来
  if (p == NULL && q != NULL)
    return false;
  else if (p != NULL && q == NULL)
    return false;
  else if (p == NULL && q == NULL)
    return true;
  else if (p->val != q->val)
    return false;

  return isSame(p->left, q->left) && isSame(p->right, q->right);
}

bool isSubtree(struct TreeNode *root, struct TreeNode *subRoot)
{
  struct TreeNode **queue, *temp;
  int front, rear;
  queue = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 2000);
  front = rear = 0;
  if (root == NULL && subRoot == NULL)
    return true;
  else if (root == NULL && subRoot != NULL)
    return false;

  if (root != NULL)
  {
    queue[rear++] = root;
    while (front != rear)
    {
      temp = queue[front++];
      if (isSame(temp, subRoot))
        return true;
      if (temp == NULL)
        continue;
      queue[rear++] = temp->left;
      queue[rear++] = temp->right;
    }
  }
  return false;
}
// @lc code=end
