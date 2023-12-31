/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  // 递归
  // if (!root) return root;
  // if (root.val === val) return root;
  // if (root.val > val) return searchBST(root.left, val);
  // if (root.val < val) return searchBST(root.right, val);
  // 迭代
  let node = root;
  while (node) {
    if (node.val === val) break;
    if (node && node.val > val) node = node.left;
    if (node && node.val < val) node = node.right;
  }
  return node;
};
// @lc code=end
