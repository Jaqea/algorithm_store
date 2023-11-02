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
    res = [];
  stack[top++] = temperatures[0];
  for (let i = 1, len = temperatures.length; i < len; i++) {
    const item = stack[top - 1];
    if (temperatures[i] > item) {
      res.push(top);
      top--;
    }
    stack[top++] = temperatures[i];
  }

  console.log(res);
};
// @lc code=end
