/*
 * @lc app=leetcode.cn id=15 lang=c
 *
 * [15] 三数之和
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

int **threeSum(int *nums, int numsSize, int *returnSize, int **returnColumnSizes)
{
  // int i, left, right, **res, len;
  // len = 0;
  // insertion_sort(nums, numsSize);
  // res = (int **)malloc(sizeof(int *) * 20000);
  // for (i = 0; i < 20000; i++)
  //   res[i] = (int *)malloc(sizeof(int) * 3);

  // for (i = 0; i < numsSize - 2; i++)
  // {
  //   if (nums[i] > 0)
  //     break;

  //   if (i > 0 && nums[i] == nums[i - 1])
  //     continue;

  //   left = i + 1;
  //   right = numsSize - 1;
  //   while (left < right)
  //   {
  //     if (left < right && nums[i] + nums[left] + nums[right] > 0)
  //     {
  //       right--;
  //     }
  //     if (left < right && nums[i] + nums[left] + nums[right] < 0)
  //     {
  //       left++;
  //     }
  //     if (left < right && nums[i] + nums[left] + nums[right] == 0)
  //     {
  //       res[len][0] = nums[i];
  //       res[len][1] = nums[left];
  //       res[len][2] = nums[right];
  //       len++;
  //       while (left < right && nums[right] == nums[right - 1])
  //       {
  //         right--;
  //       }
  //       while (left < right && nums[left] == nums[left + 1])
  //       {
  //         left++;
  //       }
  //       left++;
  //       right--;
  //     }
  //   }
  // }

  // *returnSize = len;
  // *returnColumnSizes = (int *)malloc(sizeof(int) * len);
  // for (i = 0; i < len; i++)
  //   (*returnColumnSizes)[i] = 3;
  // return res;

  int i, left, right, len, **res;
  len = 0;
  res = (int **)malloc(sizeof(int *) * 20000);
  for (i = 0; i < 20000; i++)
    res[i] = (int *)malloc(sizeof(int) * 3);

  insertion_sort(nums, numsSize);

  for (i = 0; i < numsSize - 2; i++)
  {
    if (nums[i] > 0)
      break;
    if (i > 0 && nums[i] == nums[i - 1])
      continue;
    left = i + 1;
    right = numsSize - 1;
    while (left < right)
    {
      if (left < right && nums[i] + nums[left] + nums[right] < 0)
        left++;
      if (left < right && nums[i] + nums[left] + nums[right] > 0)
        right--;
      if (left < right && nums[i] + nums[left] + nums[right] == 0)
      {
        res[len][0] = nums[i];
        res[len][1] = nums[left];
        res[len][2] = nums[right];
        len++;
        // 很巧妙这里
        while (left < right && nums[left] == nums[left + 1])
          left++;
        while (left < right && nums[right] == nums[right - 1])
          right--;
        left++;
        right--;
      }
    }
  }

  *returnSize = len;
  *returnColumnSizes = (int *)malloc(sizeof(int) * len);
  for (i = 0; i < len; i++)
    (*returnColumnSizes)[i] = 3;

  return res;
}
// @lc code=end
