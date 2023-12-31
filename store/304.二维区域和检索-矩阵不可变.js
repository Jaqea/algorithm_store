/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const ROW = matrix.length;
  const COL = matrix[0].length;
  this.numMatrix = Array(ROW)
    .fill()
    .map(() => Array(COL));
  for (let [index, row] of matrix.entries()) this.numMatrix[index] = [...row];
};
/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0;
  for (let i = row1; i <= row2; i++)
    for (let j = col1; j <= col2; j++) sum += this.numMatrix[i][j];
  return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end
