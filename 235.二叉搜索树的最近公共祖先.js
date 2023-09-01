/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const getAnc = (node, p, q) => {
  if (!node) return node;
  if (node.val >= p.val && node.val <= q.val) return node;
  if (node.val < p.val) return getAnc(node.right, p, q);
  if (node.val > q.val) return getAnc(node.left, p, q);
};
var lowestCommonAncestor = function (root, p, q) {
  if (p.val > q.val) {
    let temp = p;
    p = q;
    q = temp;
  }
  return getAnc(root, p, q);
};
// @lc code=end
