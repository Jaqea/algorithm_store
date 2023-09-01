/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
let pre;
const convBST = (node) => {
  if (!node) return;
  convBST(node.right);
  if (pre) node.val += pre.val;
  pre = node;
  convBST(node.left);
};
var convertBST = function (root) {
  // 递归
  // pre = null;
  // convBST(root);
  // return root;
  // 迭代
  let pre,
    stack = [],
    top = 0;
  stack[top++] = root;
  while (top) {
    let node = stack[--top];
    if (node === null) {
      node = stack[--top];
      if (pre) node.val += pre.val;
      pre = node;
    } else {
      if (node && node.left) stack[top++] = node.left;
      stack[top++] = node;
      stack[top++] = null;
      if (node && node.right) stack[top++] = node.right;
    }
  }
  return root;
};
// @lc code=end
