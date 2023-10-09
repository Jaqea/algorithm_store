/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

const rob_ = (nums) => {
  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(dp[0], nums[1]);
  for (i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[nums.length - 1];
};

var rob = function (nums) {
  if (nums.length < 2) return nums[0];
  return Math.max(rob_(nums.slice(1)), rob_(nums.slice(0, nums.length - 1)));
};
// @lc code=end
