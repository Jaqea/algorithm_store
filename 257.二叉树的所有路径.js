/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
let res, stack, top;
const getPath = (node) => {
  if (!node) return;
  stack[top++] = node.val;
  if (!node.left && !node.right) {
    let item = [];
    for (let i = 0; i < top; i++) item.push(stack[i]);
    res.push(item);
    return;
  }

  if (node.left) {
    getPath(node.left);
    top--;
  }
  if (node.right) {
    getPath(node.right);
    top--;
  }
};

var binaryTreePaths = function (root) {
  top = 0;
  res = [];
  stack = [];
  getPath(root);
  res = res.map((item) => {
    return item.join("->");
  });
  return res;
};
// @lc code=end
