/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const queue = [],
    res = [];
  let front = (rear = 0);

  queue[rear++] = root;
  while (front < rear) {
    const node = queue[front++];
    if (node && node.val) {
      res.push(node.val);
    }
    if (!node) {
      res.push(null);
    }

    if (node) {
      if (node.left) {
        queue[rear++] = node.left;
      } else {
        queue[rear++] = null;
      }

      if (node.right) {
        queue[rear++] = node.right;
      } else {
        queue[rear++] = null;
      }
    }
  }
  console.log(res);
  return res.join;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
