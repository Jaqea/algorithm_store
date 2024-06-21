/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  // let left,
  //   right,
  //   mat = new Array(n).fill("").map(() => new Array(n)),
  //   len = n - 1,
  //   start = 0;
  // left = right = 0;
  // let i = 1;
  // let num = n % 2 ? n * n - 1 : n * n;
  // while (i <= num) {
  //   while (right < len) {
  //     mat[left][right] = i;
  //     right++;
  //     i++;
  //   }
  //   while (left < len) {
  //     mat[left][right] = i;
  //     left++;
  //     i++;
  //   }
  //   while (right > start) {
  //     mat[left][right] = i;
  //     right--;
  //     i++;
  //   }
  //   while (left > start) {
  //     mat[left][right] = i;
  //     left--;
  //     i++;
  //   }
  //   len = len - 1;
  //   left++;
  //   right++;
  //   start++;
  // }
  // if (n % 2) mat[left][right] = i;
  // return mat;

  const mat = new Array(n).fill().map(() => Array(n));
  let startRow = (startCol = 0),
    loop = (mid = Math.floor(n / 2)),
    count = (offset = 1),
    i,
    j;

  while (loop) {
    for (j = startCol; j < n - offset; j++) {
      mat[startRow][j] = count++;
    }
    for (i = startRow; i < n - offset; i++) {
      mat[i][j] = count++;
    }
    for (j = n - offset; j > startCol; j--) {
      mat[i][j] = count++;
    }
    for (i = n - offset; i > startRow; i--) {
      mat[i][j] = count++;
    }
    loop--;
    offset++;
    startRow++;
    startCol++;
  }

  if (n % 2) {
    mat[mid][mid] = count;
  }
  return mat;
};
// @lc code=end
