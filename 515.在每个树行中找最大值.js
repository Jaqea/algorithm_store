/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function (root) {
  if (!root) return [];
  let queue = [],
    front,
    rear,
    res = [];
  front = rear = 0;
  queue[rear++] = root;
  while (front !== rear) {
    let size = rear - front;
    let max = -Math.pow(2, 31);
    if (queue[front]) max = queue[front].val;
    for (let i = 0; i < size; i++) {
      let node = queue[front++];
      if (node) max = node.val > max ? node.val : max;
      if (node && node.left) queue[rear++] = node.left;
      if (node && node.right) queue[rear++] = node.right;
    }
    res.push(max);
  }
  return res;
};
// @lc code=end
