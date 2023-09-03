/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
var countNodes = function (root) {
  let left, right, leftDepth, rightDepth;
  if (!root) return 0;
  left = root.left;
  right = root.right;
  leftDepth = 1;
  rightDepth = 1;
  while (left) {
    left = left.left;
    leftDepth++;
  }
  while (right) {
    right = right.right;
    rightDepth++;
  }
  if (leftDepth === rightDepth) return Math.pow(2, leftDepth) - 1;
  return countNodes(root.left) + countNodes(root.right) + 1;
};
// @lc code=end
