/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
let max;
const maxHeight = (root) => {
  if (!root) return 0;
  let leftHeight = maxHeight(root.left);
  let rightHeight = maxHeight(root.right);
  let maxD = leftHeight + rightHeight;
  max = Math.max(maxD, max);
  return 1 + Math.max(leftHeight, rightHeight);
};

const traverse = (root) => {
  if (!root) return;
  let leftHeight = maxHeight(root.left);
  let rightHeight = maxHeight(root.right);
  let maxD = leftHeight + rightHeight;
  max = Math.max(maxD, max);
  traverse(root.left);
  traverse(root.right);
};

var diameterOfBinaryTree = function (root) {
  max = 0;
  maxHeight(root);
  return max;
};
// @lc code=end
