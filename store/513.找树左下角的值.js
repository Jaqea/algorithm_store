/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
let maxDepth;
let val;
const getLeft = (node, depth) => {
  if (!node) return;
  getLeft(node.left, depth + 1);
  if (maxDepth < depth) {
    val = node.val;
    maxDepth = depth;
  }
  getLeft(node.right, depth + 1);
};
var findBottomLeftValue = function (root) {
  maxDepth = 0;
  val = -1;
  getLeft(root, 1);
  return val;
};
// @lc code=end
