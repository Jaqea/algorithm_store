/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // 法一：暴力
  // let i,
  //   j,
  //   sum,
  //   min = nums.length,
  //   flag = false;
  // for (i = 0; i < nums.length; i++) {
  //   sum = 0;
  //   for (j = i; j < nums.length; j++) {
  //     sum += nums[j];
  //     if (sum >= target) {
  //       min = min < j - i + 1 ? min : j - i + 1;
  //       flag = true;
  //       break;
  //     }
  //   }
  // }
  // return flag ? min : 0;
  // 法二：滑动窗口
  // let left,
  //   right,
  //   sum = 0,
  //   min = nums.length + 1;
  // for (left = 0, right = left; right < nums.length; right++) {
  //   sum += nums[right];
  //   // 不断比较
  //   while (sum >= target) {
  //     min = min < right - left + 1 ? min : right - left + 1;
  //     sum -= nums[left++];
  //   }
  // }
  // return min === nums.length + 1 ? 0 : min;

  let left = (sum = 0),
    min = Number.MAX_SAFE_NUMBER;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      min = min < right - left + 1 ? min : right - left + 1;
      sum -= nums[left++];
    }
  }
  return min === Number.MAX_SAFE_NUMBER ? 0 : min;
};
// @lc code=end
