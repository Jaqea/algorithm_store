/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let res = nums[0] + nums[1] + nums[2],
    sum;

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(sum - target) < Math.abs(res - target)) res = sum;
      if (sum > target) right--;
      else left++;
    }
  }

  return res;
};
// @lc code=end
