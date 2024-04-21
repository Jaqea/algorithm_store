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
  let slow = (fast = 0);

  while (fast < nums.length) {
    if (slow >= 2 && nums[fast] === nums[slow - 2]) fast++;
    else nums[slow++] = nums[fast++];
  }

  return slow;
};
// @lc code=end
