/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
const preTraverse = (node) => {
  if (!node) return;
  let temp = node.left;
  node.left = node.right;
  node.right = temp;
  preTraverse(node.left);
  preTraverse(node.right);
};
const subTraverse = (node) => {
  if (!node) return;
  subTraverse(node.left);
  subTraverse(node.right);
  let temp = node.left;
  node.left = node.right;
  node.right = temp;
};
const midTraverse = (node) => {
  if (!node) return;
  midTraverse(node.left);
  let temp = node.left;
  node.left = node.right;
  node.right = temp;
  midTraverse(node.left);
};
var invertTree = function (root) {
  // preTraverse(root);
  // subTraverse(root);
  // midTraverse(root);
  // return root;

  const postTravel = (node) => {
    if (!node) {
      return null;
    }

    postTravel(node.left);
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    postTravel(node.left);
  };

  postTravel(root);

  return root;
};
// @lc code=end
