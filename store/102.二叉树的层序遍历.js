/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
const level = (node, res, depth) => {
  if (!node) return;
  if (res.length === depth) res.push([]);
  res[depth].push(node.val);
  level(node.left, res, depth + 1);
  level(node.right, res, depth + 1);
};
var levelOrder = function (root) {
  // 写法一
  // if (!root) return [];
  // let queue = [],
  //   front,
  //   rear,
  //   res = [],
  //   node,
  //   last,
  //   item = [];
  // front = rear = 0;
  // queue[rear++] = root;
  // last = root;
  // while (front !== rear) {
  //   node = queue[front++];
  //   if (node) item.push(node.val);
  //   if (node && node.left) queue[rear++] = node.left;
  //   if (node && node.right) queue[rear++] = node.right;
  //   if (last === node) {
  //     res.push([...item]);
  //     item.length = 0;
  //     last = queue[rear - 1];
  //   }
  // }
  // return res;
  // 写法二
  // if (!root) return [];
  // let queue = [],
  //   front,
  //   rear,
  //   res = [];
  // front = rear = 0;
  // queue[rear++] = root;
  // while (front !== rear) {
  //   let item = [];
  //   let size = rear - front;
  //   for (let i = 0; i < size; i++) {
  //     let node = queue[front++];
  //     if (node) item.push(node.val);
  //     if (node.left) queue[rear++] = node.left;
  //     if (node.right) queue[rear++] = node.right;
  //   }
  //   res.push(item);
  // }
  // return res;
  // 写法三
  let res = [];
  level(root, res, 0);
  return res;
};
// @lc code=end
