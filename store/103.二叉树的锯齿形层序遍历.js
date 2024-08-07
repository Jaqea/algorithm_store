/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const queue = [],
    res = [];
  let level = (front = rear = 0),
    item = [],
    last;

  queue[rear++] = root;
  last = rear;
  while (front < rear) {
    const node = queue[front++];
    item.push(node.val);
    if (node.left) queue[rear++] = node.left;
    if (node.right) queue[rear++] = node.right;
    if (front === last) {
      last = rear;
      if (level % 2) item.reverse();
      res.push([...item]);
      item = [];
      level++;
    }
  }

  return res;
};
// @lc code=end
