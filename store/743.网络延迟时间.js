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
    queue = [];
  let front = (rear = time = max = 0);

  visited[k - 1] = 1;
  for (let i = 0; i < times.length; i++) {
    if (times[i][0] === k) {
      visited[times[i][1] - 1] = 1;
      max = max > times[i][2] ? max : times[i][2];
      queue[rear++] = times[i];
    }
  }

  time += max;

  while (front < rear) {
    const node = queue[front++];
    max = 0;
    for (let i = 0; i < times.length; i++) {
      if (!visited[times[i][0]] && times[i][0] === node[1]) {
        visited[times[i][1] - 1] = 1;
        max = max > times[i][2] ? max : times[i][2];
        queue[rear++] = times[i];
      }
    }

    time += max;

    if (!visited.includes(0)) {
      return time;
    }
  }

  return -1;
};
// @lc code=end
