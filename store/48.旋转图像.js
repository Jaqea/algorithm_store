/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const reverseArr = (arr) => {
  let i, j, temp;
  i = 0;
  j = arr.length - 1;
  while (i < j) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
};
var rotate = function (matrix) {
  let i, j, temp;
  for (i = 0; i < matrix.length; i++) {
    for (j = i + 1; j < matrix[0].length; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  matrix.forEach((element) => {
    reverseArr(element);
  });
};
// @lc code=end
