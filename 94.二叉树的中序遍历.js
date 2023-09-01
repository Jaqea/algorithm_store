/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let stack = [],
    top = 0,
    node,
    res = [];
  stack[top++] = root;
  node = root;
  // 法一：
  // while (top) {
  //   while (node) {
  //     node = node.left;
  //     if (node) stack[top++] = node;
  //   }
  //   node = stack[--top];
  //   if (node) {
  //     res.push(node.val);
  //     node = node.right;
  //     stack[top++] = node;
  //   }
  // }
  // 法二：
  while (top) {
    node = stack[--top];
    if (node) {
      if (node.right) stack[top++] = node.right;
      stack[top++] = node;
      stack[top++] = null;
      if (node.left) stack[top++] = node.left;
    } else {
      if (stack[top - 1]) res.push(stack[--top].val);
    }
  }
  return res;
};
// @lc code=end
