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
      stack[top++] = i;
    } else {
      if (top > 0) {
        top--;
        if (top > 0) res = Math.max(res, i - stack[top - 1] - 1 + 1);
        else res = Math.max(res, i - start + 1);
      } else {
        start = i + 1;
      }
    }
  }

  return res;
};
// @lc code=end
