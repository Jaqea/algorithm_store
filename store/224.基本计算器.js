/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [];
  let top = 0;

  for (let str of s) {
    if (str - "0") stack[top++] = str - "0";
    else if (str === "+") {
      const temp = stack[--top];
      stack[top++] = temp;
    }
  }
};
// @lc code=end
