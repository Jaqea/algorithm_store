/*
 * @lc app=leetcode.cn id=1020 lang=javascript
 *
 * [1020] 飞地的数量
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */

const dfs = (grid, x, y) => {
  grid[x][y] = 0;
  num++;
  for (let i = 0; i < 4; i++) {
    const nextX = x + dir[0][i];
    const nextY = y + dir[1][i];
    if (
      nextX >= 0 &&
      nextX < grid.length &&
      nextY >= 0 &&
      nextY < grid[0].length &&
      !vaildity[nextX][nextY] &&
      grid[nextX][nextY] === 1
    ) {
      vaildity[nextX][nextY] = 1;
      dfs(grid, nextX, nextY);
    }
  }
};

let vaildity, dir, num;

var numEnclaves = function (grid) {
  vaildity = new Array(grid.length)
    .fill()
    .map(() => Array(grid[0].length).fill(0));
  dir = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];

  for (let i = 0; i < grid.length; i++) {
    if (grid[i][0] === 1 && !vaildity[i][0]) dfs(grid, i, 0);
    if (grid[i][grid[0].length - 1] === 1 && !vaildity[i][grid[0].length - 1])
      dfs(grid, i, grid[0].length - 1);
  }

  for (let j = 0; j < grid[0].length; j++) {
    if (grid[0][j] === 1 && !vaildity[0][j]) dfs(grid, 0, j);
    if (grid[grid.length - 1][j] === 1 && !vaildity[grid.length - 1][j])
      dfs(grid, grid.length - 1, j);
  }

  num = 0;
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[0].length - 1; j++) {
      if (!vaildity[i][j] && grid[i][j] === 1) {
        vaildity[i][j] = 1;
        dfs(grid, i, j);
      }
    }
  }
  return num;
};
// @lc code=end
