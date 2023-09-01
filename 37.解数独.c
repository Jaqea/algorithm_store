/*
 * @lc app=leetcode.cn id=37 lang=c
 *
 * [37] 解数独
 */

// @lc code=start
bool isVaild(char **board, int row, int col, char str, int boardSize, int *boardColSize)
{

  int i, j;
  for (i = 0; i < boardColSize[0]; i++)
  {
    if (board[row][i] == str)
      return false;
  }

  for (i = 0; i < boardSize; i++)
  {
    if (board[i][col] == str)
      return false;
  }

  for (i = (row / 3) * 3; i < (row / 3) * 3 + 3; i++)
  {
    for (j = (col / 3) * 3; j < (col / 3) * 3 + 3; j++)
    {
      if (board[i][j] == str)
        return false;
    }
  }

  return true;
}

bool back(char **board, int boardSize, int *boardColSize)
{
  int i, j, k;
  for (i = 0; i < boardColSize[0]; i++)
  {
    for (j = 0; j < boardSize; j++)
    {
      if (board[j][i] != '.')
        continue;
      for (k = 1; k <= 9; k++)
      {
        if (isVaild(board, j, i, k + '0', boardSize, boardColSize))
        {
          board[j][i] = k + '0';
          if (back(board, boardSize, boardColSize))
            return true;
          board[j][i] = '.';
        }
      }
      return false;
    }
  }
  return true;
}

void solveSudoku(char **board, int boardSize, int *boardColSize)
{
  back(board, boardSize, boardColSize);
}
// @lc code=end
