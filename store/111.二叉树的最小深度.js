/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
let minD;
const getMinDepth = (node) => {
  if (!node) return 0;
  if (node && !node.left && node.right) return getMinDepth(node.right) + 1;
  if (node && node.left && !node.right) return getMinDepth(node.left) + 1;
  return Math.min(getMinDepth(node.left), getMinDepth(node.right)) + 1;
};
let res;
const getPreMinDepth = (node, depth) => {
  if (!node) return;
  if (!node.left && !node.right) {
    res = res < depth ? res : depth;
    return;
  }
  if (node.left) getPreMinDepth(node.left, depth + 1);
  if (node.right) getPreMinDepth(node.right, depth + 1);
};
var minDepth = function (root) {
  // 法一
  // let queue = [],
  //   front,
  //   rear,
  //   minHeight;
  // front = rear = minHeight = 0;
  // if (!root) return minHeight;
  // queue[rear++] = root;
  // minHeight++;
  // while (front !== rear) {
  //   let size = rear - front;
  //   for (let i = 0; i < size; i++) {
  //     let node = queue[front++];
  //     if (node && !node.left && !node.right) return minHeight;
  //     if (node && node.left) queue[rear++] = node.left;
  //     if (node && node.right) queue[rear++] = node.right;
  //   }
  //   minHeight++;
  // }
  // 法二
  // return getMinDepth(root);
  // 法三
  if (!root) return 0;
  res = 9999;
  getPreMinDepth(root, 1);
  return res;
};
// @lc code=end
