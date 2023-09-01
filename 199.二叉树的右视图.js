/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  let queue = [],
    front,
    rear,
    res = [];
  front = rear = 0;
  queue[rear++] = root;
  while (front !== rear) {
    let size = rear - front;
    let node;
    for (let i = 0; i < size; i++) {
      node = queue[front++];
      if (node && node.left) queue[rear++] = node.left;
      if (node && node.right) queue[rear++] = node.right;
    }
    if (node) res.push(node.val);
  }
  return res;
};
// @lc code=end
