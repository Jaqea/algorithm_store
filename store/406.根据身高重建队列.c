/*
 * @lc app=leetcode.cn id=406 lang=c
 *
 * [406] 根据身高重建队列
 */

// @lc code=start

void insert(int **arr, int size, int index, int *item)
{
  int i;
  for (i = size; i > index; i--)
  {
    arr[i][0] = arr[i - 1][0];
    arr[i][1] = arr[i - 1][1];
  }
  arr[index][0] = item[0];
  arr[index][1] = item[1];
}

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int **reconstructQueue(int **people, int peopleSize, int *peopleColSize, int *returnSize, int **returnColumnSizes)
{
  int i, j, temp[2], **res, top;
  res = (int **)malloc(sizeof(int *) * peopleSize);
  for (i = 0; i < peopleSize; i++)
    res[i] = (int *)malloc(sizeof(int) * (*peopleColSize));

  top = 0;
  for (i = 0; i < peopleSize - 1; i++)
  {
    for (j = 0; j < peopleSize - i - 1; j++)
    {
      if (people[j][0] < people[j + 1][0])
      {
        temp[0] = people[j][0];
        temp[1] = people[j][1];
        people[j][0] = people[j + 1][0];
        people[j][1] = people[j + 1][1];
        people[j + 1][0] = temp[0];
        people[j + 1][1] = temp[1];
      }
      else if (people[j][0] == people[j + 1][0])
      {
        if (people[j][1] > people[j + 1][1])
        {
          temp[0] = people[j][0];
          temp[1] = people[j][1];
          people[j][0] = people[j + 1][0];
          people[j][1] = people[j + 1][1];
          people[j + 1][0] = temp[0];
          people[j + 1][1] = temp[1];
        }
      }
    }
  }

  for (i = 0; i < peopleSize; i++)
  {
    insert(res, top, people[i][1], people[i]);
    top++;
  }

  *returnSize = peopleSize;
  *returnColumnSizes = (int *)malloc(sizeof(int) * (*returnSize));
  for (i = 0; i < *returnSize; i++)
    (*returnColumnSizes)[i] = *peopleColSize;
  return res;
}
// @lc code=end
