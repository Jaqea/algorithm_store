/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
const getTrimBST = (node, low, high) => {
  if (!node) return node;
  if (node.val < low) return getTrimBST(node.right, low, high);
  if (node.val > high) return getTrimBST(node.left, low, high);
  if (node.val >= low && node.val <= high) {
    node.left = getTrimBST(node.left, low, high);
    node.right = getTrimBST(node.right, low, high);
  }
  return node;
};
var trimBST = function (root, low, high) {
  // 递归
  // return getTrimBST(root, low, high);
  //迭代
  while (root && (root.val < low || root.val > high)) {
    if (root.val < low) root = root.right;
    else root = root.left;
  }
  let cur = root;
  while (cur) {
    while (cur.left && cur.left.val < low) cur.left = cur.left.right;
    cur = cur.left;
  }
  cur = root;
  while (cur) {
    while (cur.right && cur.right.val > high) cur.right = cur.right.left;
    cur = cur.right;
  }
  return root;
};
// @lc code=end
