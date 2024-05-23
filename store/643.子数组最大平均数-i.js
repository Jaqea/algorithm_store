/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let left = (right = sum = 0),
    max = Number.MIN_SAFE_INTEGER;

  while (right < nums.length) {
    sum += nums[right];
    let len = right - left + 1;
    if (len > k) {
      sum -= nums[left];
      left++;
      len--;
    }
    if (len === k) {
      const avg = sum / k;
      max = max > avg ? max : avg;
    }

    right++;
  }

  return max;
};
// @lc code=end
