/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */

const dfs = (grid, x, y) => {
  for (let i = 0; i < dir[0].length; i++) {
    const nextX = x + dir[0][i];
    const nextY = y + dir[1][i];

    if (
      nextX >= 0 &&
      nextX < grid.length &&
      nextY >= 0 &&
      nextY < grid[0].length &&
      !vaildity[nextX][nextY] &&
      grid[nextX][nextY] === "1"
    ) {
      vaildity[nextX][nextY] = 1;
      dfs(grid, nextX, nextY);
    }
  }
};

let dir, vaildity;

var numIslands = function (grid) {
  // 法一：dfs
  let result = 0;
  dir = [
    [0, 1, 0, -1],
    [1, 0, -1, 0],
  ];
  vaildity = new Array(grid.length)
    .fill()
    .map(() => Array(grid[0].length).fill(0));

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!vaildity[i][j] && grid[i][j] === "1") {
        result++;
        vaildity[i][j] = 1;
        dfs(grid, i, j);
      }
    }
  }

  return result;
};
// @lc code=end
