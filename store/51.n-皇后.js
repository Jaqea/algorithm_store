/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
const isVaild = (row, col, matrix, n) => {
  for (let i = 0; i < n; i++) if (matrix[i][col] === "Q") return false;

  for (let i = row - 1, j = col - 1; i > -1 && j > -1; i--, j--)
    if (matrix[i][j] === "Q") return false;

  for (let i = row - 1, j = col + 1; i > -1 && j > -1; i--, j++)
    if (matrix[i][j] === "Q") return false;

  return true;
};

let res, item;

const back = (n, row) => {
  if (row === n) {
    res.push(item.map((element) => element.join("")));
    return;
  }
  for (let col = 0; col < n; col++) {
    if (isVaild(row, col, item, n)) {
      item[row][col] = "Q";
      back(n, row + 1);
      item[row][col] = ".";
    }
  }
};

var solveNQueens = function (n) {
  res = [];
  item = new Array(n).fill().map(() => new Array(n).fill("."));
  back(n, 0);
  return res;
};
// @lc code=end
