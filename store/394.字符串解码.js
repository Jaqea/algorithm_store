/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const strStack = [],
    numStack = [];
  let top1 = (top2 = 0),
    k = (value = "");

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") k += s[i];
    else if (s[i] === "[") {
      strStack[top1++] = value;
      numStack[top2++] = k - "0";
      k = value = "";
    } else if (s[i] === "]") {
      const num = numStack[--top2];
      const str = strStack[--top1];
      value = str + value.repeat(num);
    } else value += s[i];
  }

  return value;
};
// @lc code=end
