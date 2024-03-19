/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];
  let count = (top = 0);
  path = path.split("/");

  for (let i = 0; i < path.length; i++) {
    if (path[i] && path[i] !== "." && path[i] !== "..") stack[top++] = path[i];
    if (path[i] === ".." && top > 0) top--;
  }

  return `/${stack.slice(0, top).join("/")}`;
};
// @lc code=end
