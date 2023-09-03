/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
const insertBST = (node, val) => {
  // 法一
  // if (!node) return new TreeNode(val);
  // if (node.val > val && !node.left) node.left = new TreeNode(val);
  // if (node.val < val && !node.right) node.right = new TreeNode(val);
  // if (node.val > val && node.left) insertBST(node.left, val);
  // if (node.val < val && node.right) insertBST(node.right, val);
  // 法二
  // if (!node) return new TreeNode(val);
  // if (node.val > val) node.left = insertBST(node.left, val);
  // else node.right = insertBST(node.right, val);
  // return node;
};
var insertIntoBST = function (root, val) {
  // 递归
  // const res = insertBST(root, val);
  // return res ? res : root;
  // 迭代
  let node = root,
    pre;
  while (node) {
    pre = node;
    if (node.val > val) node = node.left;
    else node = node.right;
  }
  if (!pre) root = new TreeNode(val);
  else if (pre && pre.val > val) pre.left = new TreeNode(val);
  else pre.right = new TreeNode(val);

  return root;
};
// @lc code=end
