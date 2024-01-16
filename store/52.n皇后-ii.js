/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

var totalNQueens = function (n) {
  let count = 0;
  const chessboard = new Array(n).fill().map(() => Array(n).fill("."));

  const isVaild = (row, col, chessboard, n) => {
    for (let i = 0; i < row; i++) if (chessboard[i][col] === "Q") return false;

    for (let i = row - 1, j = col - 1; i > -1 && j > -1; i--, j--)
      if (chessboard[i][j] === "Q") return false;

    for (let i = row - 1, j = col + 1; i > -1 && j < n; i--, j++)
      if (chessboard[i][j] === "Q") return false;

    return true;
  };

  const traverse = (n, row, chessboard) => {
    if (row === n) {
      count++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isVaild(row, col, chessboard, n)) {
        chessboard[row][col] = "Q";
        traverse(n, row + 1, chessboard);
        chessboard[row][col] = ".";
      }
    }
  };

  traverse(n, 0, chessboard);

  return count;
};
// @lc code=end
