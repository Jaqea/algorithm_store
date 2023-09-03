/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
let res;
const getBalanced = (node) => {
  if (!node) return 0;
  let leftDepth = getBalanced(node.left);
  let rightDepth = getBalanced(node.right);
  if (Math.abs(leftDepth - rightDepth) > 1) res = false;
  return Math.max(leftDepth, rightDepth) + 1;
};

var isBalanced = function (root) {
  res = true;
  if (!root) return res;
  getBalanced(root);
  return res;
};
// @lc code=end
