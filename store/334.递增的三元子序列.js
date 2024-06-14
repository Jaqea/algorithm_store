/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  // const dp = new Array(nums.length).fill(1);
  // let max = 1;

  // for (let i = 1; i < dp.length; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (nums[j] < nums[i] && dp[i] < dp[j] + 1) {
  //       dp[i] = dp[j] + 1;
  //     }
  //   }

  //   if (max < dp[i]) {
  //     max = dp[i];
  //   }

  //   if (max >= 3) {
  //     return true;
  //   }
  // }

  // return false;

  let first = Number.MAX_SAFE_INTEGER,
    second = Number.MAX_SAFE_INTEGER;

  for (let third of nums.values()) {
    if (third > second) {
      return true;
    } else if (first >= third) {
      first = third;
    } else {
      second = third;
    }
  }

  return false;
};
// @lc code=end
