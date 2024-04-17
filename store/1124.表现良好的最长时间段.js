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
  const map = new Map();
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] > 8) pre += 1;
    else pre -= 1;

    if (pre > 0) max = i + 1;

    if (!map.has(pre)) map.set(pre, i);
    if (map.has(pre - 1)) {
      const j = map.get(pre - 1);
      max = Math.max(i - j, max);
    }
  }

  return max;
};
// @lc code=end
