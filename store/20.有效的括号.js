/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2) return false;
  let stack = [],
    top = 0;
  for (let str of s) {
    switch (str) {
      case "(":
        stack[top++] = ")";
        break;
      case "[":
        stack[top++] = "]";
        break;
      case "{":
        stack[top++] = "}";
        break;
      default:
        if (stack[top - 1] === str) top--;
        else return false;
        break;
    }
  }
  return top === 0 ? true : false;
};
// @lc code=end
