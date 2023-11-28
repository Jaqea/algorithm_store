/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const dfs = (grid, x, y) => {
  for (let i = 0; i < 4; i++) {
    const nextX = x + dir[0][i];
    const nextY = y + dir[1][i];
    if (
      nextX >= 0 &&
      nextX < grid.length &&
      nextY >= 0 &&
      nextY < grid[0].length &&
      grid[nextX][nextY] === "1" &&
      !vaildity[nextX][nextY]
    ) {
      vaildity[nextX][nextY] = 1;
      dfs(grid, nextX, nextY);
    }
  }
};

let vaildity, dir;

var maxAreaOfIsland = function (grid) {
  vaildity = new Array(grid.length)
    .fill()
    .map(() => Array(grid[0].length).fill(0));
  dir = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];
};
// @lc code=end
