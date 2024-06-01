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
  if (!root) return "";
  const queue = [],
    res = [];
  let front = (rear = 0);

  queue[rear++] = root;
  while (front < rear) {
    const node = queue[front++];
    if (node) {
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

  return res.join("/");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data.length) {
    const res = data.split("/");
    const queue = [];
    let root = new TreeNode(res[0]),
      front = (rear = 0),
      index = 1;
    queue[rear++] = root;
    while (front < rear && index < res.length) {
      const node = queue[front++];
      node.left = res[index] ? new TreeNode(res[index]) : null;
      node.right = res[index + 1] ? new TreeNode(res[index + 1]) : null;

      if (node.left) {
        queue[rear++] = node.left;
      }

      if (node.right) {
        queue[rear++] = node.right;
      }

      index += 2;
    }
    return root;
  }

  return null;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
