/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
const deleteTree = (node, key) => {
  if (node && node.val === key) {
    if (!node.left && !node.right) return null;
    else if (node.left && !node.right) return node.left;
    else if (!node.left && node.right) return node.right;
    else {
      let left = node.right;
      while (left.left) left = left.left;
      left.left = node.left;
      return node.right;
    }
  }
  if (node && node.val > key) node.left = deleteNode(node.left, key);
  else if (node && node.val < key) node.right = deleteNode(node.right, key);
  return node;
};
const deleteN = (node) => {
  // 判断一
  // if (!node) return node;
  // if (!node.left && node.right) return node.right;
  // else if (node.left && !node.right) return node.left;
  // else if (node.left && node.right) {
  //   let cur = node.right;
  //   while (cur.left) cur = cur.left;
  //   cur.left = node.left;
  //   return node.right;
  // } else {
  //   return null;
  // }
  // 判断二
  if (!node) return node;
  if (!node.right) return node.left;
  let cur = node.right;
  while (cur.left) cur = cur.left;
  cur.left = node.left;
  return node.right;
};
var deleteNode = function (root, key) {
  // 递归
  // return deleteTree(root, key);
  // 迭代
  let node = root,
    pre;
  while (node) {
    if (node.val === key) break;
    pre = node;
    if (node.val > key) node = node.left;
    else if (node.val < key) node = node.right;
  }
  if (!pre) return deleteN(node);
  if (pre.right && pre.right.val === key) pre.right = deleteN(node);
  if (pre.left && pre.left.val === key) pre.left = deleteN(node);
  return root;
};
// @lc code=end
