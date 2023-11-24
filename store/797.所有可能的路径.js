/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
let res;
let path;
const dfs = (graph, x) => {
  if (x === graph.length - 1) {
    const item = [...path];
    res.push(item);
  }

  for (let i = 0; i < graph[x].length; i++) {
    path.push(graph[x][i]);
    dfs(graph, graph[x][i]);
    path.pop();
  }
};
var allPathsSourceTarget = function (graph) {
  res = [];
  path = [0];
  dfs(graph, 0);
  return res;
};
// @lc code=end
