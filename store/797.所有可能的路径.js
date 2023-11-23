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
const dfs = (graph, start) => {
  if (start === graph.length - 1) {
    const item = [...path];
    res.push(item);
  }
  console.log(path);

  for (let i = start; i < graph.length; i++) {
    path.push(i);
    for (let j = 0; j < graph[i].length; j++) {
      dfs(graph, graph[i][j]);
    }
    path.pop();
  }
};
var allPathsSourceTarget = function (graph) {
  res = [];
  path = [];
  dfs(graph, 0);
  return res;
};
// @lc code=end
