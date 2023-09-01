/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
const getMaxDepth = (node) => {
  if (!node) return 0;
  return Math.max(getMaxDepth(node.left), getMaxDepth(node.right)) + 1;
};
let res;
const getPreMaxDepth = (node, depth) => {
  res = res > depth ? res : depth;
  if (node && !node.left && !node.right) return;
  if (node && node.left) getPreMaxDepth(node.left, depth + 1);
  if (node && node.right) getPreMaxDepth(node.right, depth + 1);
};
var maxDepth = function (root) {
  // 法一
  // let queue = [],
  //   front,
  //   rear,
  //   height;
  // front = rear = height = 0;
  // if (!root) return height;
  // queue[rear++] = root;
  // while (front !== rear) {
  //   let size = rear - front;
  //   for (let i = 0; i < size; i++) {
  //     let node = queue[front++];
  //     if (node && node.left) queue[rear++] = node.left;
  //     if (node && node.right) queue[rear++] = node.right;
  //   }
  //   height++;
  // }
  // return height;
  // 法二
  // return getMaxDepth(root);
  // 法三
  res = 0;
  if (root) getPreMaxDepth(root, 1);
  return res;
};
// @lc code=end
