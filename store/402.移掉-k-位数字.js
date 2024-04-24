/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  if (num.length === 1 && k === 1) return "0";

  let count = k,
    index = 0,
    top = 0;
  const stack = [];

  for (let i = 0; i < num.length; i++) {
    while (count && top && stack[top - 1] > num[i]) {
      top--;
      count--;
    }
    stack[top++] = num[i];
  }

  while (stack[index] === "0") index++;

  return index === top ? "0" : stack.slice(index, top).join("");
};
// @lc code=end
