/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @return {boolean}
 */
const getPath = (node, sum) => {
  sum -= node.val;
  if (!node.left && !node.right && sum === 0) return true;
  if (node.left) {
    if (getPath(node.left, sum)) return true;
  }
  if (node.right) {
    if (getPath(node.right, sum)) return true;
  }
  return false;
};
var hasPathSum = function (root, targetSum) {
  // 递归
  // if (!root) return false;
  // return getPath(root, targetSum);
  // 迭代
  let stack1 = [],
    stack2 = [],
    top1 = 0;
  stack1[top1] = root;
  stack2[top1] = targetSum;
  top1++;
  while (top1) {
    let node = stack1[top1 - 1];
    let sum = stack2[top1 - 1];
    top1--;
    if (node) sum -= node.val;
    if (node && !node.left && !node.right && sum === 0) return true;
    if (node && node.right) {
      stack1[top1] = node.right;
      stack2[top1] = sum;
      top1++;
    }
    if (node && node.left) {
      stack1[top1] = node.left;
      stack2[top1] = sum;
      top1++;
    }
  }
  return false;
};
// @lc code=end
