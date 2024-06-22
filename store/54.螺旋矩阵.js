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
  // let left,
  //   right,
  //   offset,
  //   n,
  //   resMat = [],
  //   rows = matrix.length,
  //   cols = matrix[0].length;
  // offset = 0;
  // if (rows === 1) {
  //   matrix[0].forEach((item) => resMat.push(item));
  // } else if (cols === 1) {
  //   matrix.forEach((item) => resMat.push(item[0]));
  // } else {
  //   left = right = offset;
  //   n = (rows * cols) % 2 ? rows * cols - 1 : rows * cols;
  //   while (resMat.length < n) {
  //     while (right < cols - offset - 1) {
  //       resMat.push(matrix[left][right]);
  //       right++;
  //     }
  //     if (resMat.length === n) break;
  //     while (left < rows - offset - 1) {
  //       resMat.push(matrix[left][right]);
  //       left++;
  //     }
  //     if (resMat.length === n) break;
  //     while (right > offset) {
  //       resMat.push(matrix[left][right]);
  //       right--;
  //     }
  //     if (resMat.length === n) break;
  //     while (left > offset) {
  //       resMat.push(matrix[left][right]);
  //       left--;
  //     }
  //     offset++;
  //     left++;
  //     right++;
  //   }
  //   if ((rows * cols) % 2 && left < rows && right < cols)
  //     resMat.push(matrix[left][right]);
  // }

  // return resMat;
  const m = matrix.length,
    n = matrix[0].length,
    min = Math.min(m, n),
    max = Math.max(m, n);
  const mat = [];
  let startRow = (startCol = 0),
    loop = Math.floor(min / 2),
    offset = 1,
    i,
    j;

  while (loop) {
    for (j = startCol; j < n - offset; j++) {
      mat.push(matrix[startRow][j]);
    }
    for (i = startRow; i < m - offset; i++) {
      mat.push(matrix[i][j]);
    }

    for (j = n - offset; j > startCol; j--) {
      mat.push(matrix[i][j]);
    }

    for (i = m - offset; i > startRow; i--) {
      mat.push(matrix[i][j]);
    }

    loop--;
    startRow++;
    startCol++;
    offset++;
  }

  if (min % 2) {
    const mid = Math.floor(min / 2);
    if (min === m) {
      for (j = mid; j <= max - offset; j++) {
        mat.push(matrix[mid][j]);
      }
    } else {
      for (i = mid; i <= max - offset; i++) {
        mat.push(matrix[i][mid]);
      }
    }
  }

  return mat;
};
// @lc code=end
