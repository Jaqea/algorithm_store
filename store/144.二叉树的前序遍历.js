/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
  let stack = [],
    top = 0,
    node,
    res = [];
  stack[top++] = root;
  // 法一
  // while (top) {
  //   node = stack[--top];
  //   if (node) res.push(node.val);
  //   if (node && node.right) stack[top++] = node.right;
  //   if (node && node.left) stack[top++] = node.left;
  // }
  // 法二
  while (top) {
    node = stack[--top];
    if (node) {
      if (node.right) stack[top++] = node.right;
      if (node.left) stack[top++] = node.left;
      stack[top++] = node;
      stack[top++] = null;
    } else {
      if (stack[top - 1]) res.push(stack[--top].val);
    }
  }
  return res;
};
// @lc code=end
