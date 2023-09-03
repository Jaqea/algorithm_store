/*
 * @lc app=leetcode.cn id=860 lang=c
 *
 * [860] 柠檬水找零
 */

// @lc code=start

bool lemonadeChange(int *bills, int billsSize)
{
  int five, ten, twenty, i;
  five = ten = twenty = 0;
  for (i = 0; i < billsSize; i++)
  {
    if (bills[i] == 5)
      five++;
    else if (bills[i] == 10)
    {
      ten++;
      if (five == 0)
        return false;
      else
        five--;
    }
    else
    {
      twenty++;
      if (ten == 0)
      {
        if (five >= 3)
          five -= 3;
        else
          return false;
      }
      else
      {
        ten--;
        if (five == 0)
          return false;
        else
          five--;
      }
    }
  }
  return true;
}
// @lc code=end
