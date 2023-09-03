/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // 写法一：比较烂
  let left,
    right,
    offset,
    n,
    resMat = [],
    rows = matrix.length,
    cols = matrix[0].length;
  offset = 0;
  if (rows === 1) {
    matrix[0].forEach((item) => resMat.push(item));
  } else if (cols === 1) {
    matrix.forEach((item) => resMat.push(item[0]));
  } else {
    left = right = offset;
    n = (rows * cols) % 2 ? rows * cols - 1 : rows * cols;
    while (resMat.length < n) {
      while (right < cols - offset - 1) {
        resMat.push(matrix[left][right]);
        right++;
      }
      if (resMat.length === n) break;
      while (left < rows - offset - 1) {
        resMat.push(matrix[left][right]);
        left++;
      }
      if (resMat.length === n) break;
      while (right > offset) {
        resMat.push(matrix[left][right]);
        right--;
      }
      if (resMat.length === n) break;
      while (left > offset) {
        resMat.push(matrix[left][right]);
        left--;
      }
      offset++;
      left++;
      right++;
    }
    if ((rows * cols) % 2 && left < rows && right < cols)
      resMat.push(matrix[left][right]);
  }

  return resMat;
};
// @lc code=end
