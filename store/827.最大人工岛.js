/*
 * @lc app=leetcode.cn id=827 lang=javascript
 *
 * [827] 最大人工岛
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const dfs = (grid, x, y, mark) => {
  s++;
  for (let i = 0; i < 4; i++) {
    const nextX = x + dir[0][i];
    const nextY = y + dir[1][i];

    if (
      nextX >= 0 &&
      nextY >= 0 &&
      nextX < grid.length &&
      nextY < grid[0].length &&
      !vaildity[nextX][nextY] &&
      grid[nextX][nextY] === 1
    ) {
      vaildity[nextX][nextY] = mark;
      dfs(grid, nextX, nextY, mark);
    }
  }
};

let vaildity, dir, s;

var largestIsland = function (grid) {
  dir = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];
  vaildity = new Array(grid.length)
    .fill()
    .map(() => Array(grid[0].length).fill(0));

  const map = new Map();
  let mark = 1,
    res = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!vaildity[i][j] && grid[i][j] === 1) {
        vaildity[i][j] = mark;
        s = 0;
        dfs(grid, i, j, mark);
        map.set(mark, s);
        mark++;
      }
    }
  }

  for (let value in map.entries()) res = Math.max(res, value);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0 && !vaildity[i][j]) {
      }
    }
  }
  console.log(vaildity);
};
// @lc code=end
