/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */

let minVal;
const vaildBST = (root) => {
  if (!root) return true;
  console.log(minVal);
  let leftBST = isValidBST(root.left);

  if (minVal >= root.val) return false;
  else minVal = root.val;

  let rightBST = isValidBST(root.right);

  return leftBST && rightBST;
};
var isValidBST = function (root) {
  // minVal = -Math.pow(2, 31) - 1;
  // 递归
  // return vaildBST(root);
  // 迭代
  let stack = [],
    top = 0;
  let preVal = null;
  stack[top++] = root;
  while (top) {
    let node = stack[--top];
    if (!node) {
      node = stack[--top];
      if (preVal !== null && node.val <= preVal) return false;
      preVal = node.val;
    } else {
      if (node.right) stack[top++] = node.right;
      stack[top++] = node;
      stack[top++] = null;
      if (node.left) stack[top++] = node.left;
    }
  }
  return true;
};
// @lc code=end
