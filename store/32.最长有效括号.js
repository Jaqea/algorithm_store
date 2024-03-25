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
  let res = (start = top = 0);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (top > 0 && stack[top - 1] === "(") start = i;
      stack[top++] = s[i];
    } else {
      if (top > 0) {
        res = Math.max(res, i - start + 1);
        top--;
      } else {
        start = i + 1;
      }
    }
    console.log(stack.slice(0, top));
  }

  return res;
};
// @lc code=end
