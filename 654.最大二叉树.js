/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (!nums.length) return null;

  const max = Math.max(...nums);
  let node = new TreeNode(max);
  if (nums.length === 1) return node;

  let deleteIndex;
  for (deleteIndex = 0; deleteIndex < nums.length; deleteIndex++)
    if (nums[deleteIndex] === max) break;

  const numsLeft = nums.slice(0, deleteIndex);
  const numsRight = nums.slice(deleteIndex + 1, nums.length);

  node.left = constructMaximumBinaryTree(numsLeft);
  node.right = constructMaximumBinaryTree(numsRight);

  return node;
};
// @lc code=end
