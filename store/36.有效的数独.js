/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rowMap = new Array(board.length)
    .fill()
    .map((i) => Array(board[0].length));
  const colMap = new Array(board[0].length)
    .fill()
    .map((i) => Array(board.length));
  const subMap = new Array(3).fill().map((i) =>
    Array(3)
      .fill()
      .map((e) => Array(9))
  );

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] !== ".") {
        const index = board[row][col] - "0" - 1;

        if (!rowMap[row][index]) {
          rowMap[row][index] = 1;
        } else return false;

        if (!colMap[index][col]) {
          colMap[index][col] = 1;
        } else return false;

        const rowIndex = Math.floor(row / 3);
        const colIndex = Math.floor(col / 3);

        if (!subMap[rowIndex][colIndex][index])
          subMap[rowIndex][colIndex][index] = 1;
        else return false;
      }
    }
  }

  return true;
};
// @lc code=end
