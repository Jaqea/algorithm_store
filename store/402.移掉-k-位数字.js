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
  let index = 0,
    top = 0;
  const stack = [];

  for (let i = 0; i < num.length; i++) {
    while (k && top && stack[top - 1] > num[i]) {
      top--;
      k--;
    }
    stack[top++] = num[i];
  }

  while (stack[index] === "0") index++;

  return index < top - k ? stack.slice(index, top - k).join("") : "0";
};
// @lc code=end
