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
  let left = (sum = 0),
    right = k - 1,
    max;

  sum = nums.slice(left, right + 1).reduce((pre, cur) => pre + cur);
  const avg = sum / k;
  max = avg;

  right++;
  left++;

  while (right < nums.length) {
    sum = nums.slice(left, right + 1).reduce((pre, cur) => pre + cur);
    const avg = sum / k;
    max = max > avg ? max : avg;
    right++;
    left++;
  }

  return max;
};
// @lc code=end
