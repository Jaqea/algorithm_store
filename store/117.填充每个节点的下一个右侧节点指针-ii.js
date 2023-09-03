/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const traverse = (node) => {
  if (!node) return;
  if (node.left) node.left.next = node.right;
  if (node.right) {
    if (node.next && node.next.left) node.right.next = node.next.left;
    else if (node.next && node.next.right) node.right.next = node.next.right;
    else node.right.next = null;
  }
  traverse(node.left);
  traverse(node.right);
};
var connect = function (root) {
  // 法一：
  // let queue = [],
  //   front,
  //   rear;
  // front = rear = 0;
  // queue[rear++] = root;
  // while (front !== rear) {
  //   let size = rear - front;
  //   for (let i = 0; i < size; i++) {
  //     let node = queue[front++];
  //     if (queue[front] && i !== size - 1) node.next = queue[front];
  //     else {
  //       if (node) node.next = null;
  //     }
  //     if (node && node.left) queue[rear++] = node.left;
  //     if (node && node.right) queue[rear++] = node.right;
  //   }
  // }
  // return root;
  // 法二
};
// @lc code=end
