/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
let path, top, res;
const findPath = (node, targetSum) => {
  targetSum -= node.val;
  path[top++] = node.val;
  if (!node.left && !node.right && targetSum === 0)
    res.push(path.slice(0, top));
  if (node.left) {
    findPath(node.left, targetSum);
    top--;
  }
  if (node.right) {
    findPath(node.right, targetSum);
    top--;
  }
};

var pathSum = function (root, targetSum) {
  res = [];
  if (!root) return res;
  path = [];
  top = 0;
  findPath(root, targetSum);
  return res;
};
// @lc code=end
