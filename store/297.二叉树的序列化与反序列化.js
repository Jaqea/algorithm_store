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
    if (node.val) {
      res.push(res);
    }
    if (node.left) {
      queue[rear++] = node.left;
    }

    if (node.right) {
      queue[rear++] = node.right;
    }
  }

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
