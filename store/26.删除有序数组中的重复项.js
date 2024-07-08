/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 法一：暴力
  // let i, j, len;
  // len = nums.length;
  // for (i = 1; i < len; i++) {
  //   if (nums[i - 1] === nums[i]) {
  //     for (j = i; j < len; j++) nums[j - 1] = nums[j];
  //     len--;
  //     i--;
  //   }
  // }
  // return len;
  // 法二：双指针
  // 写法一：
  // let slow, fast, len;
  // len = nums.length;
  // slow = 0;
  // fast = slow + 1;
  // while (fast < nums.length) {
  //   if (nums[fast] === nums[slow]) {
  //     fast++;
  //     len--;
  //   } else nums[++slow] = nums[fast++];
  // }
  // return len;
  // 写法二：
  // let slow, fast, len;
  // len = nums.length;
  // for (fast = 1, slow = 0; fast < nums.length; fast++) {
  //   if (nums[slow] !== nums[fast]) {
  //     nums[++slow] = nums[fast];
  //   } else len--;
  // }
  // return len;

  let i = (j = 0);

  for (; j < nums.length; j++) {
    if (j + 1 < nums.length && nums[j] === nums[j + 1]) {
      continue;
    }
    nums[i++] = nums[j];
  }

  return i;
};
// @lc code=end
