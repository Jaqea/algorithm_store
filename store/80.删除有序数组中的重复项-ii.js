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
  const map = new Map();
  let slow = (fast = 0);

  while (fast < nums.length) {
    if (!map.has(nums[fast])) map.set(nums[fast], 1);
    else map.set(nums[fast], map.get(nums[fast]) + 1);

    if (map.get(nums[fast]) > 2) {
      while (nums[slow] === nums[fast]) fast++;
      if (fast === nums.length) {
        break;
      }
    }
    nums[slow++] = nums[fast++];
  }

  return slow;
};
// @lc code=end
