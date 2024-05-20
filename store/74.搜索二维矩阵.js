/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
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
    else col++;
  }

  return false;
};
// @lc code=end
