/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [],
    top = 0,
    left,
    right;
  tokens.forEach((item) => {
    switch (item) {
      case "+":
        right = stack[--top];
        left = stack[--top];
        stack[top++] = left + right;
        break;
      case "-":
        right = stack[--top];
        left = stack[--top];
        stack[top++] = left - right;
        break;
      case "*":
        right = stack[--top];
        left = stack[--top];
        stack[top++] = left * right;
        break;
      case "/":
        right = stack[--top];
        left = stack[--top];
        stack[top++] = parseInt(left / right);
        break;
      default:
        stack[top++] = item - "0";
        break;
    }
  });
  return stack[top - 1];
};
// @lc code=end
