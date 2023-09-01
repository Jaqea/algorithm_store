/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = [],
    top = 0;
  for (let str of s) {
    if (top > 0) {
      if (stack[top - 1] !== str) stack[top++] = str;
      else top--;
    } else if (top === 0) stack[top++] = str;
  }
  return stack.slice(0, top).join("");
};
// @lc code=end
