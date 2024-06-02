/*
 * @lc app=leetcode.cn id=785 lang=javascript
 *
 * [785] 判断二分图
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const visited = [];
  const dfs = (g, i, color) => {
    if (visited[i]) {
      if (visited[i] === color) {
        return true;
      } else {
        return false;
      }
    } else {
      visited[i] = color;
      for (let value of g[i].values()) {
        let res = dfs(g, value, -color);

        if (!res) {
          return false;
        }
      }
    }

    return true;
  };
  for (let i = 0; i < graph.length; i++) {
    if (!visited[i]) {
      if (!dfs(graph, i, 1)) {
        return false;
      }
    }
  }

  return true;
};
// @lc code=end
