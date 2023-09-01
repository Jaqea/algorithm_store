/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
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
 * @return {number}
 */
const getMaxDepth = (node) => {
  if (!node) return 0;
  let max = 0;
  for (let i = 0; i < node.children.length; i++) {
    let depth = getMaxDepth(node.children[i]);
    max = max > depth ? max : depth;
  }
  return max + 1;
};
var maxDepth = function (root) {
  return getMaxDepth(root);
};
// @lc code=end
