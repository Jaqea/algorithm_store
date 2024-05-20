/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let row = matrix.length - 1,
    col = 0;

  while (row > -1 && col < matrix[0].length) {
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] > target) row--;
    else if (matrix[row][col] < target) col++;
  }

  return false;
};
// @lc code=end
