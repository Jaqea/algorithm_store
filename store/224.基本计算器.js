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
  const numstack = [],
    stack = [];
  let top1 = (top2 = 0);

  for (let str of s) {
    if (str >= "0" && str <= "9") {
      const right = str - "0";
      if (top1 > 0 && top2 > 0) {
        const left = numstack[--top1];
        const type = stack[--top2];
        if (type === "+") numstack[top1++] = left + right;
        else numstack[top1++] = left - right;
      } else numstack[top1++] = right;
    } else if (str === "+" || str === "-") stack[top2++] = str;
  }

  return numstack.join("") - "0";
};
// @lc code=end
