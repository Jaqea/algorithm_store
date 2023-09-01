/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
let modeVal, number, pre, cache;
const getMode = (node) => {
  if (!node) return;
  getMode(node.left);
  if (!pre || pre.val !== node.val) number = 1;
  else number++;

  if (number === cache) modeVal.push(node.val);
  else if (number > cache) {
    while (modeVal.length) modeVal.pop();
    modeVal.push(node.val);
    cache = number;
  }

  pre = node;
  getMode(node.right);
};
var findMode = function (root) {
  // 递归
  if (!root) return;
  modeVal = [];
  number = cache = 0;
  pre = null;
  getMode(root);
  return modeVal;
};
// @lc code=end
