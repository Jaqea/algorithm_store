/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
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
let traverse = (node) => {
  if (!node) return;
  if (node.left) node.left.next = node.right;
  if (node.right) {
    if (node.next) node.right.next = node.next.left;
    else node.right.next = null;
  }
  connect(node.left);
  connect(node.right);
};
var connect = function (root) {
  // 法一：
  // traverse(root);
  // return root;
  // 法二：
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

  let queue = [],
    h,
    front = (rear = 0);

  queue[rear++] = root;
  h = rear;

  while (front !== rear) {
    const node = queue[front++];

    if (node && node.left) queue[rear++] = node.left;
    if (node && node.right) queue[rear++] = node.right;
    if (front !== h) node.next = queue[front];
    else h = rear;
  }

  return root;
};
// @lc code=end
