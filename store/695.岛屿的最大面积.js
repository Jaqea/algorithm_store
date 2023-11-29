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
      grid[nextX][nextY] === 1 &&
      !vaildity[nextX][nextY]
    ) {
      vaildity[nextX][nextY] = 1;
      s++;
      dfs(grid, nextX, nextY);
    }
  }
};

let vaildity, dir, s;

var maxAreaOfIsland = function (grid) {
  let max = 0;
  vaildity = new Array(grid.length)
    .fill()
    .map(() => Array(grid[0].length).fill(0));
  dir = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!vaildity[i][j] && grid[i][j] === 1) {
        s = 1;
        vaildity[i][j] = 1;
        dfs(grid, i, j);
        max = Math.max(max, s);
      }
    }
  }

  return max;
};
// @lc code=end
