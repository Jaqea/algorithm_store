/*
 * @lc app=leetcode.cn id=319 lang=javascript
 *
 * [319] 灯泡开关
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
  if (n === 0) return 0;
  else if (n === 1) return n;
  else if (n === 2) return Math.ceil(n / 2);
  else {
    let count = Math.ceil(n / 2);
    const dp = new Array(n).fill(1);
    for (let i = 1; i < n; i += 2) dp[i] = 0;

    for (let i = 2; i < n; i++) {
      for (let j = i; j < n; j += i + 1) {
        if (dp[j]) {
          dp[j] = 0;
          count--;
        } else {
          dp[j] = 1;
          count++;
        }
      }
    }

    return count;
  }
};
// @lc code=end
