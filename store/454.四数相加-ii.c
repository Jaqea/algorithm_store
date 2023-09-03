/*
 * @lc app=leetcode.cn id=454 lang=c
 *
 * [454] 四数相加 II
 */

// @lc code=start

int fourSumCount(int *nums1, int nums1Size, int *nums2, int nums2Size, int *nums3, int nums3Size, int *nums4, int nums4Size)
{
  struct myHash
  {
    int value;
    int count;
    UT_hash_handle hh;
  };
  struct myHash *hashTable = NULL;
  int i, j, count, sum;
  count = 0;

  for (i = 0; i < nums1Size; i++)
  {
    for (j = 0; j < nums2Size; j++)
    {
      struct myHash *hashItem;
      sum = -nums1[i] - nums2[j];
      HASH_FIND_INT(hashTable, &sum, hashItem);
      if (!hashItem)
      {
        hashItem = (struct myHash *)malloc(sizeof(struct myHash));
        hashItem->count = 1;
        hashItem->value = sum;
        HASH_ADD_INT(hashTable, value, hashItem);
      }
      else
        hashItem->count++;
    }
  }

  for (i = 0; i < nums3Size; i++)
  {
    for (j = 0; j < nums4Size; j++)
    {
      sum = nums3[i] + nums4[j];
      struct myHash *hashItem;
      HASH_FIND_INT(hashTable, &sum, hashItem);
      if (hashItem != NULL)
        count += hashItem->count;
    }
  }
  return count;
}
// @lc code=end
