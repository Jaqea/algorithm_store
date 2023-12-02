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

const dfs = (heights, x, y) => {
  for (let i = 0; i < 4; i++) {
    const nextX = x + dir[0][i];
    const nextY = y + dir[1][i];
    if (
      nextX >= 0 &&
      nextY >= 0 &&
      nextX < heights.length &&
      nextY < heights[0].length &&
      !vaildity[nextX][nextY]
    ) {
      vaildity[nextX][nextY] = 1;
      dfs(heights, nextX, nextY);
    }
  }
};

let vaildity, dir;

var pacificAtlantic = function (heights) {
  const M = heights.length,
    N = heights[0].length;
  vaildity = new Array(M).fill().map(() => Array(N).fill(0));
  dir = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!vaildity[i][j]) dfs(heights, i, j);
    }
  }
};
// @lc code=end
