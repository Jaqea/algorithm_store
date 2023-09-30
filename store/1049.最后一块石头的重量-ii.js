/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  // 法一
  // if (stones.length === 1) return stones[0];
  // let sum, dp, subSum;
  // sum = stones.reduce((pre, cur) => pre + cur);
  // subSum = sum;
  // sum = Math.floor(sum / 2);
  // dp = new Array(stones.length).fill(0).map(() => Array(sum).fill(0));
  // for (let j = 1; j <= sum; j++) {
  //   if (stones[0] <= j) dp[0][j] = stones[0];
  // }

  // for (let i = 1; i < stones.length; i++) {
  //   for (let j = 0; j <= sum; j++) {
  //     if (j < stones[i]) dp[i][j] = dp[i - 1][j];
  //     else
  //       dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - stones[i]] + stones[i]);
  //   }
  // }
  // return Math.abs(
  //   subSum - dp[stones.length - 1][sum] - dp[stones.length - 1][sum]
  // );

  // 法二
  let sum, dp, subSum;
  sum = stones.reduce((pre, cur) => pre + cur);
  subSum = sum;
  sum = Math.floor(sum / 2);
  dp = new Array(sum + 1).fill(0);
  for (let i = 0; i < stones.length; i++) {
    for (let j = sum; j > -1; j--) {
      if (j >= stones[i])
        dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }
  return subSum - 2 * dp[sum];
};
// @lc code=end
