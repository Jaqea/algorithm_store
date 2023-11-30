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
  console.log(x, y);
  if (
    grid[x][y] === 1 &&
    (x === 0 || x === grid.length - 1 || y === 0 || y === grid[0].length - 1)
  ) {
    console.log("aasd");
    num = 0;
    return;
  }

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
      num++;
      vaildity[nextX][nextY] = 1;
      dfs(grid, nextX, nextY);
    }
  }
};

let vaildity, dir, num;

var numEnclaves = function (grid) {
  let res = 0;
  vaildity = new Array(grid.length).fill().map(() => Array(grid[0].length));
  dir = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!vaildity[i][j] && grid[i][j] === 1) {
        num = 1;
        vaildity[i][j] = 1;
        dfs(grid, i, j);
        res += num;
      }
    }
  }
  return res;
};
// @lc code=end
