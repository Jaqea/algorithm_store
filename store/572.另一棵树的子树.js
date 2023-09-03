/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSame = (node1, node2) => {
  if (!node1 && node2) return false;
  else if (node1 && !node2) return false;
  else if (!node1 && !node2) return true;
  else if (node1 && node2 && node1.val === node2.val) {
    let left = isSame(node1.left, node2.left);
    let right = isSame(node1.right, node2.right);
    return left && right;
  }
};
var isSubtree = function (root, subRoot) {
  if (isSame(root, subRoot)) return true;
  let left = (right = false);
  if (root.left) left = isSubtree(root.left, subRoot);
  if (root.right) right = isSubtree(root.right, subRoot);
  return left || right;
};
// @lc code=end
