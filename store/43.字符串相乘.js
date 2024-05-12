/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  let m = num1.length,
    n = num2.length,
    res = new Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      res[i + j + 1] += num1[i] * num2[j];
    }
  }

  for (let k = m + n - 1; k > 0; k--) {
    res[k - 1] += Math.floor(res[k] / 10);
    res[k] %= 10;
  }

  res = res.slice(res[0] ? 0 : 1);

  return res.join("");
};
// @lc code=end
