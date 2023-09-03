/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
let sum;
const getLeftSum = (node) => {
  // 前序
  // if (node.left && !node.left.left && !node.left.right) sum += node.left.val;
  // if (node.left) getLeftSum(node.left);
  // if (node.right) getLeftSum(node.right);
  // 中序
  if (!node) return 0;
  let leftSum = getLeftSum(node.left);
  if (node.left && !node.left.left && !node.left.right)
    leftSum += node.left.val;
  let rightSum = getLeftSum(node.right);
  return leftSum + rightSum;
};
var sumOfLeftLeaves = function (root) {
  // sum = 0;
  // getLeftSum(root);
  // return sum;

  return getLeftSum(root);
};
// @lc code=end
