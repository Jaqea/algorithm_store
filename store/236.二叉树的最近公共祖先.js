/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
const getAnc = (root, p, q) => {
  if (!root || root === p || root === q) return root;
  let leftNode = lowestCommonAncestor(root.left, p, q);
  let rightNode = lowestCommonAncestor(root.right, p, q);
  if (leftNode && rightNode) return root;
  else if (leftNode && !rightNode) return leftNode;
  else if (!leftNode && rightNode) return rightNode;
  else return;
};
var lowestCommonAncestor = function (root, p, q) {
  // return getAnc(root, p, q);

  const getAncestor = (node) => {
    if (!node) {
      return null;
    }

    if (node === p || node === q) {
      return node;
    }

    const leftNode = getAncestor(node.left);
    const rightNode = getAncestor(node.right);

    if (leftNode && rightNode) {
      return node;
    } else if (leftNode && !rightNode) {
      return leftNode;
    } else if (!leftNode && rightNode) {
      return rightNode;
    } else {
      return null;
    }
  };

  return getAncestor(root);
};
// @lc code=end
