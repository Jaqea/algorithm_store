/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
let minValDiff, pre;
const getMin = (node) => {
  if (!node) return;
  getMin(node.left);
  if (pre) {
    minValDiff =
      minValDiff > Math.abs(pre.val - node.val)
        ? Math.abs(pre.val - node.val)
        : minValDiff;
  }
  pre = node;
  getMin(node.right);
};
var getMinimumDifference = function (root) {
  // 递归
  // if (!root) return;
  // minValDiff = Math.pow(10, 5);
  // pre = null;
  // getMin(root);
  // return minValDiff;
  // 迭代
  let stack = [],
    top = 0,
    preVal = null,
    minD = Math.pow(10, 5);
  stack[top++] = root;
  while (top) {
    let node = stack[--top];
    if (node === null) {
      node = stack[--top];
      if (preVal !== null) {
        minD =
          minD > Math.abs(preVal - node.val)
            ? Math.abs(preVal - node.val)
            : minD;
      }
      preVal = node.val;
    } else {
      if (node.right) stack[top++] = node.right;
      stack[top++] = node;
      stack[top++] = null;
      if (node.left) stack[top++] = node.left;
    }
  }
  return minD;
};
// @lc code=end
