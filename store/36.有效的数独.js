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
    .map((i) => Array(board[0].length).fill("."));
  const colMap = new Array(board[0].length)
    .fill()
    .map((i) => Array(board.length).fill("."));
  const subMap = [];

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] !== ".") {
        if (!rowMap.has(board[row][col])) rowMap.set(board[row][col], [1]);
        else return false;
      }
    }
  }
};
// @lc code=end
