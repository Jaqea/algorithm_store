/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 贪心
  // let i,
  //   sum = 0,
  //   res = -Math.pow(2, 99);
  // for (i = 0; i < nums.length; i++) {
  //   sum += nums[i];
  //   res = sum > res ? sum : res;
  //   if (sum < 0) sum = 0;
  // }
  // return res;
  // 暴力
  // let sum,
  //   res = Number.MIN_SAFE_INTEGER;
  // for (let i = 0; i < nums.length; i++) {
  //   sum = 0;
  //   for (let j = i; j < nums.length; j++) {
  //     sum += nums[j];
  //     res = res > sum ? res : sum;
  //   }
  // }
  // return res;
  // 动态规划
  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
  }
  return Math.max(...dp);
};
// @lc code=end
