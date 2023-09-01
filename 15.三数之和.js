/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 双指针法：
  let i,
    left,
    right,
    res = [];
  nums.sort((a, b) => a - b);
  if (nums[0] > 0) return res;
  for (i = 0; i < nums.length; i++) {
    // if (i + 1 < nums.length && nums[i] === nums[i + 1]) continue;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    left = i + 1;
    right = nums.length - 1;
    while (right > left) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) right--;
      else if (sum < 0) left++;
      else {
        res.push([nums[i], nums[left], nums[right]]);
        while (nums[right] === nums[right - 1]) right--;
        while (nums[left] === nums[left + 1]) left++;
        right--;
        left++;
      }
    }
  }
  return res;
};
// @lc code=end
