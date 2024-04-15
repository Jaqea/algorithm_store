/*
 * @lc app=leetcode.cn id=1124 lang=javascript
 *
 * [1124] 表现良好的最长时间段
 */

// @lc code=start
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  let max = (pre = 0);
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] > 8) pre += 1;
    else pre -= 1;
  }
};
// @lc code=end
