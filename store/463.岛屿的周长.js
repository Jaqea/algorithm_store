/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */

let vaildity, dir, s;

const dfs = (grid, x, y) => {
  if (x === 0) s++;
  if (y === 0) s++;
  if (x === grid.length - 1) s++;
  if (y === grid[0].length - 1) s++;

  for (let i = 0; i < 4; i++) {
    const nextX = x + dir[0][i];
    const nextY = y + dir[1][i];

    if (
      nextX >= 0 &&
      nextY >= 0 &&
      nextX < grid.length &&
      nextY < grid[0].length &&
      !grid[nextX][nextY]
    )
      s++;

    if (
      nextX >= 0 &&
      nextY >= 0 &&
      nextX < grid.length &&
      nextY < grid[0].length &&
      grid[nextX][nextY] === 1 &&
      !vaildity[nextX][nextY]
    ) {
      vaildity[nextX][nextY] = 1;
      dfs(grid, nextX, nextY);
    }
  }
};

var islandPerimeter = function (grid) {
  // const M = grid.length,
  //   N = grid[0].length;
  // vaildity = new Array(M).fill().map(() => Array(N).fill(0));
  // s = 0;
  // dir = [
  //   [-1, 0, 1, 0],
  //   [0, 1, 0, -1],
  // ];
  // for (let i = 0; i < M; i++) {
  //   for (let j = 0; j < N; j++) {
  //     if (grid[i][j] === 1 && !vaildity[i][j]) {
  //       vaildity[i][j] = 1;
  //       dfs(grid, i, j);
  //     }
  //   }
  // }

  // return s;

  // let s = 0;
  // const vaildity = new Array(grid.length)
  //     .fill()
  //     .map(() => Array(grid[0].length).fill(0)),
  //   dirs = [
  //     [-1, 0],
  //     [0, 1],
  //     [1, 0],
  //     [0, -1],
  //   ];

  // const dfs = (x, y) => {
  //   if (x === 0) s++;
  //   if (y === 0) s++;

  //   if (x === grid.length - 1) s++;

  //   if (y === grid[0].length - 1) s++;

  //   for (let dir of dirs) {
  //     const nextX = x + dir[0];
  //     const nextY = y + dir[1];

  //     if (
  //       nextX >= 0 &&
  //       nextY >= 0 &&
  //       nextX < grid.length &&
  //       nextY < grid[0].length &&
  //       !grid[nextX][nextY]
  //     )
  //       s++;

  //     if (
  //       nextX >= 0 &&
  //       nextX < grid.length &&
  //       nextY >= 0 &&
  //       nextY < grid[0].length &&
  //       !vaildity[nextX][nextY] &&
  //       grid[nextX][nextY] === 1
  //     ) {
  //       vaildity[nextX][nextY] = 1;
  //       dfs(nextX, nextY);
  //     }
  //   }
  // };

  // for (let i = 0; i < grid.length; i++) {
  //   for (let j = 0; j < grid[0].length; j++) {
  //     if (grid[i][j] === 1 && !vaildity[i][j]) {
  //       vaildity[i][j] = 1;
  //       dfs(i, j);
  //     }
  //   }
  // }

  // return s;

  let s = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        s += 4;
        if (i < grid.length - 1 && grid[i + 1][j]) s -= 1;
        if (j < grid[0].length - 1 && grid[i][j + 1]) s -= 1;
        if (i > 0 && grid[i - 1][j]) s -= 1;
        if (j > 0 && grid[i][j - 1]) s -= 1;
      }
    }
  }

  return s;
};
// @lc code=end
