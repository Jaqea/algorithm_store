/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const stack = [];
  let res = (top = 0);

  for (let str of s) {
    if (top && str === ")") {
      if (stack[top - 1] === "(") {
        res += 2;
        top--;
      }
    } else stack[top++] = str;
    console.log(stack.slice(0, top));
  }

  return res;
};
// @lc code=end
