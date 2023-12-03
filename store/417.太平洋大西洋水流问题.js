/*
 * @lc app=leetcode.cn id=417 lang=javascript
 *
 * [417] 太平洋大西洋水流问题
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

const dfs = (heights, vaildity, x, y) => {
  // if (vaildity[x][y]) return;
  vaildity[x][y] = 1;
  for (let i = 0; i < 4; i++) {
    const nextX = x + dir[0][i];
    const nextY = y + dir[1][i];
    if (
      nextX >= 0 &&
      nextY >= 0 &&
      nextX < heights.length &&
      nextY < heights[0].length &&
      !vaildity[nextX][nextY] &&
      heights[x][y] <= heights[nextX][nextY]
    ) {
      dfs(heights, vaildity, nextX, nextY);
    }
  }
};

let dir;

var pacificAtlantic = function (heights) {
  const res = [];
  const M = heights.length,
    N = heights[0].length;
  let pacific = new Array(M).fill().map(() => Array(N).fill(0));
  let atlantic = new Array(M).fill().map(() => Array(N).fill(0));
  dir = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];

  for (let i = 0; i < M; i++) {
    dfs(heights, pacific, i, 0);
    dfs(heights, atlantic, i, N - 1);
  }

  for (let j = 0; j < N; j++) {
    dfs(heights, pacific, 0, j);
    dfs(heights, atlantic, M - 1, j);
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (pacific[i][j] && atlantic[i][j]) res.push([i, j]);
    }
  }

  return res;
};
// @lc code=end
