/*
 * @lc app=leetcode.cn id=1382 lang=javascript
 *
 * [1382] 将二叉搜索树变平衡
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
 * @return {TreeNode}
 */
// let nodes;
// let traverse = (node) => {
//   if (!node) return;
//   traverse(node.left);
//   nodes.push(node.val);
//   traverse(node.right);
// };

// let create = (nodes, left, right) => {
//   if (left > right) return null;
//   let mid, node;
//   mid = Math.floor((left + right) / 2);
//   node = new TreeNode(nodes[mid]);
//   node.left = create(nodes, left, mid - 1);
//   node.right = create(nodes, mid + 1, right);
//   return node;
// };

var balanceBST = function (root) {
  // nodes = [];
  // traverse(root);
  // return create(nodes, 0, nodes.length - 1);
  let nodes = [];
  transform(root);
  return create(0, nodes.length - 1);
  function transform(node) {
    if (!node) return;
    transform(node.left);
    nodes.push(node);
    transform(node.right);
  }
  function create(left, right) {
    if (left > right) return null;

    const mid = Math.floor((right + left) / 2);
    nodes[mid].right = create(mid + 1, right);
    nodes[mid].left = create(left, mid - 1);

    return nodes[mid];
  }
};
// @lc code=end
