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
  const visited = new Array(n).fill(0),
    g = Array(n)
      .fill()
      .map(() => new Array(n).fill(Number.MAX_SAFE_INTEGER)),
    dist = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  let res;

  times.forEach((item) => {
    g[item[0] - 1][item[1] - 1] = item[2];
  });

  dist[k - 1] = 0;
  // visited[k - 1] = 1;

  for (let i = 0; i < n; i++) {
    let x = -1;

    for (let j = 0; j < n; j++) {
      if (!visited[j] && (x == -1 || dist[j] < dist[x])) x = j;
    }

    visited[x] = 1;
    for (let p = 0; p < n; p++) {
      dist[p] = Math.min(dist[p], dist[x] + g[x][p]);
    }
  }

  res = Math.max(...dist);

  return res === Number.MAX_SAFE_INTEGER ? -1 : res;
};
// @lc code=end
