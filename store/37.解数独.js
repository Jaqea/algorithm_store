/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

let res;

const isVaild = (row, col, val, matrix) => {
  for (let i = 0; i < 9; i++) {
    if (val === matrix[i][col]) return false;
  }

  for (let j = 0; j < 9; j++) if (val === matrix[row][j]) return false;

  const startRow = (row / 3) * 3;
  const startCol = (col / 3) * 3;

  for (let i = startRow; i < startRow + 3 && i < 9; i++) {
    for (let j = startCol; j < startCol + 3 && j < 9; j++) {
      // console.log(matrix[i][j], val, matrix[i][j] == val);
      if (matrix[i][j] === val) return false;
    }
  }

  return true;
};

const trackback = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] !== ".") continue;
      else {
        for (let k = 1; k <= 9; k++) {
          if (isVaild(i, j, `${k}`, matrix)) {
            matrix[i][j] = `${k}`;
            if (trackback(matrix)) return true;
            matrix[i][j] = ".";
          }
        }
        return false;
      }
    }
  }
  return true;
};

var solveSudoku = function (board) {
  trackback(board);
};
// @lc code=end
