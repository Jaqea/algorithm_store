/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
 * @return {number}
 */
let transform = (path) => {
  let res = 0;
  path.forEach((item) => {
    res *= 10;
    res += item;
  });
  return res;
};
let sum, nodes;
let back = (node, path) => {
  if (!node.left && !node.right) {
    sum += transform(path);
    return;
  }
  if (node.left) {
    path.push(node.left.val);
    back(node.left, path);
    path.pop();
  }
  if (node.right) {
    path.push(node.right.val);
    back(node.right, path);
    path.pop();
  }
};
var sumNumbers = function (root) {
  sum = 0;
  nodes = [];
  nodes.push(root.val);
  back(root, nodes);
  return sum;
};
// @lc code=end
