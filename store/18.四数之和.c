/*
 * @lc app=leetcode.cn id=18 lang=c
 *
 * [18] 四数之和
 */

// @lc code=start

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */

void insertion_sort(int arr[], int len)
{
  int i, j, temp;
  for (i = 1; i < len; i++)
  {
    temp = arr[i];
    for (j = i; j > 0 && arr[j - 1] > temp; j--)
      arr[j] = arr[j - 1];
    arr[j] = temp;
  }
}

int **fourSum(int *nums, int numsSize, int target, int *returnSize, int **returnColumnSizes)
{
  // int **res, i, k, left, right, len = 0;
  // long long a, b, c, d, sum;

  // res = (int **)malloc(sizeof(int *) * 1000);
  // for (i = 0; i < 1000; i++)
  //   res[i] = (int *)malloc(sizeof(int) * 4);

  // insertion_sort(nums, numsSize);

  // for (i = 0; i < numsSize - 3; i++)
  // {
  //   if (nums[i] >= target && (nums[i] > 0 || target > 0))
  //     break;
  //   if (i > 0 && nums[i] == nums[i - 1])
  //     continue;

  //   for (k = i + 1; k < numsSize - 2; k++)
  //   {
  //     if (k > i + 1 && nums[k] == nums[k - 1])
  //       continue;

  //     left = k + 1;
  //     right = numsSize - 1;
  //     while (left < right)
  //     {
  //       // 防止整型溢出
  //       a = nums[i];
  //       b = nums[k];
  //       c = nums[left];
  //       d = nums[right];
  //       sum = a + b + c + d;
  //       if (left < right && sum > target)
  //         right--;
  //       if (left < right && sum < target)
  //         left++;
  //       if (left < right && sum == target)
  //       {
  //         res[len][0] = nums[i];
  //         res[len][1] = nums[k];
  //         res[len][2] = nums[left];
  //         res[len][3] = nums[right];
  //         len++;
  //         while (left < right && nums[right] == nums[right - 1])
  //           right--;
  //         while (left < right && nums[left] == nums[left + 1])
  //           left++;
  //         right--;
  //         left++;
  //       }
  //     }
  //   }
  // }

  // *returnSize = len;
  // *returnColumnSizes = (int *)malloc(sizeof(int) * len);
  // for (i = 0; i < len; i++)
  //   (*returnColumnSizes)[i] = 4;
  // return res;

  int i, j, left, right, len, **res;
  long long a, b, c, d, sum;

  res = (int **)malloc(sizeof(int *) * 1000);
  for (i = 0; i < 1000; i++)
    res[i] = (int *)malloc(sizeof(int) * 4);

  insertion_sort(nums, numsSize);

  len = 0;
  for (i = 0; i < numsSize - 3; i++)
  {
    // 关键判断
    if (nums[i] >= target && (nums[i] > 0 || target > 0))
      break;
    // 关键判断
    if (i > 0 && nums[i] == nums[i - 1])
      continue;
    for (j = i + 1; j < numsSize - 2; j++)
    {
      if (nums[i] + nums[j] > target && (nums[i] + nums[j] > 0 || target > 0))
        break;
      if (j > i + 1 && nums[j] == nums[j - 1])
        continue;
      left = j + 1;
      right = numsSize - 1;
      while (left < right)
      {
        a = nums[i];
        b = nums[j];
        c = nums[left];
        d = nums[right];
        sum = a + b + c + d;
        if (left < right && sum > target)
          right--;
        if (left < right && sum < target)
          left++;
        if (left < right && sum == target)
        {
          res[len][0] = a;
          res[len][1] = b;
          res[len][2] = c;
          res[len][3] = d;
          len++;
          while (left < right && nums[left] == nums[left + 1])
            left++;
          while (left < right && nums[right] == nums[right - 1])
            right--;
          left++;
          right--;
        }
      }
    }
  }

  *returnSize = len;
  *returnColumnSizes = (int *)malloc(sizeof(int) * len);
  for (i = 0; i < len; i++)
    (*returnColumnSizes)[i] = 4;

  return res;
}
// @lc code=end
