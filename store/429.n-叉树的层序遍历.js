/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [],
    front,
    rear,
    res = [];
  front = rear = 0;
  queue[rear++] = root;
  while (front !== rear) {
    let size = rear - front;
    let item = [];
    for (let i = 0; i < size; i++) {
      let node = queue[front++];
      let childrenSize;
      if (node) childrenSize = node.children.length;
      if (node) item.push(node.val);
      for (let j = 0; j < childrenSize; j++)
        if (node.children[j]) queue[rear++] = node.children[j];
    }
    res.push(item);
  }
  return res;
};
// @lc code=end
