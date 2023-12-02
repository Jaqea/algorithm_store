/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const dfs = (board, x, y) => {
  vaildity[x][y] = 1;
  for (let i = 0; i < 4; i++) {
    const nextX = x + dir[0][i];
    const nextY = y + dir[1][i];
    if (
      nextX >= 0 &&
      nextY >= 0 &&
      nextX < board.length &&
      nextY < board[0].length &&
      !vaildity[nextX][nextY] &&
      board[nextX][nextY] === "O"
    ) {
      vaildity[nextX][nextY] = 1;
      dfs(board, nextX, nextY);
    }
  }
};

let vaildity, dir;

var solve = function (board) {
  const M = board.length,
    N = board[0].length;
  vaildity = new Array(M).fill().map(() => Array(N).fill(0));
  dir = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];

  for (let i = 0; i < M; i++) {
    if (board[i][0] === "O") dfs(board, i, 0);
    if (board[i][N - 1] === "O") dfs(board, i, N - 1);
  }

  for (let j = 0; j < N; j++) {
    if (board[0][j] === "O") dfs(board, 0, j);
    if (board[M - 1][j] === "O") dfs(board, M - 1, j);
  }

  for (let i = 1; i < M; i++) {
    for (let j = 1; j < N; j++) {
      if (!vaildity[i][j] && board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }
};
// @lc code=end
