/*
 * @lc app=leetcode.cn id=1695 lang=javascript
 *
 * [1695] 删除子数组的最大得分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let left = (right = max = sum = 0);
  const map = new Map();

  while (right < nums.length) {
    while (map.has(nums[right])) {
      sum -= nums[left];
      map.delete(nums[left]);
      left++;
    }

    map.set(nums[right], 1);
    sum += nums[right];
    right++;

    max = max > sum ? max : sum;
  }

  return max;
};
// @lc code=end
