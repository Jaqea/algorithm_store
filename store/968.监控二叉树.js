/*
 * @lc app=leetcode.cn id=968 lang=javascript
 *
 * [968] 监控二叉树
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

let res;

const minNum = (node) => {
  if (node === null) return 2;

  const left = minNum(node.left);
  const right = minNum(node.right);
  if (left === 2 && right === 2) return 0;
  if (left === 0 || right === 0) {
    res++;
    return 1;
  }
  if (left === 1 || right === 1) return 2;
};

var minCameraCover = function (root) {
  res = 0;
  if (!minNum(root)) res++;
  return res;
};
// @lc code=end
