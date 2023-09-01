/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let left,
    right,
    i,
    j,
    res = [];
  nums.sort((a, b) => a - b);
  for (i = 0; i < nums.length; i++) {
    if (nums[i] > target && nums[i] >= 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] > target && nums[j] >= 0) break;
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      left = j + 1;
      right = nums.length - 1;
      while (right > left) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum > target) right--;
        else if (sum < target) left++;
        else {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[right] === nums[right - 1]) right--;
          while (nums[left] === nums[left + 1]) left++;
          right--;
          left++;
        }
      }
    }
  }
  return res;
};
// @lc code=end
