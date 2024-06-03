/*
 * @lc app=leetcode.cn id=743 lang=javascript
 *
 * [743] 网络延迟时间
 */

// @lc code=start
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const visited = new Array(n - 1).fill(0);
  let time = 0;
  const dfs = (g, i) => {
    if (g[i] && !visited[i]) {
      visited[i] = 1;
      time += g[i][2];
      for (let j = 0; j < n; j++) {
        if (g[j] && g[j][0] === g[i][0]) {
          dfs(g, g[j][1] - 1);
        }
      }
    }
    return;
  };
  console.log(visited);
  dfs(times, k - 1);
  console.log(visited);
  return visited.includes(0) ? -1 : time;
};
// @lc code=end
