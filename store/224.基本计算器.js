/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [];
  let top = (res = 0),
    sign = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "-") sign *= -1;
    else if (s[i] === "+") sign *= 1;
    else if (s[i] >= "0" && s[i] <= "9") {
      let num = s[i] - "0";
      while (i < s.length - 1 && s[i + 1] >= "0" && s[i + 1] <= "9") {
        num = num * 10 + (s[i + 1] - "0");
        i++;
      }
      res += num * sign;
      sign = 1;
    } else if (s[i] === "(") {
      stack[top++] = res;
      stack[top++] = sign;
      sign = 1;
      res = 0;
    } else if (s[i] === ")") {
      const numSign = stack[--top];
      const numRes = stack[--top];
      res = numRes + numSign * res;
      sign = 1;
    }
  }

  return res;
};
// @lc code=end
