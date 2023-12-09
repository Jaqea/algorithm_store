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

let vaildity, dir;

const dfs = () => {};

var islandPerimeter = function (grid) {
  const M = grid.length,
    N = grid[0].length;
  vaildity = new Array(M).fill().map(() => Array(N).fill(0));
  dir = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];
};
// @lc code=end
