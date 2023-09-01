/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function (root) {
  let queue = [],
    front,
    rear,
    res = [];
  front = rear = 0;
  queue[rear++] = root;
  while (front !== rear) {
    let size = rear - front;
    let sum = 0;
    for (let i = 0; i < size; i++) {
      let node = queue[front++];
      if (node) sum += node.val;
      if (node && node.left) queue[rear++] = node.left;
      if (node && node.right) queue[rear++] = node.right;
    }
    res.push(sum / size);
  }
  return res;
};
// @lc code=end
