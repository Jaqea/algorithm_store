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
    const cloneNode = new Node(n.val, []);

    console.log(n);

    if (!visited[n.val - 1]) {
      visited[n.val - 1] = cloneNode;
    } else {
      return visited[n.val - 1];
    }

    n.neighbors.forEach((item) => {
      const neighbor = dfs(item);
      cloneNode.neighbors.push(neighbor);
    });

    return cloneNode;
  };

  return dfs(node);
};
// @lc code=end
