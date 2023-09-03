/*
 * @lc app=leetcode.cn id=257 lang=c
 *
 * [257] 二叉树的所有路径
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

char **result;
// int *item;
int top1;
int top2;
// void back(struct TreeNode *root)
// {
//   item[top2++] = root->val;
//   if (root->left == NULL && root->right == NULL)
//   {
//     int i, j, k = 0;
//     char *path = (char *)malloc(sizeof(char) * (100));
//     for (i = 0; i < top2 - 1; i++)
//     {
//       char str[100];
//       sprintf(str, "%d", item[i]);
//       for (j = 0; j < strlen(str); j++)
//         path[k++] = str[j];
//       path[k++] = '-';
//       path[k++] = '>';
//     }
//     char str[100];
//     sprintf(str, "%d", item[i]);
//     for (j = 0; j < strlen(str); j++)
//       path[k++] = str[j];
//     path[k] = '\0';
//     result[top1++] = path;
//     return;
//   }
//   if (root->left != NULL)
//   {
//     back(root->left);
//     top2--;
//   }
//   if (root->right != NULL)
//   {
//     back(root->right);
//     top2--;
//   }
// }

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char **binaryTreePaths(struct TreeNode *root, int *returnSize)
{
  // 法一：递归
  // result = (char **)malloc(sizeof(char *) * 100);
  // item = (int *)malloc(sizeof(int) * 100);
  // top1 = top2 = 0;
  // back(root);
  // *returnSize = top1;
  // return result;
  // 法二：迭代
  int top, i;
  char **item;
  struct TreeNode **stack, *temp;
  stack = (struct TreeNode **)malloc(sizeof(struct TreeNode *) * 100);
  result = (char **)malloc(sizeof(char *) * 100);
  item = (char **)malloc(sizeof(char *) * 100);
  top = top1 = top2 = 0;
  if (root != NULL)
  {
    char *str = (char *)malloc(sizeof(char) * 100);
    sprintf(str, "%d", root->val);
    stack[top++] = root;
    item[top2++] = str;

    while (top > 0)
    {
      temp = stack[--top];
      char *str1 = item[--top2];
      if (temp->left == NULL && temp->right == NULL)
      {
        char *path = (char *)malloc(sizeof(char) * (strlen(str1) + 1));
        for (i = 0; i < strlen(str1); i++)
          path[i] = str1[i];
        path[i] = '\0';
        result[top1++] = path;
      }
      if (temp->right != NULL)
      {
        char str2[100];
        char *str3 = (char *)malloc(sizeof(char) * 100);
        for (i = 0; i < strlen(str1); i++)
          str3[i] = str1[i];
        str3[i] = '\0';
        sprintf(str2, "%d", temp->right->val);
        stack[top++] = temp->right;
        item[top2++] = strcat(strcat(str3, "->"), str2);
      }
      if (temp->left != NULL)
      {
        char str2[100];
        char *str3 = (char *)malloc(sizeof(char) * 100);
        for (i = 0; i < strlen(str1); i++)
          str3[i] = str1[i];
        str3[i] = '\0';
        sprintf(str2, "%d", temp->left->val);
        stack[top++] = temp->left;
        item[top2++] = strcat(strcat(str3, "->"), str2);
      }
    }
  }
  *returnSize = top1;
  return result;
}
// @lc code=end
