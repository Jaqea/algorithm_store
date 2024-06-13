/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const visited = [];

  const dfs = (n) => {
    if (!n) return;

    if (visited[n.val - 1]) {
      return visited[n.val - 1];
    }

    const cloneNode = new Node(n.val, []);
    visited[n.val - 1] = cloneNode;

    n.neighbors.forEach((item) => {
      const neighbor = dfs(item);
      cloneNode.neighbors.push(neighbor);
    });

    return cloneNode;
  };

  return dfs(node);
};
// @lc code=end
