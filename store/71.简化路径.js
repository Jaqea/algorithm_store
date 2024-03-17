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
  let top = 0;
  stack[top++] = path[0];
  for (let i = 1; i < path.length; i++) {
    switch (path[i]) {
      case ".":
        continue;
        break;
      case "..":
        break;
      default:
        break;
    }
  }
};
// @lc code=end
