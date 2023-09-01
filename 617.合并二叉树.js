/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  // 菜鸟方法
  // let node = null;
  // if (root1 && root2) {
  //   node = new TreeNode(root1.val + root2.val);
  //   node.left = mergeTrees(root1.left, root2.left);
  //   node.right = mergeTrees(root1.right, root2.right);
  // } else if (!root1 && !root2) return node;
  // else {
  //   const val = root1 ? root1.val : root2.val;
  //   node = new TreeNode(val);
  //   if (root1) {
  //     node.left = mergeTrees(root1.left, root2);
  //     node.right = mergeTrees(root1.right, root2);
  //   }
  //   if (root2) {
  //     node.left = mergeTrees(root1, root2.left);
  //     node.right = mergeTrees(root1, root2.right);
  //   }
  // }
  // return node;
  // 正常方法
  let node = null;
  if (root1 && root2) node = new TreeNode(root1.val + root2.val);
  else if (root1 && !root2) return root1;
  else if (!root1 && root2) return root2;
  else return node;
  node.left = mergeTrees(root1.left, root2.left);
  node.right = mergeTrees(root1.right, root2.right);
  return node;
};
// @lc code=end
