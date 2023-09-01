/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  const node = new TreeNode(preorder[0]);
  if (preorder.length === 1) return node;

  let deleteIndex;
  for (deleteIndex = 0; deleteIndex < inorder.length; deleteIndex++)
    if (inorder[deleteIndex] === node.val) break;

  const inorderLeft = inorder.slice(0, deleteIndex);
  const inorderRight = inorder.slice(deleteIndex + 1, inorder.length);
  const preorderLeft = preorder.slice(1, inorderLeft.length + 1);
  const preorderRight = preorder.slice(inorderLeft.length + 1, preorder.length);

  node.left = buildTree(preorderLeft, inorderLeft);
  node.right = buildTree(preorderRight, inorderRight);

  return node;
};
// @lc code=end
