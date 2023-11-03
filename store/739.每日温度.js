/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = new Array(temperatures.length),
    top = 0,
    res = new Array(temperatures.length).fill(0);
  stack[top++] = 0;
  for (let i = 1, len = temperatures.length; i < len; i++) {
    while (temperatures[i] > temperatures[stack[top - 1]] && top !== 0) {
      res[stack[top - 1]] = i - stack[top - 1];
      top--;
    }
    stack[top++] = i;
  }

  return res;
};
// @lc code=end
