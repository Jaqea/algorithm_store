/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
const traverse = (node) => {
  if (!node) return [0, 0];

  let left = traverse(node.left);
  let right = traverse(node.right);
  let noStolen = Math.max(left[1], left[0]) + Math.max(right[0], right[1]);
  let stolen = node.val + left[0] + right[0];
  return [noStolen, stolen];
};
var rob = function (root) {
  return Math.max(...traverse(root));
};
// @lc code=end
