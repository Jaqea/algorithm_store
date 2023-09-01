/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
const getSame = (left, right) => {
  let leftNode, rightNode;
  if (left && right && left.left && right.left)
    leftNode = getSame(left.left, right.left);
  else if (!left.left && right.left) leftNode = getSame(left, right.left);
  else leftNode = getSame(left.left, right);
  if (left.right && right.right) rightNode = getSame(left.right, right.right);
  else if (!left.right && right.right) rightNode = getSame(left, right.right);
  else rightNode = getSame(left.right, right);
  if (left && right && left.val === right.val) return [left, right];
  else return [null, null];

  // if (left && right && left.val === right.val) {
  //   let leftSame = getSame(left.left, right.left);
  //   let rightSame = getSame(left.right, right.right);
  //   return leftSame && rightSame;
  // } else if (!left && !right) return true;
  // else return false;
};
var findDuplicateSubtrees = function (root) {
  console.log(getSame(root.left, root.right));
};
// @lc code=end
