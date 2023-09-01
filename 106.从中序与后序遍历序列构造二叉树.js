/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) return null;

  const root = new TreeNode(postorder[postorder.length - 1]);

  if (inorder.length === 1 || postorder.length === 1) return root;

  let deleteIndex;
  for (deleteIndex = 0; deleteIndex < inorder.length; deleteIndex++)
    if (inorder[deleteIndex] === root.val) break;

  const inorderLeft = inorder.slice(0, deleteIndex);
  const inorderRight = inorder.slice(deleteIndex + 1, inorder.length);
  const postorderLeft = postorder.slice(0, inorderLeft.length);
  const postorderRight = postorder.slice(
    inorderLeft.length,
    postorder.length - 1
  );

  root.left = buildTree(inorderLeft, postorderLeft);
  root.right = buildTree(inorderRight, postorderRight);

  return root;
};
// @lc code=end
