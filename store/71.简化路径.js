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
  stack[top++] = path[0];
  for (let i = 1; i < path.length; i++) {
    console.log(stack.slice(0, top), top);
    switch (path[i]) {
      case ".":
        stack[top++] = ".";
        count++;
        continue;
      case "/":
        if (count === 1) top--;
        else if (count === 2) {
          if (top === 3) top -= 2;
          else if (top === 4) top -= 3;
          else top -= 4;
        }
        count = 0;

        if (stack[top - 1] === "/" || i === path.length - 1) continue;
        else stack[top++] = path[i];
        break;
      default:
        if (count === 1) top--;
        else if (count === 2) {
          if (top === 3) top -= 2;
          else if (top === 4) top -= 3;
          else top -= 4;
        }
        count = 0;
        stack[top++] = path[i];
        break;
    }
  }

  if (top > 1 && stack[top - 1] === "/") top--;

  return stack.join("").slice(0, top);
};
// @lc code=end
