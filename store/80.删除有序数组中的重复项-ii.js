/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 0,
    fast = 1,
    count;

  while (fast < nums.length) {
    count = 1;
    while (nums[fast] === nums[slow]) {
      count++;
      if (count > 2) slow = fast - 1;
      fast++;
    }
    nums[slow++] = nums[fast++];
  }

  return slow + 1;
};
// @lc code=end
