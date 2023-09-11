/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let sum = 0,
    index = 0,
    cur = 0;
  for (let i = 0; i < gas.length; i++) {
    cur += gas[i] - cost[i];
    sum += gas[i] - cost[i];
    if (cur < 0) {
      cur = 0;
      index = i + 1;
    }
  }
  if (sum >= 0) return index;
  return -1;
};
// @lc code=end
